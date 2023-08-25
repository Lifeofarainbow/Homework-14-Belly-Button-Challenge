const dataurl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
let mydata = d3.json(dataurl).then(function(data) {
  console.log(data);
});

const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
      	values: [163, 126, 113, 78, 71, 51, 50, 47, 40, 40, 37, 36, 30, 28, 25, 23, 22, 19, 19, 14, 13, 13, 13, 12, 12, 11, 11, 11, 10, 10, 10, 8, 7, 7, 7, 6, 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        labels: [2722, 944, 2419, 2539, 3450, 1795, 2389, 1314, 922, 1167, 2859, 963, 2964, 2651, 2308, 482, 874, 2908, 1870, 2264, 41, 728, 1188, 352, 2782, 1926, 1959, 1200, 1977, 3312, 261, 296, 2890, 1929, 555, 2704, 2688, 710, 189, 2500, 2461, 854, 939, 1310],
        hovertext: ["Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Proteobacteria;Epsilonproteobacteria;Campylobacterales;Campylobacteraceae;Campylobacter", "Bacteria;Firmicutes;Bacilli;Bacillales;Staphylococcaceae;Staphylococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Dermabacteraceae;Dermabacter", "Bacteria;Firmicutes;Clostridia;Clostridiales;Veillonellaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Varibaculum", "Bacteria;Firmicutes;Clostridia;Clostridiales;Peptococcaceae;Peptococcus", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Aerococcaceae", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI", "Bacteria", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Peptoniphilus", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Streptococcaceae;Streptococcus", "Bacteria;Firmicutes;Clostridia", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Porphyromonadaceae;Porphyromonas", "Bacteria;Firmicutes;Clostridia;Clostridiales", "Bacteria;Proteobacteria;Betaproteobacteria;Burkholderiales", "Bacteria", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;Lachnospiraceae", "Bacteria;Firmicutes;Bacilli;Lactobacillales;Streptococcaceae;Streptococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Finegoldia", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales", "Bacteria", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Firmicutes;Clostridia;Clostridiales;IncertaeSedisXI;Anaerococcus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Actinomycetaceae;Mobiluncus", "Bacteria;Actinobacteria;Actinobacteria;Actinomycetales;Corynebacteriaceae;Corynebacterium", "Bacteria;Bacteroidetes;Bacteroidia;Bacteroidales;Prevotellaceae;Prevotella"],
        borderWidth: 2,
        }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
