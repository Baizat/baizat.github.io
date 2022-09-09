var base64Img=null;function printDoc(e){console.log(e);var a=$("#pdfdoc")[0];(a.contentDocument||a.contentWindow.document).body.innerHTML=e.output(),a.contentWindow.print()}function headerFooterFormatting(e,a){for(var t=e.internal.getNumberOfPages(),n=t;n>=1;n--)e.setPage(n),header(e,a),1!=n&&(e.setDrawColor(162,165,105),e.setLineWidth(.2),e.line(10,30,e.internal.pageSize.getWidth()-10,30)),footer(e,n,t)}function header(e,a){base64Img&&("rtl"==a?e.addImage(base64Img,"PNG",123,10,77,15):e.addImage(base64Img,"PNG",10,10,77,15))}function imgToBase64(e,a,t){if(window.FileReader){var n=new XMLHttpRequest;n.responseType="blob",n.onload=function(){var e=new FileReader;e.onloadend=function(){t=e.result.replace("text/xml","image/png"),a(t)},e.readAsDataURL(n.response)},n.open("GET",e),n.send()}else a(null)}function footer(e,a,t){var n="Page "+a+" of "+t;e.setFontSize(10),e.text(n,10,e.internal.pageSize.getHeight()-10),e.text(curday("/"),e.internal.pageSize.getWidth()-30,e.internal.pageSize.getHeight()-10)}

