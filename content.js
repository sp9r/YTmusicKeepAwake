// スクリプトが動作していることを確認するためのログ
console.log("YouTube Music Keep-Alive extension (v2) loaded.");

// 3分（180,000ミリ秒）ごとに処理を実行
setInterval(() => {
    // 常に表示されている再生バー（プログレスバー）要素を探す
    const playerBar = document.querySelector('ytmusic-player-bar');
    
    if (playerBar) {
        // 再生バーをクリックして操作をシミュレート
        playerBar.click();
        const time = new Date().toLocaleTimeString();
        console.log(`[Keep-Alive] Activity simulated by clicking player bar at ${time}`);
    } else {
        // もし再生バーが見つからない場合のエラー表示
        console.error("[Keep-Alive] Player bar element not found. Could not simulate activity.");
    }
}, 180000);