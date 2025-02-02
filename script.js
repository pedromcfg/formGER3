document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('graficoRadar').getContext('2d');
    const graficoRadar = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Violência Física', 'Violência Psicológica', 'Violência Sexual', 'Negligência / Abandono', 'Violência Financeira / Económica'],
            datasets: [{
                label: 'Número de Itens Escolhidos por Secção',
                data: [0, 0, 0, 0, 0],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 5,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });

    // Adiciona listeners a todos os checkboxes para atualizar o gráfico
    document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            graficoRadar.data.datasets[0].data = [
                contarSelecionados('seccao1'),
                contarSelecionados('seccao2'),
                contarSelecionados('seccao3'),
                contarSelecionados('seccao4'),
                contarSelecionados('seccao5')
            ];
            graficoRadar.update();
        });
    });

    function contarSelecionados(seccaoPrefix) {
        return document.querySelectorAll(`input[id^='${seccaoPrefix}']:checked`).length;
    }
});
