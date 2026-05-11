const readline = require('readline-sync');

function knapsack() {
    console.log("--- Algoritmo de Knapsack ---");

    const itemCount = parseInt(readline.question("Quantos itens voce quer criar? "));
    let items = [];

    for (let i = 0; i < itemCount; i++) {
        console.log(`\nDados do item ${i + 1}:`);
        const name = readline.question("Nome do item: ");
        const weight = parseFloat(readline.question("Peso: "));
        const value = parseFloat(readline.question("Valor: "));
        
        items.push({
            name,
            weight,
            value,
            ratio: value / weight
        });
    }

    let capacity = parseFloat(readline.question("\nQual o limite de peso da mochila? "));
    const initialCapacity = capacity;

    // Cria uma ordem pela razão de valor e peso de cada item (faz a ordenação)
    items.sort((a, b) => b.ratio - a.ratio);

    let totalValue = 0;
    let itemsResult = [];

    for (let item of items) {
        if (capacity <= 0) break;

        if (item.weight <= capacity) {
            // Leva o item inteiro
            capacity -= item.weight;
            totalValue += item.value;
            itemsResult.push({ ...item, amountTaken: "100% (Inteiro)" });
        } else {
            // Leva apenas uma fração do item para encher a mochila
            const fraction = capacity / item.weight;
            const partialValue = item.value * fraction;
            
            totalValue += partialValue;
            itemsResult.push({ 
                ...item, 
                amountTaken: `${(fraction * 100).toFixed(2)}% (Fracionado)`,
                weight: capacity, // Peso que realmente entrou
                value: partialValue // Valor proporcional
            });
            
            // Mochila com a capacidade esgotada
            capacity = 0;
        }
    }

    console.log("\n--- Resultado da Mochila Cheia ---");
    itemsResult.forEach(res => {
        console.log(`- ${res.name}: ${res.amountTaken}`);
        console.log(`  Peso usado: ${res.weight.toFixed(2)} | Valor obtido: ${res.value.toFixed(2)}`);
    });

    console.log(`\nCapacidade Total: ${initialCapacity}`);
    console.log(`Valor Final Acumulado: ${totalValue.toFixed(2)}`);
}

knapsack();