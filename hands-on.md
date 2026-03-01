# 🚀 Claude Code ハンズオン 60分コース

> Claude Code の主要コマンドを学びながら、実際のバグを修正する実践的なハンズオンです。
> 非エンジニアの方も参加できるように、丁寧に設計されています。

---

## 🎯 このハンズオンのゴール

このコースを修了すると、以下が実現します：

✅ **Claude Code の主要コマンド** を習得
✅ **実際のバグ修正** を体験できる
✅ **非エンジニアでも使いこなせる** ことが理解できる
✅ **自動化や効率化** のヒントが得られる

---

## ⏱️ 時間配分（60分トータル）

| 時間 | 内容 | 所要時間 |
|------|------|---------|
| 0-5分 | 🎬 オープニング＆環境セットアップ | 5分 |
| 5-25分 | 📚 Claude Code 基本コマンド学習 | 20分 |
| 25-35分 | 🐛 STAGE 1（EASY）バグ修正 | 10分 |
| 35-50分 | 🐛 STAGE 2（NORMAL）バグ修正 | 15分 |
| 50-60分 | 🐛 STAGE 3（HARD）バグ修正 | 10分 |

---

# 第1章：オープニング＆セットアップ（5分）

## 📌 本日のテーマ

Claude Code は、単なる「コードエディタ」ではありません。
**AI を使って、ファイル検索・読込・修正を自動化できるツール** です。

今日は、この強力なツールを使って、バグ修正までをやってみます！

---

## ✅ セットアップの確認

### 準備が完了しているか確認

```bash
# プロジェクトディレクトリに移動
cd /Users/nishi/test/learn-claude-code

# 依存関係がインストールされているか確認
npm --version

# テストが実行できるか確認
npm test
```

**期待される結果：**
```
❌ Tests: 2 failed | 7 passed (9)
```

失敗しているテストがあることが正常です。これから修正します！

---

# 第2章：Claude Code 基本コマンド学習（20分）

非エンジニアの方にも分かりやすく、5つの主要コマンドを学びます。

> 💡 **このセクションのポイント：**
> 「コマンド」と聞くと難しく聞こえますが、実は **日本語で指示すれば Claude が自動で実行** してくれます。

---

## 📖 用語集

本編の前に、よく出てくる用語を確認しましょう。

| 用語 | 説明 | 例 |
|------|------|-----|
| **ファイル** | プログラムの部品 | `App.jsx`, `App.css` |
| **パス** | ファイルの住所 | `/src/App.jsx` |
| **コンポーネント** | React の再利用可能な部品 | `<App />` |
| **状態（state）** | React が覚えている情報 | `todos`, `input` |
| **描画（render）** | React が HTML を表示する処理 | 画面に Todo リストが映る |
| **プロップス（props）** | コンポーネント間で受け渡す値 | 親が子に値を渡す |
| **イベント** | ユーザーの操作 | ボタンをクリック、テキストを入力 |
| **CSS** | Webページのデザイン（見た目） | 色、大きさ、レイアウト |
| **バグ** | プログラムの不具合 | 期待と違う動作 |

---

## 🎮 コマンド1：`read` - ファイルを読む

**用途：** ファイルの内容を確認したいときに使う

### ビジュアル説明

```
┌─────────────────────────────┐
│  ファイル (App.jsx)         │
│                             │
│  import { useState }...  ←─┐│
│  function App() { ... }    ││
│  ...                       ││
└─────────────────────────────┘
         ↓ (read コマンド)
  Claude Code が内容を表示
```

### 実践例

**状況：** 「App.jsx というファイルの内容を確認したい」

```
【Claude Code に指示】
"src/App.jsx を読んでください"
```

**Claude Code が自動で実行：**
```javascript
// ファイルが表示される
import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  ...
}
```

**何が便利か：**
✅ エディタで開く手間が不要
✅ ファイルの位置が分からなくても OK
✅ 複数ファイルを一度に確認できる

---

## 🔍 コマンド2：`grep` - ファイル内を検索

**用途：** 特定のテキストを含むファイルやコード行を見つける

### ビジュアル説明

```
複数のファイルの中から...

📄 App.jsx
📄 App.css      ← 「display」という単語がここにある！
📄 App.test.jsx
📄 index.css
```

### 実践例

**状況：** 「`display` という文字が書かれている場所を見つけたい」

```
【Claude Code に指示】
"display という単語をプロジェクト内で探してください"
```

**Claude Code が自動で実行：**
```
src/App.css (1 match)
  Line 102: display: none;
```

