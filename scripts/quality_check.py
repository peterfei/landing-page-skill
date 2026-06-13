#!/usr/bin/env python3
"""
Landing Page Skill 质量检查脚本
验证文件完整性、SKILL.md 行数限制、frontmatter 格式、代码质量扫描
"""

import argparse
import json
import os
import re
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).parent.parent
REQUIRED_FILES = [
    "SKILL.md",
    "LICENSE",
    "references/conversion-framework.md",
    "references/design-system.md",
    "references/aesthetic-styles.md",
    "references/tech-adapters/nextjs-tailwind.md",
    "references/anti-patterns.md",
    "references/positive-patterns.md",
    "references/copy-formulas/hero-headlines.md",
    "references/copy-formulas/cta-patterns.md",
    "references/copy-formulas/objection-handling.md",
    "references/page-templates/saas-product.md",
    "references/page-templates/ecommerce.md",
]
SKILL_MAX_LINES = 400


def check_file_exists():
    """验证所有必需文件存在"""
    errors = []
    for rel_path in REQUIRED_FILES:
        full_path = PROJECT_ROOT / rel_path
        if not full_path.exists():
            errors.append(f"MISSING: {rel_path}")
        else:
            print(f"  OK: {rel_path}")
    return errors


def check_skill_line_count():
    """验证 SKILL.md 核心指令 ≤400 行"""
    skill_path = PROJECT_ROOT / "SKILL.md"
    if not skill_path.exists():
        return ["SKILL.md not found, cannot check line count"]

    with open(skill_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    # 排除 frontmatter（--- 包围的部分）
    in_frontmatter = False
    frontmatter_end = 0
    for i, line in enumerate(lines):
        if line.strip() == "---":
            if not in_frontmatter:
                in_frontmatter = True
            else:
                frontmatter_end = i + 1
                break

    body_lines = len(lines) - frontmatter_end
    if body_lines > SKILL_MAX_LINES:
        return [
            f"SKILL.md body exceeds {SKILL_MAX_LINES} lines (found {body_lines})"
        ]
    print(f"  OK: SKILL.md body = {body_lines} lines (max {SKILL_MAX_LINES})")
    return []


def check_frontmatter():
    """验证 SKILL.md frontmatter 格式"""
    skill_path = PROJECT_ROOT / "SKILL.md"
    if not skill_path.exists():
        return ["SKILL.md not found, cannot check frontmatter"]

    with open(skill_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 检查 frontmatter 存在
    if not content.startswith("---"):
        return ["SKILL.md missing frontmatter start marker '---'"]

    # 提取 frontmatter
    match = re.match(r"^---\n(.*?)\n---", content, re.DOTALL)
    if not match:
        return ["SKILL.md frontmatter format invalid (expected --- delimiters)"]

    fm = match.group(1)
    errors = []
    if "name:" not in fm:
        errors.append("frontmatter missing 'name' field")
    if "description:" not in fm:
        errors.append("frontmatter missing 'description' field")

    if errors:
        return errors
    print("  OK: SKILL.md frontmatter valid")
    return []


def check_anti_patterns():
    """验证反模式检测规则文档完整性"""
    ap_path = PROJECT_ROOT / "references/anti-patterns.md"
    if not ap_path.exists():
        return ["references/anti-patterns.md not found"]

    with open(ap_path, "r", encoding="utf-8") as f:
        content = f.read()

    required_rules = [
        "泛滥字体",
        "模板化配色",
        "CTA 模糊",
        "缺少社会证明",
        "Hero 标题无力",
        "移动端适配缺失",
        "可访问性基线",
        "SEO 基础缺失",
        "性能隐患",
        "设计 Token 一致性",
    ]
    errors = []
    for rule in required_rules:
        if rule not in content:
            errors.append(f"Anti-pattern rule missing: {rule}")

    if errors:
        return errors
    print(f"  OK: All {len(required_rules)} anti-pattern rules found")
    return []


def check_positive_patterns():
    """验证正面模式检测规则文档完整性"""
    pp_path = PROJECT_ROOT / "references/positive-patterns.md"
    if not pp_path.exists():
        return ["references/positive-patterns.md not found"]

    with open(pp_path, "r", encoding="utf-8") as f:
        content = f.read()

    required_patterns = [
        "CTA 动词+利益",
        "Hero 结果+受众",
        "社会证明元素",
        "紧迫感/稀缺性",
    ]
    errors = []
    for pattern in required_patterns:
        if pattern not in content:
            errors.append(f"Positive pattern missing: {pattern}")

    if errors:
        return errors
    print(f"  OK: All {len(required_patterns)} positive patterns found")
    return []


# ============ 代码质量扫描模式 ============

ANTI_PATTERNS = {
    "font_variety": {
        "rule": "泛滥字体",
        "severity": "blocking",
        "description": "检测到 Inter/Roboto/Arial 作为 Display 字体"
    },
    "template_colors": {
        "rule": "模板化配色",
        "severity": "blocking",
        "description": "检测到紫色渐变 + 纯白背景或默认蓝色"
    },
    "vague_cta": {
        "rule": "CTA 模糊",
        "severity": "blocking",
        "description": "CTA 文本为 Submit/Learn More/Click Here"
    },
    "missing_social_proof": {
        "rule": "缺少社会证明",
        "severity": "blocking",
        "description": "Hero 下方无 Social Proof 元素"
    },
    "weak_hero": {
        "rule": "Hero 标题无力",
        "severity": "blocking",
        "description": "Welcome/品牌名开头，纯描述性"
    },
    "responsive_design": {
        "rule": "移动端适配缺失",
        "severity": "warning",
        "description": "无 sm:/md:/lg: 响应式断点"
    },
    "accessibility": {
        "rule": "可访问性基线",
        "severity": "warning",
        "description": "缺少 alt/aria/语义 HTML"
    },
    "seo_basics": {
        "rule": "SEO 基础缺失",
        "severity": "warning",
        "description": "无 meta/title/OG 标签"
    },
    "performance": {
        "rule": "性能隐患",
        "severity": "warning",
        "description": "大图未优化、缺 lazy load"
    },
    "token_consistency": {
        "rule": "设计 Token 一致性",
        "severity": "warning",
        "description": "硬编码颜色/非标准间距"
    },
}

VAGUE_CTA_KEYWORDS = ["Submit", "Learn More", "Click Here", "Read More", "Get Started", "Sign Up", "点击这里", "提交", "了解更多"]
WELCOME_PATTERNS = [r"Welcome to", r"Introducing", r"We are", r"Meet ", r"Hello"]
DEFAULT_BLUE = "#3B82F6"


def scan_tsx_file(file_path: Path) -> dict:
    """扫描单个 TSX 文件的反模式"""
    results = []

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 规则 1: 字体数量检测
    font_families = re.findall(r'font-family:\s*([^;}"\']+)', content)
    font_families.extend(re.findall(r'"--font-([^"]+)"', content))
    if len(set(font_families)) >= 4:
        results.append({
            "rule": "font_variety",
            "severity": "blocking",
            "status": "fail",
            "detail": f"检测到 {len(set(font_families))} 种不同字体"
        })

    # 规则 2: 默认蓝色检测
    if DEFAULT_BLUE in content or "bg-blue-500" in content or "bg-blue-600" in content:
        results.append({
            "rule": "template_colors",
            "severity": "blocking",
            "status": "fail",
            "detail": "检测到默认 Tailwind 蓝色 (#3B82F6)"
        })

    # 规则 3: CTA 文案检测
    for keyword in VAGUE_CTA_KEYWORDS:
        if keyword in content:
            results.append({
                "rule": "vague_cta",
                "severity": "blocking",
                "status": "fail",
                "detail": f"检测到模糊 CTA 关键词: {keyword}"
            })
            break

    # 规则 5: Hero 标题检测
    for pattern in WELCOME_PATTERNS:
        if re.search(pattern, content, re.IGNORECASE):
            results.append({
                "rule": "weak_hero",
                "severity": "blocking",
                "status": "fail",
                "detail": f"检测到无力标题模式: {pattern}"
            })
            break

    # 规则 6: 响应式断点检测
    if not re.search(r'(sm|md|lg|xl):', content):
        results.append({
            "rule": "responsive_design",
            "severity": "warning",
            "status": "fail",
            "detail": "未检测到响应式断点类 (sm:/md:/lg:)"
        })

    # 规则 7: 可访问性检测
    img_tags = re.findall(r'<img[^>]*>', content, re.IGNORECASE)
    missing_alt = [img for img in img_tags if 'alt=' not in img.lower()]
    if missing_alt:
        results.append({
            "rule": "accessibility",
            "severity": "warning",
            "status": "fail",
            "detail": f"{len(missing_alt)} 个 img 标签缺少 alt 属性"
        })

    # 规则 10: Token 一致性检测
    hardcoded_colors = re.findall(r'text-\[#?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\]', content)
    hardcoded_colors.extend(re.findall(r'bg-\[#?([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})\]', content))
    if hardcoded_colors:
        results.append({
            "rule": "token_consistency",
            "severity": "warning",
            "status": "fail",
            "detail": f"检测到 {len(hardcoded_colors)} 个硬编码颜色值"
        })

    return {
        "file": str(file_path.relative_to(PROJECT_ROOT)),
        "checks": results
    }


def scan_directory(directory: Path):
    """扫描目录下的所有 TSX 文件"""
    all_results = []

    # 查找所有 TSX 文件
    tsx_files = list(directory.rglob("*.tsx"))

    if not tsx_files:
        print(f"  ⚠️  未找到 TSX 文件在: {directory}")
        return

    print(f"  扫描 {len(tsx_files)} 个 TSX 文件...")

    for tsx_file in tsx_files:
        result = scan_tsx_file(tsx_file)
        all_results.append(result)

    # 输出 JSON 格式结果
    output = []
    for result in all_results:
        for check in result["checks"]:
            rule_info = ANTI_PATTERNS.get(check["rule"], {
                "rule": check["rule"],
                "severity": check.get("severity", "warning"),
                "description": ""
            })
            output.append({
                "file": result["file"],
                "rule_id": check["rule"],
                "rule": rule_info["rule"],
                "severity": rule_info["severity"],
                "status": check["status"],
                "detail": check["detail"]
            })

    # 统计
    blocking_fails = sum(1 for r in output if r["severity"] == "blocking" and r["status"] == "fail")
    warning_fails = sum(1 for r in output if r["severity"] == "warning" and r["status"] == "fail")

    print(f"\n  扫描完成: {len(output)} 个问题发现 ({blocking_fails} 阻塞, {warning_fails} 警告)")
    print(json.dumps(output, indent=2, ensure_ascii=False))

    # 返回退出码
    if blocking_fails > 0:
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(description="Landing Page Skill 质量检查")
    parser.add_argument("--scan", metavar="DIRECTORY", help="代码质量扫描模式：扫描指定目录的 TSX 文件")
    args = parser.parse_args()

    if args.scan:
        # 扫描模式
        scan_dir = Path(args.scan)
        if not scan_dir.is_absolute():
            scan_dir = PROJECT_ROOT / scan_dir
        if not scan_dir.exists():
            print(f"错误: 目录不存在: {scan_dir}", file=sys.stderr)
            sys.exit(1)
        scan_directory(scan_dir)
        return

    # 默认模式：项目结构检查
    print("=" * 60)
    print("Landing Page Skill Quality Check")
    print("=" * 60)

    all_errors = []

    print("\n[1/5] Checking required files...")
    all_errors.extend(check_file_exists())

    print("\n[2/5] Checking SKILL.md line count...")
    all_errors.extend(check_skill_line_count())

    print("\n[3/5] Checking SKILL.md frontmatter...")
    all_errors.extend(check_frontmatter())

    print("\n[4/5] Checking anti-patterns completeness...")
    all_errors.extend(check_anti_patterns())

    print("\n[5/5] Checking positive patterns completeness...")
    all_errors.extend(check_positive_patterns())

    print("\n" + "=" * 60)
    if all_errors:
        print(f"FAILED: {len(all_errors)} issue(s) found")
        for err in all_errors:
            print(f"  - {err}")
        sys.exit(1)
    else:
        print("PASSED: All checks passed")
        sys.exit(0)


if __name__ == "__main__":
    main()
