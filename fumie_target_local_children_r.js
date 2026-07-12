(function () {
      "use strict";

      if (typeof jsPsych === "undefined") {
        document.getElementById("jspsych-target").innerHTML =
          '<div class="fatal-error"><strong>jsPsychを読み込めませんでした。</strong><br>' +
          'このHTMLから見て、次のフォルダにjsPsych 6.3.1があるか確認してください。<br>' +
          '<code>../../Desktop/jspych/jspsych-6.3.1/</code></div>';
        return;
      }

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
      // ターゲット語
      var TARGET_WORD = "地域の子ども";
      var STIMULUS_SEED = 20260705;
      var SESSION_ID = "fumie-" + Date.now() + "-" +
        Math.random().toString(36).slice(2, 10);

      // Keep the stimulus order identical for every participant.
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
        while (result.length < count) {
          result = result.concat(shuffle(source));
        }
        return result.slice(0, count);
      }

      function word(text, type) {
        return { text: text, type: type };
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
            while (candidates[0].type.indexOf("ターゲット") === 0) {
              candidates = shuffle(set);
            }
          }
          sets = sets.concat(candidates);
        }
        return sets;
      }

      var blocks = [
        {
          number: 1,
          practice: true,
          words: makePracticeWords(),
          target: null,
          condition: "practice",
          iatType: "練習_地域の子ども"
        },
        {
          number: 2,
          words: makeBlockWords(),
          target: "○",
          condition: "incongruent",
          iatType: "不一致本番_地域の子ども"
        },
        {
          number: 3,
          words: makeBlockWords(),
          target: "×",
          condition: "congruent",
          iatType: "一致本番_地域の子ども"
        },
        {
          number: 4,
          words: makeBlockWords(),
          target: "○",
          condition: "incongruent",
          iatType: "不一致本番_地域の子ども"
        },
        {
          number: 5,
          words: makeBlockWords(),
          target: "×",
          condition: "congruent",
          iatType: "一致本番_地域の子ども"
        },
        {
          number: 6,
          words: makeBlockWords(),
          target: "○",
          condition: "incongruent",
          iatType: "不一致本番_地域の子ども"
        },
        {
          number: 7,
          words: makeBlockWords(),
          target: "×",
          condition: "congruent",
          iatType: "一致本番_地域の子ども"
        }
      ];

      blocks.forEach(function (block) {
        block.mapping = block.practice
          ? "ポジティブ○・ネガティブ×"
          : TARGET_WORD + block.target;
      });

      function mappingBoard(block, taskMode) {
        var leftItems = [];
        var rightItems = [];

        leftItems.push("ポジティブな言葉");
        rightItems.push("ネガティブな言葉");
        if (!block.practice) {
          if (block.target === "○") leftItems.push(TARGET_WORD);
          else rightItems.push(TARGET_WORD);
        }

        var itemClass = taskMode ? "task-targets" : "mapping-items";
        var leftKey =
          '<div class="key-button">' +
            '<div class="key-label">Fキー</div>' +
            '<div class="key-symbol circle-symbol">○</div>' +
          '</div>';
        var rightKey =
          '<div class="key-button">' +
            '<div class="key-label">Jキー</div>' +
            '<div class="key-symbol">×</div>' +
          '</div>';
        return (
          '<div class="' + (taskMode ? "task-mapping" : "mapping-board") + '">' +
            '<div>' +
              '<div class="' + (taskMode ? "task-key" : "mapping-key") + '">' + leftKey + '</div>' +
              '<div class="' + itemClass + '">' +
                leftItems.map(function (item) {
                  var content = !taskMode && item === TARGET_WORD
                    ? '<span class="instruction-target">' + item + '</span>'
                    : item;
                  return "<div>" + content + "</div>";
                }).join("") +
              '</div>' +
            '</div>' +
            '<div>' +
              '<div class="' + (taskMode ? "task-key" : "mapping-key") + '">' + rightKey + '</div>' +
              '<div class="' + itemClass + '">' +
                rightItems.map(function (item) {
                  var content = !taskMode && item === TARGET_WORD
                    ? '<span class="instruction-target">' + item + '</span>'
                    : item;
                  return "<div>" + content + "</div>";
                }).join("") +
              '</div>' +
            '</div>' +
            (taskMode ? "" : '<div class="mapping-divider"></div>') +
          '</div>'
        );
      }

      function startButton(label) {
        return '<div class="start-prompt">' + label + '</div>';
      }


      function makeFullscreenScreen() {
        return {
          type: "fullscreen",
          fullscreen_mode: true,
          message:
            '<main class="screen">' +
              '<h1 class="instruction-title">画面表示の設定</h1>' +
              '<div class="instruction-copy">' +
                '<p>これから課題画面をフルスクリーン表示に切り替えます。</p>' +
                '<p>下のボタンを押して、フルスクリーン表示にしてください。</p>' +
              '</div>' +
            '</main>',
          button_label: "フルスクリーンに切り替える"
        };
      }
      function makeStartScreen() {
        return {
          type: "html-keyboard-response",
          choices: jsPsych.NO_KEYS,
          stimulus:
            '<main class="screen">' +
              '<h1 class="instruction-title">分類課題の説明</h1>' +
              '<div class="instruction-copy">' +
                '<p>これからキーボードを使った分類課題を行います。</p>' +
                '<p>画面中央に言葉が1つずつ表示されます。<br>' +
                '言葉が表示されたら、できるだけ素早く正確に分類してください。</p>' +
                '<p>「平和な暮らし」「満足のいく結果」のようなポジティブな言葉は Fキーで「○」に、<br>' +
                '「不幸ばかりの日々」「危険な生活環境」のようなネガティブな言葉は Jキーで「×」に分類します。</p>' +
                '<p>誤ったキーを押した場合は赤字で「不正解です。正解のキーを押し直してください。」と警告文が表示されます。<br>' +
                '正しいキーを押し直して、課題を続けてください。</p>' +
                '<p>分類したあと、次の言葉が表示されるまで、画面中央に十字マーク「＋」が表示されます。<br>' +
                '次の言葉が表示されたら、また素早く分類してください。</p>'+
                '<p>課題は練習を入れて9ブロック行います。<br>' +
                '説明を読み終えたら、Spaceキーで次へ進んでください。</p>' +
              '</div>' +
              startButton("Spaceキーで進む") +
            '</main>',
          on_load: installStartControls,
          data: { record_type: "instruction", screen: "initial" }
        };
      }
      function makeInstruction(block) {
        var copy;

        if (block.practice) {
          copy =
            '<p>これから練習課題を行います。</p>' +
            '<p>画面中央に言葉が表示されたら、できるだけ素早く正確に分類してください。</p>' +
            '<p>ポジティブな言葉は Fキーで「○」を、<br>' +
            'ネガティブな言葉は Jキーで「×」を選択します。<br>';
        } else if (block.target === "○") {
          copy =
            '<p><strong>このブロックでは、「<span class="instruction-target">' + TARGET_WORD +
            '</span>」を「○」に分類します。</strong></p>' +
            '<p>言葉が表示されたら、できるだけ素早く正確に分類してください。</p>' +
            '<p>ポジティブな言葉と「<span class="instruction-target">' + TARGET_WORD +
            '</span>」は Fキーで「○」、<br>' +
            'ネガティブな言葉は Jキーで「×」を選択します。<br>';
        } else {
          copy =
            '<p><strong>このブロックでは、「<span class="instruction-target">' + TARGET_WORD +
            '</span>」を「×」に分類します。</strong></p>' +
            '<p>言葉が表示されたら、できるだけ素早く正確に分類してください。</p>' +
            '<p>ポジティブな言葉は Fキーで「○」、<br>' +
            'ネガティブな言葉と「<span class="instruction-target">' + TARGET_WORD +
            '</span>」は Jキーで「×」を選択します。<br>';
        }

        return {
          type: "html-keyboard-response",
          choices: jsPsych.NO_KEYS,
          stimulus:
            '<main class="screen">' +
              '<h2 class="instruction-title">課題の説明（' + block.number + '/9）</h2>' +
              mappingBoard(block, false) +
              '<div class="instruction-copy">' +
                copy +
                '選択した「○」「×」は、分類中の言葉の上に表示されます。</p>' +
                '<p>分類したあと、次の言葉が表示されるまで画面中央に「＋」が表示されます。<br>' +
                '次の言葉が表示されたら、また素早く分類してください。</p>'+
                '<p>正しいキーを押すと回答が確定し、次の言葉へ進みます。<br>' +
                '誤ったキーを押した場合は警告文が表示されるので、正しいキーを押し直して課題を続行してください。</p>' +
              '</div>' +
              startButton("Spaceキーで開始") +
            '</main>',
          on_load: installStartControls,
          data: {
            record_type: "instruction",
            block_number: block.number,
            condition: block.condition
          }
        };
      }
      function installStartControls() {
        var finished = false;

        function begin(event) {
          if (finished) return;
          if (event.code !== "Space") return;
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
          stimulus:
            '<main class="task-screen">' +
              '<h2 class="instruction-title task-title-placeholder" aria-hidden="true">' +
                '課題の説明（' + block.number + '/9）' +
              '</h2>' +
              mappingBoard(block, true) +
              '<div class="word-viewport"><div class="word-track" id="word-track"></div><div class="fixation-cross" id="fixation-cross">+</div></div>' +
            '</main>',
          data: {
            trial_role: "block"
          },
          on_load: function () {
            var track = document.getElementById("word-track");
            var taskMapping = document.querySelector(".task-mapping");
            var wordViewport = document.querySelector(".word-viewport");
            var fixationCross = document.getElementById("fixation-cross");
            var currentIndex = 0;
            var selectedAnswer = null;
            var wordReadyAt = null;
            var responses = [];
            var initialResponseRecorded = false;
            var transitionPending = false;
            var finished = false;
            var fixationDuration = 1000;

            function positionWordArea() {
              var mappingRect = taskMapping.getBoundingClientRect();
              var current = track.querySelector(
                '[data-index="' + currentIndex + '"]'
              );
              if (!current) return;

              wordViewport.style.top = "0px";
              wordViewport.style.bottom = "auto";

              var viewportRect = wordViewport.getBoundingClientRect();
              var wordRect = current
                .querySelector(".word-text")
                .getBoundingClientRect();
              var markRect = current
                .querySelector(".answer-mark")
                .getBoundingClientRect();
              var feedbackRect = current
                .querySelector(".error-feedback")
                .getBoundingClientRect();
              var groupCenterFromViewport = (
                Math.min(wordRect.top, markRect.top) +
                Math.max(wordRect.bottom, markRect.bottom)
              ) / 2 - viewportRect.top;
              var desiredGroupCenter = (
                mappingRect.bottom + feedbackRect.top
              ) / 2;
              var top = desiredGroupCenter - groupCenterFromViewport;

              wordViewport.style.top = Math.round(top) + "px";
            }

            track.innerHTML = block.words.map(function (item, index) {
              return (
                '<div class="word-item' + (index === 0 ? " current" : "") +
                '" data-index="' + index + '">' +
                  '<span class="word-anchor">' +
                    '<span class="word-text">' + item.text + '</span>' +
                    '<span class="answer-mark"></span>' +
                  '</span>' +
                  '<div class="error-feedback">不正解です。正解のキーを押し直してください。</div>' +
                '</div>'
              );
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
                index: currentIndex + 1,
                answer: selectedAnswer,
                responseKey: selectedAnswer === "○" ? "f" : "j",
                correct: selectedAnswer === expected ? 1 : 0,
                rt: Math.round(responseAt - wordReadyAt)
              });
            }

            function submitAnswer(answer) {
              if (
                finished ||
                transitionPending ||
                currentIndex >= block.words.length
              ) return;
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
                  var next = track.querySelector('[data-index="' + currentIndex + '"]');
                  next.classList.add("current");
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

            function finishBlock() {
              if (finished) return;
              finished = true;
              window.removeEventListener("keydown", onKeydown);
              window.removeEventListener("resize", positionWordArea);

              responses.forEach(function (response) {
                response.position = response.index;
              });

              var responsesByPosition = {};
              responses.forEach(function (response) {
                responsesByPosition[response.position] = response;
              });

              block.words.forEach(function (item, index) {
                var position = index + 1;
                var response = responsesByPosition[position] || null;
                var blockName = "block_" + String(block.number).padStart(2, "0");

                jsPsych.data.write({
                  record_type: "word",
                  id: SESSION_ID,
                  block: blockName,
                  condition: block.condition,
                  iat_type: block.iatType,
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

            window.__fumieFinishBlock = finishBlock;
            window.addEventListener("keydown", onKeydown);
            wordReadyAt = performance.now();
          },
          on_finish: function (data) {
            if (typeof window.__fumieFinishBlock === "function") {
              window.__fumieFinishBlock();
            }
          }
        };
      }

      function makeEndScreen() {
        return {
          type: "html-keyboard-response",
          choices: jsPsych.NO_KEYS,
          stimulus:
            '<main class="screen end-screen">' +
              '<h1 class="end-title">ご協力ありがとうございました</h1>' +
              '<div class="dummy-explanation">' +
                '<p>8・9試行目はダミー試行として設定されていましたが、<br>' +
                '回答および分析の対象ではないため、実施せずに課題を終了しました。</p>' +
                '<p>画面が切り替わりますので、しばらくお待ちください。</p>' +
              '</div>' +
            '</main>',
          on_load: function () {
            if (document.fullscreenElement && document.exitFullscreen) {
              document.exitFullscreen().catch(function () {});
            }

            window.setTimeout(function () {
              var rawData = jsPsych.data.get()
                .filter({ record_type: "word" })
                .ignore([
                  "record_type",
                  "trial_role",
                  "trial_type",
                  "trial_index",
                  "time_elapsed",
                  "internal_node_id"
                ]);
              var dataJson = rawData.json();

              if (window.parent !== window) {
                window.parent.postMessage({
                  type: "FUMIE_COMPLETE",
                  target: TARGET_WORD,
                  dataJson: dataJson
                }, "*");
              }
            }, 300);
          },
          data: { record_type: "end" }
        };
      }

      var timeline = [makeFullscreenScreen(), makeStartScreen()];
      blocks.forEach(function (block) {
        timeline.push(makeInstruction(block));
        timeline.push(makeTask(block));
      });
      timeline.push(makeEndScreen());

      jsPsych.init({
        timeline: timeline,
        display_element: "jspsych-target"
      });
    })();
