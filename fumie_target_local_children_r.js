(function () {
  var FUMIE_CSS = "\n    :root {\n      --ink: #171717;\n      --muted: #aaa;\n      --green: #07843d;\n      --panel-width: min(820px, 92vw);\n    }\n\n    * { box-sizing: border-box; }\n\n    html, body {\n      margin: 0;\n      min-height: 100%;\n      background: #fff;\n      color: var(--ink);\n      font-family: \"Yu Gothic\", \"YuGothic\", \"Hiragino Kaku Gothic ProN\",\n        \"Meiryo\", sans-serif;\n    }\n\n    body { overflow: hidden; }\n\n    .jspsych-display-element {\n      width: 100%;\n      min-height: 100vh;\n    }\n\n    .screen {\n      width: min(1000px, 94vw);\n      min-height: 100vh;\n      margin: 0 auto;\n      padding: clamp(10px, 2vh, 20px) 20px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      text-align: center;\n    }\n\n    .screen h1 {\n      margin: 0 0 42px;\n      font-size: 28px;\n      line-height: 1.25;\n      letter-spacing: 0;\n    }\n\n    .screen h2 {\n      margin: 0 0 40px;\n      font-size: 24px;\n      line-height: 1.25;\n      letter-spacing: 0;\n    }\n\n    .instruction-title {\n      width: var(--panel-width);\n      margin-right: auto !important;\n      margin-left: auto !important;\n      text-align: left;\n    }\n\n    .instruction-copy {\n      width: var(--panel-width);\n      margin: 0 auto;\n      font-size: 17.5px;\n      line-height: 2.0;\n      text-align: left;\n    }\n\n    .instruction-copy p { margin: 0 0 15px; }\n    .fullscreen-screen .instruction-title,\n    .fullscreen-screen .instruction-copy {\n      text-align: center;\n    }\n\n    .mapping-board {\n      width: min(820px, 92vw);\n      margin: 4px auto 24px;\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      column-gap: 86px;\n      row-gap: 0;\n      text-align: center;\n    }\n\n    .mapping-key {\n      margin-bottom: 24px;\n      display: flex;\n      justify-content: center;\n    }\n    .mapping-key .key-symbol {\n      color: var(--green);\n    }\n\n    .key-button {\n      width: 104px;\n      height: 104px;\n      min-height: 104px;\n      padding: 10px 12px;\n      display: inline-flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      border: 2px solid #8c8c8c;\n      border-radius: 18px;\n      background: #fff;\n      color: #171717;\n      box-shadow:\n        0 7px 0 #a9a9a9;\n      text-align: center;\n    }\n    .key-label {\n      font-size: 19px;\n      font-weight: 700;\n      line-height: 1.3;\n    }\n\n    .key-symbol {\n      margin-top: 3px;\n      font-size: 34px;\n      font-weight: 800;\n      line-height: 1;\n    }\n\n    .mapping-key .key-symbol {\n      font-size: 51px;\n    }\n    .mapping-key .key-button {\n      width: 104px;\n      height: 104px;\n      min-height: 104px;\n    }\n\n    .circle-symbol {\n      -webkit-text-stroke: 1.5px currentColor;\n      paint-order: stroke fill;\n    }\n\n    .mapping-items {\n      color: #171717;\n      font-size: 17px;\n      line-height: 1.75;\n    }\n\n    .instruction-target {\n      color: #c62828;\n      font-weight: 800;\n    }\n\n    .mapping-divider {\n      grid-column: 1 / -1;\n      height: 1px;\n      margin: 18px 0;\n      background: #aaa;\n    }\n\n    .mapping-items strong {\n      display: block;\n      font-size: 19px;\n    }\n\n    .download-button {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      min-width: 220px;\n      min-height: 54px;\n      margin-top: 24px;\n      padding: 12px 24px;\n      border: 2px solid #222;\n      border-radius: 6px;\n      background: #fff;\n      color: #111;\n      font: inherit;\n      font-size: 18px;\n      font-weight: 700;\n      cursor: pointer;\n    }\n\n    .start-prompt {\n      width: fit-content;\n      min-width: 260px;\n      min-height: 64px;\n      margin: 22px auto 0;\n      padding: 12px 34px;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      border: 2px solid #8c8c8c;\n      border-radius: 18px;\n      background: #fff;\n      color: #171717;\n      box-shadow:\n        0 7px 0 #a9a9a9;\n      font-size: 20px;\n      font-weight: 700;\n      text-align: center;\n    }\n    .download-button:hover,\n    .download-button:focus {\n      background: #f1f1f1;\n      outline: 3px solid rgba(0, 0, 0, 0.15);\n      outline-offset: 3px;\n    }\n\n    .enter-note {\n      margin-top: 12px;\n      color: #666;\n      font-size: 14px;\n    }\n\n    .task-screen {\n      --balanced-edge-gap: 111px;\n      position: relative;\n      width: min(1000px, 94vw);\n      min-height: 100vh;\n      margin: 0 auto;\n      padding: 42px 20px;\n      overflow: hidden;\n      text-align: center;\n    }\n\n    .task-title-placeholder {\n      width: var(--panel-width);\n      margin: 0 auto 28px;\n      font-size: 26px;\n      line-height: 31px;\n      letter-spacing: 0;\n      visibility: hidden;\n    }\n\n    .task-mapping {\n      width: min(820px, 92vw);\n      margin: 4px auto 24px;\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      column-gap: 86px;\n      row-gap: 0;\n      text-align: center;\n    }\n\n    .task-mapping \u003e div {\n      min-width: 0;\n    }\n\n    .task-key {\n      display: flex;\n      justify-content: center;\n    }\n\n    .task-key .key-button {\n      border-color: #8c8c8c;\n      background: #fff;\n      color: #171717;\n      box-shadow:\n        0 7px 0 #a9a9a9;\n    }\n\n    .mapping-key .key-symbol,\n    .task-key .key-symbol {\n      color: var(--green);\n      font-size: 51px;\n    }\n\n    .mapping-key .key-label,\n    .task-key .key-label {\n      line-height: 1;\n    }\n    .mapping-key .key-symbol,\n    .task-key .key-symbol {\n      position: relative;\n      width: 0.86em;\n      height: 0.86em;\n      margin-top: 6px;\n      color: transparent;\n      line-height: 0;\n    }\n\n    .mapping-key .key-symbol.circle-symbol,\n    .task-key .key-symbol.circle-symbol {\n      -webkit-text-stroke: 0;\n    }\n\n    .mapping-key .key-symbol.circle-symbol::before,\n    .task-key .key-symbol.circle-symbol::before {\n      content: \"\";\n      position: absolute;\n      inset: 8%;\n      border: 0.095em solid var(--green);\n      border-radius: 50%;\n      box-sizing: border-box;\n    }\n\n    .mapping-key .key-symbol:not(.circle-symbol)::before,\n    .mapping-key .key-symbol:not(.circle-symbol)::after,\n    .task-key .key-symbol:not(.circle-symbol)::before,\n    .task-key .key-symbol:not(.circle-symbol)::after {\n      content: \"\";\n      position: absolute;\n      top: 6%;\n      left: calc(50% - 0.0475em);\n      width: 0.095em;\n      height: 88%;\n      background: var(--green);\n      transform-origin: center;\n    }\n\n    .mapping-key .key-symbol:not(.circle-symbol)::before,\n    .task-key .key-symbol:not(.circle-symbol)::before {\n      transform: rotate(45deg);\n    }\n\n    .mapping-key .key-symbol:not(.circle-symbol)::after,\n    .task-key .key-symbol:not(.circle-symbol)::after {\n      transform: rotate(-45deg);\n    }\n\n\n    .task-targets {\n      min-height: 58px;\n      margin-top: 11px;\n      font-size: 18px;\n      font-weight: 600;\n      line-height: 1.6;\n    }\n\n    .word-viewport {\n      position: absolute;\n      top: auto;\n      bottom: calc(var(--balanced-edge-gap) + 74px);\n      left: 0;\n      width: 100%;\n      height: 190px;\n      overflow: visible;\n    }\n\n    .word-track {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 190px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .word-item {\n      display: none;\n      position: relative;\n      flex: 0 1 640px;\n      width: min(640px, 94vw);\n      height: 190px;\n      min-width: 0;\n      padding: 0 8px;\n      align-items: center;\n      justify-content: center;\n      color: #b5b5b5;\n      font-size: 22px;\n      font-weight: 400;\n      line-height: 1.35;\n      text-align: center;\n      white-space: normal;\n    }\n\n    .word-item.current {\n      display: flex;\n      color: #000;\n      font-size: 29px;\n      font-weight: 800;\n    }\n\n    .answer-mark {\n      --mark-color: rgb(32, 138, 72);\n      --mark-thickness: 0.51em;\n      position: absolute;\n      z-index: 2;\n      top: 50%;\n      left: 50%;\n      width: 6em;\n      height: 6em;\n      display: block;\n      color: transparent;\n      font-size: 1em;\n      line-height: 0;\n      opacity: 0.82;\n      transform: translate(-50%, -50%);\n      pointer-events: none;\n    }\n\n    .answer-mark.circle-mark::before {\n      content: \"\";\n      position: absolute;\n      inset: 7%;\n      border: var(--mark-thickness) solid var(--mark-color);\n      border-radius: 50%;\n      background: transparent;\n      box-sizing: border-box;\n    }\n\n    .answer-mark.cross-mark::before,\n    .answer-mark.cross-mark::after {\n      content: \"\";\n      position: absolute;\n      top: 5%;\n      left: calc(50% - 0.255em);\n      width: var(--mark-thickness);\n      height: 90%;\n      background: var(--mark-color);\n      transform-origin: center;\n    }\n\n    .answer-mark.cross-mark::before {\n      transform: rotate(45deg);\n    }\n\n    .answer-mark.cross-mark::after {\n      transform: rotate(-45deg);\n    }\n\n    .word-anchor {\n      position: relative;\n      display: inline-block;\n    }\n\n    .word-text {\n      display: block;\n      white-space: nowrap;\n    }\n\n    .error-feedback {\n      position: fixed;\n      top: auto;\n      bottom: calc(var(--balanced-edge-gap) - 60px);\n      left: 50%;\n      width: min(640px, 92vw);\n      min-height: 24px;\n      margin-top: 0;\n      color: #c62828;\n      font-size: 16px;\n      font-weight: 700;\n      line-height: 1.4;\n      transform: translateX(-50%);\n      visibility: hidden;\n      white-space: normal;\n    }\n\n    .error-feedback.visible {\n      visibility: visible;\n    }\n\n    .word-item.current .answer-mark {\n      font-size: 1em;\n    }\n\n    .fixation-cross {\n      position: absolute;\n      z-index: 4;\n      top: 50%;\n      left: 50%;\n      color: #111;\n      font-size: 56px;\n      font-weight: 300;\n      line-height: 1;\n      transform: translate(-50%, -50%);\n      visibility: hidden;\n      pointer-events: none;\n    }\n\n    .fixation-cross.visible {\n      visibility: visible;\n    }\n    .fatal-error {\n      width: min(760px, 90vw);\n      margin: 80px auto;\n      padding: 28px;\n      border: 2px solid #b00020;\n      color: #760016;\n      font-size: 17px;\n      line-height: 1.8;\n      text-align: left;\n    }\n\n    .end-screen {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 42px 20px;\n    }\n\n    .end-title {\n      margin: 0 0 38px !important;\n      font-size: 40px !important;\n      text-align: center;\n    }\n\n    .dummy-explanation {\n      width: var(--panel-width);\n      margin: 0 auto;\n      font-size: 18px;\n      line-height: 2;\n      text-align: center;\n    }\n\n\n    @media (max-height: 760px) {\n      .screen { padding: 8px 18px; }\n      .screen h1 { margin-bottom: 28px; font-size: 26px; }\n      .screen h2 { margin-bottom: 24px; font-size: 22px; }\n      .instruction-copy { font-size: 16px; line-height: 1.85; }\n      .instruction-copy p { margin-bottom: 12px; }\n      .mapping-board { margin: 2px auto 14px; column-gap: 64px; }\n      .mapping-key { margin-bottom: 14px; }\n      .key-button { width: 92px; height: 92px; min-height: 92px; padding: 8px 10px; border-radius: 16px; }\n      .key-label { font-size: 17px; }\n      .key-symbol { margin-top: 2px; font-size: 30px; }\n      .mapping-key .key-symbol { font-size: 45px; }\n      .task-key .key-symbol { font-size: 45px; }\n      .mapping-key .key-button { width: 92px; height: 92px; min-height: 92px; }\n      .mapping-items { font-size: 15.5px; line-height: 1.5; }\n      .mapping-items strong { font-size: 17px; }\n      .mapping-divider { margin: 10px 0; }\n      .start-prompt { min-width: 230px; min-height: 56px; margin-top: 14px; padding: 10px 28px; font-size: 18px; border-radius: 16px; }\n    }\n\n    @media (max-height: 640px) {\n      .screen { padding: 6px 16px; }\n      .screen h1 { margin-bottom: 18px; font-size: 23px; }\n      .screen h2 { margin-bottom: 16px; font-size: 20px; }\n      .instruction-copy { font-size: 14.5px; line-height: 1.7; }\n      .instruction-copy p { margin-bottom: 8px; }\n      .mapping-board { margin-bottom: 8px; }\n      .key-button { width: 78px; height: 78px; min-height: 78px; border-radius: 14px; }\n      .key-symbol { font-size: 24px; }\n      .mapping-key .key-symbol { font-size: 36px; }\n      .task-key .key-symbol { font-size: 36px; }\n      .mapping-key .key-button { width: 78px; height: 78px; min-height: 78px; }\n      .start-prompt { min-width: 200px; min-height: 50px; margin-top: 8px; padding: 8px 22px; font-size: 16px; border-radius: 14px; }\n    }\n    @media (max-width: 680px) {\n      .screen { padding: 28px 12px; }\n      .task-screen {\n        --balanced-edge-gap: 97px;\n        padding: 28px 12px;\n      }\n      .mapping-board {\n        gap: 18px;\n        width: 96vw;\n      }\n      .mapping-items, .task-targets { font-size: 15px; }\n      .key-button {\n        width: 92px;\n        height: 92px;\n        min-height: 92px;\n        border-radius: 16px;\n      }\n      .key-label { font-size: 17px; }\n      .key-symbol { font-size: 34px; }\n      .task-mapping {\n        width: 96vw;\n        column-gap: 18px;\n      }\n      .word-track { gap: 24px; }\n      .word-item {\n        flex-basis: auto;\n        width: 94vw;\n        height: 190px;\n        min-width: 0;\n        padding: 0 8px;\n        font-size: 18px;\n      }\n      .word-item.current { font-size: 24px; }\n      .answer-mark {\n        width: 6em;\n        height: 6em;\n        font-size: 1em;\n      }\n      .word-item.current .answer-mark {\n        font-size: 1em;\n      }\n    }\n    @media (max-width: 680px) and (max-height: 760px) {\n      .screen { padding: 6px 10px; }\n      .instruction-copy { font-size: 14.5px; line-height: 1.7; }\n      .instruction-copy p { margin-bottom: 8px; }\n      .mapping-board { margin: 2px auto 8px; }\n      .start-prompt { margin-top: 8px; }\n    }\n  ";
  var TARGET_WORD = "地域の子ども";
  var TARGET_LABEL = "local_children";
  var STIMULUS_SEED = 20260705;
  var SESSION_ID = "fumie-" + Date.now() + "-" + Math.random().toString(36).slice(2, 10);

  function injectStyle() {
    if (document.getElementById("fumie-task-style")) return;
    var style = document.createElement("style");
    style.id = "fumie-task-style";
    style.textContent = FUMIE_CSS;
    document.head.appendChild(style);
  }

  injectStyle();

  var POSITIVE_WORDS = [
    "平和な暮らし", "満足のいく結果", "幸せに満ちた日々", "安全な生活環境",
    "成功した出来事", "勝利した経験", "安心できる場所", "貯金がある生活",
    "希望に満ちた人生", "長所を発揮する", "誰もが平等な社会", "健康的な生活",
    "史上最高の気分", "上品なふるまい", "美しい自然環境", "思いやりの気持ち"
  ];

  var NEGATIVE_WORDS = [
    "戦争下の暮らし", "不満の残る結果", "不幸ばかりの日々", "危険な生活環境",
    "失敗した出来事", "敗北した経験", "不安になる場所", "借金を抱えた生活",
    "絶望ばかりの人生", "短所でつまずく", "差別が残る社会", "病気がちな生活",
    "最低最悪の気分", "下品なふるまい", "汚れた自然環境", "意地悪な気持ち"
  ];

  var randomState = STIMULUS_SEED;

  function fixedRandom() {
    randomState |= 0;
    randomState = randomState + 0x6D2B79F5 | 0;
    var value = Math.imul(randomState ^ randomState >>> 15, 1 | randomState);
    value = value + Math.imul(value ^ value >>> 7, 61 | value) ^ value;
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  }

  function shuffle(array) {
    var result = array.slice();
    for (var i = result.length - 1; i > 0; i--) {
      var j = Math.floor(fixedRandom() * (i + 1));
      var temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    return result;
  }

  function repeatedSample(source, count) {
    var result = [];
    while (result.length < count) result = result.concat(shuffle(source));
    return result.slice(0, count);
  }

  function word(text, type) {
    return { text: text, type: type };
  }

  function pad2(number) {
    return number < 10 ? "0" + number : String(number);
  }

  function makePracticeWords() {
    var positives = repeatedSample(POSITIVE_WORDS, 11).map(function (text) {
      return word(text, "ポジティブ");
    });
    var negatives = repeatedSample(NEGATIVE_WORDS, 10).map(function (text) {
      return word(text, "ネガティブ");
    });
    return shuffle(positives.concat(negatives));
  }

  function makeBlockWords() {
    var positives = repeatedSample(POSITIVE_WORDS, 7);
    var negatives = repeatedSample(NEGATIVE_WORDS, 7);
    var sets = [];
    for (var i = 0; i < 7; i++) {
      var set = [
        word(positives[i], "ポジティブ"),
        word(negatives[i], "ネガティブ"),
        word(TARGET_WORD, "ターゲット")
      ];
      var candidates = shuffle(set);
      if (sets.length && sets[sets.length - 1].type.indexOf("ターゲット") === 0) {
        while (candidates[0].type.indexOf("ターゲット") === 0) candidates = shuffle(set);
      }
      sets = sets.concat(candidates);
    }
    return sets;
  }

  var blocks = [
    { number: 1, practice: true, words: makePracticeWords(), target: null, condition: "practice", iatType: "練習_" + TARGET_WORD },
    { number: 2, words: makeBlockWords(), target: "○", condition: "incongruent", iatType: "不一致本番_" + TARGET_WORD },
    { number: 3, words: makeBlockWords(), target: "×", condition: "congruent", iatType: "一致本番_" + TARGET_WORD },
    { number: 4, words: makeBlockWords(), target: "○", condition: "incongruent", iatType: "不一致本番_" + TARGET_WORD },
    { number: 5, words: makeBlockWords(), target: "×", condition: "congruent", iatType: "一致本番_" + TARGET_WORD },
    { number: 6, words: makeBlockWords(), target: "○", condition: "incongruent", iatType: "不一致本番_" + TARGET_WORD },
    { number: 7, words: makeBlockWords(), target: "×", condition: "congruent", iatType: "一致本番_" + TARGET_WORD }
  ];

  blocks.forEach(function (block) {
    block.mapping = block.practice ? "ポジティブ○・ネガティブ×" : TARGET_WORD + block.target;
  });

  function mappingBoard(block, taskMode) {
    var leftItems = ["ポジティブな言葉"];
    var rightItems = ["ネガティブな言葉"];
    if (!block.practice) {
      if (block.target === "○") leftItems.push(TARGET_WORD);
      else rightItems.push(TARGET_WORD);
    }
    var itemClass = taskMode ? "task-targets" : "mapping-items";
    var leftKey = '<div class="key-button"><div class="key-label">Fキー</div><div class="key-symbol circle-symbol">○</div></div>';
    var rightKey = '<div class="key-button"><div class="key-label">Jキー</div><div class="key-symbol">×</div></div>';
    return '<div class="' + (taskMode ? "task-mapping" : "mapping-board") + '">' +
      '<div><div class="' + (taskMode ? "task-key" : "mapping-key") + '">' + leftKey + '</div>' +
      '<div class="' + itemClass + '">' + leftItems.map(function (item) {
        var content = !taskMode && item === TARGET_WORD ? '<span class="instruction-target">' + item + '</span>' : item;
        return '<div>' + content + '</div>';
      }).join("") + '</div></div>' +
      '<div><div class="' + (taskMode ? "task-key" : "mapping-key") + '">' + rightKey + '</div>' +
      '<div class="' + itemClass + '">' + rightItems.map(function (item) {
        var content = !taskMode && item === TARGET_WORD ? '<span class="instruction-target">' + item + '</span>' : item;
        return '<div>' + content + '</div>';
      }).join("") + '</div></div>' +
      (taskMode ? "" : '<div class="mapping-divider"></div>') + '</div>';
  }

  function startButton(label) {
    return '<div class="start-prompt">' + label + '</div>';
  }

  function makeFullscreenScreen() {
    return {
      type: "fullscreen",
      fullscreen_mode: true,
      message: '<main class="screen fullscreen-screen"><h1 class="instruction-title">画面表示の設定</h1>' +
        '<div class="instruction-copy"><p>これから課題画面をフルスクリーン表示に切り替えます。</p>' +
        '<p>下のボタンを押して、フルスクリーン表示にしてください。</p></div></main>',
      button_label: "フルスクリーンに切り替える"
    };
  }

  function makeStartScreen() {
    return {
      type: "html-keyboard-response",
      choices: jsPsych.NO_KEYS,
      stimulus: '<main class="screen"><h1 class="instruction-title">分類課題の説明</h1><div class="instruction-copy">' +
        '<p>これからキーボードを使った分類課題を行います。</p>' +
        '<p>画面中央に言葉が1つずつ表示されます。<br>言葉が表示されたら、できるだけ素早く正確に分類してください。</p>' +
        '<p>「平和な暮らし」「満足のいく結果」のようなポジティブな言葉は Fキーで「○」に、<br>' +
        '「不幸ばかりの日々」「危険な生活環境」のようなネガティブな言葉は Jキーで「×」に分類します。</p>' +
        '<p>誤ったキーを押した場合は警告文が表示されます。正しいキーを押し直して、課題を続けてください。</p>' +
        '<p>分類したあと、次の言葉が表示されるまで、画面中央に十字マーク「＋」が表示されます。<br>' +
        '次の言葉が表示されたら、また素早く分類してください。</p>' +
        '<p>課題は練習を入れて9ブロック行います。<br>説明を読み終えたら、Spaceキーで次へ進んでください。</p></div>' +
        startButton("Spaceキーで進む") + '</main>',
      on_load: installStartControls,
      data: { record_type: "instruction", screen: "initial", target: TARGET_WORD }
    };
  }

  function makeInstruction(block) {
    var copy;
    if (block.practice) {
      copy = '<p>これから練習課題を行います。</p>' +
        '<p>画面中央に言葉が表示されたら、できるだけ素早く正確に分類してください。</p>' +
        '<p>ポジティブな言葉は Fキーで「○」を、<br>ネガティブな言葉は Jキーで「×」を選択します。</p>';
    } else if (block.target === "○") {
      copy = '<p><strong>このブロックでは、「<span class="instruction-target">' + TARGET_WORD + '</span>」を「○」に分類します。</strong></p>' +
        '<p>言葉が表示されたら、できるだけ素早く正確に分類してください。</p>' +
        '<p>ポジティブな言葉と「<span class="instruction-target">' + TARGET_WORD + '</span>」は Fキーで「○」、<br>' +
        'ネガティブな言葉は Jキーで「×」を選択します。</p>';
    } else {
      copy = '<p><strong>このブロックでは、「<span class="instruction-target">' + TARGET_WORD + '</span>」を「×」に分類します。</strong></p>' +
        '<p>言葉が表示されたら、できるだけ素早く正確に分類してください。</p>' +
        '<p>ポジティブな言葉は Fキーで「○」、<br>ネガティブな言葉と「<span class="instruction-target">' + TARGET_WORD + '</span>」は Jキーで「×」を選択します。</p>';
    }
    return {
      type: "html-keyboard-response",
      choices: jsPsych.NO_KEYS,
      stimulus: '<main class="screen"><h2 class="instruction-title">課題の説明（' + block.number + '/9）</h2>' +
        mappingBoard(block, false) + '<div class="instruction-copy">' + copy +
        '<p>選択した「○」「×」は、分類中の言葉の上に表示されます。</p>' +
        '<p>分類したあと、次の言葉が表示されるまで画面中央に「＋」が表示されます。<br>次の言葉が表示されたら、また素早く分類してください。</p>' +
        '<p>誤ったキーを押した場合は警告文が表示されるので、正しいキーを押し直して課題を続行してください。</p></div>' +
        startButton("Spaceキーで開始") + '</main>',
      on_load: installStartControls,
      data: { record_type: "instruction", block_number: block.number, condition: block.condition, target: TARGET_WORD }
    };
  }

  function installStartControls() {
    var finished = false;
    function begin(event) {
      if (finished || event.code !== "Space") return;
      event.preventDefault();
      finished = true;
      window.removeEventListener("keydown", begin);
      jsPsych.finishTrial();
    }
    window.addEventListener("keydown", begin);
  }

  function correctAnswer(block, item) {
    if (item.type === "ポジティブ") return "○";
    if (item.type === "ネガティブ") return "×";
    return block.target;
  }

  function makeTask(block) {
    return {
      type: "html-keyboard-response",
      choices: jsPsych.NO_KEYS,
      stimulus: '<main class="task-screen"><h2 class="instruction-title task-title-placeholder" aria-hidden="true">課題の説明（' + block.number + '/9）</h2>' +
        mappingBoard(block, true) + '<div class="word-viewport"><div class="word-track" id="word-track"></div><div class="fixation-cross" id="fixation-cross">+</div></div></main>',
      data: { trial_role: "block", target: TARGET_WORD, condition: block.condition, iat_type: block.iatType },
      on_load: function () {
        var track = document.getElementById("word-track");
        var taskMapping = document.querySelector(".task-mapping");
        var wordViewport = document.querySelector(".word-viewport");
        var fixationCross = document.getElementById("fixation-cross");
        var currentIndex = 0;
        var selectedAnswer = null;
        var wordReadyAt = performance.now();
        var responses = [];
        var initialResponseRecorded = false;
        var transitionPending = false;
        var finished = false;
        var fixationDuration = 1000;

        function positionWordArea() {
          var mappingRect = taskMapping.getBoundingClientRect();
          var current = track.querySelector('[data-index="' + currentIndex + '"]');
          if (!current) return;
          wordViewport.style.top = "0px";
          wordViewport.style.bottom = "auto";
          var viewportRect = wordViewport.getBoundingClientRect();
          var wordRect = current.querySelector(".word-text").getBoundingClientRect();
          var markRect = current.querySelector(".answer-mark").getBoundingClientRect();
          var feedbackRect = current.querySelector(".error-feedback").getBoundingClientRect();
          var groupCenterFromViewport = (Math.min(wordRect.top, markRect.top) + Math.max(wordRect.bottom, markRect.bottom)) / 2 - viewportRect.top;
          var desiredGroupCenter = (mappingRect.bottom + feedbackRect.top) / 2;
          wordViewport.style.top = Math.round(desiredGroupCenter - groupCenterFromViewport) + "px";
        }

        track.innerHTML = block.words.map(function (item, index) {
          return '<div class="word-item' + (index === 0 ? " current" : "") + '" data-index="' + index + '">' +
            '<span class="word-anchor"><span class="word-text">' + item.text + '</span><span class="answer-mark"></span></span>' +
            '<div class="error-feedback">不正解です。正解のキーを押し直してください。</div></div>';
        }).join("");

        positionWordArea();
        window.addEventListener("resize", positionWordArea);

        function setFixationVisible(visible) {
          fixationCross.classList.toggle("visible", visible);
        }

        function setAnswer(answer, isCorrect) {
          var current = track.querySelector('[data-index="' + currentIndex + '"]');
          if (!current) return;
          selectedAnswer = answer;
          var answerMark = current.querySelector(".answer-mark");
          var errorFeedback = current.querySelector(".error-feedback");
          answerMark.textContent = answer;
          answerMark.classList.toggle("circle-mark", answer === "○");
          answerMark.classList.toggle("cross-mark", answer === "×");
          errorFeedback.classList.toggle("visible", !isCorrect);
        }

        function recordCurrentAnswer(responseAt) {
          var item = block.words[currentIndex];
          var expected = correctAnswer(block, item);
          responses.push({
            position: currentIndex + 1,
            answer: selectedAnswer,
            responseKey: selectedAnswer === "○" ? "f" : "j",
            correct: selectedAnswer === expected ? 1 : 0,
            rt: Math.round(responseAt - wordReadyAt)
          });
        }

        function finishBlock() {
          if (finished) return;
          finished = true;
          window.removeEventListener("keydown", onKeydown);
          window.removeEventListener("resize", positionWordArea);
          var responsesByPosition = {};
          responses.forEach(function (response) { responsesByPosition[response.position] = response; });
          block.words.forEach(function (item, index) {
            var position = index + 1;
            var response = responsesByPosition[position] || { responseKey: "", answer: "", correct: "", rt: "" };
            jsPsych.data.write({
              record_type: "word",
              id: SESSION_ID,
              block: "block_" + pad2(block.number),
              condition: block.condition,
              iat_type: block.iatType,
              target: TARGET_WORD,
              word_position: position,
              stimulus: item.text,
              stimulus_type: item.type,
              response: response.responseKey,
              response_symbol: response.answer,
              correct: response.correct,
              rt: response.rt
            });
          });
          window.__fumieFinishBlock = null;
        }

        function submitAnswer(answer) {
          if (finished || transitionPending || currentIndex >= block.words.length) return;
          var current = track.querySelector('[data-index="' + currentIndex + '"]');
          var expected = correctAnswer(block, block.words[currentIndex]);
          var isCorrect = answer === expected;
          var responseAt = performance.now();
          setAnswer(answer, isCorrect);
          if (!initialResponseRecorded) {
            recordCurrentAnswer(responseAt);
            initialResponseRecorded = true;
          }
          if (!isCorrect) return;
          transitionPending = true;
          jsPsych.pluginAPI.setTimeout(function () {
            if (finished) return;
            current.classList.remove("current");
            currentIndex += 1;
            selectedAnswer = null;
            initialResponseRecorded = false;
            if (currentIndex >= block.words.length) {
              finishBlock();
              jsPsych.pluginAPI.clearAllTimeouts();
              jsPsych.finishTrial();
              return;
            }
            setFixationVisible(true);
            jsPsych.pluginAPI.setTimeout(function () {
              if (finished) return;
              setFixationVisible(false);
              track.querySelector('[data-index="' + currentIndex + '"]').classList.add("current");
              transitionPending = false;
              wordReadyAt = performance.now();
            }, fixationDuration);
          }, 120);
        }

        function onKeydown(event) {
          if (finished || transitionPending || event.repeat) return;
          var key = event.key.toLowerCase();
          if (key === "f") {
            event.preventDefault();
            submitAnswer("○");
          } else if (key === "j") {
            event.preventDefault();
            submitAnswer("×");
          }
        }

        window.__fumieFinishBlock = finishBlock;
        window.addEventListener("keydown", onKeydown);
      },
      on_finish: function () {
        if (typeof window.__fumieFinishBlock === "function") window.__fumieFinishBlock();
      }
    };
  }

  function makeEndScreen() {
    return {
      type: "html-keyboard-response",
      choices: jsPsych.NO_KEYS,
      trial_duration: 10000,
      stimulus: '<main class="screen end-screen"><h1 class="end-title">ご協力ありがとうございました</h1>' +
        '<div class="dummy-explanation"><p>8・9試行目はダミー試行として設定されていましたが、<br>回答および分析の対象ではないため、実施せずに課題を終了しました。</p>' +
        '<p>画面が切り替わりますので、しばらくお待ちください。</p></div></main>',
      on_load: function () {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(function () {});
        }
      },
      data: { record_type: "end", target: TARGET_WORD }
    };
  }

  var timeline = [makeFullscreenScreen(), makeStartScreen()];
  blocks.forEach(function (block) {
    timeline.push(makeInstruction(block));
    timeline.push(makeTask(block));
  });
  timeline.push(makeEndScreen());

  window.timeline = timeline;
  window.FUMIE_TARGET_WORD = TARGET_WORD;
  window.FUMIE_TARGET_LABEL = TARGET_LABEL;
})();