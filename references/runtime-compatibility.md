# 跨运行时适配文档

## 设计理念

本 Skill 设计为 **agent-agnostic**——任何支持 markdown-based skill 的运行时都可以使用。不绑定任何特定 Agent 的专有 API 或功能。

## 兼容运行时矩阵

| 运行时 | 支持方式 | 激活方式 | 备注 |
|--------|---------|---------|------|
| **Claude Code** | 原生支持 | `/agent landing-page-skill` 或触发词自动激活 | 推荐运行时，完整功能 |
| **Codex CLI** | 兼容 | 直接加载 SKILL.md，通过对话上下文激活 | 不支持 spawn subagent，需串行执行 |
| **Cursor** | 兼容 | 复制到 `.cursorrules` 或使用 Composer | 通过 Composer 的 agent 模式调用 |
| **Trae** | 兼容 | 直接加载 SKILL.md | 与 Cursor 类似 |
| **OpenClaw** | 兼容 | 遵循 skills.sh 协议加载 | 支持 OpenSpec 兼容的运行时 |
| **Hermes Agent** | 兼容 | 直接加载 SKILL.md | 通用 markdown skill 支持 |
| **其他 50+ 运行时** | 兼容 | 任何支持 YAML frontmatter + Markdown 的运行时 | 协议层面兼容 |

## 路径规范

所有文件引用均采用**相对本 Skill 根目录**的相对路径：

```
references/xxx.md
assets/xxx.svg
scripts/xxx.py
```

Agent 或用户按自身安装位置解析，不依赖任何绝对路径。

## 原生功能 → 跨运行时回退方案

| 原生功能（Claude Code） | 跨运行时回退方案 | 说明 |
|------------------------|-----------------|------|
| `references` frontmatter 字段 | 正文中的文件路径引用 | 在 SKILL.md 正文索引部分列出所有 references 文件 |
| `Task` 工具（并行 Agent） | 串行执行 + 分步确认 | 不支持并行时，Phase 2 各步骤依次执行 |
| `Write` 工具生成多文件 | 手动分文件输出 | 运行时无 Write 工具时，按目录结构手动整理 |
| 内置预览功能 | `scripts/preview.sh` | 独立的 Next.js 开发服务器启动脚本 |

## 自包含原则

SKILL.md 包含所有必要信息（5 阶段协议、触发词、适用性判断、反模式检测规则），可直接复制使用。

references/ 中的文件为深度知识补充，按需加载即可。即使不加载 references/，SKILL.md 的核心指令也足以驱动落地页生成流程。

## 分发方式

### 方式 1：Agent Skills 协议（推荐）

```bash
npx skills add peterfei/landing-page-skill
```

### 方式 2：GitHub 直接克隆

```bash
git clone https://github.com/peterfei/landing-page-skill.git
```

### 方式 3：手动复制

复制 `SKILL.md` 和 `references/` 目录到任意位置，按运行时要求配置加载路径。

## 已知限制

| 运行时 | 限制 |  workaround |
|--------|------|------------|
| Codex CLI | 无多文件写入 | 一次输出一个文件，用户手动创建目录结构 |
| Cursor | 无 Agent 触发词 | 在 `.cursorrules` 中引用 SKILL.md，通过 Composer 调用 |
| 纯对话型运行时 | 无文件系统访问 | 将 references/ 内容内联到对话中 |

## 协议声明

本 Skill 遵循 [Agent Skills](https://skills.sh) 开放协议。
