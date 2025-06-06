let allInput = [];
const display = document.getElementById("display");

// Números
document.querySelectorAll(".numbers").forEach(btn => {
    btn.addEventListener("click", () => {
        allInput.push(btn.textContent);
        display.value = allInput.join("");
    });
});

// Operadores
document.querySelectorAll(".operator").forEach(btn => {
    btn.addEventListener("click", () => {
        const last = allInput[allInput.length - 1];
        // Impede operadores duplos tipo "++" ou no início
        if (!["+", "-", "*", "/"].includes(last) && allInput.length > 0) {
            allInput.push(btn.value);
            display.value = allInput.join("");
        }
    });
});

// Igual (=)
document.getElementById("btnEqual").addEventListener("click", () => {
    try {
        const result = eval(allInput.join(""));
        display.value = result;
        allInput = [result.toString()]; // permite continuar calculando
    } catch {
        display.value = "Erro";
        allInput = [];
    }
});

// Limpar (C)
document.getElementById("btnClear").addEventListener("click", () => {
    allInput = [];
    display.value = "";
});

document.querySelector(".btnClearLast").addEventListener("click", () =>{
    allInput.pop();
    display.value = allInput.join("");
})