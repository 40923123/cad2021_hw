var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 40923123 \n 網站倉儲:  https://github.com/40923123/cad2021_hw \n 網站連結:\xa0 https://40923123.github.io/cad2021_hw/ \n 2021.10.23進度更新: 今天使用wink想要放入網頁裡但目前不知甚麼原因無法正確嵌入\xa0 \n 2021.10.23(2)進度更新: 將wink的嵌入方法寫入網站裡\xa0 \n 2021.10.25 進度更新: wnk的影片2依然還是無法正常撥放\xa0 \n 2021.11.07 進度更新: 將老師指定零件畫出來並放入\xa0coppeliaSim 裡\xa0 \n 2021.11.07 進度更新: 接下來會拍成WINK影片放在網面上 \n 2021.11.28 進度更新: fossil 的開啟講解跟說明 \n 2021.11.29 進度更新: coppliasim的使用以及零件繪製 \n 2021.12.01 進度更新: 在推送WINK時因檔案過大而產生問題 \n 2021.12.06 進度更新: 將繪製零件WINK檔案上傳(1 and 2 \n 2021.12.13 進度更新: 將四連趕機構作動跟W13之前的東西統整 \n 2021.12.20 進度更新: 問題更新，推送資料到遠端沒有綠勾但資料依然正常傳送 \n 2022.1.3 進度更新: 8連趕機構作動跟期末考第一次總結 \n 2022.1.10 進度更新: 將UI系統頁面叫出來的步驟方法上傳 \n', 'tags': '', 'url': 'About.html'}, {'title': 'WINK', 'text': '影片這周會處理完畢 \n', 'tags': '', 'url': 'WINK.html'}, {'title': 'wink 教學', 'text': '再將wink的影片檔案放上來需要先記的用sharx的ffmpeg.exe轉檔程式，再來要記的放上以下指令 \n <script>\nvar winkVideoData = {\n  dataVersion: 1,\n  frameRate: 20,\n  buttonFrameLength: 10,\n  buttonFrameOffset: 5,\n  frameStops: {\n  },\n};\n</script> \n 此為wink的jave script必須放進網頁的代碼裡才可以 \n 以下為wink嵌入的教學 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n test \n', 'tags': '', 'url': 'wink 教學.html'}, {'title': 'wink test', 'text': '\n \n \n   \n \n \n \n \n \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'wink test.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'CAD1 繪圖', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 緣起說明與介紹 \n 請不要直接從找到的 CAD1 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n', 'tags': '', 'url': 'CAD1 繪圖.html'}, {'title': 'CAD1 安裝配置', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 套件下載安裝與配置 \n CAD1 下載安裝與配置流程 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 下載安裝與配置 」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n 由於安裝配置 Solidworks 時必須使用 nfu 的 vpn, 因此各學員必須按照 說明 , 完成本學期的 vpn 使用申請. \n Solidworks 分別提供 2017 與 2020 版本: \n SW2017 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n SW2020 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 版本: \n NX12 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 可攜版本下載 \xa0(必須先登入 @gm 帳號後才能下載) \n Inventor: \n 請在校園網路, 使用 nfu vpn 或設定系上代理主機, 就可以從  https://2019wcm.blogspot.com/2019/07/autodesk-inventor-professional.html  嘗試下載 autodesk.iso 後安裝 Inventor Professional 版本. \n Onshape: \n 至  https://www.onshape.com/en/  申請帳號後使用. \n Solvespace: \n 至  https://solvespace.com  下載或從  https://github.com/solvespace/solvespace  下載原始碼, 以可攜程式系統自行編譯後使用. \n', 'tags': '', 'url': 'CAD1 安裝配置.html'}, {'title': 'CAD1 操作流程', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 零組件繪圖操作流程影片 (Youtube) \n CAD1 零組件繪圖教學影片 (Wink) \n CAD1 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD1 操作流程.html'}, {'title': 'CAD2 繪圖', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 緣起說明與介紹 \n 請不要直接從找到的 CAD2 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n', 'tags': '', 'url': 'CAD2 繪圖.html'}, {'title': 'CAD2 安裝配置', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 套件下載安裝與配置 \n CAD2 套件下載安裝與配置影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  套件下載安裝與配置影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 安裝配置.html'}, {'title': 'CAD2 操作流程', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 零組件繪圖操作流程影片 (Youtube) \n CAD2 零組件繪圖教學影片 (Wink) \n CAD2 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 操作流程.html'}, {'title': '運動場景', 'text': 'CAD1: \n CAD1 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD1 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD1 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n CAD2: \n CAD2 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD2 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD2 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': '運動場景.html'}, {'title': 'W13', 'text': '簡單說一下我的進度表: \n 1.關於零件的模擬目前只到將組合件匯入並將它拆解而已 \n 2.wink的使用方法 包括如何放兩個以上的wink檔案，並且將其中dirname設定成/static 跟將wink檔的mp4跟網頁還有js檔放在自己的倉儲下 \n 3.fossil運作方法，有特別放一個網站說明設定ipv6的位置並且如何打開的步驟 \n 4.中途有段時間因為檔案輸出過大的原因而解決問題，利用git的指令將錯誤HEAD從錯誤的提交切換至正確提交，再將過大檔案給移除重新推送 \n 此為簡單說明有關相關的WINK檔: \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 此為四連趕運動wink: \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n test \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': '40923123CAD1HW', 'text': 'NFU - MDE - cad2021 - 40923123 - INV2019 零件繪製影片01(無剪輯\xa0 https://www.youtube.com/watch?v=s2S8ZmRjy_E NFU - MDE - cad2021 - 40923123 - INV2019 零件繪製影片02(無剪輯 \xa0 https://www.youtube.com/watch?v=e5aetrep-cU NFU - MDE - cad2021 - 40923123 - INV2019 零件繪製影片03(無剪輯 \xa0 https://www.youtube.com/watch?v=z8q1mtIgfEk NFU - MDE - cad2021 - 40923123 - INV2019 零件繪製影片04(無剪輯 \xa0 https://www.youtube.com/watch?v=E9wiw9-JBmU NFU - MDE - cad2021 - 40923123 - INV2019 零件轉入 CoppeliaSim 教學影片 \xa0 https://www.youtube.com/watch?v=YJVbbsGa_R8 NFU - MDE - cad2021 - 40923123 - NX12 零件轉入 CoppeliaSim 教學影片 \xa0 https://www.youtube.com/watch?v=yPAomZGLzWY \n \n', 'tags': '', 'url': '40923123CAD1HW.html'}, {'title': '小組網站fossil第五組', 'text': '第五組的fossil的網站是由我建立的 \n 首先fossil網站打開以前要先把我這邊的fossil檔案打開 \n 1.fossil server fossil檔案的位置 打開之後 \n 2.然後將IPV6設定成[2001:288:6004:17:2021::af5]，預設閘道設定為2001:288:6004:17::254 DNS伺服器為 2001:b000:168::1 \n 3.打開網址cad2021ag5.cycu.org:8080 ==>8080有可能會改動 \n 4.輸入帳密即可在小組fossil網站上更新了 \n', 'tags': '', 'url': '小組網站fossil第五組.html'}, {'title': '零件繪製wink檔案', 'text': '這禮拜的進度是coppeliasim的零件匯入跟各部位的零件組合 \n 並且已將零件用INV繪製完成接下來會將零件繪製的WINK放上 \n 底座:  下載 \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 連桿1號:  下載 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '零件繪製wink檔案.html'}, {'title': '出現問題', 'text': '', 'tags': '', 'url': '出現問題.html'}, {'title': '推送異常', 'text': '目前看下來發現的異常是，我只有更改一項字串而以但是紀錄卻說我更改了很多項類似自動把我的資料作換行等工作了如下圖: \n \n \n 目前正在找尋解決方法紀錄2021.12.20推送3次都無法顯示綠勾勾 \n test', 'tags': '', 'url': '推送異常.html'}, {'title': '2021年12月1日檔案過大提交問題', 'text': '首先問題的起因是我想將我繪圖的WINK影片放在倉儲下但因為檔案過大導致推送有問題，雖然推送沒有成功但是因為我的提交已經提交出去了，導致我的近端和遠端出現了類似我雖然有提交沒推送進而導致類似版本衝突。以下是我的解決方法 \n \n 先用git log 找出自己的commit紀錄 \n 確認自己的HEAD是不是在錯誤的提交 \n 將HEAD移回正確的提交用 git reset HEAD^^(代表往後移兩個commit \n 接下來把移回去提交的檔案取出 \n 最後正常進行 add commit push 即可了 \n \n \n \n \n \n \n', 'tags': '', 'url': '2021年12月1日檔案過大提交問題.html'}, {'title': 'cad2021 final', 'text': '1.wink的使用說明 \n \n 再將wink的影片檔案放上來需要先記的用sharx的ffmpeg.exe轉檔程式，再來要記的放上以下指令 \n <script>\nvar winkVideoData = {\n  dataVersion: 1,\n  frameRate: 20,\n  buttonFrameLength: 10,\n  buttonFrameOffset: 5,\n  frameStops: {\n  },\n};\n</script> \n 此為wink的jave script必須放進網頁的代碼裡才可以 \n 以下為wink嵌入的教學 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 2.fossil的開啟方法 \n 首先fossil網站打開以前要先把我這邊的fossil檔案打開 \n 1.fossil server fossil檔案的位置 打開之後 \n 2.然後將IPV6設定成[2001:288:6004:17:2021::af5]，預設閘道設定為2001:288:6004:17::254 DNS伺服器為 2001:b000:168::1 \n 3.打開網址cad2021ag5.cycu.org:8080 ==>8080有可能會改動 \n 4.輸入帳密即可在小組fossil網站上更新了 \n 3.meram的繪圖影片 \n NFU - MDE - cad2021 - 40923123 - INV2019 零件繪製影片01(無剪輯\xa0 https://www.youtube.com/watch?v=s2S8ZmRjy_E NFU - MDE - cad2021 - 40923123 - INV2019 零件繪製影片02(無剪輯 \xa0 https://www.youtube.com/watch?v=e5aetrep-cU NFU - MDE - cad2021 - 40923123 - INV2019 零件繪製影片03(無剪輯 \xa0 https://www.youtube.com/watch?v=z8q1mtIgfEk NFU - MDE - cad2021 - 40923123 - INV2019 零件繪製影片04(無剪輯 \xa0 https://www.youtube.com/watch?v=E9wiw9-JBmU NFU - MDE - cad2021 - 40923123 - INV2019 零件轉入 CoppeliaSim 教學影片 \xa0 https://www.youtube.com/watch?v=YJVbbsGa_R8 NFU - MDE - cad2021 - 40923123 - NX12 零件轉入 CoppeliaSim 教學影片 \xa0 https://www.youtube.com/watch?v=yPAomZGLzWY \n 4.四連趕機構運動模擬 \n \n 此為四連趕運動wink: \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 5.檔案過大而導致推送異常問題處理 \n \n 首先問題的起因是我想將我繪圖的WINK影片放在倉儲下但因為檔案過大導致推送有問題，雖然推送沒有成功但是因為我的提交已經提交出去了，導致我的近端和遠端出現了類似我雖然有提交沒推送進而導致類似版本衝突。以下是我的解決方法 \n \n 先用git log 找出自己的commit紀錄 \n 確認自己的HEAD是不是在錯誤的提交 \n 將HEAD移回正確的提交用 git reset HEAD^^(代表往後移兩個commit \n 接下來把移回去提交的檔案取出 \n 最後正常進行 add commit push 即可了 \n \n \n \n \n \n \n 5.八連桿模擬2022.1.3 \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n 6.如何把UI系統叫出來 \n 此為程式的樣本需進行修改 \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n \nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n \nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n\n    \n    deg = math.pi/180\n    print(i)\n        xml = [[\n    <ui closeable="true" on-close="closeEventHandler" resizable="true">\n        <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n        <tabs>\n            <tab title="Numeric">a\n                <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n                <label text="" id="3000" wordwrap="true" />\n                <label text="theta1" /> <hslider tick-position="above" tick-interval="1"\n                minimum="0" maximum="360" on-change="joint1_rotate" />\n            </tab>\n        </tabs>\n    </ui>\n    ]]\n    ui=simUI.create(xml)\n     \nend \n 下面為影片 \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'cad2021 final.html'}]};