function count_tax() {
    try {
        let get_string = document.getElementById("input_field").value;
        console.log(get_string)
        let input_salary = parseFloat(get_string.replace(/[^\d.-]/g, ''), 10);
        let tax_web = {
            9875: 0.1,
            40125: 0.12,
            85525: 0.22,
            163300: 0.24,
            207350: 0.32,
            518400: 0.35,
            999999999999999: 0.37
        };
        let based_salary = 12400;

        if (input_salary <= based_salary) {
            console.log("There is not taxes");
            document.getElementById("total").innerHTML = "There is not taxes";
        } else if (input_salary > based_salary) {

            let salary_to_tax = input_salary - based_salary;
            let total_tax = 0;
            for (let k in tax_web) {
                if (salary_to_tax - k > 0) {
                    salary_to_tax = salary_to_tax - k;
                    total_tax = total_tax + (k * tax_web[k]);
                } else {
                    total_tax = total_tax + (salary_to_tax * tax_web[k]);
                    break
                }
            }
            document.getElementById("total").innerHTML = total_tax;
            console.log(total_tax);
        }
    }
    catch {
        alert("Something was wrong")


    }
}
function clear_total() {
    document.getElementById("total").innerHTML = "";
}