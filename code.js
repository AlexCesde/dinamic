function AddItem(val) {
    document.getElementById("salesItems").appendChild(AddTemplateItem(val, 1));
    document.getElementById("totalSales").appendChild(AddTableItem(1, val, `other: ${val}`, "1234"));
}