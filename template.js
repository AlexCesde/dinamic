
function AddTemplateItem(label, value) {

    // List item
    let listItem = document.createElement("li");
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    listItem.appendChild(document.createTextNode(label));

    // Span control
    let nodeSpan = document.createElement("span");
    nodeSpan.classList.add('badge', 'bg-primary', 'rounded-pill');
    nodeSpan.appendChild(document.createTextNode(value));

    // Final result
    listItem.appendChild(nodeSpan);

    return listItem;
}

function AddTableItem(id, first, last, handle) {

    // Global table reference
    let tableRow = document.createElement("tr");

    // Table header
    let tableDataId = document.createElement("th");

    // Table data
    let tableDataFirst = document.createElement("td");
    let tableDataLast = document.createElement("td");
    let tableDataHandle = document.createElement("td");


    // Text content per row
    tableDataId.appendChild(document.createTextNode(id));
    tableDataId.scope = "row";

    tableDataFirst.appendChild(document.createTextNode(first));
    tableDataLast.appendChild(document.createTextNode(last));
    tableDataHandle.appendChild(document.createTextNode(handle));

    // Final rows
    tableRow.appendChild(tableDataId);
    tableRow.appendChild(tableDataFirst);
    tableRow.appendChild(tableDataLast);
    tableRow.appendChild(tableDataHandle);

    return tableRow;
}