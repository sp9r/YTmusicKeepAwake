# YTmusicKeepAwake (YouTube Music Keep-Alive)

YouTube Musicで音楽を連続再生している際、無操作状態が続くと再生が自動停止してしまう現象を防ぐChrome拡張機能です。

## 仕組み
- `https://music.youtube.com/*` 上で3分おきにプレイヤーバーへ軽量なマウスイベントを発火させ、アクティブ状態を維持します。

## インストール方法
1. このリポジトリをダウンロードまたはクローンします。
2. Chrome / Vivaldi 等のブラウザで `chrome://extensions` を開きます。
3. 右上の「デベロッパーモード」を有効にし、「パッケージ化されていない拡張機能を読み込む」から本フォルダを選択します。
