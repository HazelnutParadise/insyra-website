export const eng = {
    siteTitle: 'Insyra: The Next-Gen Data Analysis Solution for Golang | Fast, Lovely, Easy to Use',
    navbar: {
        main: 'Meet Insyra',
        whatIsInsyra: 'What is Insyra',
        whyInsyra: 'Why Insyra',
        howToUse: 'How to Use',
        features: 'Features',
        contact: 'Contact',
    },
    Main: {
        hero: {
            slogan: 'Fast, Lovely, Easy to Use',
            title: 'Meet Insyra',
            description: 'Powerful data analysis tools, built for the future.',
            audio: {
                error: 'Your browser does not support the audio player.',
                description: 'Listen to Insyra introduction',
            },
            button: {
                main: 'Get Started',
                secondary1: 'GoDoc',
                secondary2: 'GitHub',
            },
        },  
        featureItemSection: {
            features: {
                feature1: {
                    id: 1,
                    title: 'High-Performance Data Processing',
                    description: 'Thanks to the excellent performance of Golang, Insyra can quickly process large datasets, suitable for scenarios requiring extensive or parallel data calculations, such as <strong>big data analysis</strong>.',
                    learnMore: {
                        href: '#WhyInsyra',
                        text: 'Learn More',
                    },
                },
                feature2: {
                    id: 2,
                    title: 'Intuitive and Simple API',
                    description: 'Insyra provides an <strong>intuitive</strong> and <strong>simple</strong> API interface, allowing you to easily use its powerful features. You can quickly get started and perform complex data operations without needing to understand the internal implementation.',
                    learnMore: {
                        href: '#Features',
                        text: 'Learn More',
                    },
                },
                feature3: {
                    id: 3,
                    title: 'Beautiful Data Visualization',
                    description: 'Insyra integrates the <a href="https://github.com/go-echarts/go-echarts">go-echarts</a> visualization library, offering various types of charts to easily create beautiful visualizations for your analysis.',
                    learnMore: {
                        href: '#Features',
                        text: 'Learn More about <strong>plot</strong> and <strong>gplot</strong> packages',
                    },
                },
                feature4: {
                    id: 4,
                    title: 'Integration with Python',
                    description: 'With Insyra’s py package, you can <strong>execute Python code within Go programs</strong>, leveraging Python’s powerful capabilities for data analysis.',
                    learnMore: {
                        href: '#Features',
                        text: 'Learn More about <strong>py</strong> package',
                    },
                },
                feature5: {
                    id: 5,
                    title: 'Dedicated IDE',
                    description: 'We provide a <strong>dedicated</strong> and <strong>easy-to-use IDE</strong> for Insyra, allowing you to start your data analysis work quickly without worrying about environment setup.',
                    learnMore: {
                        href: '#HowToUse',
                        text: 'Learn More about <strong>Idensyra</strong>',
                    },
                },
            },
        },  
    },
    AboutInsyra:{
        title: 'What is Insyra',
        description: 'Insyra is a comprehensive data analysis tool for Go, capable of handling both routine data processing and large-scale data analysis tasks with greater speed and fewer lines of code.',
        whyCreate: {
            title: 'Why We Created Insyra',
            description: 'Golang has excellent performance and parallel processing capabilities, but its ecosystem in the field of data analysis has always lacked a complete and mature analysis library like Pandas. Insyra was born in the summer of 2024 to fill this gap, providing a powerful data analysis solution for Go that rivals Pandas, meeting the diverse needs from simple data processing to large-scale data sets. Insyra was born out of the need for high performance, ease of use, and seamless integration with existing tools. Many existing solutions either perform poorly or are too complex to learn, making them difficult to use in diverse and complex data environments.',
        },
        corePhilosophy: {
            title: 'Core Philosophy',
            items: {
                first: {
                    title: 'High-Performance',
                    description: 'Insyra leverages the high-performance and concurrent processing capabilities of Golang to ensure optimal data processing speed and resource utilization.',
                },
                second: {
                    title: 'Flexible and Scalable',
                    description: 'Insyra provides multiple sub-packages, allowing you to flexibly handle both simple data processing and complex large-scale data analysis tasks, and easily expand them.',
                },
                third: {
                    title: 'Intuitive and Easy to Use',
                    description: 'We believe that good tools should be easy to use with an intuitive interface, allowing users to quickly get started and easily apply them to various data analysis scenarios.',
                },
            },
        },
        futureVision: {
            title: 'Our Future Vision',
            description: 'We envision Insyra becoming a go-to tool for data analysts, expanding its capabilities to support more advanced data manipulation, visualization, and machine learning. As Insyra grows, our goal is to enable users to complete all data analysis tasks within the same ecosystem, without switching between multiple languages or tools.',
        },
    },
    Features: {
        title: 'Features',
        description: 'Insyra provides a variety of powerful features to meet your data analysis needs.',
        readDocs: {
            title: 'Welcome to Visit Our Documentation',
            description: 'Insyra is designed to be easy to use without needing to read the documentation. You can fully rely on the auto-completion feature of your editor to operate. However, if you want to learn more details, our documentation on GitHub provides detailed information and examples.<br/><br/>GoDoc is also available for those who prefer a more concise and Go-like documentation style.',
            docsButton: {
                docs: {
                    title: 'Documentation on GitHub',
                    link: 'https://github.com/HazelnutParadise/insyra/blob/main/README.md',
                },
                goDoc: {
                    title: 'GoDoc',
                    link: 'https://pkg.go.dev/github.com/HazelnutParadise/insyra',
                },
            },
        },
        coreStructures: {
            title: 'Core Structures',
            dataList: {
                description: 'DataList is the foundation of Insyra, used to process single-dimensional data. It has the ability to quickly retrieve data, clean data, convert data types, and calculate simple statistical values.',
                collapse: {
                    title: 'DataList',
                    content:
`package main

// import Insyra
import (
    "fmt"
    "github.com/HazelnutParadise/insyra/isr" // Use isr sytax sugar package
)

func main() {
    // Create a DataList instance
    dl := isr.DL{}.From(1, 2, 3, 4, 5)

    // Calculate the average value and print it out
    fmt.Println("Average:", dl.Mean())
}`,
                    copyButtonText: 'Copy',
                },
                doc: {
                    title: 'DataList Documentation',
                    link: 'https://github.com/HazelnutParadise/insyra/blob/main/Docs/DataList.md',
                },
            },
            dataTable: {
                description: 'DataTable is used to process multi-dimensional data. It can handle data from different sources and perform various operations, such as filtering, sorting, and calculating statistical values.',
                collapse: {
                    title: 'DataTable',
                    content:
`package main

// import Insyra
import (
	"github.com/HazelnutParadise/insyra/isr" // Use isr sytax sugar package
)

func main() {
	// Create DataList instances for students, ages, and scores
	students := isr.DL{}.From("Jane", "Jim", "John")
	ages := isr.DL{}.From(22, 21, 23)
	scores := isr.DL{}.From(90, 88, 95)

	// Create a DataTable instance from the DataList instances
	dt := isr.DT{}.From(isr.DLs{students, ages, scores})

	// Display the DataTable
	dt.Show()
}`,
                    copyButtonText: 'Copy',
                },
                doc: {
                    title: 'DataTable Documentation',
                    link: 'https://github.com/HazelnutParadise/insyra/blob/main/Docs/DataTable.md',
                },
            },
        },
        packagesSection: {
            title: 'Sub Packages',
            packages: [
                {
                    title: 'isr',
                    subTitle: 'Syntax Sugar',
                    descriptions: {
                        first:
                            `The <strong>isr</strong> package provides syntax sugar for Insyra, allowing you to write code more concisely and intuitively. It simplifies the process of creating and manipulating DataList and DataTable objects, making your code cleaner and easier to read.
                            <br/>
                            <strong>isr</strong> is the abbreviation for <strong>Insyra</strong>.`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/isr.md">isr package documentation</a>',
                    },
                },
                {
                    title: 'datafetch',
                    subTitle: 'Data Fetching',
                    descriptions: {
                        first:
                            `Provides data retrieval function, currently Google Maps Store reviews can be obtained.`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/datafetch.md">datafetch package documentation</a>',
                    },
                    collapses: {
                        first: {
                            title: 'Example',
                            content:`package main

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
                            copyButtonText: 'Copy',
                        },
                    },
                },
                {
                    title: 'stats',
                    subTitle: 'Statistics',
                    descriptions: {
                        first:
`Provide various statistical functions, including skewness, kurtosis, and principal component analysis, etc.<br/>
<br/>
We strive to design it to be consistent with the calculation results of <strong>R language</strong>.`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/stats.md">stats package documentation</a>',
                    },
                    collapses: {
                        first: {
                            title: 'Example',
                            content:
`package main

import (
    "fmt"
    "github.com/HazelnutParadise/insyra/stats"
)

func main() {
    fmt.Println(stats.Skewness(insyra.NewDataList(1, 2, 3, 9, 5)))
}`,
                            codeBlock: true,
                            codeLanguage: 'go',
                            copyButtonText: 'Copy',
                        },
                    },
                },
                {
                    title: 'parallel',
                    subTitle: 'Parallel Processing',
                    descriptions: {
                        first:
`Provide functions for parallel processing, allowing you to group multiple tasks and execute them simultaneously on multiple CPU cores, easily improving data processing efficiency.<br/>
<br/>
The parallel package will automatically handle the waiting between parallel coroutines and return the results in the order of the tasks, so you don't need to write additional complex code.`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/parallel.md">parallel package documentation</a>',
                    },
                    collapses: {
                        first: {
                            title: 'Example',
                            content:
`package main

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
                        codeLanguage: 'go',
                        copyButtonText: 'Copy',
                        },
                    }
                },
                {
                    title: 'plot',
                    subTitle: 'Data Visualization',
                    descriptions: {
                        first:
`Integrate the <a target="_blank" href="https://github.com/go-echarts/go-echarts">go-echarts</a> visualization library, providing various charts to easily create beautiful visualizations for your analysis.<br/>
<br/>
Just write simple settings and you can create beautiful charts for your analysis.`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/plot.md">plot package documentation</a>',
                    },
                    collapses: {
                        first: {
                            title: 'Example',
                            content:
`package main

import (
	"github.com/HazelnutParadise/insyra"
	"github.com/HazelnutParadise/insyra/plot"
)

func main() {
	// Create DataList objects for different products
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

	// Create a bar chart
	barChart := plot.CreateBarChart(config)

	// Save the chart as an HTML file
	plot.SaveHTML(barChart, "sales_data_datalist.html")

	// Save the chart as a PNG file
	plot.SavePNG(barChart, "sales_data_datalist.png")
}`,
                            codeBlock: true,
                            codeLanguage: 'go',
                            copyButtonText: 'Copy',
                        },
                    }
                },
                {
                    title: 'gplot',
                    subTitle: 'Data Visualization',
                    descriptions: {
                        first:
`Use the <a target="_blank" href="https://github.com/gonum/plot">gonum/plot</a> data visualization package, providing various charts. It is faster, but the chart style is more simple. <strong>Does not support non-ASCII characters</strong>.<br/>
<br/>
<img src="https://github.com/HazelnutParadise/insyra/blob/main/Docs/img/gplot_bar_example.png?raw=true" style="width: 100%;" alt="gplot package example chart" />`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/gplot.md">gplot package documentation</a>',
                    },
                    collapses: {
                        first: {
                            title: 'Example',
                            content:
`import (
	"github.com/HazelnutParadise/insyra"
	"github.com/HazelnutParadise/insyra/gplot"
)

func main() {
	dl := insyra.NewDataList(1 ,2 ,3 ,4)
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
                            codeLanguage: 'go',
                            copyButtonText: 'Copy',
                        },
                    },
                },
                {
                    title: 'lpgen',
                    subTitle: 'Linear Programming Model Generation',
                    descriptions: {
                        first:
`Provide a function to generate linear programming models, allowing you to easily create linear programming models and save them as <strong>.lp</strong> files for use with solving software.`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/lpgen.md">lpgen package documentation</a>',
                    },
                    collapses: {
                        first: {
                            title: 'Example',
                            content:
`package main

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
                            codeLanguage: 'go',
                            copyButtonText: 'Copy',
                        },
                    },
                },
                {
                    title: 'lp',
                    subTitle: 'Linear Programming Model Solving',
                    descriptions: {
                        first:
`Provide functions to solve linear programming models, allowing you to easily solve linear programming models and obtain the optimal solution. Powered by <a target="_blank" href="https://www.gnu.org/software/glpk/">GLPK</a>. <strong>This package will automatically download and install GLPK when it is used.</strong>`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/lp.md">lp package documentation</a>',
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
                            copyButtonText: 'Copy',
                        },
                    },
                },
                {
                    title: 'csvxl',
                    subTitle: 'CSV and Excel Processing',
                    descriptions: {
                        first:
`Provide functions to convert between CSV and Excel files.`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/csvxl.md">csvxl package documentation</a>',
                    },
                    collapses: {
                        first: {
                            title: 'Example',
                            content:
`package main

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
                            codeLanguage: 'go',
                            copyButtonText: 'Copy',
                        }
                    }
                },
                {
                    title: 'py',
                    subTitle: 'Python Integration',
                    descriptions: {
                        first:
`Without manually installing the Python environment and dependencies, you can <strong>execute Python code within Go</strong>, allowing variables to be passed between Go and Python.`,
                        end: '<a target="_blank" href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/py.md">py package documentation</a>',
                    },
                    collapses: {
                        first: {
                            title: 'Example',
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
                            copyButtonText: 'Copy',
                        },
                    }
                }
            ],
        },
    },
    HowToUse: {
        title: 'Get Started with Insyra',
        subtitle: 'Explore the Next-Generation Data Analysis Experience',
        installationSection: {
            title: 'Installation',
            description: 'Run the following command in the terminal to install Insyra:',
            goBeginner: {
                text: 'Go Beginner?',
                link: 'https://github.com/HazelnutParadise/insyra?tab=readme-ov-file#for-those-new-to-golang',
            },
        },
        ideSection: {
            title: 'Dedicated IDE: Idensyra',
            description: 'Idensyra is a simple IDE built with Insyra and Go interpreter. You can use Insyra for data analysis without installing the Go environment!',
            downloadButton: {
                text: 'Download Idensyra',
            },
            repo: {
                text: 'View Idensyra Source Code',
                link: 'https://github.com/HazelnutParadise/idensyra',
            },
            guiMode: {
                title: 'GUI Mode',
                description: 'Based on Fyne graphical interface',
                features: [
                    'Real-time execution',
                    'Code and execution result storage',
                    'Switch to WebUI mode (code automatically loaded)',
                ],
            },
            webMode: {
                title: 'WebUI Mode',
                description: 'Based on monaco-editor web interface',
                features: [
                    'Syntax highlighting',
                    'Auto complete',
                    'Switch to GUI mode (code automatically loaded)',
                ],
            },
            features: [
                {
                    icon: '⚡',
                    title: 'No Environment Required',
                    description: 'Built-in Go interpreter',
                },
                {
                    icon: '🎯',
                    title: 'Ready to Use',
                    description: 'Built-in Insyra, ready to use',
                },
                {
                    icon: '▶️',
                    title: 'Real-time Execution',
                    description: 'Support real-time execution of code',
                },
                {
                    icon: '🎨',
                    title: 'Dual Interface Mode',
                    description: 'GUI/WebUI switch at will',
                },

            ],
        },
    },
    Contact: {
        title: 'Contact Us',
        description: 'We welcome any form of contribution!<br/>If you are interested in joining the development of Insyra or have any questions or suggestions, please contact us at any time through the following methods.',
        contribution: {
            title: 'Join Contribution',
            description: 'Insyra is an open source project, and we look forward to your contributions! No matter whether it is code, document improvement, or problem feedback, any help will make Insyra better.',
            repositoryText: 'GitHub Repository',
            supportText: 'Support Document',
        },
        mail: {
            title: 'Contact Email',
            description: 'If you have any questions or suggestions, please contact us using Hazelnut Paradise Website Email:',
            text: 'Hazelnut Paradise Website Email',
        },
    },
    WhyInsyra: {
        title: 'Why Insyra?',
        description: 'Insyra not only provides a simple syntax, but also has energy-saving advantages due to Golang. Below is a comparison of the code between Insyra and Pandas for the same operation, allowing you to more intuitively understand its advantages.',
        codeComparison: {
            title: 'Insyra vs Pandas Syntax Comparison',
            calculateAverage: {
                title: 'Calculate Average',
            },
            removeStrings: {
                title: 'Remove Strings from Data',
            },
        },
        goEfficiency: {
            title: 'Go Language Energy-Saving Advantages',
            description: 'Insyra is developed based on the Go language, known for its efficient memory management and parallel processing capabilities. <a href="https://greenlab.di.uminho.pt/wp-content/uploads/2017/09/paperSLE.pdf" target="_blank">Research</a> shows that compared to Python, Go can use system resources more efficiently and significantly reduce energy consumption during runtime. Using Insyra makes your data analysis more environmentally friendly.',
        },
    },
};
