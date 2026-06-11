#!/usr/bin/env python3
"""
Landing Page Skill 质量检查脚本
验证文件完整性、SKILL.md 行数限制、frontmatter 格式
"""

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
    ]
    errors = []
    for rule in required_rules:
        if rule not in content:
            errors.append(f"Anti-pattern rule missing: {rule}")

    if errors:
        return errors
    print(f"  OK: All {len(required_rules)} anti-pattern rules found")
    return []


def main():
    print("=" * 60)
    print("Landing Page Skill Quality Check")
    print("=" * 60)

    all_errors = []

    print("\n[1/4] Checking required files...")
    all_errors.extend(check_file_exists())

    print("\n[2/4] Checking SKILL.md line count...")
    all_errors.extend(check_skill_line_count())

    print("\n[3/4] Checking SKILL.md frontmatter...")
    all_errors.extend(check_frontmatter())

    print("\n[4/4] Checking anti-patterns completeness...")
    all_errors.extend(check_anti_patterns())

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
