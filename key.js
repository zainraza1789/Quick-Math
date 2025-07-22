 document.addEventListener("keydown", function (e) {
            let key = e.key;
            if (key === "0") document.getElementById("zero").click();
            else if (key === "1") document.getElementById("one").click();
            else if (key === "2") document.getElementById("two").click();
            else if (key === "3") document.getElementById("three").click();
            else if (key === "4") document.getElementById("four").click();
            else if (key === "5") document.getElementById("five").click();
            else if (key === "6") document.getElementById("six").click();
            else if (key === "7") document.getElementById("seven").click();
            else if (key === "8") document.getElementById("eight").click();
            else if (key === "9") document.getElementById("nine").click();
            else if (key === "+") document.getElementById("add").click();

            else if (key === "-") document.getElementById("minus").click();
            else if (key === "*") document.getElementById("multiply").click();
            else if (key === "/") document.getElementById("divide").click();
            else if (key === "%") document.getElementById("percentage").click();
            else if (key === ".") document.getElementById("dot").click();
            else if (key === "Enter") calculate();
            else if (key === "Escape") clearInput();
            else if (key === "Backspace") cross();

        });