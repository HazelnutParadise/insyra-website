export const eng = {
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
                        href: '#',
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
                        href: '#',
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
            description: 'Golang has excellent performance and parallel processing capabilities, but its ecosystem in the field of data analysis has always lacked a complete and mature analysis library like Pandas. Insyra was born to fill this gap, providing a powerful data analysis solution for Go that rivals Pandas, meeting the diverse needs from simple data processing to large-scale data sets. Insyra was born out of the need for high performance, ease of use, and seamless integration with existing tools. Many existing solutions either perform poorly or are too complex to learn, making them difficult to use in diverse and complex data environments.',
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

// import Insyra main package
import (
    "fmt"
    "github.com/HazelnutParadise/insyra"
)

func main() {
    // Create DataList instance
    dl := insyra.NewDataList(1, 2, 3, 4, 5)

    // Calculate and print the mean value
    fmt.Println("Mean value:", dl.Mean())
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

// import Insyra main package
import (
    "github.com/HazelnutParadise/insyra"
)

func main() {
    // Create DataList instance
    students := insyra.NewDataList("Jane", "Jim", "John")
    ages := insyra.NewDataList(22, 21, 23)
    scores := insyra.NewDataList(90, 88, 95)

    // Create DataTable instance
    dt := insyra.NewDataTable(students, ages, scores)

    // Print DataTable
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
                    name: 'stats (Statistics)',
                    descriptions: {
                        first:
`Provide various statistical functions, including skewness, kurtosis, and principal component analysis, etc.<br/>
<br/>
We strive to design it to be consistent with the calculation results of <strong>R language</strong>.`,
                        end: '<a href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/stats.md">stats package documentation</a>',
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
                    name: 'parallel (Parallel Processing)',
                    descriptions: {
                        first:
`Provide functions for parallel processing, allowing you to group multiple tasks and execute them simultaneously on multiple CPU cores, easily improving data processing efficiency.<br/>
<br/>
The parallel package will automatically handle the waiting between parallel coroutines and return the results in the order of the tasks, so you don't need to write additional complex code.`,
                        end: '<a href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/parallel.md">parallel package documentation</a>',
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
                    name: 'plot (Data Visualization)',
                    descriptions: {
                        first:
`Integrate the <a href="https://github.com/go-echarts/go-echarts">go-echarts</a> visualization library, providing various charts to easily create beautiful visualizations for your analysis.<br/>
<br/>
Just write simple settings and you can create beautiful charts for your analysis.`,
                        end: '<a href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/plot.md">plot package documentation</a>',
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
                    name: 'gplot (Data Visualization)',
                    descriptions: {
                        first:
`Use the <a href="https://github.com/gonum/plot">gonum/plot</a> data visualization package, providing various charts. It is faster, but the chart style is more simple. <strong>Does not support non-ASCII characters</strong>.<br/>
<br/>
<img src="https://github.com/HazelnutParadise/insyra/blob/main/Docs/img/gplot_bar_example.png?raw=true" style="width: 100%;" alt="gplot package example chart" />`,
                        end: '<a href="https://github.com/HazelnutParadise/insyra/blob/main/Docs/gplot.md">gplot package documentation</a>',
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
                }
            ],
        },
    },
};
