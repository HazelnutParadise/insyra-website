export const Features = {
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
    dl := isr.DL.Of(1, 2, 3, 4, 5)

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
	students := isr.DL.Of("Jane", "Jim", "John")
	ages := isr.DL.Of(22, 21, 23)
	scores := isr.DL.Of(90, 88, 95)

	// 建立 DataTable 實例
	dt := isr.DT.Of(isr.DLs{students, ages, scores})

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
};
