export const Features = {
  title: "Features",
  description:
    "Insyra provides a variety of powerful features to meet your data analysis needs.",
  readDocs: {
    title: "Welcome to Visit Our Documentation",
    description:
      "Insyra is designed to be easy to use without needing to read the documentation. You can fully rely on the auto-completion feature of your editor to operate. However, if you want to learn more details, our documentation on GitHub provides detailed information and examples.<br/><br/>GoDoc is also available for those who prefer a more concise and Go-like documentation style.",
    docsButton: {
      docs: {
        title: "Documentation on GitHub",
        link: "https://hazelnutparadise.github.io/insyra/#/",
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
      "Insyra provides two core data structures: DataList and DataTable. We strongly recommend using the isr syntax sugar for a more concise experience.",
    dataList: {
      description:
        "DataList is the foundation of Insyra, used to process single-dimensional data. It has the ability to quickly retrieve data, clean data, convert data types, and calculate simple statistical values.",
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
      description:
        "DataTable is used to process multi-dimensional data. It can handle data from different sources and perform various operations, such as filtering, sorting, and calculating statistical values.",
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
        "Insyra provides a powerful Column Calculation Language (CCL) that works just like Excel formulas! With CCL, you can easily create calculated columns, perform conditional logic, and execute aggregation operations.",
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
  packagesSection: {
    title: "Sub Packages",
    packages: [
      {
        title: "isr",
        subTitle: "Syntax Sugar",
        descriptions: {
          first: `The <strong>isr</strong> package provides syntax sugar for Insyra, allowing you to write code more concisely and intuitively. It simplifies the process of creating and manipulating DataList and DataTable objects, making your code cleaner and easier to read.
                            <br/>
                            <strong>isr</strong> is the abbreviation for <strong>Insyra</strong>.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/isr">isr package documentation</a>',
        },
      },
      {
        title: "datafetch",
        subTitle: "Data Fetching",
        descriptions: {
          first: `Provides data retrieval function, currently Google Maps Store reviews can be obtained.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/datafetch">datafetch package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
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
            codeLanguage: "go",
            copyButtonText: "Copy",
          },
        },
      },
      {
        title: "stats",
        subTitle: "Statistics",
        descriptions: {
          first: `Provide various statistical functions, including skewness, kurtosis, and principal component analysis, etc.<br/>
<br/>
We strive to design it to be consistent with the calculation results of <strong>R language</strong>.`,
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
          first: `Provide functions for parallel processing, allowing you to group multiple tasks and execute them simultaneously on multiple CPU cores, easily improving data processing efficiency.<br/>
<br/>
The parallel package will automatically handle the waiting between parallel coroutines and return the results in the order of the tasks, so you don't need to write additional complex code.`,
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
          first: `Integrate the <a target="_blank" href="https://github.com/go-echarts/go-echarts">go-echarts</a> visualization library, providing various charts to easily create beautiful visualizations for your analysis.<br/>
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
	"github.com/HazelnutParadise/insyra/isr"
	"github.com/HazelnutParadise/insyra/plot"
)

func main() {
	// Create DataList objects for different products
	dataListA := isr.DL.Of(120, 200, 150).SetName("Product A")
	dataListB := isr.DL.Of(80, 160, 90).SetName("Product B")

	config := plot.BarChartConfig{
		Title:      "Sales Data",
		Subtitle:   "Monthly Sales",
		XAxis:      []string{"January", "February", "March"},
		XAxisName:  "Month",
		YAxisName:  "Sales",
		ShowLabels: true,
		Colors:     []string{"#5470C6", "#91CC75"},
	}

	// Create a bar chart
	barChart := plot.CreateBarChart(config, dataListA, dataListB)

	// Save the chart as an HTML file
	plot.SaveHTML(barChart, "sales_data.html")

	// Save the chart as a PNG file
	plot.SavePNG(barChart, "sales_data.png")
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
          first: `Use the <a target="_blank" href="https://github.com/gonum/plot">gonum/plot</a> data visualization package, providing various charts. It is faster, but the chart style is more simple. <strong>Does not support non-ASCII characters</strong>.<br/>
<br/>
<img src="https://hazelnutparadise.github.io/insyra/img/gplot_bar_example.png" style="width: 100%;" alt="gplot package example chart" />`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/gplot">gplot package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
            content: `import (
	"github.com/HazelnutParadise/insyra"
	"github.com/HazelnutParadise/insyra/gplot"
	"github.com/HazelnutParadise/insyra/isr"
)

func main() {
	dl := isr.DL.Of(1 ,2 ,3 ,4)
	config := gplot.BarChartConfig{
		Title: "The title of the chart.",
		XAxis: []string{"A", "B", "C", "D"},
		Data: dl,
		XAxisName: "categories",
		YAxisName: "values",
	}
	chart := gplot.CreateBarChart(config)
	gplot.SaveChart(chart, "example.png")
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
          first: `Provide marketing analysis functions, including RFM analysis, to help you gain insights into customer behavior and develop effective marketing strategies.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/mkt">mkt package documentation</a>',
        },
      },
      {
        title: "lpgen",
        subTitle: "Linear Programming Model Generation",
        descriptions: {
          first: `Provide a function to generate linear programming models, allowing you to easily create linear programming models and save them as <strong>.lp</strong> files for use with solving software.`,
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
          first: `Provide functions to solve linear programming models, allowing you to easily solve linear programming models and obtain the optimal solution. Powered by <a target="_blank" href="https://www.gnu.org/software/glpk/">GLPK</a>. <strong>This package will automatically download and install GLPK when it is used.</strong>`,
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
    result.ToCSV("solution.csv", false, false)
    info.ToCSV("info.csv", true, true)
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
          first: `Provide functions to convert between CSV and Excel files.`,
          end: '<a target="_blank" href="https://hazelnutparadise.github.io/insyra/#/csvxl">csvxl package documentation</a>',
        },
        collapses: {
          first: {
            title: "Example",
            content: `package main

import (
    "github.com/HazelnutParadise/csvxl"
)

func main() {
    csvFiles := []string{"file1.csv", "file2.csv", "file3.csv"}
    sheetNames := []string{"Sheet1", "Sheet2", "Sheet3"} // Optional: If not provided, CSV filenames will be used as sheet names
    output := "output.xlsx"
    existingExcel := "existing.xlsx"

    // Convert CSV files to an Excel file
    csvxl.CsvToExcel(csvFiles, sheetNames, output, csvxl.UTF8)

    // Append CSV files to an existing Excel file
    csvxl.AppendCsvToExcel(csvFiles, sheetNames, existingExcel)

    excelFile := "input.xlsx"
    outputDir := "csv_output"
    csvNames := []string{"custom1.csv", "custom2.csv"} // Optional: Specify names for the output CSV files

    // Split the Excel file into multiple CSV files
    csvxl.ExcelToCsv(excelFile, outputDir, csvNames)
}
`,
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
          first: `Without manually installing the Python environment and dependencies, you can <strong>execute Python code within Go</strong>, allowing variables to be passed between Go and Python.`,
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
          first: `Provides read and write support for Apache Parquet file format, deeply integrated with Insyra's DataTable and DataList. Supports streaming reads, column-level reads, and CCL filtering.`,
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
    dt, err := parquet.ReadFile(ctx, "data.parquet")
    if err != nil {
        panic(err)
    }

    // Filter data using CCL while reading
    filteredDt, err := parquet.FilterWithCCL(ctx, "sales.parquet",
        "(['amount'] > 1000) && (['status'] = 'Active')")
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
    ],
  },
};
