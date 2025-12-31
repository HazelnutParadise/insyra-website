export const WhyInsyra = {
        title: 'Why Insyra?',
        description: 'Insyra not only provides a simple syntax, but also has energy-saving advantages due to Golang. Below is a comparison of the code between Insyra and Pandas for the same operation, allowing you to more intuitively understand its usage.',
        codeComparison: {
            title: 'Insyra vs Pandas Syntax Comparison',
            calculateAverage: {
                title: 'Calculate Average',
                pandas: `data = pd.Series([1, 2, 3, 4, 5])

avg = data.mean()
print(avg)`,
                insyra: `data := insyra.NewDataList(1, 2, 3, 4, 5)

avg := data.Mean()
fmt.Println(avg)`,
            },
            filterData: {
                title: 'Filter Data',
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
                title: 'Data Display and Alignment',
                description: '<p>Below are the outputs and explanations for Pandas and Insyra.</p>',
                pandasDescription: '<h3>Pandas DataFrame: Ugly, Messy, Hard to Align</h3><p>Pandas DataFrame display is a visual nightmare. When you print a DataFrame, you face:</p><ul><li><strong>Ugly Formatting</strong>: Dull gray-and-white tables with zero aesthetic appeal</li><li><strong>Difficult Alignment</strong>: Fixed column widths that don\'t adapt to data, long characters get truncated or overflow</li><li><strong>Line-Breaking Issues</strong>: Long data rows destroy the entire table layout, making reading incredibly difficult</li><li><strong>No Color Distinction</strong>: All data has the same color, making it hard to quickly identify different data types</li></ul>',
                insyraDescription: '<h3>Insyra DataTable: Colorful, Auto-Aligned, Smart Line-Breaking</h3><p>In contrast, Insyra\'s data display is designed completely differently:</p><ul><li><strong>Colorful Presentation</strong>: Different data types (numbers, text, dates, etc.) are displayed in different colors, making it visually clear and easy to read</li><li><strong>Auto-Aligned</strong>: Regardless of data length, Insyra automatically calculates optimal column widths, perfectly aligning all data</li><li><strong>Smart Line-Breaking</strong>: Long text automatically wraps without ever breaking the table structure, maintaining a clean appearance</li><li><strong>Modern Aesthetics</strong>: Employs modern design language, making output results visually pleasing and professional</li></ul>',
            },
        },
        goEfficiency: {
            title: 'Go Language Energy-Saving Advantages & Sustainable Development',
            description: '<p>In an era where the world faces climate change, the responsibility of software developers extends beyond functionality implementation—it must also consider environmental impact. Insyra, developed with Go language, reflects this commitment to sustainability and environmental protection.</p><h3>1. Energy Efficiency and Carbon Footprint</h3><p>Go is renowned for its outstanding performance and efficient memory management. <a href="https://greenlab.di.uminho.pt/wp-content/uploads/2017/09/paperSLE.pdf" target="_blank">Research from the University of Minho in Portugal</a> (comparing 27 programming languages) clearly demonstrates that <strong>Go consumes significantly less energy than Python</strong>. The study found that across execution time, memory usage, and energy consumption, Go outperforms Python substantially. This means every data query and every data analysis task consumes significantly less electricity and produces correspondingly lower carbon emissions.</p><p>When you use Insyra for large-scale data analysis, you save not just computation time, but real electricity—which directly translates into <strong>reducing your organization\'s carbon footprint</strong> and <strong>lowering energy costs</strong>.</p><h3>2. United Nations Sustainable Development Goals (SDGs) in Action</h3><p>The choice of Insyra and Go language aligns closely with the <strong>United Nations Sustainable Development Goals (SDGs)</strong>, particularly these three core objectives:</p><ul><li><strong>SDG 7 - Affordable and Clean Energy</strong><br/>Using high-performance data analysis tools that reduce energy consumption in computational processes is a key part of achieving the global clean energy transition. Insyra helps organizations analyze data while consuming less electricity, thereby reducing dependence on fossil fuels.</li><li><strong>SDG 12 - Responsible Consumption and Production</strong><br/>Software efficiency is responsible production. Choosing energy-efficient data analysis solutions means less server load, fewer cooling system operations, and minimal resource waste. Insyra\'s efficient design embodies this commitment.</li><li><strong>SDG 13 - Climate Action</strong><br/>Every effort to reduce carbon emissions matters. By using energy-efficient tools, developers and organizations actively participate in global climate action. Insyra aligns your data analysis work with worldwide climate protection goals.</li></ul><h3>3. Concrete Energy-Saving Data and Performance Comparison</h3><p>According to the University of Minho research report:</p><ul><li><strong>Memory Efficiency</strong>: Go averages around 69 MB memory usage, compared to Python\'s 437 MB—a dramatic difference in efficiency.</li><li><strong>Execution Speed</strong>: Go\'s compiled nature makes it perform dozens of times faster than interpreted Python, directly reducing CPU time and associated energy consumption.</li><li><strong>Energy Consumption</strong>: Python ranks among the more energy-intensive interpreted languages, while Go performs excellently, second only to compiled languages like C and Rust.</li><li><strong>Concurrent Processing Capability</strong>: Go\'s goroutine mechanism makes parallel task execution lightweight and efficient, reducing system overhead significantly.</li></ul><h3>4. Win-Win for Enterprises and Individual Developers</h3><p>Choosing Insyra delivers triple benefits:</p><ul><li><strong>Cost Savings</strong>: Reduced server power consumption directly lowers operational expenses.</li><li><strong>Performance Boost</strong>: Faster execution means higher efficiency and better user satisfaction.</li><li><strong>Environmental Responsibility</strong>: Tangible implementation of corporate sustainability commitments, enhancing brand image and ESG ratings.</li></ul><h3>5. Future Vision: Building a Sustainable Data Ecosystem</h3><p>In a data-driven era, we believe software engineering should be environmentally responsible. Insyra is more than just a data analysis tool—it\'s <strong>a step toward building a sustainable data ecosystem</strong>. We encourage developers and organizations worldwide to adopt high-performance technology stacks and collectively contribute to achieving the UN\'s SDGs.</p><p>By choosing Insyra, you\'re not just selecting a faster, simpler way to analyze data—you\'re choosing <strong>to protect the planet and build a better future</strong>.</p>',
        },
    };
