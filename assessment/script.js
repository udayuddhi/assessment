let myData = 
  {
      "sec_id": 1,
      "sec_title": "Section 1: Writing skills assessment",
      "sec_questions": [
          {
              "qno": 1,
              "qtype": "multiple-choice-ss",
              "question": "I express my thoughts well in writing",
              "option_1": [
                  {
                      "option": "Never",
                      "points": 1
                  }
              ],
              "option_2": [
                  {
                      "option": "Sometimes",
                      "points": 2
                  }
              ],
              "option_3": [
                  {
                      "option": "Usually",
                      "points": 3
                  }
              ],
              "option_4": [
                  {
                      "option": "Always",
                      "points": 4
                  }
              ]
          },
          {
              "qno": 2,
              "qtype": "multiple-choice-ss",
              "question": "I write quick drafts from my notes.",
              "option_1": [
                  {
                      "option": "Never",
                      "points": 1
                  }
              ],
              "option_2": [
                  {
                      "option": "Sometimes",
                      "points": 2
                  }
              ],
              "option_3": [
                  {
                      "option": "Usually",
                      "points": 3
                  }
              ],
              "option_4": [
                  {
                      "option": "Always",
                      "points": 4
                  }
              ]
          },
          {
              "qno": 3,
              "qtype": "multiple-choice-ss",
              "question": "I tend to rewrite my assignments to improve the reach & impact.",
              "option_1": [
                  {
                      "option": "Never",
                      "points": 1
                  }
              ],
              "option_2": [
                  {
                      "option": "Sometimes",
                      "points": 2
                  }
              ],
              "option_3": [
                  {
                      "option": "Usually",
                      "points": 3
                  }
              ],
              "option_4": [
                  {
                      "option": "Always",
                      "points": 4
                  }
              ]
          },
          {
              "qno": 4,
              "qtype": "multiple-choice-ss",
              "question": "I review my writing for typos and grammatical errors.",
              "option_1": [
                  {
                      "option": "Never",
                      "points": 1
                  }
              ],
              "option_2": [
                  {
                      "option": "Sometimes",
                      "points": 2
                  }
              ],
              "option_3": [
                  {
                      "option": "Usually",
                      "points": 3
                  }
              ],
              "option_4": [
                  {
                      "option": "Always",
                      "points": 4
                  }
              ]
          },
          {
              "qno": 5,
              "qtype": "multiple-choice-ss",
              "question": "I'll have someone else read my work and consider their suggestion to improve the content",
              "option_1": [
                  {
                      "option": "Never",
                      "points": 1
                  }
              ],
              "option_2": [
                  {
                      "option": "Sometimes",
                      "points": 2
                  }
              ],
              "option_3": [
                  {
                      "option": "Usually",
                      "points": 3
                  }
              ],
              "option_4": [
                  {
                      "option": "Always",
                      "points": 4
                  }
              ]
          },
          {
              "qno": 6,
              "qtype": "multiple-choice-ss",
              "question": "I am comfortable using internet, online libraries and other sources for research.",
              "option_1": [
                  {
                      "option": "Never",
                      "points": 1
                  }
              ],
              "option_2": [
                  {
                      "option": "Sometimes",
                      "points": 2
                  }
              ],
              "option_3": [
                  {
                      "option": "Usually",
                      "points": 3
                  }
              ],
              "option_4": [
                  {
                      "option": "Always",
                      "points": 4
                  }
              ]
          },
          {
              "qno": 7,
              "qtype": "multiple-choice-ss",
              "question": "I am able to narrow a topic for a website, blog, white paper etc.",
              "option_1": [
                  {
                      "option": "Never",
                      "points": 1
                  }
              ],
              "option_2": [
                  {
                      "option": "Sometimes",
                      "points": 2
                  }
              ],
              "option_3": [
                  {
                      "option": "Usually",
                      "points": 3
                  }
              ],
              "option_4": [
                  {
                      "option": "Always",
                      "points": 4
                  }
              ]
          },
          {
              "qno": 8,
              "qtype": "multiple-choice-ss",
              "question": "I allow sufficient time to collect information, organize material and develop content.",
              "option_1": [
                  {
                      "option": "Never",
                      "points": 1
                  }
              ],
              "option_2": [
                  {
                      "option": "Sometimes",
                      "points": 2
                  }
              ],
              "option_3": [
                  {
                      "option": "Usually",
                      "points": 3
                  }
              ],
              "option_4": [
                  {
                      "option": "Always",
                      "points": 4
                  }
              ]
          }
      ]
  }



      
        var currentQuestion = 0;
        var score = 0;
        var questions = myData.sec_questions;
        var scores = new Array(questions.length).fill(0);


        document.getElementById("card-title").textContent = myData.sec_title;
      
        function startTest() {
          // Show the questions section and hide other sections
          document.getElementById("fistContent").style.display = "none";
          document.getElementById("rslt").style.display = "none";
          document.getElementById("questins").style.display = "block";
      
          displayQuestion();
        }
      
        function displayQuestion() {
          var questionObj = questions[currentQuestion];
      
          document.getElementById("qns_sec").textContent =
            currentQuestion + 1 + " out of " + questions.length;
          document.getElementById("qn_text").textContent = questionObj.question;
      
            document.getElementById("option_1_txt").textContent = questionObj.option_1[0].option;
            document.getElementById("option_2_txt").textContent = questionObj.option_2[0].option;
            document.getElementById("option_3_txt").textContent = questionObj.option_3[0].option;
            document.getElementById("option_4_txt").textContent = questionObj.option_4[0].option;

            var ele = document.getElementsByName("option");
          for(var i=0;i<ele.length;i++){
            ele[i].checked = false;
          }
    
            
        }
      
        function click_nxt() {
          var selectedOption = document.querySelector(
            'input[name="option"]:checked'
          );

          if (selectedOption) {

            var opt = selectedOption.id;
            scores[currentQuestion] = questions[currentQuestion][opt][0].points;
            currentQuestion++;
      
            if (currentQuestion === questions.length) {
            for (let i = 0; i < scores.length; i++) {
                score += scores[i];
            }
              document.getElementById("questins").style.display = "none";
              document.getElementById("rslt").style.display = "block";
              document.getElementById("rslt_nums").textContent = score;
      
            } else {
              displayQuestion();
            }
          }
        }
      
        function click_prev() {
          if (currentQuestion > 0) {
            currentQuestion--;
            displayQuestion();
          }
        }
