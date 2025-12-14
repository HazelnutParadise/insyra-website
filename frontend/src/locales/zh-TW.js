export const zhTW = {
    siteTitle: '{year} 最時髦的資料分析工具 — Insyra: 次世代 Go 語言資料分析解決方案 | 太快、太美、太簡單',
    pageTitle: {
        Main: '邂逅 Insyra',
        WhatIsInsyra: 'Insyra 是什麼',
        WhyInsyra: '為什麼選擇 Insyra',
        HowToUse: '如何使用',
        Features: '功能',
        Contact: '聯絡我們',
    },
    navbar: {
        main: '邂逅 Insyra',
        whatIsInsyra: 'Insyra 是什麼',
        whyInsyra: '為什麼選擇 Insyra',
        howToUse: '如何使用',
        features: '功能',
        contact: '聯絡我們',
    },
    Main: {
        hero: {
            slogan: '太快、太美、太簡單',
            title: '邂逅 Insyra',
            description: '強大的資料分析工具，為未來而生。',
            audio: {
                error: '您的瀏覽器不支援音訊播放器。',
                description: '聆聽 Insyra 介紹（英語）',
            },
            button: {
                main: '開始使用',
                secondary1: 'GoDoc',
                secondary2: 'GitHub',
                chat: '與 AI 對談',
                mcp: 'MCP 伺服器',
            },
            audioDescription: '聆聽 Insyra 產品介紹',
        },
        featureItemSection: {
            features: {
                feature1: {
                    id: 1,
                    title: '高效能資料處理',
                    description: '得益於 Go 語言的優異性能，Insyra 能夠快速處理龐大的資料集，適合需要大量或平行資料計算的情境，如 <strong>大數據分析</strong> 等。',
                    learnMore: {
                        href: '#WhyInsyra',
                        text: '了解更多',
                    },
                },
                feature2: {
                    id: 2,
                    title: '簡單易用的 API',
                    description: 'Insyra 提供 <strong>直觀</strong>、<strong>簡單</strong> 的 API 接口，您可以輕鬆使用其強大的功能。無需深入了解內部實現，就能快速上手並進行複雜的資料操作。',
                    learnMore: {
                        href: '#Features',
                        text: '了解更多',
                    },
                },
                feature3: {
                    id: 3,
                    title: '美觀的資料視覺化',
                    description: 'Insyra 整合了 <a href="https://github.com/go-echarts/go-echarts">go-echarts</a> 視覺化函式庫，提供多種圖表，為您的分析輕鬆創建美觀圖表。',
                    learnMore: {
                        href: '#Features',
                        text: '了解 <strong>plot</strong> 與 <strong>gplot</strong> 套件',
                    },
                },
                feature4: {
                    id: 4,
                    title: '與 Python 整合',
                    description: '使用 Insyra 的 py 包，您可以 <strong>在 Go 程式中執行 Python 程式碼</strong>，利用 Python 的強大功能進行資料分析。',
                    learnMore: {
                        href: '#Features',
                        text: '了解 <strong>py</strong> 套件',
                    },
                },
                feature5: {
                    id: 5,
                    title: '專用 IDE',
                    description: '我們為 Insyra 提供 <strong>專屬</strong> 的 <strong>簡易 IDE</strong>，讓您不用煩惱環境設定，迅速開始您的資料分析工作。',
                    learnMore: {
                        href: '#HowToUse',
                        text: '發掘 <strong>Idensyra</strong>',
                    },
                },
            },
        },
        versionIntro: {
            title: '版本 0.2.x - Pier-2',
            slogan: '藝塑數據之美',
            versionName: '版本名稱：',
            versionNameValue: 'Pier-2，取自台灣高雄的駁二藝術特區',
            versionFeatures: '版本特點：',
            versionFeaturesValue: '此中型版本主要補足缺乏的函數或方法，讓 Insyra 更完善並能在生產環境中使用。',
            pierIntro: '駁二藝術特區：',
            pierIntroValue: '「駁二藝術特區（The Pier-2 Art Center）」是一個橫跨台灣高雄市鹽埕區和鼓山區的藝術園區，以「前衛、實驗、創新」為理念打造國際藝術平台。原為高雄港的舊倉庫群，經過重新規劃成為文化創意園區，包含多個藝術展館、劇場和創意空間，是高雄市重要的藝文地標。',
            imageAlt: '駁二藝術特區',
            imageSource: '圖片來源：東南旅遊，https://www.settour.com.tw/travel_guide/%E5%8F%B0%E7%81%A3/%E9%A7%81%E4%BA%8C%E8%97%9D%E8%A1%93%E7%89%B9%E5%8D%80/attractions_POI0000369625.html',
        },
    },
    AboutInsyra: {
        title: 'Insyra 是什麼',
        description: 'Insyra 是 Go 語言的綜合型資料分析工具，無論是日常資料處理還是大規模資料分析，Insyra 都能讓你以更快的速度、更少的程式碼完成任務。',
        whyCreate: {
            title: '為什麼創建 Insyra',
            description: 'Go 語言擁有高效能與極佳的平行處理能力，但其生態在資料分析領域，始終缺乏像 Pandas 這樣完整且成熟的分析庫。為了填補這個空缺，Insyra 於 2024 年的夏天誕生，為 Go 提供一個能夠媲美 Pandas 的強大資料分析解決方案，滿足從簡單資料處理到大型資料集的多樣需求。許多現有解決方案要嘛性能表現不佳，要嘛太複雜不易學習，使其在多樣化和複雜的資料環境中難以發揮現代硬體的優勢。Insyra 則誕生於對高性能、易用性和與現有工具無縫整合的需求。',
        },
        corePhilosophy: {
            title: '核心理念',
            items: {
                first: {
                    title: '高效能',
                    description: 'Insyra 利用 Go 語言的高效能和併發處理能力，確保資料處理速度與系統資源使用效率的最佳化。',
                },
                second: {
                    title: '靈活與擴展性',
                    description: 'Insyra 提供多個子套件包，無論是簡單的資料處理，還是複雜的大數據分析，都能夠靈活應對，並且輕鬆擴展。未來也將加入更多功能，滿足各方面的資料分析需求。',
                },
                third: {
                    title: '簡單易懂',
                    description: '我們相信，好的工具應該要讓使用者憑直覺就能輕鬆上手，而不是花費大量時間研究枯燥乏味的說明文件。因此致力將 Insyra 的使用方式設計得簡單易懂，讓使用者省下學習成本，輕鬆應用於各種資料分析場景。',
                },
            },
        },
        futureVision: {
            title: '未來展望',
            description: '我們期望 Insyra 成為資料分析的標配。隨著 Insyra 的成長，我們的目標是讓使用者能在同一個生態系中一條龍完成所有的資料分析工作，無需在多個語言或是工具間來回切換。',
        },
    },
    Features: {
        title: '功能',
        description: 'Insyra 提供多樣化的功能，滿足各種資料分析需求。',
        readDocs: {
            title: '邀請您閱讀我們的說明文件',
            description: 'Insyra 設計為無需查看說明也能輕鬆學會如何使用，您可以完全依賴編輯器的自動完成功能來操作。但如果您想知道更多細節，我們位於 GitHub 的說明文件詳細記載了所有功能與使用方式。<br/><br/>若您更喜歡註解即文檔的 Go 語言風格，也可以查看 GoDoc。',
            docsButton: {
                docs: {
                    title: 'GitHub 上的說明文件',
                    link: 'https://github.com/HazelnutParadise/insyra/blob/main/README_TW.md',
                },
                goDoc: {
                    title: 'GoDoc',
                    link: 'https://pkg.go.dev/github.com/HazelnutParadise/insyra',
                },
            },
        },
        coreStructures: {
            title: '核心資料結構',
            description: 'Insyra 提供兩大核心資料結構，分別是 DataList 和 DataTable。',
            dataList: {
                description: 'DataList 是 Insyra 中的基礎結構，用於處理單一維度資料，具備快速檢索、資料清理、資料型態轉換和簡單統計值計算的能力。',
                collapse: {
                    title: '使用範例',
                    content:
                        `package main

// 引入 Insyra
import (
    "fmt"
    "github.com/HazelnutParadise/insyra/isr" // 使用 isr 語法糖包
)

func main() {
    // 建立 DataList 實例
    dl := isr.DL.From(1, 2, 3, 4, 5)

    // 計算並印出平均值
    fmt.Println("平均值:", dl.Mean())
}`,
                    copyButtonText: '複製',
                },
                doc: {
                    title: 'DataList 說明文件',
                    link: 'https://github.com/HazelnutParadise/insyra/blob/main/Docs/DataList.md',
                },
            },
            dataTable: {
                description: 'DataTable 是一個類似表格的二維結構，具備多種資料操作、篩選、查詢和顯示方法。DataTable 基於 DataList 打造，提供一致的使用體驗。',
                collapse: {
                    title: '使用範例',
                    content:
                        `package main

// 引入 Insyra
import (
	"github.com/HazelnutParadise/insyra/isr" // 使用 isr 語法糖包
)

func main() {
	// 建立 DataList 實例
	students := isr.DL.From("Jane", "Jim", "John")
	ages := isr.DL.From(22, 21, 23)
	scores := isr.DL.From(90, 88, 95)

	// 建立 DataTable 實例
	dt := isr.DT.From(isr.DLs{students, ages, scores})

	// 印出 DataTable
	dt.Show()
}`,
                    copyButtonText: '複製',
                },
                doc: {
                    title: 'DataTable 說明文件',
                    link: 'https://github.com/HazelnutParadise/insyra/blob/main/Docs/DataTable.md',
                },
            },
        },
        packagesSection: {
            title: '子套件包',
            packages: [
                {
                    title: 'isr',
                    subTitle: '語法糖',
                    descriptions: {
                        first:
                            `提供 Insyra 的語法糖，為 Insyra 的核心資料結構 DataList 和 DataTable 提供更簡潔的語法。
                            <br/>
                            <strong>isr</strong> 是 <strong>Insyra</strong> 的縮寫。`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/isr.md">isr 套件包說明文件</a>',
                    },
                },
                {
                    title: 'datafetch',
                    subTitle: '資料獲取',
                    descriptions: {
                        first:
                            `提供資料獲取的功能，目前可取得 Google 地圖商家評論。`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/datafetch.md">datafetch 套件包說明文件</a>',
                    },
                    collapses: {
                        first: {
                            title: '使用範例',
                            content: `package main

import (
	"log"

	"github.com/HazelnutParadise/insyra/datafetch"
)

func main() {
	crawler := datafetch.GoogleMapsStores()
	dt := crawler.GetReviews(crawler.Search("Din Tai Fung")[0].ID, 5).ToDataTable()
	if dt == nil {
		log.Fatalf("Error")
	}

	dt.Show()
}
`,
                            codeBlock: true,
                            codeLanguage: 'go',
                            copyButtonText: '複製',
                        },
                    },
                },
                {
                    title: 'stats',
                    subTitle: '統計',
                    descriptions: {
                        first:
                            `提供各種統計函數，包括偏度、峰度和矩計算、主成份分析等。是 Go 語言統計函式庫的包裝，提供易用的 API。<br/>
<br/>
我們致力將它設計成和 <strong>R 語言</strong> 的計算結果一致。`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/stats.md">stats 套件包說明文件</a>',
                    },
                    collapses: {
                        first: {
                            title: '使用範例',
                            content:
                                `package main

import (
    "fmt"
    "github.com/HazelnutParadise/insyra"
    "github.com/HazelnutParadise/insyra/stats"
)

func main() {
    dl := insyra.NewDataList(1, 2, 3, 9, 5)
    fmt.Println("偏度:", stats.Skewness(dl))
}`,
                            codeBlock: true,
                            codeLanguage: 'go',
                            copyButtonText: '複製',
                        },
                    },
                },
                {
                    title: 'parallel',
                    subTitle: '平行處理',
                    descriptions: {
                        first:
                            `提供平行處理的函數，能夠將多個任務組成群組，在多個 CPU 核心上同時執行，輕鬆提升資料處理效率。<br/>
<br/>
parallel 套件包會自動處理平行協程之間的等待，並且回傳的結果會保持任務順序，您無需額外撰寫複雜程式碼。`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/parallel.md">parallel 套件包說明文件</a>',
                    },
                    collapses: {
                        first: {
                            title: '使用範例',
                            content:
                                `package main

import (
	"fmt"
	"github.com/HazelnutParadise/insyra/parallel"
)

func main() {
	// 定義函數並存儲在變數中
	f1 := func() (int, string) { return 42, "Answer to Everything" }
	f2 := func() (string, int) { return "Hello, World!", 2024 }
	f3 := func() ([]int, float64) { return []int{1, 2, 3}, 3.14 }

	// 將函數組成群組並在平行協程中執行
	pg := parallel.GroupUp(f1, f2, f3).Run()

	// 等待結果
	results := pg.AwaitResult()

	// 印出結果
	fmt.Printf("已完成所有任務。結果: %v\\n", results)
	for i, result := range results {
		fmt.Printf("任務 %d: %v\\n", i, result)
	}
}
`,
                            codeBlock: true,
                            codeLanguage: 'go',
                            copyButtonText: '複製',
                        },
                    }
                },
                {
                    title: 'plot',
                    subTitle: '資料視覺化',
                    descriptions: {
                        first:
                            `整合 <a target="_blank" href="https://github.com/go-echarts/go-echarts">go-echarts</a> 的資料視覺化套件包，提供多種圖表。撰寫簡單的設定就能為您的分析創建精美圖表。<br/>
<br/>
<img src="https://github.com/HazelnutParadise/insyra/blob/main/Docs/img/plot_bar_example.png?raw=true" style="width: 100%;" alt="plot 套件包範例圖表" />`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/plot.md">plot 套件包說明文件</a>',
                    },
                    collapses: {
                        first: {
                            title: '使用範例',
                            content:
                                `package main

import (
	"github.com/HazelnutParadise/insyra"
	"github.com/HazelnutParadise/insyra/plot"
)

func main() {
	// 建立不同產品的 DataList 實例
	dataListA := insyra.NewDataList(120, 200, 150).SetName("Product A")
	dataListB := insyra.NewDataList(80, 160, 90).SetName("Product B")

	config := plot.BarChartConfig{
		Title:      "Sales Data",
		Subtitle:   "Monthly Sales",
		XAxis:      []string{"January", "February", "March"},
		Data: []*insyra.DataList{dataListA, dataListB},
		ShowLabels: true,
		Colors:     []string{"#5470C6", "#91CC75"},
	}

	// 建立長條圖
	barChart := plot.CreateBarChart(config)

	// 將圖表儲存為 HTML 檔案
	plot.SaveHTML(barChart, "sales_data_datalist.html")

	// 將圖表儲存為 PNG 檔案
	plot.SavePNG(barChart, "sales_data_datalist.png")
}`,
                            codeBlock: true,
                            codeLanguage: 'go',
                            copyButtonText: '複製',
                        },
                    }
                },
                {
                    title: 'gplot',
                    subTitle: '資料視覺化',
                    descriptions: {
                        first:
                            `使用 <a target="_blank" href="https://github.com/gonum/plot">gonum/plot</a> 的資料視覺化套件包，提供多種圖表。較為快速，但圖表樣式比較陽春。<strong>不支援非 ASCII 字元</strong>。<br/>
<br/>
<img src="https://github.com/HazelnutParadise/insyra/blob/main/Docs/img/gplot_bar_example.png?raw=true" style="width: 100%;" alt="gplot 套件包範例圖表" />`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/gplot.md">gplot 套件包說明文件</a>',
                    },
                    collapses: {
                        first: {
                            title: '使用範例',
                            content:
                                `import (
	"github.com/HazelnutParadise/insyra"
	"github.com/HazelnutParadise/insyra/gplot"
)

func main() {
	dl := insyra.NewDataList(1 ,2 ,3 ,4)
	config := gplot.BarChartConfig{
		Title: "The title of the chart.",
		XAxis: []string{"一", "二", "三", "四"},
		Data: dl,
		XAxisName: "categories",
		YAxisName: "values",
	}
	chart := gplot.CreateBarChart(config)
	gplot.SaveChart(chart, "example.png")
}`,
                            codeBlock: true,
                            codeLanguage: 'go',
                            copyButtonText: '複製',
                        },
                    },
                },
                {
                    title: 'mkt',
                    subTitle: '行銷分析',
                    descriptions: {
                        first:
                            `提供行銷分析的功能，包括 RFM 分析等。幫助您深入了解顧客行為，制定有效的行銷策略。`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/mkt.md">mkt 套件包說明文件</a>',
                    },
                },
                {
                    title: 'lpgen',
                    subTitle: '線性規劃模型生成',
                    descriptions: {
                        first:
                            `提供線性規劃模型的生成功能，能夠輕鬆建立線性規劃模型，並且可以儲存成 <strong>.lp</strong> 檔案供求解軟體使用。`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/lpgen.md">lpgen 套件包說明文件</a>',
                    },
                    collapses: {
                        first: {
                            title: '使用範例',
                            content:
                                `package main

import (
	"github.com/HazelnutParadise/insyra/lpgen"
)

func main() {
	// 建立線性規劃模型
	lpModel := lpgen.NewLPModel()

	// 設定目標函數為最大化
	lpModel.SetObjective("Maximize", "3 x1 + 4 x2")

	// 新增約束條件
	lpModel.AddConstraint("2 x1 + 3 x2 <= 20")
	lpModel.AddConstraint("4 x1 + 2 x2 <= 30")

	// 新增變數的界限
	lpModel.AddBound("0 <= x1 <= 10")
	lpModel.AddBound("0 <= x2 <= 10")

	// 新增整數和二元變數
	lpModel.AddIntegerVar("x1")
	lpModel.AddBinaryVar("x2")

	// 生成 LP 檔案
	lpModel.GenerateLPFile("my_model.lp")
}`,
                            codeBlock: true,
                            codeLanguage: 'go',
                            copyButtonText: '複製',
                        },
                    },
                },
                {
                    title: 'lp',
                    subTitle: '線性規劃求解',
                    descriptions: {
                        first:
                            `使用 <a target="_blank" href="https://www.gnu.org/software/glpk/">GLPK</a> 提供的線性規劃求解功能，能夠輕鬆求解線性規劃模型。<strong>此套件包會自動幫您安裝 GLPK</strong>，無需額外設定。`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/lp.md">lp 套件包說明文件</a>',
                    },
                    collapses: {
                        first: {
                            title: 'Example',
                            content:
                                `package main

import (
	"github.com/HazelnutParadise/insyra/lp"
	"github.com/HazelnutParadise/insyra/lpgen"
)

func main() {
	// Create a new linear programming model using the lpgen package
	model := lpgen.NewLPModel()
    model.SetObjective("Maximize", "3 x1 + 5 x2 + x3")
    model.AddConstraint("x1 + 2 x2 + 3 x3 <= 12")
    model.AddConstraint("x2 + x3 + x4 <= 3")
    model.AddConstraint("x1 + x2 + x3 + x4 <= 100")
    model.AddBound("0 <= x1 <= 4")
    model.AddBound("1 <= x2 <= 6")
    model.AddBound("0 <= x3 <= 10")
    model.AddIntegerVar("x1")
    model.AddIntegerVar("x2")
    model.AddIntegerVar("x3")
    model.AddIntegerVar("x4")
    model.AddBinaryVar("x1")
    model.AddBinaryVar("x2")

    // Solve the model
    result, info := lp.SolveModel(model, 10)

    // Save the result and information to CSV files
    result.ToCSV("solution.csv", false, false)
    info.ToCSV("info.csv", true, true)
}`,
                            codeBlock: true,
                            codeLanguage: 'go',
                            copyButtonText: '複製',
                        },
                    }
                },
                {
                    title: 'csvxl',
                    subTitle: 'CSV 與 Excel 處理',
                    descriptions: {
                        first:
                            `提供 CSV 與 Excel 檔案相互轉換等功能。`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/csvxl.md">csvxl 套件包說明文件</a>',
                    },
                    collapses: {
                        first: {
                            title: '使用範例',
                            content:
                                `package main

import (
    "github.com/HazelnutParadise/csvxl"
)

func main() {
    csvFiles := []string{"file1.csv", "file2.csv", "file3.csv"}
    sheetNames := []string{"Sheet1", "Sheet2", "Sheet3"} // 可選: 如果沒有提供，CSV 檔案名稱會被用作工作表名稱
    output := "output.xlsx"
    existingExcel := "existing.xlsx"

    // 把 CSV 檔案轉換成 Excel 檔案
    csvxl.CsvToExcel(csvFiles, sheetNames, output, csvxl.UTF8)

    // 把 CSV 檔案附加到現有 Excel 檔案中
    csvxl.AppendCsvToExcel(csvFiles, sheetNames, existingExcel)

    excelFile := "input.xlsx"
    outputDir := "csv_output"
    csvNames := []string{"custom1.csv", "custom2.csv"} // 可選: 指定輸出 CSV 檔案的名稱

    // 把 Excel 檔案分割成多個 CSV 檔案
    csvxl.ExcelToCsv(excelFile, outputDir, csvNames)
}
`,
                            codeBlock: true,
                            codeLanguage: 'go',
                            copyButtonText: '複製',
                        },
                    },
                },
                {
                    title: 'py',
                    subTitle: '借助 Python 的功能',
                    descriptions: {
                        first:
                            `無需手動安裝 Python 環境和相依性就能 <strong>在 Go 中執行 Python 程式碼</strong>，允許在 Go 和 Python 之間傳遞變數。`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/py.md">py 套件包說明文件</a>',
                    },
                    collapses: {
                        first: {
                            title: '使用範例',
                            content:
                                `package main

import (
	"github.com/HazelnutParadise/insyra"
	"github.com/HazelnutParadise/insyra/py"
)

func main() {
	// Create DataList
	xData := insyra.NewDataList(45, 50, 55, 60, 65, 70, 75, 80, 85, 90)
	yData := insyra.NewDataList(110, 120, 135, 145, 150, 160, 170, 180, 190, 200)

	// Submit Code to Python
	py.RunCodef(\`
x = np.array($v1)
y = np.array($v2)

sns.set(style="whitegrid")

sns.scatterplot(x=x, y=y)

plt.title("Scatter Plot from Go DataList")
plt.xlabel("X Values")
plt.ylabel("Y Values")

plt.show()
\`, xData.Data(), yData.Data())
}`,
                            codeBlock: true,
                            codeLanguage: 'go',
                            copyButtonText: '複製',
                        },
                    }
                }
            ],
        },
    },
    HowToUse: {
        title: '開始使用 Insyra',
        subtitle: '探索次世代資料分析體驗',
        installationSection: {
            title: '安裝 Insyra',
            description: '在終端機中執行以下指令來安裝 Insyra：',
            goBeginner: {
                text: 'Go 初學者？',
                link: 'https://github.com/HazelnutParadise/insyra/blob/main/README_TW.md#%E8%87%B4%E5%88%9D%E5%AD%B8%E8%80%85',
            },
        },
        ideSection: {
            title: '專屬 IDE：Idensyra',
            description: 'Idensyra 是一個內建 Insyra 及 Go 直譯器的簡易 IDE。無需安裝 Go 環境即可使用 Insyra 進行資料分析！',
            downloadButton: {
                text: '下載 Idensyra',
            },
            repo: {
                text: '查看 Idensyra 原始碼',
                link: 'https://github.com/HazelnutParadise/idensyra',
            },
            guiMode: {
                title: 'GUI 模式',
                description: '基於 Fyne 的圖形界面',
                features: [
                    '即時運行功能',
                    '程式碼及執行結果儲存',
                    '切換至 WebUI 模式 (程式碼自動帶入)',
                ],
            },
            webMode: {
                title: 'WebUI 模式',
                description: '基於 monaco-editor 的網頁界面',
                features: [
                    '語法凸顯（Syntax Highlighting）',
                    '自動補全（Auto Complete）',
                    '切換至 GUI 模式 (程式碼自動帶入)',
                ],
            },
            features: [
                {
                    icon: '⚡',
                    title: '無需環境',
                    description: '內建 Go 運行環境',
                },
                {
                    icon: '🎯',
                    title: '開箱即用',
                    description: '內建 Insyra，隨寫隨用',
                },
                {
                    icon: '▶️',
                    title: '即時執行',
                    description: '支援程式碼即時執行',
                },
                {
                    icon: '🎨',
                    title: '雙介面模式',
                    description: 'GUI/WebUI 隨心切換',
                },

            ],
        },
        quickLinks: {
            title: '立刻開始分析工作',
            description: '想立即開始使用 Insyra？透過線上聊天或 MCP 伺服器與 AI 互動，取得即時協助。',
            chat: {
                text: '與 AI 對談',
                link: 'https://context7.com/hazelnutparadise/insyra?tab=chat',
            },
            mcp: {
                text: 'MCP 伺服器',
                link: 'https://gitmcp.io/HazelnutParadise/insyra',
            },
        },
    },
    Contact: {
        title: '聯絡我們',
        description: '我們歡迎任何形式的貢獻！<br/>如果您有興趣加入 Insyra 的開發，或有任何問題、建議，請隨時透過以下方式聯絡我們。',
        contribution: {
            title: '加入貢獻',
            description: 'Insyra 是一個開源項目，我們熱切期待您的貢獻！不論是程式碼、文件改進或是問題回饋，任何幫助都會讓 Insyra 變得更好。',
            repositoryText: 'GitHub 儲存庫',
            supportText: '支援文件',
        },
        discord: {
            title: '加入我們的 Discord',
            description: '若您有任何疑問或建議，歡迎加入以下 Discord 伺服器與我們互動：',
            servers: [
                {
                    name: '榛果繽紛樂 Insyra 討論區',
                    url: 'https://discord.gg/wP27cpfz',
                },
                {
                    name: 'Side Project Taiwan 中的 Insyra 討論區',
                    url: 'https://discord.com/channels/1205906503073140776/1280539658551558368',
                },
            ],
        },
    },
    WhyInsyra: {
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
                description: '<h3>Pandas DataFrame：醜、亂、難對齊</h3><p>Pandas 的 DataFrame 顯示簡直是視覺噩夢。當你 print 一個 DataFrame 時，會面臨：</p><ul><li><strong>格式醜陋</strong>：單調的灰色、白色表格，毫無美感可言</li><li><strong>對齊困難</strong>：列寬度固定，數據無法自動適應，長字符被截斷或超出邊界</li><li><strong>換行問題</strong>：長數據行會破壞整個表格視覺，導致閱讀困難</li><li><strong>無色彩區分</strong>：所有數據顏色相同，難以快速識別不同資料型態</li></ul><h3>Insyra：彩色、自動對齊、智能換行</h3><p>相比之下，Insyra 的資料顯示設計完全不同：</p><ul><li><strong>彩色呈現</strong>：根據資料型態（數字、文字、日期等）使用不同顏色區分，視覺上清晰易讀</li><li><strong>自動對齊</strong>：無論資料長度如何，Insyra 會自動計算最佳列寬，讓所有數據完美對齊</li><li><strong>智能換行</strong>：長文本自動換行，從不破壞表格結構，始終保持整潔的視覺效果</li><li><strong>現代美感</strong>：採用現代設計語言，輸出結果賞心悅目</li></ul>',
            },
        },
        goEfficiency: {
            title: 'Go 語言的節能優勢與永續發展',
            description: '<p>在當今全球面臨氣候變遷的時代，軟體開發者的責任不僅止於功能實現，更應考慮其環境影響。Insyra 基於 Go 語言開發，這個選擇直接關乎我們的環保使命。</p><h3>1. 能源效率與碳足跡</h3><p>Go 語言以其卓越的效能與記憶體管理而聞名。<a href="https://greenlab.di.uminho.pt/wp-content/uploads/2017/09/paperSLE.pdf" target="_blank">來自葡萄牙 Minho 大學的研究報告</a>（比較 27 種程式語言）明確指出，<strong>Go 的能耗遠低於 Python</strong>。該研究發現，在執行時間、記憶體使用量與能源消耗三個方面，Go 都大幅優於 Python。這意味著每一次數據查詢、每一回資料分析，都能顯著減少電力消耗與對應的碳排放。</p><p>當您使用 Insyra 進行大規模資料分析時，節省的不僅是運算時間，更是實實在在的電力——這直接轉化為<strong>降低企業碳足跡</strong>與<strong>減少能源成本</strong>。</p><h3>2. 聯合國永續發展目標（SDGs）的實踐</h3><p>Insyra 與 Go 語言的選擇與<strong>聯合國永續發展目標（Sustainable Development Goals, SDGs）</strong>高度契合，尤其是以下三個核心目標：</p><ul><li><strong>SDG 7 - 負擔得起的清潔能源（Affordable and Clean Energy）</strong><br/>使用高效能的資料分析工具，減少運算過程中的能源消耗，是達成全球清潔能源轉型的一環。Insyra 幫助企業在進行資料分析時消耗更少電力，進而降低依賴化石燃料的需求。</li><li><strong>SDG 12 - 負責任的消費與生產（Responsible Consumption and Production）</strong><br/>軟體的高效性就是負責任的生產。選擇能源高效的資料分析解決方案，意味著更少的伺服器負荷、更少的冷卻系統運轉、更少的資源浪費。Insyra 的高效設計正是這一目標的實踐。</li><li><strong>SDG 13 - 氣候行動（Climate Action）</strong><br/>每一項減少碳排放的努力都很重要。通過使用能源高效的工具，開發者與企業主動參與全球氣候行動。Insyra 讓您的資料分析工作與全球氣候保護目標相互呼應。</li></ul><h3>3. 具體的節能數據與性能對比</h3><p>根據 Minho 大學的研究報告：</p><ul><li><strong>記憶體效率</strong>：Go 平均記憶體使用量約 69 MB，相比 Python 的 437 MB，效率優勢顯著。</li><li><strong>執行速度</strong>：Go 的編譯型特性使其執行時間遠快於直譯型的 Python，通常快數十倍，直接降低 CPU 時間與隨之而來的能耗。</li><li><strong>能源消耗</strong>：Python 屬於較耗能的直譯語言，而 Go 表現優異，僅次於 C、Rust 等編譯型高效能語言。</li><li><strong>並行處理能力</strong>：Go 語言的 goroutine 機制使並行任務執行更輕量高效，減少系統開銷。</li></ul><h3>4. 企業與個人開發者的雙贏</h3><p>選擇 Insyra 帶來三重優勢：</p><ul><li><strong>成本節省</strong>：降低伺服器電力消耗，直接減少企業運營成本。</li><li><strong>性能提升</strong>：更快的執行速度意味著更高的工作效率與用戶滿意度。</li><li><strong>環境責任</strong>：成為企業永續發展承諾的具體實踐，提升品牌形象與社會責任評級。</li></ul><h3>5. 未來願景：構建永續的資料生態</h3><p>在資料驅動的時代，我們相信軟體工程應該為環境負責。Insyra 不僅是一個資料分析工具，更是<strong>建立永續發展資料生態的一步</strong>。我們鼓勵全球開發者與企業採用高效能的技術棧，共同為達成聯合國 SDGs 貢獻力量。</p><p>使用 Insyra，您不只是選擇更快、更簡單的資料分析方式，更是選擇<strong>保護地球、建設未來</strong>的行動。</p>',
        },
    },
};