imgToBase64("./src/images/logo2.png",function(e){base64Img=e}),
margins={
	top:70,
	bottom:40,
	left:30,
	width:550},generate=function(e){var a={margin:[34,10,18,10],filename:"calc-result.pdf",image:{type:"jpeg",quality:1},html2canvas:{dpi:72,letterRendering:!0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait",filters:["ASCIIHexEncode"]}},t=document.getElementsByTagName("html")[0].getAttribute("dir").toLowerCase(),n=document.createElement("div");
	n.setAttribute("style","width:793 px;");
	var o=document.getElementById("rpthead");o.setAttribute("style","font-family: 'Dubai-Regular', Helvetica, sans-serif;margin-bottom:2rem;");
	var i=o.cloneNode(!0);$(i).find(".emailtxt").remove(),n.appendChild(i);
	var r=document.getElementById("surveyResult").cloneNode(!0);console.log("sec heads");
	var l=$(r).find(".sec-head").attr("style","background-color:#55657D;color: #ffffff;font-size:1.2 rem;padding: 0 .7em .5em .7em; margin:0");console.log(l);
	var s=document.createElement("span");$(s).attr("style","ltr"==t?"margin-left:-30px;padding-right:20px;":"margin-right:-30px;padding-left:20px;").html("&#9679;");
	var u=$(r).find("div").removeClass("collapsible active content sec-head").find("li").prepend(s).prevObject[0];$(u).find("ul").attr("style","list-style: none;margin:0;padding:10x 20px 10px 30px;margin:10x 30px 10px 20px;"),$(u).find("li").attr("style","padding:3px 7px;list-style-type: none;"),n.appendChild(u),console.log(n),1==e?html2pdf().set(a).from(n).toPdf().get("pdf").then(e=>{headerFooterFormatting(e,t),e.autoPrint(),window.open(e.output("bloburl"),"_blank")}):html2pdf().set(a).from(n).toPdf().get("pdf").then(e=>{headerFooterFormatting(e,t)}).save()};
	var curday=function(e){today=new Date;
	var a=today.getDate(),t=today.getMonth()+1;
	return a<10&&(a="0"+a),t<10&&(t="0"+t),a+e+t+e+today.getFullYear()};
	const APP_MODE=1;

var surveyJSON={
	title:{
		default: "Financial Health Check Calculator",
    ar: "حاسبة كشف الصحة المالية"
  },
  showProgressBar: "top",
  questionTitleTemplate: "{no}. {title}",
  startSurveyText: {
    default: "Begin",
    ar: "ابدأ"
      name: "Start",
      elements: [
        {
          type: "html",
          name: "intro",
          html: {
            default:
              "<h2 class='pg-title'>Financial Health Check Calculator</h2><p>Receive a tailored report with advice on managing your money and achieving financial success.</p> <p>Get started by answering a few questions on your financial life.</p><div><img src='./src/images/sections-en.JPG' class='responsive'/></div> <p>This tool is a fact-finding exercise, it does not offer a full review of your financial situation and should not be classed as financial advice.  To receive professional financial advice you should seek a qualified financial advisor.</p>",
            ar:
              "<h2 class='pg-title'>حاسبة كشف الصحة المالية</h2><p>احصل على تقرير مفصل ونصائح حول إدارة أموالك وتحقيق النجاح المالي</p><p>لنبدأ بالإجابة على بعض الأسئلة الخاصة بحياتك المالية</p> <div><img src='./src/images/sections-ar.JPG' class='responsive'/></div> <p>هذه الحاسبة هي فقط لإيجاد الحقائق المتعلقة بوضعك المالي، فهي لا تقدم مراجعة كاملة ولا ينبغي تصنيفها كمشورة مالية. للحصول على مشورة مالية مهنية، ابحث عن مستشار مالي مؤهل.</p>"
          }
        }
      ],
      questionsOrder: "initial"
    },
    {
      name: "Step1",
      elements: [
        {
          type: "panel",
          name: "pnl-budget",
          elements: [
            {
              type: "radiogroup",
              name: "bdg_q1",
              title: {
                default: "Do you create a monthly budget?",
                ar: "هل تقوم بعمل ميزانية شهرية؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "4",
                  text: {
                    default: "Yes, Regularly",
                    ar: "نعم ، بانتظام"
                  },
                  tailoredTip: {
                    default:
                      "You regularly create a monthly budget: Keep it up! This is at the core of ensuring your financial success. Check our guide on setting a monthly budget to make sure you are doing everything right.",
                    ar:
                      "أنت تقوم بإنشاء ميزانية شهرية بشكل منتظم: أحسنت ثابر على ذلك! هذا هو جوهر ضمان نجاحك المالي. راجع دليلنا حول تحديد ميزانية شهرية للتأكد من أنك تقوم بكل شيء بالشكل صحيح."
                  }
                },
                {
                  value: "1",
                  text: {
                    default: "Sometimes",
                    ar: "بعض الأحیان"
                  },
                  tailoredTip: {
                    default:
                      "You sometimes create a monthly budget. This is at the core of ensuring your financial success. Aim to do a regular budget every 2 or 3 months, especially during tougher times of year like Eid or Ramadan. Check our guide on setting a monthly budget to make sure you are doing everything right.",
                    ar:
                      "تقوم أحيانًا بإنشاء ميزانية شهرية. هذا أمر جوهري لضمان نجاحك المالي. اعمل على القيام بميزانية كل 2 أو 3 أشهر، خاصة خلال الأوقات التي تتطلب مصروفات أعلى مثل فترة العيد أو رمضان. راجع دليلنا حول تحديد ميزانية شهرية للتأكد من أنك تقوم بكل شيء بشكل صحيح."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "Never",
                    ar: "لا، نهائيا"
                  },
                  tailoredTip: {
                    default:
                      "You don't create a monthly budget. One of the most important steps you can take to achieve financial success is to start budgeting in order to understand your habits, control expenses and maximize saving potential. Aim to set your first budget next month and get started by following our guide.",
                    ar:
                      "أنت لا تقوم بعمل ميزانيات شهرية. واحدة من أهم الخطوات التي يمكنك اتخاذها لتحقيق النجاح المالي هي البدء في وضع الميزانية من أجل فهم عاداتك ومراقبة النفقات وتحقيق أقصى قدر من إمكانات التوفير. احرص على وضع ميزانيتك الأولى في الشهر المقبل اتبع دليلنا لتقوم بذلك بالشكل الصحيح."
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "bdg_q2",
              title: {
                default: "Do you make shopping lists?",
                ar: "هل تقوم بعمل قوائم التسوق؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "2",
                  text: {
                    default: "Yes, Regularly",
                    ar: "نعم ، بانتظام"
                  },
                  tailoredTip: {
                    default:
                      "You regularly make a shopping list. Congratulations, you are taking an important step in controlling your expenses and being a smart shopper. Be sure to regularly involve your family members in contributing towards shopping lists.",
                    ar:
                      "أنت تقوم بوضع قوائم التسوق بانتظام. تهانينا، هذه خطوة مهمة في التحكم في نفقاتك وتدل على أنك متسوق ذكي. تأكد من مشاركة جميع أفراد العائلة في المساهمة في وضع القوائم."
                  }
                },
                {
                  value: "1",
                  text: {
                    default: "Sometimes",
                    ar: "بعض الأحیان"
                  },
                  tailoredTip: {
                    default:
                      "You sometimes make shopping lists. Aim to make a list and plan regularly before any major shopping trip; involving the family as much as possible. This will ensure you are in control of your expenses and freeing up your budget for your savings and goals.",
                    ar:
                      "أحيانا تقوم بوضع قوائم التسوق. احرص على وضع قوائم التسوق وتخطيط بانتظام قبل رحلات التسوق الرئيسية، وبمشاركة أكبر عدد من أفراد الأسرة إن أمكن. سيضمن ذلك لك تحكماً أفضل في نفقاتك ويساهم في تحرير جزء منها لمدخراتك وأهدافك."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "Never",
                    ar: "لا، نهائيا"
                  },
                  tailoredTip: {
                    default:
                      "You never make shopping lists. Make it a habit to plan ahead before going on shopping trips by sitting in advance with your family to make a list and plan for exactly what you need. This will ensure you are in control of your expenses and freeing up your budget to achieve your financial objectives.",
                    ar:
                      "أنت لا تضع قوائم التسوق. اعمل على التخطيط مسبقًا قبل الذهاب في رحلات تسوق من خلال الجلوس إعداد قائمة وتخطيط لكل ما تحتاج إليه بالضبط. سيضمن ذلك لك تحكماً أفضل في نفقاتك ويساهم في تحرير جزء من ميزانيتك لتحقيق أهدافك المالية."
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "bdg_q3",
              title: {
                default:
                  "Do you involve your family in budgeting and managing expenses?",
                ar: "هل تقوم بإشراك عائلتك في الموازنة وإدارة النفقات؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "2",
                  text: {
                    default: "Yes, always",
                    ar: "نعم ، بانتظام"
                  },
                  tailoredTip: {
                    default:
                      "You always involve your family in the budgeting process. This is an excellent way to strengthen family communication by working towards shared goals and providing children with financial responsibility from a young age.",
                    ar:
                      "أنت تشرك عائلتك دائمًا في عملية وضع الميزانية. هذه طريقة ممتازة لتعزيز التواصل الأسري والعمل على تحقيق الأهداف المشتركة وتعزيز مهارات المسؤولية المالية لدى الأطفال منذ سن مبكرة."
                  }
                },
                {
                  value: "1",
                  text: {
                    default: "Sometimes",
                    ar: "بعض الأحیان"
                  },
                  tailoredTip: {
                    default:
                      "You sometimes involve your family in the budgeting process. Aim to involve your family whenever you set a budget in order to strengthen family communication, work towards shared goals and provide your children with financial responsibility from a young age.",
                    ar:
                      "أنت تقوم أحيانًا بإشراك عائلتك في عملية وضع الميزانية. حافظ على إشراك عائلتك كلما قمت بوضع ميزانية من أجل تعزيز التواصل الأسري، ولتحقيق الأهداف المشتركة وتعزيز مهارات المسؤولية المالية لدى الأطفال منذ سن مبكرة."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "No, but I could",
                    ar: "لا، لكن يمكنني أن أقوم بذلك"
                  },
                  tailoredTip: {
                    default:
                      "You don't involve your family in the budgeting process. The next time you set a monthly budget, sit down and do it with all family members present.  Outline expenses you can cut, and goals you can save towards. This will strengthen family communication and provide children with financial responsibility from a young age.",
                    ar:
                      "أنت لا تشرك عائلتك في عملية إعداد الميزانية. حاول أن تضع ميزانية شهرية بالتعاون مع عائلتك واحتساب تكاليف النفقات التي يمكنك قطعها، ومناقشة الأهداف التي يمكنكم أن توفروا من أجلها. سيعزز هذا التواصل العائلي ويزود الأطفال بمهارات المسؤولية المالية منذ سن مبكرة."
                  }
                },
                {
                  value: "2.0",
                  text: {
                    default: "I have no one to involve",
                    ar: "ليس لدي أحد لإشراكه"
                  },
                  tailoredTip: {
                    default: "",
                    ar: ""
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "bdg_q4",
              title: {
                default: "Do you give your children a regular allowance?",
                ar: "ھل تعطي اطفالك مصروف ؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "2",
                  text: {
                    default: "Yes, Always",
                    ar: "نعم ، بانتظام"
                  },
                  tailoredTip: {
                    default:
                      "You always give your children an allowance. Ensure they use their allowance for all necessary spending and smaller goals. This is an excellent way to teach children the value of money, independence and decision making skills. If your child is below 7 give them an allowance daily, afterwards give them a weekly allowance. Once they reach 13 they should receive monthly.",
                    ar:
                      "أنت تعطي أطفالك مصروفاً خاصاً. تأكد من أنهم ينفقون مصروفهم على الأمور الضرورية والأهداف الصغيرة. هذه طريقة ممتازة لتعليم الأطفال قيمة المال والاستقلال ومهارات صنع القرار. إذا كان طفلك أقل من 7 سنوات، أعطهم مصروفاً يوميًا، وبعد ذلك أمنحهم مصروفاً أسبوعيًا. بمجرد وصولهم إلى 13 يجب أن يتلقوا مصروفا شهريا."
                  }
                },
                {
                  value: "1",
                  text: {
                    default: "Sometimes",
                    ar: "بعض الأحیان"
                  },
                  tailoredTip: {
                    default:
                      "You sometimes give your children an allowance. If your child is below 7 consider giving them an allowance every day, afterwards give them a weekly allowance. Once they reach 13 they should receive monthly. A regular allowance is an excellent way to teach your children the value of money, independence and decision making skills.",
                    ar:
                      "أنت تعطي أطفالك مصروفا في بعض الأحيان. إذا كان طفلك أقل من 7 سنوات فكر في إعطائهم مصروفا يوميا، ثم اعطهم مصروفاً أسبوعيًا بعد ذلك. بمجرد وصولهم إلى 13 سنة، يجب أن يتلقوا مصروفا شهريا. يعتبر المصروف المنتظم وسيلة ممتازة لتعليم أطفالك قيمة المال والاستقلال ومهارات اتخاذ القرار."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "No, but I could",
                    ar: "للا، لكن يمكنني ذلك"
                  },
                  tailoredTip: {
                    default:
                      "You don't give your children an allowance. Set a pledge now to give them a regular allowance, this is an excellent way to teach your children the value of money, independence and decision making skills. If your child is below 7 give them an allowance every day, afterwards give them a weekly allowance. Once they reach 13 they should receive monthly. ",
                    ar:
                      "أنت لا تعطي أطفالك مصروف. من الأن يجب عليك أن تبدأ بذلك امنحهم مصروفاً عادياً، فهذه طريقة ممتازة لتعليم أطفالك قيمة المال والاستقلال ومهارات صنع القرار. إذا كان طفلك أقل من 7 سنوات، أعطهم مصروفاً يوميًا، ثم اعطهم مصروفاً أسبوعيًا فوق 7 سنوات. بمجرد وصولهم إلى 13 يجب أن يتلقوا مصروفاً شهريا."
                  }
                },
                {
                  value: "2.0",
                  text: {
                    default: "I have no children dependant on me",
                    ar: "ليس لدي أطفال يعتمدون عليّ"
                  },
                  tailoredTip: {
                    default: "",
                    ar: ""
                  }
                }
              ]
            }
          ],
          title: {
            default: "Budgeting",
            ar: "المیزانیة"
          }
        }
      ]
    },
    {
      name: "Step2",
      elements: [
        {
          type: "panel",
          name: "pnl-debtsandcc",
          elements: [
            {
              type: "radiogroup",
              name: "dc_q1",
              title: {
                default: "How many credit cards do you have?",
                ar: "كم عدد بطاقات الائتمان لديك؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "4",
                  text: {
                    default: "None",
                    ar: "ليس لدي بطاقات ائتمان"
                  },
                  tailoredTip: {
                    default:
                      "You don't have any credit cards. This is a great position to be in if you are successfully managing your life and expenses without the need for a credit card. If you ever plan to get one, make sure to pay it in full every month and shop around carefully for the card that suits you.   A carefully managed credit card can be useful including for obtaining a positive credit rating and shopping when abroad.  See our guide on credit cards for more.",
                    ar:
                      "ليس لديك أي بطاقات ائتمان. هذا امر جيد في حال أنك نجحت في إدارة حياتك ونفقاتك دون الحاجة إلى بطاقة ائتمان. إذا كنت تخطط للحصول على واحدة، تأكد من دفعها بالكامل كل شهر وتسوّق بعناية للحصول على البطاقة التي تناسبك. عند استخدام بطاقة الائتمان بطريقة سليمة قد تكون مفيدة للتسوق عند السفر وتحسين وضعك الائتماني. انظر دليلنا حول بطاقات الائتمان لتعرف أكثر."
                  }
                },
                {
                  value: "3",
                  text: {
                    default: "1 or 2",
                    ar: "1 أو 2"
                  },
                  tailoredTip: {
                    default:
                      "You have 1 or 2 credit cards. This is a manageable number of credit cards so long as you are using them for good reason. Aim to stay in control of your financial life by paying your credit cards in full on time and avoiding the pitfalls of debt. See our guide on credit cards for more.",
                    ar:
                      "لديك بطاقة ائتمان واحدة أو اثنتين. هذا عدد معقول من بطاقات الائتمان طالما كنت تستخدمها لسبب وجيه. وما دمت تقوم بإدارة حياتك المالية عن طريق دفع بطاقات الائتمان الخاصة بك بالكامل في الوقت المحدد وتجنب مخاطر الديون. انظر دليلنا حول بطاقات الائتمان لتعرف أكثر."
                  }
                },
                {
                  value: "2",
                  text: {
                    default: "3 or 4",
                    ar: "3 أو 4"
                  },
                  tailoredTip: {
                    default:
                      "You have 3 or 4 credit cards. Ensure you are paying each card in full every month and aim to reduce your credit cards down to a maximum of 2. This will make your payments easier to manage and help you stay in control of your financial life. See our guide on credit cards for more.",
                    ar:
                      "لديك 3 أو 4 بطاقات ائتمان. تأكد من أنك تدفع كل بطاقة بشكل كامل كل شهر وتهدف إلى تقليل عدد بطاقات الائتمان الخاصة بك إلى حد أقصى 2. وهذا سيجعل إدارة المدفوعات الخاصة بك أسهل ويساعدك على إبقاء حياتك المالية تحت السيطرة. انظر دليلنا على بطاقات الائتمان لتعرف أكثر."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "More than 4",
                    ar: "أكثر من 4"
                  },
                  tailoredTip: {
                    default:
                      "You have more than 4 credit cards. Ensure you are paying each card in full every month and aim to reduce your credit cards down to a maximum of 2. This will make your payments easier to manage and help you stay in control of your financial life. See our guide on credit cards for more.",
                    ar:
                      "لديك أكثر من 4 بطاقات ائتمانية. تأكد من أنك تدفع كل بطاقة بشكل كامل كل شهر وتهدف إلى تقليل عدد بطاقات الائتمان الخاصة بك إلى حد أقصى 2. هذا سيجعل إدارة مدفوعاتك أسهل ويساعدك على إبقاء حياتك المالية تحت السيطرة. انظر دليلنا على بطاقات الائتمان لتعرف أكثر"
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "dc_q2",
              title: {
                default:
                  "On average, what % of your salary goes towards credit and debt payments every month?",
                ar:
                  "في المتوسط، ما النسبة المئوية من راتبك التي يتم انفاقها على صورة دفعات للديون أو دفعات شهرية؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "4",
                  text: {
                    default: "None",
                    ar: "لا شيء"
                  },
                  tailoredTip: {
                    default:
                      "None of your salary goes towards credit and debt payments every month. If you have no outstanding credit or debts, this is an excellent position to be in. Focus on maximizing your regular savings and aim not to let debt payments go above 35% of your salary.",
                    ar:
                      "لا شيء من راتبك يذهب نحو الائتمان ومدفوعات الديون كل شهر. إذا لم يكن لديك رصيد أو ديون معلقة، فأنت في وضع ممتاز. ركز على زيادة مدخراتك العادية واعمل على عدم ترك دفعات الديون تتجاوز 35٪ من راتبك."
                  }
                },
                {
                  value: "3",
                  text: {
                    default: "1-35%",
                    ar: "1-35%"
                  },
                  tailoredTip: {
                    default:
                      "35% or less of your salary goes towards credit and debt payments monthly. This should give you space to cover expenses and save regularly towards your financial goals. Focus on maximizing your regular savings and aim not to let debt payments go above 35% of your salary.",
                    ar:
                      "35٪ أو أقل من راتبك يذهب نحو الائتمان وسداد الديون شهريا. هذا من شأنه أن يمنحك مساحة لتغطية النفقات والادخار بشكل منتظم لتحقيق أهدافك المالية. ركّز على زيادة مدخراتك واحرص على عدم ترك دفعات الديون تتجاوز 35٪ من راتبك."
                  }
                },
                {
                  value: "2",
                  text: {
                    default: "36-50%",
                    ar: "36-50%"
                  },
                  tailoredTip: {
                    default:
                      "36-50% of your salary goes towards credit and debt payments monthly. In order to keep your obligations under control and be in a strong financial position, set a target of having your debt payments below the recommended amount of 35%. Start by controlling your monthly expenses and increasing your savings by setting a monthly budget.",
                    ar:
                      "36-50 ٪ من راتبك يذهب نحو الائتمان وسداد الديون شهريا. من أجل الحفاظ على التزاماتك تحت السيطرة وأن تكون في وضع مالي قوي، قم بوضع خطة لخفض دفعاتك أقل من 35٪. ابدأ بالتحكم في النفقات الشهرية وزيادة مدخراتك عن طريق تحديد ميزانية شهرية."
                  }
                },
                {
                  value: "1",
                  text: {
                    default: "51-65%",
                    ar: "51-65%"
                  },
                  tailoredTip: {
                    default:
                      "51-65% of your salary goes towards credit and debt payments monthly. You are in danger. In order to keep your obligations under control and be in a strong financial position, set a target of having your debt payments below the recommended amount of 35%. Start by working on controlling your monthly expenses and increase your savings potential by setting a monthly budget.",
                    ar:
                      "51-65 ٪ من راتبك يذهب نحو الائتمان وسداد الديون شهريا. أنت في خطر. من أجل الحفاظ على التزاماتك تحت السيطرة وحتى تكون في وضع مالي جيد، قم بوضع خطة لخفض دفعاتك لتصبح أقل من المبلغ الموصى به وهو 35٪. ابدأ بالعمل على التحكم في النفقات الشهرية وزيادة إمكانات التوفير عن طريق وضع ميزانية شهرية."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "More than 65%",
                    ar: "أكثر من %65"
                  },
                  tailoredTip: {
                    default:
                      "Over 65% of your salary goes towards credit and debt payments monthly. You are in danger. At this moment your financial life and any potential for growth is occupied by your debts. Set a target of having your debt payments below the recommended amount of 35% of your salary. Start by reducing your monthly expenses and increasing your savings by setting a monthly budget.",
                    ar:
                      "أكثر من 65 ٪ من راتبك يذهب إلى الائتمان والدفعات الشهرية. أنت في خطر. في هذه الحالة، فإن حياتك المالية وجميع إمكانيات التطور المالي تلغيها ديونك. احرص على تقليل المدفوعات الخاصة بك إلى أقل من المبلغ الموصي به وهو 35 ٪ من راتبك. ابدأ بتخفيض النفقات الشهرية وزيادة مدخراتك عن طريق تحديد ميزانية شهرية."
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "dc_q3",
              title: {
                default: "How do you feel about paying your monthly bills?",
                ar: "ما هو شعورك حيال سداد فواتيرك الشهرية؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "4",
                  text: {
                    default: "Very comfortable",
                    ar: "مرتاح جدا"
                  },
                  tailoredTip: {
                    default:
                      "You feel in control of your monthly bills which displays you are confident about your financial management. Ensure your financial security and success by setting a budget, saving regularly and setting some financial goals.",
                    ar:
                      "لديك قدرة على التحكم في فواتيرك الشهرية وهو ما يظهر أنك قادر على إدارة حياتك المالية. تأكد من أن وضعك المالي سيكون منظماً من خلال تحديد الميزانية، والادخار بشكل منتظم وتحقيق بعض الأهداف المالية."
                  }
                },
                {
                  value: "2",
                  text: {
                    default: "Normally fine",
                    ar: "الأمر على ما يرام"
                  },
                  tailoredTip: {
                    default:
                      "You normally feel fine with your monthly bills. This shows you have a general confidence with your financial management. Be sure to set a monthly budget and manage expenses at the times of year when your bills become harder to manage. ",
                    ar:
                      "عادة ما تشعر بالرضا عن فواتيرك الشهرية. هذا يدل على أن لديك ثقة عامة مع إداراتك المالية. تأكد من وضع ميزانية شهرية وإدارة النفقات في كافة أوقات السنة خاصة عندما تصبح إدارة الفواتير أصعب."
                  }
                },
                {
                  value: "1",
                  text: {
                    default: "Some months are a struggle",
                    ar: "هناك بعض الصعوبات في بعض الأشهر"
                  },
                  tailoredTip: {
                    default:
                      "You feel that some months are a struggle with your monthly bills. By taking some simple steps you can begin on the path to financial success. Start to learn your habits and control your expenses by setting a monthly budget, this will make your costs manageable and improve how much you can contribute towards paying your bills.",
                    ar:
                      "تشعر في بعض الأشهر بصعوبة في إدارة فواتيرك الشهرية. من خلال اتخاذ بعض الخطوات البسيطة يمكنك البدء في طريق النجاح المالي. ابدأ بمراقبة عاداتك والتحكم في نفقاتك من خلال تحديد ميزانية شهرية، وهذا سيجعل تكاليفك قابلة للتحكم وتحسين قدرتك على تسديد فواتيرك."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "Every month is a struggle",
                    ar: "صعبة شهرياً"
                  },
                  tailoredTip: {
                    default:
                      "Every month you find paying your monthly bills a struggle. Take some simple steps to begin on the path to financial success. Start by learning your habits and controlling your expenses with a monthly budget, this will make your costs manageable and improve how much you can contribute towards paying your bills.",
                    ar:
                      "كل شهر تجد صعوبة في دفع الفواتير الشهرية. اتخذ بعض الخطوات البسيطة للبدء في تحسين حياتك المالية. ابدأ بتعلم عاداتك والتحكم في نفقاتك بميزانية شهرية، وهذا سيجعل تكاليفك قابلة للإدارة وتحسّن مقدار ما يمكنك المساهمة به في تسديد فواتيرك."
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "dc_q4",
              title: {
                default: "Do you feel your debts are under control?",
                ar: "ھل تشعر أن دیونك تحت السیطرة؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "4",
                  text: {
                    default: "I have no debts",
                    ar: "ليس لدي ديون"
                  },
                  tailoredTip: {
                    default:
                      "You have no debts. To have no obligations is a good position from which to achieve financial success. Be sure to plan well before taking on any new debts, ensuring they are for good reason and will impact you positively in the future.",
                    ar:
                      "لا يوجد لديك ديون. عدم وجود التزامات هو وضع مالي جيد يمكن من خلاله تحقيق أهدافك المالية. تأكد من التخطيط الجيد قبل التعامل مع أي ديون جديدة، وتأكد أنها لسبب وجيه وسوف تؤثر عليك بشكل إيجابي في المستقبل قبل أن تلتزم بها."
                  }
                },
                {
                  value: "4.0",
                  text: {
                    default: "Yes, I make all my obligations every month",
                    ar: "نعم ، أقوم بتسديد كل التزاماتي شهريا"
                  },
                  tailoredTip: {
                    default:
                      "You make any and all debt obligations every month. It is very important to be in control of your debt payments and you are achieving this. Aim not to spend more than 35% of your monthly salary on debt and be sure that any new debts you take on are for good reason.",
                    ar:
                      "أنت تسدد جميع التزاماتك من الديون كل شهر. من المهم جدا أن تكون مسيطرا على دفعات الديون الخاصة بك. احرص على عدم انفاق أكثر من 35٪ من راتبك الشهري على الديون وتأكد من أن أي ديون جديدة ستتعامل معها هي لسبب وجيه."
                  }
                },
                {
                  value: "2",
                  text: {
                    default: "Usually, but some months are a struggle",
                    ar: "عادة، ولكن هناك بعض الصعوبات أحياناً"
                  },
                  tailoredTip: {
                    default:
                      "Some months are a struggle when meeting your debt obligations. It is important to start planning now to make your debts manageable. Follow our guides and start by setting a monthly budget to improve your ability to clear debts and then set a plan for clearing your debt, looking at the options available to you including settlement, restructuring and consolidation.",
                    ar:
                      "بعض الأشهر لديك تحديات عند تسديد الديون الخاصة بك. من المهم البدء بالتخطيط الآن لجعل ديونك قابلة للإدارة. اتبع إرشاداتنا وابدأ بوضع ميزانية شهرية لتحسين قدرتك على التخلص من الديون ثم ضع خطة لتسديد الديون الخاصة بك، بالنظر إلى الخيارات المتاحة لك بما في ذلك التسوية وإعادة الهيكلة والدمج."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "No, they are rising every month",
                    ar: "لا، هي تزداد شهرياً"
                  },
                  tailoredTip: {
                    default:
                      "Your debts are rising every month. You are in danger. By acting now you can start to take control and make your payments manageable. Follow our guides on Managing Debt and start by setting a monthly budget to improve your ability to clear debts and then set a plan for clearing your debts, looking at the options available to you including settlement, restructuring and consolidation.",
                    ar:
                      "ديونك ترتفع كل شهر. أنت في خطر. من خلال العمل الآن يمكنك البدء في السيطرة على حياتك المالية لجعل الدفاعات الخاصة بك قابلة للإدارة. اتبع دليلنا وابدأ بوضع ميزانية شهرية لتحسين قدرتك على سداد الديون ثم ضع خطة لتصفية ديونك، مع النظر في الخيارات المتاحة لك بما في ذلك التسوية وإعادة الهيكلة والتوحيد."
                  }
                }
              ]
            }
          ],
          title: {
            default: "Debts and Credit Cards",
            ar: "الدیون وبطاقات الائتمان"
          }
        }
      ]
    },
    {
      name: "Step3",
      elements: [
        {
          type: "panel",
          name: "pnl-savingsandinvst",
          elements: [
            {
              type: "radiogroup",
              name: "si_q1",
              title: {
                default:
                  "Do you have a financial plan and financial goals in place?",
                ar: "هل لديك خطة مالية وأهداف مالية مطبقة؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "4",
                  text: {
                    default:
                      "Yes, I have set timelines and I am saving towards them",
                    ar: "نعم، لقد وضعت خطة زمنية وأدخر من أجلها"
                  },
                  tailoredTip: {
                    default:
                      "You have timelines for your financial goals and you are saving towards them. You are on the path to financial success. Make sure your goals are SMART and be sure to always reviewing your goals to ensure they are evolving along with your life.",
                    ar:
                      "لديك جداول زمنية لأهدافك المالية وأنت تدخر لها. أنت على الطريق إلى النجاح المالي. راجع أهدافك وتأكد من أنها ذكية وقم بمراجعتها دائمًا للتأكد من أنها تتطور جنبًا إلى جنب مع حياتك."
                  }
                },
                {
                  value: "3",
                  text: {
                    default: "I have goals but no plan for them",
                    ar: "لدي أهداف لكن ليس لدي خطة"
                  },
                  tailoredTip: {
                    default:
                      "You have financial goals but no plans for achieving them. Get started on the journey to achieve your goals by setting realistic timelines and making regular savings by setting a monthly budget. ",
                    ar:
                      "لديك أهداف مالية ولكن لا توجد خطة لتحقيقها. ابدأ في رحلة تحقيق أهدافك من خلال وضع جداول زمنية واقعية واعمل على الادخار المنتظم من خلال وضع ميزانية شهرية."
                  }
                },
                {
                  value: "2",
                  text: {
                    default: "I have ideas, but nothing defined",
                    ar: "لدي أفكار ، لكن لا شيء محدد"
                  },
                  tailoredTip: {
                    default:
                      "You have ideas for what you want to achieve in life but no set plans for achieving them. Get started on the journey by setting and achieving goals with realistic timelines and making regular savings by setting a monthly budget.",
                    ar:
                      "لديك أفكار لما تريد تحقيقه في الحياة ولكن لا توجد خطة محددة لتحقيقها. ابدأ في رحلة تحقيق أهدافك من خلال وضع جداول زمنية واقعية والعمل على الادخار المنتظم من خلال وضع ميزانية شهرية."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "No",
                    ar: "لا"
                  },
                  tailoredTip: {
                    default:
                      "You have no financial plan or goals. Setting financial targets will give direction to your life, allowing you to grow your wealth and giving you financial security. Get started on the journey by setting and achieving goals with realistic timelines and making regular savings by setting a monthly budget.",
                    ar:
                      "ليس لديك خطة أو أهداف مالية. وضع أهداف مالية سيساعد في تنظيم حياتك، ما يسمح لك بتنمية ثروتك ومنحك الأمن المالي. ابدأ في الرحلة من خلال تحديد الأهداف وتحقيقها باستخدام جداول زمنية واقعية والعمل على الادخار المنتظم من خلال وضع ميزانية شهرية."
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "si_q2",
              title: {
                default: "Do you save every month?",
                ar: "هل تدخر كل شهر؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "4",
                  text: {
                    default:
                      "Yes, a set amount monthly -more than 30% of income",
                    ar: "نعم ، مبلغ محدد شهريًا - أكثر من 30٪ من الدخل"
                  },
                  tailoredTip: {
                    default:
                      "You can save more than 30% of your income every month. Regular savings are vital in achieving financial success. Make sure your savings are being diversely invested and going towards some well defined financial goals.",
                    ar:
                      "يمكنك توفير أكثر من 30 ٪ من دخلك كل شهر. التوفير المنتظم أمر حيوي لتحقيق النجاح المالي. تأكد من أن مدخراتك يتم استثمارها بشكل متنوع ويساهم في الوصول إلى الأهداف المالية المحددة."
                  }
                },
                {
                  value: "4.0",
                  text: {
                    default:
                      "Yes, a set amount monthly – between 15-30% of income",
                    ar: "نعم ، مبلغ محدد شهريًا - بين 15-30٪ من الدخل"
                  },
                  tailoredTip: {
                    default:
                      "You can save between 15-30% of your income every month. Regular savings are vital in achieving financial success. Aim to increase how much you can save by reducing your expenses where possible. Make sure your savings are being diversely invested and going towards some well defined financial goals.",
                    ar:
                      "يمكنك توفير بين 15-30٪ من دخلك كل شهر. التوفير المنتظم أمر حيوي في تحقيق النجاح المالي. اعمل على زيادة المبلغ الذي يمكنك توفيره من خلال تقليل نفقاتك قدر الإمكان. تأكد من أن مدخراتك يتم استثمارها بشكل متنوع وبما يساهم في تحقيق الأهداف المالية المحددة."
                  }
                },
                {
                  value: "4.00",
                  text: {
                    default:
                      "Yes, a set amount monthly –less than 15% of income",
                    ar: "نعم ، مبلغ محدد شهريًا - أقل من 15٪ من الدخل"
                  },
                  tailoredTip: {
                    default:
                      "You can save less than 15% of your income every month. Regular savings are vital in achieving financial success. Aim to increase how much you can save by reducing your expenses where possible. Make sure your savings are being diversely invested and going towards some well defined financial goals.",
                    ar:
                      "يمكنك توفير أقل من 15 ٪ من دخلك كل شهر. التوفير المنتظم أمر حيوي في تحقيق النجاح المالي. اعمل على زيادة المبلغ الذي يمكنك توفيره من خلال تقليل نفقاتك قدر الإمكان. تأكد من أن مدخراتك يتم استثمارها بشكل متنوع يساهم في تحقيق الأهداف المالية المحددة."
                  }
                },
                {
                  value: "2",
                  text: {
                    default: "Yes, different amounts every month",
                    ar: "نعم ، مبالغ مختلفة كل شهر"
                  },
                  tailoredTip: {
                    default:
                      "You save every month, but the amount varies. Regular savings are vital in achieving financial success. Aim to save a set amount every month and increase how much you can save by reducing your expenses wherever possible. Make sure your savings are being diversely invested and going towards some well defined financial goals.",
                    ar:
                      "يمكنك توفير مبالغ متفاوتة كل شهر، ولكن يختلف المبلغ. التوفير المنتظم أمر حيوي في تحقيق النجاح المالي. اعمل على ادخار مبلغ محدد كل شهر وزيادة المبلغ الذي يمكنك توفيره عن طريق خفض النفقات الخاصة بك حيثما كان ذلك ممكنا. تأكد من أن مدخراتك يتم استثمارها بشكل متنوع ويساهم في تحقيق الأهداف المالية المحددة."
                  }
                },
                {
                  value: "1",
                  text: {
                    default: "When I can",
                    ar: "عندما استطیع"
                  },
                  tailoredTip: {
                    default:
                      "You save when you can. Aim to achieve regular savings by saving a set amount at the beginning of every month. Increase how much you can save by reducing your expenses wherever possible. Make sure your savings are being diversely invested and going towards some well defined financial goals.",
                    ar:
                      "يمكنك التوفير متى استطعت. اعمل على التوفير بشكل منتظم عن طريق اقتطاع مبلغ معين في بداية كل شهر. يمكنك زيادة المبلغ الذي يمكنك توفيره من خلال تقليل نفقاتك كلما أمكن ذلك. تأكد من أن مدخراتك يتم استثمارها بشكل ويساهم في تحقيق الأهداف المالية المحددة."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "Never",
                    ar: "لا"
                  },
                  tailoredTip: {
                    default:
                      "You never save. Once you have a plan for clearing any outstanding debts, aim to achieve regular savings, which is vital in achieving financial success. Aim to achieve regular savings by saving a set amount at the beginning of every month and increase how much you can save by reducing your expenses wherever possible. Make sure your savings are being diversely invested and going towards some well defined financial goals.",
                    ar:
                      "أنت لا توفر أبداً. أنت في خطر. بمجرد أن يكون لديك خطة لتصفية أي ديون معلقة، اعمل على تحقيق توفير منتظم، وهو أمر حيوي في تحقيق النجاح المالي. اسعى إلى تحقيق توفير منتظم عن طريق اقتطاع مبلغ معين في بداية كل شهر وزيادة المبلغ الذي يمكنك توفيره عن طريق خفض النفقات الخاصة بك حيثما كان ذلك ممكنا. تأكد من أن مدخراتك يتم استثمارها بشكل متنوع مخصصة نحو بعض الأهداف المالية المحددة."
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "si_q3",
              title: {
                default: "Do you have a saving account for your children?",
                ar: "هل لديك حساب توفير لأطفالك؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "4",
                  text: {
                    default: "Yes, I contribute to it every month",
                    ar: "نعم ، أساهم فيه كل شهر"
                  },
                  tailoredTip: {
                    default:
                      "You contribute to a saving account for your children every month. This will assist greatly in saving for their long term future. Ensure you have set SMART financial goals that will secure their future.",
                    ar:
                      "تساهم في حساب توفير لأطفالك كل شهر. هذه طريقة جيدة لبدء الادخار لمستقبلهم على المدى الطويل. تأكد من أنك قمت بتحديد أهداف مالية ذكية من شأنها أن تفيد مستقبلهم."
                  }
                },
                {
                  value: "2",
                  text: {
                    default: "Yes, I add what I can every month",
                    ar: "نعم ، أضف ما أستطيع كل شهر"
                  },
                  tailoredTip: {
                    default:
                      "You contribute to a saving account for your children when you can. It is important that you are saving for their long term future. Aim to save a set amount regularly and ensure you have set SMART financial goals that will secure their future.",
                    ar:
                      "تساهم في حساب توفير لأطفالك عندما تستطيع. من المهم أن تقوم بتأمين مستقبلهم على المدى الطويل. اعمل على توفير مبلغ محدد منتظم وتأكد من وضع أهداف مالية ذكية من شأنها أن تفيد مستقبلهم."
                  }
                },
                {
                  value: "1",
                  text: {
                    default: "No",
                    ar: "لا"
                  },
                  tailoredTip: {
                    default:
                      "You don't contribute to a saving account for your children. Aim to open a saving account, setting realistic goals for their age and start to contribute every month. By saving in advance you can contribute towards a brighter future for your family.",
                    ar:
                      "أنت لا تساهم في حساب توفير لأطفالك. اعمل على فتح حساب توفير، وضع أهداف واقعية تناسب أعمارهم وابدأ في المساهمة فيه كل شهر. من خلال الادخار مقدمًا، سيمكنك ذلك من تأمين مستقبل أكثر إشراقًا لعائلتك."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "I have no dependent children",
                    ar: "ليس لدي أطفال معالين"
                  },
                  tailoredTip: {
                    default: "",
                    ar: ""
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "si_q4",
              title: {
                default:
                  "Do you have an emergency fund (for example to cover 3-6 months expenses)?",
                ar:
                  "هل لديك صندوق للطوارئ (على سبيل المثال لتغطية مصاريف 3-6 أشهر)؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "4",
                  text: {
                    default: "Yes",
                    ar: "نعم"
                  },
                  tailoredTip: {
                    default:
                      "You have an emergency fund in place. This is vital for protection from times of unexpected costs or changes in your life. Be sure your emergency fund is accessible and can cover 3-6 months’ expenses, depending on your liabilities.",
                    ar:
                      "لديك صندوق للطوارئ. هذا ممتاز لحمايتك في الأزمات المالية أو التغييرات غير المتوقعة في حياتك. تأكد من إمكانية الوصول إلى صندوق الطوارئ الخاص بك وأنه يمكن أن يغطي مصروفاتك من 3 إلى 6 أشهر، وفقاً لالتزاماتك المالية."
                  }
                },
                {
                  value: "2",
                  text: {
                    default: "No, but I am working towards one",
                    ar: "لا، لكني أعمل على إنشاء واحد"
                  },
                  tailoredTip: {
                    default:
                      "You are working towards an emergency fund. This is vital for protection from times of unexpected costs or changes in your life. Be sure your emergency fund is accessible and can cover 3-6 months’ expenses, depending on your liabilities.",
                    ar:
                      "أنت تسعى لتأسيس صندوق للطوارئ. هذه طريقة رائعة لحمايتك في أوقات الأزمات المالية أو التغييرات غير المتوقعة في حياتك. تأكد من إمكانية الوصول إلى صندوق الطوارئ الخاص بك وأنه يمكن أن يغطي مصروفاتك من 3 إلى 6 أشهر، وفقاً لالتزاماتك المالية."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "No",
                    ar: "لا"
                  },
                  tailoredTip: {
                    default:
                      "You don't have an emergency fund in place. To provide protection fro, times of unexpected costs or changes in your life, be sure to set one of your financial goals as saving an emergency fund.  This should be enough to cover 3-6 months’ expenses and be kept available in an accessible place.",
                    ar:
                      "ليس لديك صندوق طوارئ. لحمايتك في أوقات الأزمات المالية أو التغييرات غير المتوقعة في حياتك، تأكد من أن تكون أحد أهدافك المالية هي تأسيس صندوق الطوارئ لتغطية نفقات من 3 إلى 6 أشهر."
                  }
                }
              ]
            },
            {
              type: "checkbox",
              name: "si_q5",
              scoretip: [
                {
                  score: 4,
                  tip: {
                    default:
                      "You are investing in 4 or more different areas. Diversification is at the heart of a successful investment strategy. Be sure to check your investments regularly and ensure they remain in line with your financial goals. Always think in the long-term and only invest money you can afford to lose, especially with higher risk investments.",
                    ar:
                      "أنت تستثمر في 4 مجالات مختلفة أو أكثر. التنويع جزء من استراتيجية الاستثمار الناجحة. تأكد من التحقق من استثماراتك بانتظام والتأكد من أنها تتماشى مع أهدافك المالية. فكر دائمًا على المدى الطويل ولا تستثمر إلا الأموال التي يمكنك تحمل خسارتها، خاصةً مع الاستثمارات عالية المخاطر."
                  }
                },
                {
                  score: 3,
                  tip: {
                    default:
                      "You are investing in 3 different areas. Diversification is at the heart of a successful investment strategy, aim to continue to increase the variety of places your money can grow. Be sure to check your investments regularly and ensure they remain in line with your financial goals. Always think in the long-term and only invest money you can afford to lose, especially with higher risk investments.",
                    ar:
                      "أنت تستثمر في 3 مجالات مختلفة. التنويع جزء من استراتيجية الاستثمار الناجحة، اعمل على تنويع مجالات استثماراتك بما يساعد أموالك على النمو . تأكد من التحقق من استثماراتك بانتظام والتأكد من أنها تتماشى مع أهدافك المالية. فكر دائمًا على المدى الطويل ولا تستثمر إلا الأموال التي يمكنك تحمل خسارتها، خاصةً مع الاستثمارات عالية المخاطر."
                  }
                },
                {
                  score: 2,
                  tip: {
                    default:
                      "You are investing in 2 different areas. Diversification is at the heart of a successful investment strategy, aim to increase the variety of places your money can grow. Be sure to check your investments regularly and ensure they remain in line with your financial goals. Always think in the long-term and only invest money you can afford to lose, especially with higher risk investments.",
                    ar:
                      "أنت تستثمر في مجالين مختلفين. التنويع جزء من استراتيجية الاستثمار الناجحة، اعمل على تنويع مجالات استثماراتك بما يساعد أموالك على النمو. تأكد من التحقق من استثماراتك بانتظام والتأكد من أنها تتماشى مع أهدافك المالية. فكر دائمًا على المدى الطويل ولا تستثمر إلا الأموال التي يمكنك تحمل خسارتها، خاصةً مع الاستثمارات عالية المخاطر."
                  }
                },
                {
                  score: 1,
                  tip: {
                    default:
                      "You are investing in 1 area. Diversification is at the heart of a successful investment strategy, aim to increase the variety of places your money can grow. Be sure to check your investments regularly and ensure they remain in line with your financial goals. Always think in the long-term and only invest money you can afford to lose, especially with higher risk investments.",
                    ar:
                      "أنت تستثمر في مجال واحد. التنويع جزء من استراتيجية الاستثمار الناجحة، اعمل على تنويع مجالات استثماراتك بما يساعد أموالك على النمو.  تأكد من التحقق من استثماراتك بانتظام والتأكد من أنها تتماشى مع أهدافك المالية. فكر دائمًا على المدى الطويل ولا تستثمر إلا الأموال التي يمكنك تحمل خسارتها، خاصةً مع الاستثمارات عالية المخاطر."
                  }
                },
                {
                  score: 0,
                  tip: {
                    default:
                      "You are not investing. Investment is at the heart of making your money work for you. Start by building some savings that you can invest in a variety of different places. If you have debts, focus on clearing those first. Be sure to seek advice before you begin investing and ensure your investments remain in line with your financial goals. Always think in the long-term and only invest money you can afford to lose, especially with higher risk investments.",
                    ar:
                      "أنت لا تستثمر. الاستثمار يحقق لك الفائدة من أموالك. ابدأ بادخار بعض الأموال التي يمكنك استثمارها في مجموعة متنوعة من الأماكن المختلفة. إذا كان لديك ديون، ركز على تصفية تلك الديون أولاً. تأكد من الحصول على المشورة قبل البدء في الاستثمار وضمان استمرار استثماراتك بما يتماشى مع أهدافك المالية. فكر دائمًا على المدى الطويل ولا تستثمر إلا الأموال التي يمكنك تحمل خسارتها، خاصةً مع الاستثمارات عالية المخاطر."
                  }
                }
              ],
              title: {
                default:
                  "Please select which of the below areas you are investing in (leave blank if none)",
                ar:
                  "يرجى تحديد أي من المناطق أدناه التي تستثمر فيها (اتركه فارغا إذا لم يكن موجودا)"
              },
              isRequired: false,
              choices: [
                {
                  value: "1",
                  text: {
                    default: "Bonds",
                    ar: "السندات"
                  }
                },
                {
                  value: "2",
                  text: {
                    default: "Deposits",
                    ar: "الودائع"
                  }
                },
                {
                  value: "3",
                  text: {
                    default: "Stocks",
                    ar: "الأسھم"
                  }
                },
                {
                  value: "4",
                  text: {
                    default: "Investment Funds",
                    ar: "صنادیق الاستثمار"
                  }
                },
                {
                  value: "5",
                  text: {
                    default: "Annuities (including Pensions)",
                    ar: "المعاشات (بما في ذلك الراتب التقاعدي)"
                  }
                },
                {
                  value: "6",
                  text: {
                    default: "Saving Accounts",
                    ar: "حسابات التوفير"
                  }
                },
                {
                  value: "7",
                  text: {
                    default: "Currencies (FOREX)",
                    ar: "العملات (الفوركس)"
                  }
                },
                {
                  value: "8",
                  text: {
                    default: "Real Estate (Property)",
                    ar: "العقارات"
                  }
                },
                {
                  value: "9",
                  text: {
                    default: "Commodities (including Gold)",
                    ar: "السلع (بما في ذلك الذھب)"
                  }
                },
                {
                  value: "10",
                  text: {
                    default: "Investing in small business",
                    ar: "الاستثمار في الأعمال التجاریة الصغیرة"
                  }
                },
                {
                  value: "11",
                  text: {
                    default: "Other",
                    ar: "آخر"
                  }
                }
              ]
            }
          ],
          title: {
            default: "Savings and Investment",
            ar: "الادخار والاستثمار"
          }
        }
      ]
    },
    {
      name: "Step 4",
      elements: [
        {
          type: "panel",
          name: "pnl-insurance",
          elements: [
            {
              type: "radiogroup",
              name: "ins_q1",
              title: {
                default:
                  "Do you have life or takaful insurance? (to protect your income)",
                ar: "هل لديك تأمين على الحياة أو تأمين تكافل؟ (لحماية الدخل)"
              },
              isRequired: true,
              choices: [
                {
                  value: "2",
                  text: {
                    default: "Yes",
                    ar: "نعم"
                  },
                  tailoredTip: {
                    default:
                      "You have takaful or life insurance. You have some protection in case of situations where you can no longer provide income to your family. Be sure to review your insurance plan regularly and ensure it fits your changing needs.",
                    ar:
                      "لديك تأمين تكافل أو تأمين على الحياة. لديك بعض الحماية في حالة المواقف التي لا يمكنك فيها توفير دخل لعائلتك. تأكد من مراجعة خطة التأمين الخاصة بك بانتظام وتأكد من أنها تناسب احتياجاتك المتغيرة."
                  }
                },
                {
                  value: "0.0",
                  text: {
                    default: "No",
                    ar: "لا"
                  },
                  tailoredTip: {
                    default:
                      "You have no takaful or life insurance. Consider signing up for a plan as security to protect yourself and your family from situations where you are unable to generate income, especially if you are responsible for others. Be sure to research and shop around for the right plan and always consult an expert before proceeding.",
                    ar:
                      "لا يوجد لديك تأمين تكافل . فكر في الاشتراك في خطة تأمين كضمان لحماية نفسك وعائلتك من المواقف التي لا يمكنك فيها توفير الدخل، خاصة إذا كنت مسؤولاً عن الآخرين. تأكد من البحث والتوصل للخطة المناسبة واستشارة خبير دائمًا قبل أن تبدأ."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "Don't Know",
                    ar: "لا اعرف"
                  },
                  tailoredTip: {
                    default:
                      "You don't know if you have takaful or life insurance. Take time to check for plans you might be signed up for (including with your employer) with takaful or life insurance. If not, consider signing up for a plan as security to protect yourself and your family from situations where you are unable to generate income, especially if you are responsible for others. Be sure to research and shop around for the right plan and always consult an expert before proceeding.",
                    ar:
                      "لا تعرف ما إذا كان لديك تأمين تكافل. تأكد من خطط التأمين التي وقعت عليها (بما في ذلك التأمين الذي يوفره مكان عملك). إذا لم يكن لديك تأمين تكافل، فكر في الاشتراك في خطة تأمين كضمان لحماية نفسك وعائلتك من المواقف التي لا يمكنك فيها إيجاد الدخل، خاصة إذا كنت مسؤولاً عن الآخرين. تأكد من البحث والتوصل للخطة المناسبة واستشارة خبير دائمًا قبل المتابعة."
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "ins_q2",
              title: {
                default:
                  "Do you invest with insurance such as life or takaful insurance?",
                ar: "ھل لدیك تأمین على الحیاة أو تأمین تكافل؟ (لحمایة الدخل)"
              },
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: {
                    default: "Yes",
                    ar: "نعم"
                  },
                  tailoredTip: {
                    default:
                      "Your life or takaful insurance has an investment component. This can bring additional financial benefits for your policies, including a potential return on your savings as well as standard coverage.",
                    ar:
                      "إن التأمين التكافلي هو منتج استثماري أيضا. يمكن أن يحقق ذلك فوائد مالية إضافية في حقيبتك الاستثمارية، بما في ذلك العائد المحتمل لاستثماراتك بالإضافة إلى التغطية التأمينية."
                  }
                },
                {
                  value: "0.0",
                  text: {
                    default: "No",
                    ar: "لا"
                  },
                  tailoredTip: {
                    default:
                      "You don't invest with life or takaful insurance. When looking for an insurance policy, consider the benefits of taking one with an investment component. This can bring additional financial benefits for your policies, including a potential return on your savings as well as standard coverage.",
                    ar:
                      "أنت لا تستثمر في تأمين تكافل. عند البحث عن خطة تأمين، ضع في اعتبارك فوائد أخذ واحدة مع الجزء الاستثماري. يمكن أن يحقق ذلك فوائد مالية إضافية لك ، بما في ذلك العائد المحتمل لاستثماراتك بالإضافة إلى التغطية التأمينية."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "Don't Know",
                    ar: "لا اعرف"
                  },
                  tailoredTip: {
                    default:
                      "You don't know if you invest with your life or takaful insurance. Check your policies to see if they have elements of investment. This can bring additional financial benefits for your policies, including a potential return on your savings as well as standard coverage.",
                    ar:
                      "أنت لا تعرف ما إذا كنت تستثمر في تأمين الحياة أو تأمين تكافل. تحقق من خطة التأمين الخاصة بك لمعرفة ما إذا كانت تحتوي على جزء للاستثمار. يمكن أن يحقق ذلك فوائد مالية إضافية لك ، بما في ذلك العائد المحتمل لاستثماراتك بالإضافة إلى التغطية التأمينية."
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "ins_q3",
              title: {
                default:
                  " Do you have home contents insurance? (to cover your possessions in event of loss or damage)",
                ar:
                  "هل لديك تأمين على محتويات المنزل؟ (لتغطية ممتلكاتك في حالة الفقد أو التلف)"
              },
              isRequired: true,
              choices: [
                {
                  value: "2",
                  text: {
                    default: "Yes",
                    ar: "نعم"
                  },
                  tailoredTip: {
                    default:
                      "You have home contents insurance. This is a great way to cover you financially from unexpected, expensive occurrences such as theft, fire or water damage.",
                    ar:
                      "لديك تأمين على محتويات المنزل. هذه طريقة رائعة لتغطيتك مالياً من الحوادث غير المتوقعة والمكلفة مثل السرقة أو الحريق أو أضرار المياه."
                  }
                },
                {
                  value: "0.0",
                  text: {
                    default: "No",
                    ar: "لا"
                  },
                  tailoredTip: {
                    default:
                      "You don't have home contents insurance. Consider this as a way to cover you financially from any unexpected occurrences such as theft, fire or water damage.",
                    ar:
                      "ليس لديك تأمين على محتويات المنزل. فكر في ذلك كطريقة مثلى لتغطيتك مالياً من أي حوادث غير متوقعة مثل السرقة أو الحريق أو أضرار المياه."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "Don't Know",
                    ar: "لا اعرف"
                  },
                  tailoredTip: {
                    default:
                      "You don't know if you have home contents insurance. Check with your insurance company to see if your home contents are protected. If not, consider this as a way to cover you financially from any unexpected occurrences such as theft, fire or water damage.",
                    ar:
                      "لا تعرف ما إذا كان لديك تأمين على محتويات المنزل. تحقق مع شركة التأمين الخاصة بك لمعرفة ما إذا كانت محتويات منزلك محمية. إذا لم يكن الأمر كذلك، فكر في ذلك كطريقة لتغطيتك مالياً من أي حوادث غير متوقعة مثل السرقة أو الحريق أو ضرر المياه."
                  }
                }
              ]
            }
          ],
          title: {
            default: "Insurance",
            ar: "تأمین"
          }
        }
      ]
    },
    {
      name: "Step 5",
      elements: [
        {
          type: "panel",
          name: "pnl-retirement",
          elements: [
            {
              type: "radiogroup",
              name: "rt_q1",
              title: {
                default:
                  "Would you like to maintain the same standard of living when you retire?",
                ar: "هل ترغب في الحفاظ على نفس مستوى المعيشة عند التقاعد؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "3",
                  text: {
                    default: "Yes, I have a retirement plan in place",
                    ar: "نعم ، لدي خطة للتقاعد"
                  },
                  tailoredTip: {
                    default:
                      "You have a retirement plan in place. Make sure you have financial goals that work alongside your retirement plans. Review your situation regularly so your retirement plans continue to fit with your lifestyle and long term aims.",
                    ar:
                      "لديك خطة التقاعد. تأكد من أن لديك أهدافًا مالية تعمل جنبًا إلى جنب مع خطط التقاعد الخاصة بك. قم بمراجعة وضعك المالي بانتظام حتى تكون خطة التقاعد مناسبة لأسلوب حياتك وأهدافك على المدى الطويل."
                  }
                },
                {
                  value: "2",
                  text: {
                    default: "Yes, I think about my needs but no plan yet",
                    ar: "نعم ، أفكر في احتياجاتي ولكن ليس هناك خطة بعد"
                  },
                  tailoredTip: {
                    default:
                      "You have thought about a retirement plan but have nothing in place. Start by planning for your future and how your lifestyle will change when retiring, then create some financial goals based on your timeline. The earlier you start the better! Check our Guide on Retirement Planning to get started.",
                    ar:
                      "لقد فكرت في خطة تقاعد ولكن ليس لديك شيء في مكانه. ابدأ بالتخطيط لمستقبلك وكيف سيتغير نمط حياتك عند التقاعد، ثم قم بوضع بعض الأهداف المالية استنادًا إلى جدولك الزمني. من الأفضل أن تبدأ مبكرا بالتخطيط! تحقق من دليل تخطيط التقاعد للبدء."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "No or I have never thought about it",
                    ar: "لا أو لم أفكر في ذلك"
                  },
                  tailoredTip: {
                    default:
                      "You have never considered planning for your retirement. You may already contribute towards a pension, however would this be enough to sustain your lifestyle when you retire? Start by planning for your future and how your lifestyle will change when retiring, then create some financial goals based on your timeline. The earlier you start the better! Check our Guide on Retirement Planning to get started.",
                    ar:
                      "لم تفكر أبدًا في التخطيط لتقاعدك. أنت ربما تساهم بالفعل في نظام معاش تقاعدي، لكن هل يكفي ذلك للحفاظ على نمط حياتك عند التقاعد؟ ابدأ بالتخطيط لمستقبلك وكيف سيتغير نمط حياتك عند التقاعد، ثم قم بوضع بعض الأهداف المالية استنادًا إلى جدولك الزمني. من الأفضل أن تبدأ مبكرا بالتخطيط! تحقق من دليل تخطيط التقاعد للبدء."
                  }
                },
                {
                  value: "8",
                  text: {
                    default: "I am already retired",
                    ar: "أنا متقاعد بالفعل"
                  },
                  tailoredTip: {
                    default: "",
                    ar: ""
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "rt_q2",
              title: {
                default: "Does your work provide you with a pension?",
                ar: "هل يوفر لك عملك معاشًا تقاعديًا؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "2",
                  text: {
                    default: "Yes",
                    ar: "نعم"
                  },
                  tailoredTip: {
                    default:
                      "Your work is providing you with a pension plan, this will help with an income and adjust to life after retirement. Check to find out the policy of your plan, including what you will earn after retirement and any options for additional contributions or private pension plans.",
                    ar:
                      "يوفر لك عملك خطة للمعاشات التقاعدية، وهذا سوف يوفر لك دخلاً ويجعل من السهل التكيف مع متطلبات الحياة بعد التقاعد. تحقق لمعرفة نوع خطة المعاشات التقاعدية، بما في ذلك ما سوف تكسبه بعد التقاعد وأي خيارات لمساهمات إضافية."
                  }
                },
                {
                  value: "0.0",
                  text: {
                    default: "No",
                    ar: "لا"
                  },
                  tailoredTip: {
                    default:
                      "You do not have a pension through work. If you are not already, look into your options for saving and investing for your retirement, including contributing towards a private pension plan.",
                    ar:
                      "لن يكون لديك معاش تقاعدي من خلال العمل. ابحث في خياراتك عن الادخار والاستثمار للتقاعد الخاص بك، بما في ذلك المساهمة في خطة معاشات تقاعدية خاصة."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "Don’t Know",
                    ar: "لا اعرف"
                  },
                  tailoredTip: {
                    default:
                      "You don't know if your work is providing you with a pension plan. Find out if they do and what their policy is on contributing towards your retirement. Look into your options for saving and investing for your retirement, including contributing towards a private pension plan.",
                    ar:
                      "لا تعرف ما إذا كان عملك يوفر لك خطة معاشات تقاعدية. معرفة ما إذا كانوا يفعلون وما هي خطتهم ربما قد يساهم في معاشك التقاعدي. ابحث في خياراتك للادخار والاستثمار للتقاعد الخاص بك، بما في ذلك المساهمة في خطة المعاشات التقاعدية الخاصة."
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "rt_q3",
              title: {
                default:
                  "Do you personally contribute towards your retirement? (pension or other long term plan)",
                ar: "هل تساهم شخصيًا في تقاعدك؟ (معاش أو خطة طويلة الأجل)"
              },
              isRequired: true,
              choices: [
                {
                  value: "3",
                  text: {
                    default: "Yes",
                    ar: "نعم"
                  },
                  tailoredTip: {
                    default:
                      "You personally contribute to your retirement. It is important that you are planning ahead for a time when your income will change. Be sure to set some clear, defined retirement goals.",
                    ar:
                      "أنت شخصيا تخطط لتقاعدك. من الرائع أن تكون قد بدأت التخطيط للمستقبل في وقت سيتغير فيه دخلك. تأكد من وضع أهداف واضحة ومحددة للتقاعد."
                  }
                },
                {
                  value: "0.0",
                  text: {
                    default: "No",
                    ar: "لا"
                  },
                  tailoredTip: {
                    default:
                      "You are not personally contributing to your retirement. Even if your employer is providing a pension, make sure to start planning and saving with some clear, defined retirement goals.",
                    ar:
                      "أنت لا تخطط لتقاعدك. حتى إذا كان صاحب العمل الخاص بك يقدم معاشًا تقاعديًا، تأكد من البدء في التخطيط والادخار تجاه أهداف للتقاعد واضحة ومحددة."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "Don’t Know",
                    ar: "لا اعرف"
                  },
                  tailoredTip: {
                    default:
                      "You don't know if you are contributing towards a pension plan. Check any policies you are signed up for and find out if they will pay out on your retirement. Start planning and saving with some clear, defined retirement goals.",
                    ar:
                      "لا تعرف ما إذا كان لديك خطة للتقاعد. تحقق من أي خطة مالية قد قمت بالتسجيل بها لمعرفة ما إذا كانت ستدفع للتقاعد الخاص بك. تأكد من البدء في التخطيط والادخار تجاه أهداف للتقاعد واضحة ومحددة."
                  }
                }
              ]
            }
          ],
          title: {
            default: "Retirement",
            ar: "تقاعد"
          }
        }
      ]
    },
    {
      name: "Step6",
      elements: [
        {
          type: "panel",
          name: "pnl-finquiz",
          elements: [
            {
              type: "radiogroup",
              name: "fin_q1",
              title: {
                default:
                  "If you save and invest AED 1,000 every month with 10% annual compound interest, how much would it be after 20 years?",
                ar:
                  "إذا قمت بادخار 1000 درهم شهرياً بفائدة مركبة سنوية 10٪ ، فكم ستكون بعد 20 عاماً؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: {
                    default: "AED 770,000",
                    ar: "AED 770,000"
                  },
                  tailoredTip: {
                    default:
                      "You have some understanding of how compounding interest and profit rates affects money growth.",
                    ar:
                      "لديك بعض الفهم للفوائد المركبة ومعدلات الربح التي تؤثر على نمو الأموال."
                  }
                },
                {
                  value: "0.00",
                  text: {
                    default: "AED 240,000",
                    ar: "AED 240,000"
                  },
                  tailoredTip: {
                    default:
                      "Take time to learn about the impact of compounding interest or profit rates on money growth",
                    ar:
                      "تعرف على تأثير الفائدة المركبة أو معدلات الربح على نمو الأموال."
                  }
                },
                {
                  value: "0.0",
                  text: {
                    default: "AED 20,000",
                    ar: "AED 20,000"
                  },
                  tailoredTip: {
                    default:
                      "Take time to learn about the impact of compounding interest or profit rates on money growth",
                    ar:
                      "تعرف على تأثير الفائدة المركبة أو معدلات الربح على نمو الأموال."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "Don’t Know",
                    ar: "لا اعرف"
                  },
                  tailoredTip: {
                    default:
                      "Take time to learn about the impact of compounding interest or profit rates on money growth",
                    ar:
                      "تعرف على تأثير الفائدة المركبة أو معدلات الربح على نمو الأموال."
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "fin_q2",
              title: {
                default:
                  "The interest/profit rate on a savings account was 1% per year and inflation was 2% per year. After one year, with the money in this account, would you be able to buy…",
                ar:
                  "إذا كان معدل الفائدة / الربح على حساب التوفير الخاص بك 1 ٪ سنويا وكان التضخم 2 ٪ سنويا. بعد عام واحد ، باستخدام الأموال في هذا الحساب ، هل يمكنك شراء ..."
              },
              isRequired: true,
              choices: [
                {
                  value: "0",
                  text: {
                    default: "More than today",
                    ar: "أكثر من الیوم"
                  },
                  tailoredTip: {
                    default:
                      "Learn about the concept of inflation and how it can affect your money",
                    ar: "اقرأ عن مفهوم التضخم وكيف يمكن أن يؤثر على أموالك."
                  }
                },
                {
                  value: "0.0",
                  text: {
                    default: "Exactly the same as today",
                    ar: "بالضبط نفس الیوم"
                  },
                  tailoredTip: {
                    default:
                      "Learn about the concept of inflation and how it can affect your money",
                    ar: "اقرأ عن مفهوم التضخم وكيف يمكن أن يؤثر على أموالك"
                  }
                },
                {
                  value: "1",
                  text: {
                    default: "Less than today",
                    ar: "اقل من الیوم"
                  },
                  tailoredTip: {
                    default:
                      "You have a base understanding of how inflation affects your savings",
                    ar: "لديك فهم أساسي لكيفية تأثير التضخم على مدخراتك."
                  }
                },
                {
                  value: "0.00",
                  text: {
                    default: "Don’t Know",
                    ar: "لا اعرف"
                  },
                  tailoredTip: {
                    default:
                      "Read about the concept of inflation and how it can affect your money",
                    ar: "اقرأ عن مفهوم التضخم وكيف يمكن أن يؤثر على أموالك"
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "fin_q3",
              title: {
                default:
                  "Do you think the following statement is true or false? Buying a single company stock usually may provide a safer return than a stock mutual fund.",
                ar:
                  "هل تعتقد أن العبارة التالية صحيحة أم خاطئة؟ عادة ما يوفر شراء أسهم شركة واحدة عائدًا أكثر أمانًا من صندوق الأسهم المشترك."
              },
              isRequired: true,
              choices: [
                {
                  value: "0.0",
                  text: {
                    default: "True",
                    ar: "صحیح"
                  },
                  tailoredTip: {
                    default:
                      "Look into the importance of diversification, including investing in funds or multiple companies instead of in a single stock",
                    ar:
                      "تعرف على أهمية التنويع في الاستثمار، بما في ذلك الاستثمار في الصناديق أو الشركات المتعددة بدلاً من أسهم الشركة الواحدة."
                  }
                },
                {
                  value: "1",
                  text: {
                    default: "False",
                    ar: "غیر صحیح"
                  },
                  tailoredTip: {
                    default:
                      "You have an idea about the advantages of diversification via funds compared to single stocks",
                    ar:
                      "لديك فكرة عن مزايا التنويع في الاستثمار عن طريق الصناديق مقارنة بالأسهم  الخاصة بشركة واحدة."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "Don't Know",
                    ar: "لا اعرف"
                  },
                  tailoredTip: {
                    default:
                      "Look into the importance of diversification, including investing in funds or multiple companies instead of in a single stock",
                    ar:
                      "انظر إلى أهمية التنويع في الاستثمار، بما في ذلك الاستثمار في الصناديق أو الشركات المتعددة بدلاً من أسهم الشركة الواحدة."
                  }
                }
              ]
            },
            {
              type: "radiogroup",
              name: "fin_q4",
              title: {
                default:
                  "Would you agree that saving and investing is the cornerstone of your financial safety and security provided you take financial advice?",
                ar:
                  "هل توافق على أن الادخار والاستثمار هو حجر الزاوية في سلامتك وأمنك المالي، طالما أنك تأخذ المشورة المالية؟"
              },
              isRequired: true,
              choices: [
                {
                  value: "1",
                  text: {
                    default: "Yes",
                    ar: "نعم فعلا"
                  },
                  tailoredTip: {
                    default:
                      "You identify with the importance of saving and investment as being at the core of financial security",
                    ar:
                      "أنت تعرف أهمية الادخار والاستثمار باعتبارهما جزء أساسي من الأمن المالي."
                  }
                },
                {
                  value: "0.0",
                  text: {
                    default: "No",
                    ar: "لا"
                  },
                  tailoredTip: {
                    default:
                      "Read our resources and watch our videos to learn about the importance of saving and investment",
                    ar:
                      "اطلع على مواردنا وشاهد مقاطع الفيديو التابعة لنا للتعرف على أهمية التوفير والاستثمار."
                  }
                },
                {
                  value: "0",
                  text: {
                    default: "Don't Know",
                    ar: "لا اعرف"
                  },
                  tailoredTip: {
                    default:
                      "Read our resources and watch our videos to learn about the importance of saving and investment",
                    ar:
                      "اطلع على مواردنا وشاهد مقاطع الفيديو التابعة لنا للتعرف على أهمية التوفير والاستثمار."
                  }
                }
              ]
            }
          ],
          title: {
            default: "Financial Knowledge Quiz",
            ar: "اختبار المعرفة المالیة"
          }
        }
      ]
    }
  ],
  completedHtml: {
    default:
      "<div id='rpthead' class='ltr'><h2 class='pg-title'>Financial Health Check Calculator</h2><h3>Your Report</h3><p>Below are your financial health check results, with a grade and some tips given for each area of your personal finance. </p><p class='emailtxt'>To receive your results in PDF format, see the links at the bottom of the page.</p><p><em style='color:brown'>Just like a real health check, it is not possible to assess exactly how well you are doing from some basic information.  For a comprehensive overview of your financial health, seek a qualified financial advisor.</em></p></div>",
    ar:
      "<div id='rpthead'  class='rtl'><h2 class='pg-title'>حاسبة كشف الصحة المالية</h2><h3>نتائج بحثك</h3><p>فيما يلي نتائج كشف الصحة المالية الخاص بك، مع الدرجات وبعض النصائح لكل مجال من مجالات الإدارة المالية الشخصية الخاص بك.</p><p class='emailtxt'>استلام نتيجتك على شكل بي دي أف أنظر الرابط أسفل الصفحة.</p><p><em  style='color:brown'> مثل الكشف الصحي الحقيقي، ليس من الممكن تقييم جودة أداءك بالضبط من بعض الحقائق العامة. للحصول على نظرة شاملة على صحتك المالية، ابحث عن مستشار مالي مؤهل.</em></p></div>""},showQuestionNumbers:"onPage"};Survey.JsonObject.metaData.addProperty("checkbox","scoretip"),Survey.JsonObject.metaData.addProperty("itemvalue",{name:"tailoredTip"});var survey=new Survey.Model(surveyJSON),arCustomSurveyStrings={progressText:"خطوة {0} من {1}",pagePrevText:"السابق",pageNextText:"التالي",completeText:"إرسال",requiredError:"يرجى اختيار الإجابة للمتابعة ..."},enCustomSurveyStrings={progressText:"Step {0} of {1}",pagePrevText:"Previous",pageNextText:"Next",completeText:"Submit",requiredError:"Please select an answer to proceed..."};Survey.surveyLocalization.locales.en=enCustomSurveyStrings,Survey.surveyLocalization.locales.ar=arCustomSurveyStrings,Survey.surveyShowDataSaving=!0,Survey.surveyStrings.savingData="Please wait. We are validating and saving your reponse";var myCss={header:"fin-heading",progressBar:"fin-progressbar",panel:{title:"sv_p_title"},error:{root:"error-required"},navigationButton:"fin-button"};function sendDataToServer(e){calcSectionScore(e.data)}function changeLocale(){if(window.survey){survey.locale=getLocale();var e=survey.getQuestionByName("intro");e.html=e.html+" ",document.getElementsByTagName("html")[0].setAttribute("dir","ar"==survey.locale?"rtl":"ltr");for(var a=document.getElementById("surveyResult");a.hasChildNodes();)a.removeChild(a.lastChild);document.getElementById("printPDFbtn").setAttribute("value","ar"==survey.locale?"اطبع التقرير بي دي اف":"Print PDF Report"),document.getElementById("downloadPDFbtn").setAttribute("value","ar"==survey.locale?"تحميل التقرير بي دي اف":"Download PDF Report"),a.className="ar"==survey.locale?"ac-pnl-rtl":"ac-pnl-ltr";var t="ar"==survey.locale?"rtl-btn":"ltr-btn",n="ar"==survey.locale?"rtl-complete-btn":"ltr-complete-btn",o="ar"==survey.locale?"rtl-prv-btn":"ltr-prv-btn";Survey.defaultStandardCss.navigation.start="sv_start_btn "+t,Survey.defaultStandardCss.navigation.complete="sv_complete_btn "+n,Survey.defaultStandardCss.navigation.prev="sv_prv_btn "+o,Survey.defaultStandardCss.navigation.next="sv_next_btn "+t,survey.isCompleted?sendDataToServer(survey):survey.render()}}function afterRenderQuestion(e,a){}function getLocale(){return 1==APP_MODE?document.getElementById("selLocales").value:"rtl"==document.getElementsByTagName("html")[0].getAttribute("dir").toLowerCase()?"ar":"en"}function calcSectionScore(e){var a=new Object;a.bdg_score={value:0,tailoredTip:""},a.dc_score={value:0,tailoredTip:""},a.si_score={value:0,tailoredTip:""},a.ins_score={value:0,tailoredTip:""},a.rt_score={value:0,tailoredTip:""},a.fin_score={value:0,tailoredTip:""};var t=document.createElement("ul"),n=document.createElement("ul"),o=document.createElement("ul"),i=document.createElement("ul"),r=document.createElement("ul"),l=document.createElement("ul"),s=0,u=1;$.each(e,function(d,y){if(d.startsWith("bdg_q"))a.bdg_score.value+=parseInt(y),c(d,y,t);else if(d.startsWith("dc_q"))a.dc_score.value+=parseInt(y),c(d,y,n);else if(d.startsWith("si_q")){if(d.startsWith("si_q5")){var f=y.length;s=f>=4?4:f;var g="";(m=document.createElement("li")).setAttribute("style","margin-bottom:.7em;"),console.log("TOTAL SI Q5 SCORE:"+s),$.each(survey.getQuestionByName("si_q5").scoretip,function(e,a){a.score==s&&(g="ar"==survey.locale?a.tip.ar:a.tip.default,m.innerHTML=g,o.appendChild(m),console.log(o))})}else a.si_score.value+=parseInt(y),c(d,y,o);if(d.si_q5||(console.log("NOT Exists"),console.log(e)),!e.si_q5&&4==u){var m;g="";(m=document.createElement("li")).setAttribute("style","margin-bottom:.7em;"),$.each(survey.getQuestionByName("si_q5").scoretip,function(e,a){a.score==s&&(g="ar"==survey.locale?a.tip.ar:a.tip.default,m.innerHTML=g,o.appendChild(m))})}u++,console.log(a.si_score.value)}else d.startsWith("ins_q")?(a.ins_score.value+=parseInt(y),c(d,y,i)):d.startsWith("rt_q")?(a.rt_score.value+=parseInt(y),c(d,y,r)):d.startsWith("fin_q")&&(a.fin_score.value+=parseInt(y),c(d,y,l))}),a.si_score.value+=s,a.bdg_score.tailoredTip=t.outerHTML,a.dc_score.tailoredTip=n.outerHTML,a.si_score.tailoredTip=o.outerHTML,a.ins_score.tailoredTip=i.outerHTML,a.rt_score.tailoredTip=r.outerHTML,a.fin_score.tailoredTip=l.outerHTML,console.log("TOTAL SCORE - SI : "+a.si_score.value),console.log("Budgeting : "+a.bdg_score.value+"\nDebts and Credit Cards : "+a.dc_score.value+"\nSavings and Investments : "+a.si_score.value+"\nÏnsurrance : "+a.ins_score.value+"\nRetirement : "+a.rt_score.value+"\nFinancial : "+a.fin_score.value+"\n"),console.log(a);var d="";$.getJSON("src/build/json/scores.json",function(){}).done(function(e){d=processData(e,a),document.querySelector("#surveyResult").appendChild(d);var t=document.getElementById("printReport"),n=document.getElementById("divNextStep");"ar"==getLocale()?n.innerHTML="<h2>الخطوات التالية</h2>
<p>للمساعدة في رحلتك لتأمين مستقبل آمن ماليًا، تفضل بزيارة  CDA.gov.ae وتحقق من مقالاتنا وأدلتنا حول التمويل الشخصي.</p>
<p>اختر الخيارات التالية لتستلم تقرير كشف الصحة المالية:</p>":n.innerHTML="<h2>Next Steps</h2>
<p>To assist on your journey to securing a financially secure future, visit CDA.gov.ae and check out our articles and guides on personal finance.</p>
<p>Receive a PDF copy of your Financial Health Check Report by selecting the options below:</p>",console.log(n),t.style.display="block"});function c(e,a,t){var n=survey.getQuestionByName(e).choices.find(function(e){if(e.value==a)return e}),o=document.createElement("li");o.setAttribute("style","margin-bottom:.7em;");var i="ar"==survey.locale?n.tailoredTip.ar:n.tailoredTip.default;i.length>0&&(o.innerHTML=i,t.appendChild(o))}}function processData(e,a){var t=document.createElement("div");t.className="result";var n=formatWithHtml(e,"budgeting",a.bdg_score);t.appendChild(n);var o=formatWithHtml(e,"debtandcc",a.dc_score);t.appendChild(o);var i=formatWithHtml(e,"savingsandinv",a.si_score);t.appendChild(i);var r=formatWithHtml(e,"insurance",a.ins_score);t.appendChild(r);var l=formatWithHtml(e,"retirement",a.rt_score);t.appendChild(l);var s=formatWithHtml(e,"finknowledge",a.fin_score);return t.appendChild(s),t}$("#surveyContainer").Survey({model:survey,css:myCss,onComplete:sendDataToServer});var formatWithHtml=function(e,a,t){var n,o=getLocale(),i=jsonQ(e).find("key",function(){return this.toLowerCase()==a}),r=i.sibling("grades").value()[0],l=i.sibling("name").value()[0];n="en"==o?l.default:l.ar;for(var s=document.createElement("div");s.hasChildNodes();)s.removeChild(s.lastChild);s.className="collapsible",s.setAttribute("style",'font-family:"Dubai-Regular", Helvetica, sans-serif;margin-top:10px;PAGE-BREAK-AFTER: always;'+("ar"==o?"text-align:right":"text-align:left")),s.setAttribute("dir","en"==o?"ltr":"rtl");var u=document.createElement("div");return u.className="content",u.setAttribute("style","background-color: rgb(200, 200, 230);padding:10px;"),$.each(r,function(e,a){if(t.value>=a.minscrore&&t.value<=a.maxscore){var i=document.createElement("h3" ),r=document.createElement("h3" ),l=(i=document.createElement("h3" ),document.createElement("div")),d=document.createElement("p" );r.className="sec-head" ,r.setAttribute("style","background-color:#55657D;color: #ffffff;font-size:1.2rem;padding:.3em .7em; margin:0"),r.textContent=n;var c="en"== o?a.value.default+"- "+a.brief.default:a.value.ar+" -"+a.brief.ar;i.textContent=c,l.className=" sec-summary",l.appendChild(i),d.textContent="en"== o?a.desc.default:a.desc.ar,d.setAttribute("style","ar"==o?"text-align:right" :"text-align:left"),l.appendChild(d),u.innerHTML=t.tailoredTip,s.appendChild(r),s.appendChild(l),s.appendChild(u)}}),s.addEventListener("click" ,function(){this.classList.toggle("active"),u.style.maxHeight?u.style.maxHeight=null:u.style.maxHeight=u.scrollHeight+100+"px" }),s};changeLocale();