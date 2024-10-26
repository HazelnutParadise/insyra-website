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
                    learnMore: 'Learn More',
                },
                feature2: {
                    id: 2,
                    title: 'Intuitive and Simple API',
                    description: 'Insyra provides an <strong>intuitive</strong> and <strong>simple</strong> API interface, allowing you to easily use its powerful features. You can quickly get started and perform complex data operations without needing to understand the internal implementation.',
                    learnMore: 'Learn More',
                },
                feature3: {
                    id: 3,
                    title: 'Beautiful Data Visualization',
                    description: 'Insyra integrates the <a href="https://github.com/go-echarts/go-echarts">go-echarts</a> visualization library, offering various types of charts to easily create beautiful visualizations for your analysis.',
                    learnMore: 'Learn More about <strong>plot</strong> and <strong>gplot</strong> packages',
                },
                feature4: {
                    id: 4,
                    title: 'Integration with Python',
                    description: 'With Insyra’s py package, you can <strong>execute Python code within Go programs</strong>, leveraging Python’s powerful capabilities for data analysis.',
                    learnMore: 'Learn More about <strong>py</strong> package',
                },
                feature5: {
                    id: 5,
                    title: 'Dedicated IDE',
                    description: 'We provide a <strong>dedicated</strong> and <strong>easy-to-use IDE</strong> for Insyra, allowing you to start your data analysis work quickly without worrying about environment setup.',
                    learnMore: 'Learn More about <strong>Idensyra</strong>',
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
        coreStructures: {
            title: 'Core Structures',
            description: 'DataList and DataTable are the core structures of Insyra, used to process single-dimensional and multi-dimensional data respectively.',
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
    },
};