**何が便利か：**
✅ バグの原因を素早く発見
✅ 「どこにこのコードがあるんだろう？」が一瞬で解決
✅ 複数ファイルから条件に合うものをピックアップ

---

## ✏️ コマンド3：`edit` - ファイルを修正

**用途：** ファイルの内容を修正する

### ビジュアル説明

```
【修正前】               【修正後】
display: none;    →     display: block;
     ↓                       ↓
削除ボタンが              削除ボタンが
見えない                   見える
```

### 実践例

**状況：** 「App.css の 102 行目の `display: none;` を `display: block;` に変更したい」

```
【Claude Code に指示】
"src/App.css の display: none; を display: block; に変更してください"
```

**Claude Code が自動で実行：**
```
修正完了！
src/App.css の 102 行目が更新されました
```

**何が便利か：**
✅ コマンドラインで細かく指定する必要なし
✅ 何を変えたいかを日本語で説明すればOK
✅ 修正の履歴が自動で保存される

---

## 📂 コマンド4：`glob` - ファイルを探す

**用途：** 特定の条件（ファイル名など）でファイルを見つける

### ビジュアル説明

```
【探す】 *.test.jsx (テストファイルすべて)

📁 src/
  📄 App.jsx
  📄 App.css
  📄 App.test.jsx ✅ ← これ！
  📄 index.js
  📄 index.css
```

### 実践例

**状況：** 「プロジェクト内のテストファイルをすべて見つけたい」

```
【Claude Code に指示】
"*.test.jsx のファイルをすべて見つけてください"
```

**Claude Code が自動で実行：**
```
src/App.test.jsx
```

**何が便利か：**
✅ ファイルを一覧化できる
✅ 条件に合うファイルを素早くピックアップ
✅ 大規模プロジェクトでも対応可能

---

## 🧪 コマンド5：`test` - テストを実行

**用途：** プログラムが正しく動いているか自動確認

### ビジュアル説明

```
テストコード
  ↓
プログラムが期待通りに動くか自動チェック
  ↓
✅ or ❌ で判定
```

### 実践例

**状況：** 「修正が正しくできたか確認したい」

```
【Claude Code に指示】
"npm test を実行してください"
```

**Claude Code が自動で実行：**
```
✓ renders the main title                      ✅
✓ displays empty message when no todos        ✅
✓ adds a new todo                            ✅
✓ adds todo on Enter key press               ✅
✓ clears input after adding todo             ✅
✓ does not add empty todo                    ✅
× marks todo as completed                    ❌
✓ deletes a todo                             ✅
× displays correct stats                     ❌

Tests: 2 failed | 7 passed (9)
```

**何が便利か：**
✅ 手作業での確認より圧倒的に早い
✅ 修正でほかの機能が壊れていないか確認できる
✅ 品質が保証される

---

# 第3章：STAGE 1 バグ修正（EASY）10分

さあ、実践です！まずは **EASY なバグ** から始めましょう。

> 💡 **このステージのポイント：**
> CSS の修正 → 1ファイル、1行の変更で解決

---

## 🐛 バグ情報

**バグ名：** 削除ボタンが表示されない

**症状：**
- Todoリストの各アイテムに削除ボタンが見当たらない
- でも、実は DOM には存在している（見えないだけ）

**ファイル：** `src/App.css`

**原因：** CSS で `display: none;` が設定されている

---

## 📋 修正の流れ

### ステップ1：問題を特定する

```
【Claude Code に指示】
"App.css で display という単語を検索してください"
```

**期待される結果：**
```
src/App.css
  Line 111: display: none;
```

---

### ステップ2：該当ファイルを確認する

```
【Claude Code に指示】
"src/App.css の 100～115行目を読んでください"
```

**期待される結果：**
```css
.todo-item button {
  padding: 0.5rem 0.75rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background 0.2s;
  display: none;  ← これが問題！
}
```

---

### ステップ3：修正する

```
【Claude Code に指示】
"src/App.css の .todo-item button セクションから display: none; を削除してください"
```

**修正後のコード：**
```css
.todo-item button {
  padding: 0.5rem 0.75rem;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background 0.2s;
  /* display: none; は削除されました */
}
```

---

### ステップ4：修正を確認する

```bash
npm test
```

**期待される結果：**
```
Tests: 2 failed | 7 passed (9)
```

✅ テスト結果は変わりませんが（UI バグだから）、**ブラウザで削除ボタンが見える** ようになったはず！

---

## ✨ STAGE 1 完了！

おめでとうございます！🎉

