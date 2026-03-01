# 📝 Claude Code ハンズオン - React Todo App

Claude Code のハンズオン勉強会用のシンプルな Todoアプリです。React と Vite を使用しています。

## 🎯 機能

- **Todo の追加** - 入力欄に Todoを入力して「追加」ボタンをクリック、またはEnterキーで追加
- **Todo の完了マーク** - チェックボックスで Todo の完了/未完了を切り替え
- **Todo の削除** - 削除ボタンで不要な Todo を削除
- **統計表示** - 全体の Todo 数と完了した Todo 数を表示
- **空状態表示** - Todoがない場合は「Todoはまだありません」と表示

## 🛠️ 技術スタック

- **フロントエンド**: React 18
- **ビルドツール**: Vite
- **スタイリング**: CSS（グラデーション＆モダンデザイン）
- **パッケージマネージャー**: npm

## 📦 セットアップ

```bash
# インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 📁 プロジェクト構造

```
.
├── src/
│   ├── App.jsx        # メインコンポーネント（Todo の管理ロジック）
│   ├── App.css        # Todo アプリのスタイル
│   ├── index.css      # グローバルスタイル
│   ├── main.jsx       # エントリーポイント
│   └── assets/        # 画像などのアセット
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 💡 学習ポイント

このアプリを通じて以下の React の基本概念を学べます：

1. **useState フック** - 状態管理（todos と input）
2. **イベントハンドリング** - onClick、onChange、onKeyPress
3. **配列操作** - map、filter、スプレッド演算子
4. **条件付きレンダリング** - 空状態の表示
5. **リスト要素のレンダリング** - key の使用
6. **フォーム操作** - input と button の連携

## 🚀 実装例

### Todo を追加する
```javascript
const addTodo = () => {
  if (input.trim()) {
    setTodos([...todos, { id: Date.now(), text: input, completed: false }])
    setInput('')
  }
}
```

### Todo を完了にする
```javascript
const toggleTodo = (id) => {
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ))
}
```

### Todo を削除する
```javascript
const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
}
```

## 📝 ライセンス

MIT License

---

Claude Code で作成されました 🤖
