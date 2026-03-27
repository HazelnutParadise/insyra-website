export const Features = {
  title: "Features",
  description:
    "Explore the current Insyra workflow: core data structures, CLI automation, AI-ready skills, guided tutorials, and the package ecosystem behind them.",
  readDocs: {
    title: "Start with the Right Entry Point",
    description:
      "The current public release of Insyra is best explored through the official documentation hub. From there you can move into the CLI guide, guided tutorials, or concise Go package references depending on how you prefer to learn and work.",
    docsButton: {
      docs: {
        title: "Official Docs",
        link: "https://hazelnutparadise.github.io/insyra/",
      },
      cliGuide: {
        title: "CLI Guide",
        link: "https://hazelnutparadise.github.io/insyra/#/cli-dsl",
      },
      tutorials: {
        title: "Tutorials",
        link: "https://hazelnutparadise.github.io/insyra/#/tutorials/README",
      },
      goDoc: {
        title: "GoDoc",
        link: "https://pkg.go.dev/github.com/HazelnutParadise/insyra",
      },
    },
  },
  coreStructures: {
    title: "Core Structures",
    description:
      "Insyra revolves around DataList, DataTable, and CCL. Together they cover quick previews, table manipulation, and Excel-like derived-column logic for everyday analysis in Go.",
    dataList: {
      title: "DataList",
      description:
        "DataList is the series-style foundation of Insyra. Use it for one-dimensional data, quick summaries, cleaning, type conversion, ranking, and lightweight transformations.",
      collapse: {
        title: "DataList",
        content: `package main

// import Insyra
import (
    "fmt"
    "github.com/HazelnutParadise/insyra/isr" // Use isr sytax sugar package
)

func main() {
    // Create a DataList instance
    dl := isr.DL.Of(1, 2, 3, 4, 5)

    // Calculate the average value and print it out
    fmt.Println("Average:", dl.Mean())
}`,
        copyButtonText: "Copy",
      },
      doc: {
        title: "DataList Documentation",
        link: "https://hazelnutparadise.github.io/insyra/#/DataList",
      },
    },
    dataTable: {
      title: "DataTable",
      description:
        "DataTable is Insyra's tabular workhorse. Load, inspect, sort, filter, summarize, and export structured datasets while keeping a fluent workflow inside Go.",
      collapse: {
        title: "DataTable",
        content: `package main

// import Insyra
import (
	"github.com/HazelnutParadise/insyra/isr" // Use isr sytax sugar package
)

func main() {
	// Create DataList instances for students, ages, and scores
	students := isr.DL.Of("Jane", "Jim", "John")
	ages := isr.DL.Of(22, 21, 23)
	scores := isr.DL.Of(90, 88, 95)

	// Create a DataTable instance from the DataList instances
	dt := isr.DT.Of(isr.DLs{students, ages, scores})

	// Display the DataTable
	dt.Show()
}`,
        copyButtonText: "Copy",
      },
      doc: {
        title: "DataTable Documentation",
        link: "https://hazelnutparadise.github.io/insyra/#/DataTable",
      },
    },
    ccl: {
      title: "Column Calculation Language (CCL)",
      description:
        "CCL gives Insyra an Excel-like column language for derived fields, conditional branches, row and column references, and reusable logic that also extends into Parquet workflows.",
      collapse: {
        title: "CCL Example",
        content: `package main

import (
    "github.com/HazelnutParadise/insyra/isr"
)

func main() {
    // Create DataTable
    dt := isr.DT.Of(isr.DLs{
        isr.DL.Of(85, 92, 78, 95, 88).SetName("Score"),
        isr.DL.Of(20, 22, 19, 23, 21).SetName("Age"),
    })

    // Add calculated columns using CCL
    dt.AddColUsingCCL("Grade", "IF(A > 90, 'Excellent', IF(A > 80, 'Good', 'Pass'))")
    dt.AddColUsingCCL("Weighted Total", "A + B * 0.5")

    dt.Show()
}`,
        copyButtonText: "Copy",
      },
      doc: {
        title: "CCL Documentation",
        link: "https://hazelnutparadise.github.io/insyra/#/CCL",
      },
    },
  },
  workflowHighlights: {
    title: "Workflow Highlights",
    description:
      "Insyra is now more than a package reference. It includes command-line workflows, agent-facing skills, and tutorial tracks that help users move from quick experiments to repeatable production workflows.",
    items: {
      cli: {
        title: "CLI + REPL + .isr + Go DSL",
        description:
          "Use one command system across shell automation, interactive REPL sessions, reusable .isr scripts, and the Go DSL API.",
        link: "https://hazelnutparadise.github.io/insyra/#/cli-dsl",
      },
      skills: {
        title: "AI / Agent Skills",
        description:
          "Dedicated skills help coding agents choose between API-driven Go usage and CLI-driven workflows without drifting away from the latest docs.",
        link: "https://github.com/HazelnutParadise/insyra#ai--agent-skills",
      },
      tutorials: {
        title: "Guided Tutorials",
        description:
          "Follow practical tracks for sales analysis, data quality, dashboards, Parquet pipelines, optimization, and hybrid Python plus parallel workflows.",
        link: "https://hazelnutparadise.github.io/insyra/#/tutorials/README",
      },
    },
  },
  packagesSection: {
    title: "Packages",
    packages: [
      {
        title: "isr",
        subTitle: "Syntax Sugar",
        descriptions: {
          first: `The <strong>isr</strong> package is the recommended entrypoint for new Insyra projects. It adds concise, fluent syntax for creating and transforming DataList and DataTable workflows without losing access to the underlying package power.
                            <br/>
                            <strong>isr</strong> is the abbreviation for <strong>Insyra</strong>.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/isr">isr package documentation</a>',
        },
      },
      {
        title: "datafetch",
        subTitle: "Data Fetching",
        descriptions: {
          first: `Provides data retrieval utilities including Google Maps Store reviews and Yahoo Finance market data.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/datafetch">datafetch package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
            content: `package main

import (
	"time"

	"github.com/HazelnutParadise/insyra/datafetch"
)

func main() {
	// 1. Initialize Yahoo Finance fetcher
	yf, err := datafetch.YFinance(datafetch.YFinanceConfig{
		Timeout: 10 * time.Second,
	})
	if err != nil {
		panic(err)
	}

	// 2. Fetch historical data as *insyra.DataTable
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
            copyButtonText: "Copy",
          },
        },
      },
      {
        title: "stats",
        subTitle: "Statistics",
        descriptions: {
          first: `Provides practical statistical analysis helpers including skewness, kurtosis, hypothesis testing, regression, PCA, and more.<br/>
<br/>
We strive to keep calculations aligned with <strong>R language</strong> expectations where appropriate.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/stats">stats package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
            content: `package main

import (
    "fmt"
    "github.com/HazelnutParadise/insyra/isr"
    "github.com/HazelnutParadise/insyra/stats"
)

func main() {
    fmt.Println(stats.Skewness(isr.DL.Of(1, 2, 3, 9, 5)))
}`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "Copy",
          },
        },
      },
      {
        title: "parallel",
        subTitle: "Parallel Processing",
        descriptions: {
          first: `Run groups of functions in parallel and collect ordered results with minimal coordination code, making CPU-bound or independent workloads easier to scale.<br/>
<br/>
The <strong>parallel</strong> package handles waiting and result ordering for you, so the workflow stays compact and readable.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/parallel">parallel package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
            content: `package main

import (
	"fmt"
	"github.com/HazelnutParadise/insyra/parallel"
)

func main() {
	// Define functions and store them in variables
	f1 := func() (int, string) { return 42, "Answer to Everything" }
	f2 := func() (string, int) { return "Hello, World!", 2024 }
	f3 := func() ([]int, float64) { return []int{1, 2, 3}, 3.14 }

	// Group the functions and run them in parallel
	pg := parallel.GroupUp(f1, f2, f3).Run()

	// Await results
	results := pg.AwaitResult()

	// Print the results
	fmt.Printf("All tasks completed. Results: %v\\n", results)
	for i, result := range results {
		fmt.Printf("Task %d: %v\\n", i, result)
	}
}
`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "Copy",
          },
        },
      },
      {
        title: "plot",
        subTitle: "Data Visualization",
        descriptions: {
          first: `Wraps <a target="_blank" href="https://github.com/go-echarts/go-echarts">go-echarts</a> for interactive, browser-friendly visualizations when your analysis needs dashboards, rich chart styling, or HTML export.<br/>
<br/>
<img src="https://hazelnutparadise.github.io/insyra/img/plot/bar_example.png" style="width: 100%;" alt="plot package example chart" />`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/plot">plot package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
            content: `package main

import (
	"github.com/HazelnutParadise/insyra"
	"github.com/HazelnutParadise/insyra/plot"
)

func main() {
	// Create data
	sales := insyra.NewDataList(100, 150, 120, 180).SetName("Sales")

	// Create chart configuration
	config := plot.BarChartConfig{
		Title: "Monthly Sales",
		XAxis: []string{"Jan", "Feb", "Mar", "Apr"},
	}

	// Create and save chart
	chart := plot.CreateBarChart(config, sales)
	plot.SaveHTML(chart, "sales.html")

	// Or save as PNG (requires Chrome/Chromium)
	plot.SavePNG(chart, "sales.png")
}`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "Copy",
          },
        },
      },
      {
        title: "gplot",
        subTitle: "Data Visualization",
        descriptions: {
          first: `Build static charts with <a target="_blank" href="https://github.com/gonum/plot">gonum/plot</a> when you want faster local rendering, report-style output, and no Chrome dependency. <strong>Does not support non-ASCII characters</strong>.<br/>
<br/>
<img src="https://hazelnutparadise.github.io/insyra/img/gplot_bar_example.png" style="width: 100%;" alt="gplot package example chart" />`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/gplot">gplot package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
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
            copyButtonText: "Copy",
          },
        },
      },
      {
        title: "mkt",
        subTitle: "Marketing Analysis",
        descriptions: {
          first: `Analyze customer behavior with marketing-focused helpers such as RFM analysis and Customer Activity Index style workflows for segmentation and prioritization.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/mkt">mkt package documentation</a>',
        },
      },
      {
        title: "lpgen",
        subTitle: "Linear Programming Model Generation",
        descriptions: {
          first: `Generate linear programming models in a simpler, more readable way, then save them as <strong>.lp</strong> files for solver workflows or downstream optimization tooling.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/lpgen">lpgen package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
            content: `package main

import (
	"github.com/HazelnutParadise/insyra/lpgen"
)

func main() {
	// Create a new linear programming model
	lpModel := lpgen.NewLPModel()

	// Set objective function to maximize
	lpModel.SetObjective("Maximize", "3 x1 + 4 x2")

	// Add constraints
	lpModel.AddConstraint("2 x1 + 3 x2 <= 20")
	lpModel.AddConstraint("4 x1 + 2 x2 <= 30")

	// Add bounds for variables
	lpModel.AddBound("0 <= x1 <= 10")
	lpModel.AddBound("0 <= x2 <= 10")

	// Add integer and binary variables
	lpModel.AddIntegerVar("x1")
	lpModel.AddBinaryVar("x2")

	// Generate LP file
	lpModel.GenerateLPFile("my_model.lp")
}`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "Copy",
          },
        },
      },
      {
        title: "lp",
        subTitle: "Linear Programming Model Solving",
        descriptions: {
          first: `Solve LP models directly from Insyra with <a target="_blank" href="https://www.gnu.org/software/glpk/">GLPK</a>-powered tooling. <strong>This package will automatically download and install GLPK when it is used.</strong>`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/lp">lp package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
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
            copyButtonText: "Copy",
          },
        },
      },
      {
        title: "csvxl",
        subTitle: "CSV and Excel Processing",
        descriptions: {
          first: `Read, write, and convert structured spreadsheet-friendly files, especially when you need quick CSV and Excel interchange.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/csvxl">csvxl package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
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
            copyButtonText: "Copy",
          },
        },
      },
      {
        title: "pd",
        subTitle: "Pandas-like DataFrame",
        descriptions: {
          first: `Pandas-like DataFrame helpers built on top of <a target="_blank" href="https://gpandas.apoplexi.com/docs/">gpandas</a>. Convert between Insyra tables/lists and gpandas objects when you want a DataFrame-style interface in Go.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/pd">pd package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
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
            copyButtonText: "Copy",
          },
        },
      },
      {
        title: "py",
        subTitle: "Python Integration",
        descriptions: {
          first: `Execute Python from Go without manually wiring up the full Python environment, while still passing variables between Insyra and Python code.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/py">py package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
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
	// Create DataList (set a name so pandas.Series will have a name)
	xData := isr.DL.Of(45, 50, 55, 60, 65, 70, 75, 80, 85, 90).SetName("X Values")
	yData := isr.DL.Of(110, 120, 135, 145, 150, 160, 170, 180, 190, 200).SetName("Y Values")

	// Submit Code to Python
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
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Result:", result)
	}
}`,
            codeBlock: true,
            codeLanguage: "go",
            copyButtonText: "Copy",
          },
        },
      },
      {
        title: "parquet",
        subTitle: "Parquet File Support",
        descriptions: {
          first: `Read and write Apache Parquet with deep integration into Insyra's DataTable and DataList workflows, including streaming reads, column selection, and CCL-based filtering.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/parquet">parquet package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
            content: `package main

import (
    "context"
    "github.com/HazelnutParadise/insyra/parquet"
)

func main() {
    ctx := context.Background()

    // Read DataTable from Parquet file
    dt, err := parquet.Read(ctx, "data.parquet", parquet.ReadOptions{})
    if err != nil {
        panic(err)
    }

    // Filter data using CCL while reading
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
            copyButtonText: "Copy",
          },
        },
      },
      {
        title: "engine",
        subTitle: "Advanced Reusable Primitives",
        descriptions: {
          first: `The <strong>engine</strong> package exports selected internal Insyra implementations for developers who want reusable primitives such as atomic helpers, CCL tooling, and lower-level building blocks in other Go projects.`,
          end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/tree/main/engine">engine package documentation</a>',
        },
      },
    ],
  },
};
