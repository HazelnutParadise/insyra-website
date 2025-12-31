export const WhyInsyra = {
        title: '為什麼選擇 Insyra？',
        description: 'Insyra 不僅提供簡單易用的語法，更因為基於 Go 語言而具備節能效益。以下為 Insyra 和 Pandas 在相同操作上的代碼對比，讓您更直觀地了解它的使用方式。',
        codeComparison: {
            title: 'Insyra vs Pandas 語法對比',
            calculateAverage: {
                title: '計算平均值',
                pandas: `data = pd.Series([1, 2, 3, 4, 5])

avg = data.mean()
print(avg)`,
                insyra: `data := insyra.NewDataList(1, 2, 3, 4, 5)

avg := data.Mean()
fmt.Println(avg)`,
            },
            filterData: {
                title: '篩選資料',
                pandas: `data = pd.Series([10, 20, 30, 40, 50])

filtered = data[data > 25]
print(filtered)`,
                insyra: `data := insyra.NewDataList(10, 20, 30, 40, 50)

filtered := data.Filter(func(x any) bool {
    return x.(int) > 25
})
filtered.Show()`,
            },
            dataDisplayComparison: {
                title: '資料顯示與對齊',
                description: '<p>下方展示 Pandas 與 Insyra 的輸出與說明。</p>',
                pandasDescription: '<h3>Pandas DataFrame：醜、亂、難對齊</h3><p>Pandas 的 DataFrame 顯示簡直是視覺噩夢。當你 print 一個 DataFrame 時，會面臨：</p><ul><li><strong>格式醜陋</strong>：單調的灰色、白色表格，毫無美感可言</li><li><strong>對齊困難</strong>：列寬度固定，數據無法自動適應，長字符被截斷或超出邊界</li><li><strong>換行問題</strong>：長數據行會破壞整個表格視覺，導致閱讀困難</li><li><strong>無色彩區分</strong>：所有數據顏色相同，難以快速識別不同資料型態</li></ul>',
                insyraDescription: '<h3>Insyra DataTable：彩色、自動對齊、智能換行</h3><p>相比之下，Insyra 的資料顯示設計完全不同：</p><ul><li><strong>彩色呈現</strong>：根據資料型態（數字、文字、日期等）使用不同顏色區分，視覺上清晰易讀</li><li><strong>自動對齊</strong>：無論資料長度如何，Insyra 會自動計算最佳列寬，讓所有數據完美對齊</li><li><strong>智能換行</strong>：長文本自動換行，從不破壞表格結構，始終保持整潔的視覺效果</li><li><strong>現代美感</strong>：採用現代設計語言，輸出結果賞心悅目</li></ul>',
            },
        },
        goEfficiency: {
            title: 'Go 語言的節能優勢與永續發展',
            description: '<p>在當今全球面臨氣候變遷的時代，軟體開發者的責任不僅止於功能實現，更應考慮其環境影響。Insyra 基於 Go 語言開發，這個選擇直接關乎我們的環保使命。</p><h3>1. 能源效率與碳足跡</h3><p>Go 語言以其卓越的效能與記憶體管理而聞名。<a href="https://greenlab.di.uminho.pt/wp-content/uploads/2017/09/paperSLE.pdf" target="_blank">來自葡萄牙 Minho 大學的研究報告</a>（比較 27 種程式語言）明確指出，<strong>Go 的能耗遠低於 Python</strong>。該研究發現，在執行時間、記憶體使用量與能源消耗三個方面，Go 都大幅優於 Python。這意味著每一次數據查詢、每一回資料分析，都能顯著減少電力消耗與對應的碳排放。</p><p>當您使用 Insyra 進行大規模資料分析時，節省的不僅是運算時間，更是實實在在的電力——這直接轉化為<strong>降低企業碳足跡</strong>與<strong>減少能源成本</strong>。</p><h3>2. 聯合國永續發展目標（SDGs）的實踐</h3><p>Insyra 與 Go 語言的選擇與<strong>聯合國永續發展目標（Sustainable Development Goals, SDGs）</strong>高度契合，尤其是以下三個核心目標：</p><ul><li><strong>SDG 7 - 負擔得起的清潔能源（Affordable and Clean Energy）</strong><br/>使用高效能的資料分析工具，減少運算過程中的能源消耗，是達成全球清潔能源轉型的一環。Insyra 幫助企業在進行資料分析時消耗更少電力，進而降低依賴化石燃料的需求。</li><li><strong>SDG 12 - 負責任的消費與生產（Responsible Consumption and Production）</strong><br/>軟體的高效性就是負責任的生產。選擇能源高效的資料分析解決方案，意味著更少的伺服器負荷、更少的冷卻系統運轉、更少的資源浪費。Insyra 的高效設計正是這一目標的實踐。</li><li><strong>SDG 13 - 氣候行動（Climate Action）</strong><br/>每一項減少碳排放的努力都很重要。通過使用能源高效的工具，開發者與企業主動參與全球氣候行動。Insyra 讓您的資料分析工作與全球氣候保護目標相互呼應。</li></ul><h3>3. 具體的節能數據與性能對比</h3><p>根據 Minho 大學的研究報告：</p><ul><li><strong>記憶體效率</strong>：Go 平均記憶體使用量約 69 MB，相比 Python 的 437 MB，效率優勢顯著。</li><li><strong>執行速度</strong>：Go 的編譯型特性使其執行時間遠快於直譯型的 Python，通常快數十倍，直接降低 CPU 時間與隨之而來的能耗。</li><li><strong>能源消耗</strong>：Python 屬於較耗能的直譯語言，而 Go 表現優異，僅次於 C、Rust 等編譯型高效能語言。</li><li><strong>並行處理能力</strong>：Go 語言的 goroutine 機制使並行任務執行更輕量高效，減少系統開銷。</li></ul><h3>4. 企業與個人開發者的雙贏</h3><p>選擇 Insyra 帶來三重優勢：</p><ul><li><strong>成本節省</strong>：降低伺服器電力消耗，直接減少企業運營成本。</li><li><strong>性能提升</strong>：更快的執行速度意味著更高的工作效率與用戶滿意度。</li><li><strong>環境責任</strong>：成為企業永續發展承諾的具體實踐，提升品牌形象與社會責任評級。</li></ul><h3>5. 未來願景：構建永續的資料生態</h3><p>在資料驅動的時代，我們相信軟體工程應該為環境負責。Insyra 不僅是一個資料分析工具，更是<strong>建立永續發展資料生態的一步</strong>。我們鼓勵全球開發者與企業採用高效能的技術棧，共同為達成聯合國 SDGs 貢獻力量。</p><p>使用 Insyra，您不只是選擇更快、更簡單的資料分析方式，更是選擇<strong>保護地球、建設未來</strong>的行動。</p>',
        },
    };