**ここで学んだこと：**
- `grep` でバグの原因を特定
- `read` でファイル内容を確認
- `edit` で修正
- 3つのコマンドで1つのバグを解決！

**次のステージに進みましょう！**

---

# 第4章：STAGE 2 バグ修正（NORMAL）15分

中難度のバグです。React の **状態管理** が関係しています。

> 💡 **このステージのポイント：**
> React の状態管理の概念を理解しながら修正する

---

## 🐛 バグ情報

**バグ名：** 統計表示が更新されない

**症状：**
- Todoを追加・削除・完了にしても、統計表示が「全体: 0 | 完了: 0」のままになる
- テストが失敗している：`displays correct stats`

**ファイル：** `src/App.jsx`

**原因：** `stats` という独立した状態が定義されているが、更新されていない

---

## 📖 背景知識：React の状態管理

```javascript
// React は「状態」を覚えておく
const [todos, setTodos] = useState([])      // Todo のリスト
const [stats, setStats] = useState({...})   // 統計情報

// ユーザーが操作すると...
addTodo()  // [追加] ボタンをクリック
  ↓
setTodos(...) で todos が更新される
  ↓
でも setStats() が呼ばれていない！
  ↓
統計表示が「0 | 0」のまま
```

---

## 📋 修正の流れ

### ステップ1：ファイルを確認する

```
【Claude Code に指示】
"src/App.jsx を全文読んでください"
```

**探すべきポイント：**
```javascript
const [stats, setStats] = useState({ total: 0, completed: 0 })
```

---

### ステップ2：問題を特定する

```
【Claude Code に指示】
"App.jsx で setStats が呼ばれている箇所を探してください"
```

**期待される結果：**
```
setStats が呼ばれている箇所は見つかりません
```

❌ これが問題です！

---

### ステップ3：修正方法を理解する

**解決策：** `stats` という独立した状態ではなく、`todos` から統計情報を計算する方法に変更

```javascript
// 【修正前】
const [stats, setStats] = useState({ total: 0, completed: 0 })
<p>全体: {stats.total} | 完了: {stats.completed}</p>

// 【修正後】
<p>全体: {todos.length} | 完了: {todos.filter(t => t.completed).length}</p>
```

---

### ステップ4：修正を実施する

```
【Claude Code に指示】
"src/App.jsx から const [stats, setStats] = useState の行を削除してください"
```

---

### ステップ5：統計表示の部分を修正する

```
【Claude Code に指示】
"src/App.jsx の統計表示の部分を以下に変更してください:
<p>全体: {todos.length} | 完了: {todos.filter(t => t.completed).length}</p>"
```

**修正後：**
```javascript
<div className="stats">
  <p>全体: {todos.length} | 完了: {todos.filter(t => t.completed).length}</p>
</div>
```

---

### ステップ6：修正を確認する

```bash
npm test
```

**期待される結果：**
```
Tests: 1 failed | 8 passed (9)
```

✅ テストが1つ成功！（`displays correct stats` が成功）

---

## ✨ STAGE 2 完了！

おめでとうございます！🎉

**ここで学んだこと：**
- React の状態管理の基本
- 状態を更新する重要性
- `grep` と `read` でバグの原因を究明
- 簡潔なコード（計算式）で状態を管理

**最後のステージに進みましょう！**

---

# 第5章：STAGE 3 バグ修正（HARD）10分

難度の高いバグです。2つのバグが含まれています。

> 💡 **このステージのポイント：**
> ロジックエラーと React の条件付きレンダリング

---

## 🐛 バグ情報

**バグ1：** チェックボックスの状態が反映されない

**症状：**
- Todoのチェックボックスをクリックしても、チェックが入らない
- テストが失敗している：`marks todo as completed`

**ファイル：** `src/App.jsx`

**原因：** `checked={false}` に固定されている

---

**バグ2（オプション）：** 空白のみのTodoが追加できる

**症状：**
- スペースやタブだけのテキストを入力して「追加」を押すと、空白のTodoがリストに追加される

**ファイル：** `src/App.jsx` の `addTodo()` 関数

**原因：** `input.trim()` ではなく `input` で判定している

---

## 📖 背景知識：チェックボックスの制御

```javascript
// HTML の checkbox は checked プロパティで制御
<input type="checkbox" checked={true} />  // ✅ チェック入る
<input type="checkbox" checked={false} /> // ❌ チェック入らない

// React では、この値を状態から取得する
<input
  type="checkbox"
  checked={todo.completed}  // ← todo.completed の値に従う
  onChange={() => toggleTodo(todo.id)}
/>
```

---

