#!/bin/bash
# Landing Page Skill 本地预览脚本
# 在已初始化的 Next.js 项目中启动开发服务器

set -e

PROJECT_DIR="${1:-.}"
PORT="${2:-3000}"

cd "$PROJECT_DIR"

if [ ! -f "package.json" ]; then
    echo "Error: package.json not found in $PROJECT_DIR"
    echo "Usage: preview.sh <project-dir> [port]"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "Error: npm not found. Please install Node.js."
    exit 1
fi

echo "Starting Next.js dev server on port $PORT..."
npm run dev -- --port "$PORT"
