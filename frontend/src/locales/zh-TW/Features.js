export const Features = {
  title: "功能",
  description: "從核心資料結構到 CLI、自動化、agent skills 與教學路線，這裡整理的是目前 Insyra 的完整工作流。",
  readDocs: {
    title: "從正確的入口開始",
    description:
      "目前公開版本的 Insyra 最適合從官方文件入口開始認識。您可以先讀完整 docs，再延伸到 CLI 指南、主題式 tutorials，或用 GoDoc 快速查詢套件介面。",
    docsButton: {
      docs: {
        title: "官方文件",
        link: "https://hazelnutparadise.github.io/insyra/",
      },
      cliGuide: {
        title: "CLI 指南",
        link: "https://hazelnutparadise.github.io/insyra/#/cli-dsl",
      },
      tutorials: {
        title: "教學總覽",
        link: "https://hazelnutparadise.github.io/insyra/#/tutorials/README",
      },
      goDoc: {
        title: "GoDoc",
        link: "https://pkg.go.dev/github.com/HazelnutParadise/insyra",
      },
    },
  },
  coreStructures: {
    title: "核心資料結構",
    description:
      "Insyra 以 DataList、DataTable 與 CCL 三個核心能力組成日常資料工作流，涵蓋快速預覽、表格處理與 Excel 風格欄位公式。",
    dataList: {
      title: "DataList",
      description:
        "DataList 是 Insyra 的序列型核心結構，適合單一維度資料的摘要、清理、型別轉換、排序與輕量轉換。",
      collapse: {
        title: "使用範例",
        content: `package main

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
        copyButtonText: "複製",
      },
      doc: {
        title: "DataList 說明文件",
        link: "https://hazelnutparadise.github.io/insyra/#/DataList",
      },
    },
    dataTable: {
      title: "DataTable",
      description:
        "DataTable 是 Insyra 的表格型主力結構，能在 Go 內完成載入、檢視、排序、篩選、摘要與匯出等完整分析流程。",
      collapse: {
        title: "使用範例",
        content: `package main

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
        copyButtonText: "複製",
      },
      doc: {
        title: "DataTable 說明文件",
        link: "https://hazelnutparadise.github.io/insyra/#/DataTable",
      },
    },
    ccl: {
      title: "Column Calculation Language (CCL)",
      description:
        "CCL 讓 Insyra 擁有類似 Excel 的欄位公式語言，可處理衍生欄位、條件判斷、列欄參照與聚合邏輯，並延伸到 Parquet 工作流。",
      collapse: {
        title: "使用範例",
        content: `package main

import (
    "github.com/HazelnutParadise/insyra/isr"
)

func main() {
    // 建立 DataTable
    dt := isr.DT.Of(isr.DLs{
        isr.DL.Of(85, 92, 78, 95, 88).SetName("分數"),
        isr.DL.Of(20, 22, 19, 23, 21).SetName("年齡"),
    })

    // 使用 CCL 新增計算欄位
    dt.AddColUsingCCL("等級", "IF(A > 90, '優秀', IF(A > 80, '良好', '及格'))")
    dt.AddColUsingCCL("總分加權", "A + B * 0.5")

    dt.Show()
}`,
        copyButtonText: "複製",
      },
      doc: {
        title: "CCL 說明文件",
        link: "https://hazelnutparadise.github.io/insyra/#/CCL",
      },
    },
  },
  workflowHighlights: {
    title: "工作流亮點",
    description:
      "現在的 Insyra 不只是套件清單，還包含命令列工作流、給 agent 的 skills，以及從實例場景出發的教學路線。",
    items: {
      cli: {
        title: "CLI + REPL + .isr + Go DSL",
        description:
          "用同一套指令系統覆蓋 shell 自動化、互動式 REPL、可重複執行的 .isr 腳本，以及程式內嵌的 Go DSL API。",
        link: "https://hazelnutparadise.github.io/insyra/#/cli-dsl",
      },
      skills: {
        title: "AI / Agent Skills",
        description:
          "專用 skills 可幫助 coding agent 在 API 型 Go 用法與 CLI 型工作流之間做正確選擇，並跟上最新文件。",
        link: "https://github.com/HazelnutParadise/insyra#ai--agent-skills",
      },
      tutorials: {
        title: "主題式教學",
        description:
          "從銷售分析、資料品質、儀表板、Parquet 管線、最佳化，到 Python 與 parallel 混合流程，都有可跟著做的主題教學。",
        link: "https://hazelnutparadise.github.io/insyra/#/tutorials/README",
      },
    },
  },
  packagesSection: {
    title: "套件生態",
    packages: [
      {
        title: "isr",
        subTitle: "語法糖",
        descriptions: {
          first: `對新的 Insyra 專案來說，<strong>isr</strong> 是最推薦的入口。它用更精簡、流暢的語法包住 DataList 與 DataTable 常見操作，提升可讀性與撰寫效率。
                            <br/>
                            <strong>isr</strong> 是 <strong>Insyra</strong> 的縮寫。`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/isr">isr 套件包說明文件</a>',
        },
      },
      {
        title: "datafetch",
        subTitle: "資料獲取",
        descriptions: {
          first: `提供資料獲取功能，包含 Google 地圖商家評論與 Yahoo Finance 市場資料。`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/datafetch">datafetch 套件包說明文件</a>',
        },
        collapses: {
          first: {
            title: "使用範例",
            content: `package main

import (
	"time"

	"github.com/HazelnutParadise/insyra/datafetch"
)

func main() {
	// 1. 初始化 Yahoo Finance 抓取器
	yf, err := datafetch.YFinance(datafetch.YFinanceConfig{
		Timeout: 10 * time.Second,
	})
	if err != nil {
		panic(err)
	}

	// 2. 以 DataTable 形式抓取歷史資料
	history, err := yf.Ticker("AAPL").History(datafetch.YFHistoryParams{
		Period:   "1mo",
		Interval: "1d",
	})
	if err != nil {
		panic(err)
	}

	history.Show()
}
`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "複製",
          },
        },
      },
      {
        title: "stats",
        subTitle: "統計",
        descriptions: {
          first: `提供實用的統計分析工具，包含偏度、峰度、假設檢定、回歸分析、PCA 等常見工作。<br/>
<br/>
我們也盡量讓結果在合理範圍內與 <strong>R 語言</strong> 的使用習慣保持一致。`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/stats">stats 套件包說明文件</a>',
        },
        collapses: {
          first: {
            title: "使用範例",
            content: `package main

import (
    "fmt"
    "github.com/HazelnutParadise/insyra/isr"
    "github.com/HazelnutParadise/insyra/stats"
)

func main() {
    dl := isr.DL.Of(1, 2, 3, 9, 5)
    fmt.Println("偏度:", stats.Skewness(dl))
}`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "複製",
          },
        },
      },
      {
        title: "parallel",
        subTitle: "平行處理",
        descriptions: {
          first: `將多個函式組成群組並平行執行，適合 CPU 密集或彼此獨立的工作，讓資料流程更容易擴展。<br/>
<br/>
<strong>parallel</strong> 會自動處理等待與結果順序，讓程式碼保持簡潔。`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/parallel">parallel 套件包說明文件</a>',
        },
        collapses: {
          first: {
            title: "使用範例",
            content: `package main

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
            codeLanguage: "go",
            copyButtonText: "複製",
          },
        },
      },
      {
        title: "plot",
        subTitle: "資料視覺化",
        descriptions: {
          first: `封裝 <a target="_blank" href="https://github.com/go-echarts/go-echarts">go-echarts</a>，適合建立互動式、可匯出 HTML 的圖表與儀表板。<br/>
<br/>
<img src="https://hazelnutparadise.github.io/insyra/img/plot/bar_example.png" style="width: 100%;" alt="plot 套件包範例圖表" />`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/plot">plot 套件包說明文件</a>',
        },
        collapses: {
          first: {
            title: "使用範例",
            content: `package main

import (
	"github.com/HazelnutParadise/insyra"
	"github.com/HazelnutParadise/insyra/plot"
)

func main() {
	// 建立資料
	sales := insyra.NewDataList(100, 150, 120, 180).SetName("Sales")

	// 建立圖表設定
	config := plot.BarChartConfig{
		Title: "Monthly Sales",
		XAxis: []string{"Jan", "Feb", "Mar", "Apr"},
	}

	// 建立並儲存圖表
	chart := plot.CreateBarChart(config, sales)
	plot.SaveHTML(chart, "sales.html")

	// 或儲存為 PNG（需有 Chrome/Chromium）
	plot.SavePNG(chart, "sales.png")
}`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "複製",
          },
        },
      },
      {
        title: "gplot",
        subTitle: "資料視覺化",
        descriptions: {
          first: `基於 <a target="_blank" href="https://github.com/gonum/plot">gonum/plot</a> 建立靜態圖表，適合快速產出報表圖片，且不依賴 Chrome。<strong>不支援非 ASCII 字元</strong>。<br/>
<br/>
<img src="https://hazelnutparadise.github.io/insyra/img/gplot_bar_example.png" style="width: 100%;" alt="gplot 套件包範例圖表" />`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/gplot">gplot 套件包說明文件</a>',
        },
        collapses: {
          first: {
            title: "使用範例",
            content: `package main

import "github.com/HazelnutParadise/insyra/gplot"

func main() {
	config := gplot.BarChartConfig{
		Title: "Monthly Sales",
		XAxis: []string{"Jan", "Feb", "Mar", "Apr"},
	}
	data := []float64{100, 150, 120, 180}
	plt := gplot.CreateBarChart(config, data)
	gplot.SaveChart(plt, "sales.png")
}`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "複製",
          },
        },
      },
      {
        title: "mkt",
        subTitle: "行銷分析",
        descriptions: {
          first: `提供行銷與顧客分析相關工具，例如 RFM 與 Customer Activity Index 類型工作流，幫助分群與優先排序。`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/mkt">mkt 套件包說明文件</a>',
        },
      },
      {
        title: "lpgen",
        subTitle: "線性規劃模型生成",
        descriptions: {
          first: `用更直觀的方式建立線性規劃模型，並輸出為 <strong>.lp</strong> 檔案，方便串接求解器或後續最佳化流程。`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/lpgen">lpgen 套件包說明文件</a>',
        },
        collapses: {
          first: {
            title: "使用範例",
            content: `package main

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
            codeLanguage: "go",
            copyButtonText: "複製",
          },
        },
      },
      {
        title: "lp",
        subTitle: "線性規劃求解",
        descriptions: {
          first: `使用 <a target="_blank" href="https://www.gnu.org/software/glpk/">GLPK</a> 直接在 Insyra 內求解 LP 模型。<strong>此套件包會自動幫您安裝 GLPK</strong>，無需額外設定。`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/lp">lp 套件包說明文件</a>',
        },
        collapses: {
          first: {
            title: "使用範例",
            content: `package main

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
    result.ToCSV("solution.csv", false, false, false)
    info.ToCSV("info.csv", true, true, false)
}`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "複製",
          },
        },
      },
      {
        title: "csvxl",
        subTitle: "CSV 與 Excel 處理",
        descriptions: {
          first: `處理 CSV 與 Excel 之間的讀寫與轉換，適合做快速匯入匯出與報表交換。`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/csvxl">csvxl 套件包說明文件</a>',
        },
        collapses: {
          first: {
            title: "使用範例",
            content: `package main

import (
    "log"
    "github.com/HazelnutParadise/insyra/csvxl"
)

func main() {
    csvFiles := []string{"file1.csv", "file2.csv"}
    if err := csvxl.CsvToExcel(csvFiles, nil, "output.xlsx"); err != nil {
        log.Fatal(err)
    }
}
`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "複製",
          },
        },
      },
      {
        title: "pd",
        subTitle: "Pandas 風格 DataFrame",
        descriptions: {
          first: `基於 <a target="_blank" href="https://gpandas.apoplexi.com/docs/">gpandas</a> 的 Pandas 風格 DataFrame 工具，可在 Insyra 的表格/清單與 gpandas 物件之間快速轉換。`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/pd">pd 套件包說明文件</a>',
        },
        collapses: {
          first: {
            title: "使用範例",
            content: `package main

import (
	"log"

	"github.com/HazelnutParadise/insyra/isr"
	"github.com/HazelnutParadise/insyra/pd"
)

func main() {
	dt := isr.DT.Of(isr.DLs{
		isr.DL.Of("Alice", "Bob").SetName("name"),
		isr.DL.Of(30, 25).SetName("age"),
	})

	df, err := pd.FromDataTable(dt)
	if err != nil {
		log.Fatal(err)
	}

	back, err := df.ToDataTable()
	if err != nil {
		log.Fatal(err)
	}

	back.Show()
}`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "複製",
          },
        },
      },
      {
        title: "py",
        subTitle: "借助 Python 的功能",
        descriptions: {
          first: `無需手動串接完整 Python 環境，就能 <strong>在 Go 中執行 Python 程式碼</strong>，並在 Insyra 與 Python 之間傳遞變數。`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/py">py 套件包說明文件</a>',
        },
        collapses: {
          first: {
            title: "使用範例",
            content: `package main

import (
	"fmt"
	"github.com/HazelnutParadise/insyra/isr"
	"github.com/HazelnutParadise/insyra/py"
)

type PlotResult struct {
	Success bool   \`json:"success"\`
	Message string \`json:"message"\`
}

func main() {
	// 建立 DataList 並設定名稱（名稱會在轉成 pandas.Series 時保留）
	xData := isr.DL.Of(45, 50, 55, 60, 65, 70, 75, 80, 85, 90).SetName("X Values")
	yData := isr.DL.Of(110, 120, 135, 145, 150, 160, 170, 180, 190, 200).SetName("Y Values")

	// 提交 Python 程式碼並取得回傳結果
	var result PlotResult
	err := py.RunCodef(&result, \`
x = $v1
y = $v2

sns.set(style="whitegrid")
sns.scatterplot(x=x, y=y)

plt.title($v3)
plt.xlabel($v4)
plt.ylabel($v5)

plt.show()
insyra.Return({"success": True, "message": "Plot created"})
	\`, xData, yData, "Scatter Plot from Go DataList", "X Values", "Y Values")
	if err != nil {
		fmt.Println("錯誤:", err)
	} else {
		fmt.Println("結果:", result)
	}
}`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "複製",
          },
        },
      },
      {
        title: "parquet",
        subTitle: "Parquet 檔案支援",
        descriptions: {
          first: `提供 Apache Parquet 讀寫能力，並與 Insyra 的 DataTable / DataList 深度整合，支援串流、欄位選取與 CCL 篩選。`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/parquet">parquet 套件包說明文件</a>',
        },
        collapses: {
          first: {
            title: "使用範例",
            content: `package main

import (
    "context"
    "github.com/HazelnutParadise/insyra/parquet"
)

func main() {
    ctx := context.Background()

    // 從 Parquet 檔案讀取 DataTable
    dt, err := parquet.Read(ctx, "data.parquet", parquet.ReadOptions{})
    if err != nil {
        panic(err)
    }

    // 使用 CCL 篩選資料並讀取
    filteredDt, err := parquet.FilterWithCCL(ctx, "products.parquet",
        "(['price'] > 100) && (['in_stock'] == true)")
    if err != nil {
        panic(err)
    }

    dt.Show()
    filteredDt.Show()
}`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "複製",
          },
        },
      },
      {
        title: "engine",
        subTitle: "進階可重用底層元件",
        descriptions: {
          first: `<strong>engine</strong> 匯出部分 Insyra 內部實作，適合想在其他 Go 專案中重用 atomic helpers、CCL 工具與更底層 building blocks 的開發者。`,
          end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/tree/main/engine">engine 套件說明</a>',
        },
      },
    ],
  },
};