## 📋 修正の流れ

### ステップ1：チェックボックスの問題を確認する

```
【Claude Code に指示】
"src/App.jsx で type=\"checkbox\" の部分を読んでください"
```

**期待される結果：**
```javascript
<input
  type="checkbox"
  checked={false}  // ← ここが問題！常に false
  onChange={() => toggleTodo(todo.id)}
/>
```

---

### ステップ2：チェックボックスを修正する

```
【Claude Code に指示】
"src/App.jsx のチェックボックスの checked={false} を checked={todo.completed} に変更してください"
```

**修正後：**
```javascript
<input
  type="checkbox"
  checked={todo.completed}  // ✅ todo.completed の値に従うように
  onChange={() => toggleTodo(todo.id)}
/>
```

---

### ステップ3：テストして確認する

```bash
npm test
```

**期待される結果：**
```
Tests: 0 failed | 9 passed (9)
```

🎉 **すべてのテストが成功！**

---

## 🎯 STAGE 3 完了！

おめでとうございます！🎉🎉🎉

**ここで学んだこと：**
- React の条件付きレンダリング
- `checked` プロパティと状態の連動
- ロジックエラーの原因特定
- テストを通じた品質保証

---

# 第6章：まとめ＆次のステップ

## 🏆 本日のまとめ

### ✅ 習得したコマンド

| コマンド | 用途 | 学習度 |
|---------|------|--------|
| `read` | ファイルを読む | ⭐⭐⭐⭐⭐ |
| `grep` | テキストを検索 | ⭐⭐⭐⭐⭐ |
| `edit` | ファイルを修正 | ⭐⭐⭐⭐⭐ |
| `glob` | ファイルを探す | ⭐⭐⭐⭐ |
| `test` | テストを実行 | ⭐⭐⭐⭐ |

### ✅ 修正したバグ

- ✅ STAGE 1（EASY）：削除ボタンが表示されない
- ✅ STAGE 2（NORMAL）：統計表示が更新されない
- ✅ STAGE 3（HARD）：チェックボックスの状態が反映されない

### ✅ 理解した概念

- React の状態管理（`useState`）
- CSS の基本（`display` プロパティ）
- React の条件付きレンダリング
- テスト駆動開発（TDD）の基本

---

## 🚀 非エンジニアでも使いこなせる理由

Claude Code を使うことで、以下が実現します：

| 従来の方法 | Claude Code を使う |
|-----------|------------------|
| ❌ 手でファイルを開く | ✅ AI が自動で見つけて開く |
| ❌ Ctrl+F で検索 | ✅ 複数ファイルを一括検索 |
| ❌ 手でコードを修正 | ✅ 日本語で指示するだけ |
| ❌ テストを手動で実行 | ✅ コマンド1つで自動実行 |

**結果：技術的な詳細に時間を取られず、重要な修正に集中できる！**

---

## 💡 次のステップ

### レベル1：このプロジェクトを発展させる

```bash
# 新機能を追加してみる
- 優先度機能（高・中・低）
- 期限設定機能
- カテゴリー分類機能
```

### レベル2：別のプロジェクトで試す

```bash
# 実務で活用する
- 既存プロジェクトのバグ修正
- テストの自動化
- ドキュメント生成
```

### レベル3：チーム全体で導入

```bash
# 組織的な効率化
- Claude Code のベストプラクティスを共有
- テンプレート化
- 属人化の削減
```

---

## 📚 参考資料

### このプロジェクト内のファイル

| ファイル | 説明 |
|---------|------|
| `README.md` | プロジェクト概要 |
| `BUGS.md` | 仕込まれていたバグの詳細 |
| `src/App.jsx` | メインコンポーネント |
| `src/App.css` | スタイル |
| `src/App.test.jsx` | テストコード |

### Claude Code の公式リソース

- Claude Code 公式ドキュメント
- Claude Code のキーボードショートカット一覧
- Claude API のドキュメント

---

## 🎓 本日の受講生へ

ハンズオンにご参加ありがとうございました！

Claude Code は、単なる「開発ツール」ではなく、**生産性を大きく向上させる武器** です。

技術的な背景がなくても、このツールを使いこなすことで：

- 🚀 作業時間を大幅に短縮
- ✅ 品質を向上
- 💡 創造的な仕事に時間を使える

ぜひ、実務で活用してください！

---

## 📞 質問＆サポート

わからないことがあれば、遠慮なく質問してください。

`/help` コマンドで、Claude Code の使い方についてさらに詳しく知ることもできます。

---

**Happy coding with Claude Code! 🚀**
