// Define các biến của Nhập
let type_nhap = ''
let sku_name_nhap = ''
let part_number_nhap = ''
let unit_nhap = ''
let price_mml_nhap = ''
let vendor_id_nhap = ''
let vendor_id_nhap2 = ''
let vendor_name_nhap = ''
let expiry_date_nhap = '-'

let wh_xuat = ''
let type_xuat = ''
let sku_id_xuat = ''
let loc_xuat = ''
let expiry_date_xuat = ''
let inbound_date_xuat = ''
let price_inbound_xuat = ''
let qty_ib_xuat = ''
let qty_first_xuat = ''
let qty_ob_xuat = ''
let qty_last_xuat = ''
let sku_name_xuat = ''
let price_xuat = ''
let amount_xuat = ''
let unit_xuat = ''

function alert(text_want_to_alert) {
    const audio = new Audio('material/error.mp3'); // Replace with your sound file path
    audio.play();
    Swal.fire({
        // title: 'Cảnh báo!',
        text: text_want_to_alert,
        icon: 'error', // Use 'success' or 'error' as needed
        showConfirmButton: false, // Hide the confirm button
        timer: 4000, // Auto-close after 5 seconds
        timerProgressBar: true, // Show a progress bar indicating time remaining
        position: 'top', // Position it as in the example image
        toast: true, // Display as a toast-style alert
        background: 'red',
        color: 'white'
    });
}


function info(text_want_to_alert) {
    const audio = new Audio('material/success.mp3'); // Replace with your sound file path
    audio.play();
    Swal.fire({
        // title: 'Thông báo!',
        text: text_want_to_alert,
        icon: 'success', // Use 'success' or 'error' as needed
        showConfirmButton: false, // Hide the confirm button
        timer: 4000, // Auto-close after 5 seconds
        timerProgressBar: true, // Show a progress bar indicating time remaining
        position: 'top', // Position it as in the example image
        toast: true, // Display as a toast-style alert
        background: 'green',
        color: 'white'
    });
}

function warning(text_want_to_alert) {
    Swal.fire({
        // title: 'Thông báo!',
        text: text_want_to_alert,
        icon: 'warning', // Use 'success' or 'error' as needed
        showConfirmButton: false, // Hide the confirm button
        timer: 3000, // Auto-close after 5 seconds
        timerProgressBar: true, // Show a progress bar indicating time remaining
        position: 'top', // Position it as in the example image
        toast: true, // Display as a toast-style alert
        background: 'yellow',
        color: 'black'
    });
}


// Khởi tạo danh sách kho
function create_wh_nhap() {
    document.getElementById("welcome").textContent = "Xin chào " + sessionStorage.getItem("fullname")
    const wh = sessionStorage.getItem("wh"); // Lấy giá trị "wh" từ sessionStorage
    const warehouseSelect = document.getElementById("warehouse");

    if (!warehouseSelect) {
        console.error("Không tìm thấy combobox 'warehouse'");
        return;
    }

    // Xóa tất cả các option hiện có trong combobox để làm mới
    warehouseSelect.innerHTML = '';

    // Thêm option trống ở đầu danh sách
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "Chọn chi nhánh";
    emptyOption.disabled = true; // Không cho phép chọn lại option trống
    emptyOption.selected = true; // Đặt làm option mặc định được chọn
    warehouseSelect.appendChild(emptyOption);

    // Xác định danh sách các kho dựa trên giá trị của `wh`
    let options;
    if (wh === "All") {
        options = ['HCM', 'QN', 'BN'];
    } else if (wh) {
        options = [wh];
    } else {
        options = [];
        console.warn("Danh sách kho trống.");
    }

    // Thêm các option vào combobox "Chọn kho"
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        warehouseSelect.appendChild(opt);
    });
}

function create_wh_xuat() {
    const wh = sessionStorage.getItem("wh"); // Lấy giá trị "wh" từ sessionStorage
    const warehouseSelect = document.getElementById("warehouse_xuat");

    if (!warehouseSelect) {
        console.error("Không tìm thấy combobox 'warehouse'");
        return;
    }

    // Xóa tất cả các option hiện có trong combobox để làm mới
    warehouseSelect.innerHTML = '';

    // Thêm option trống ở đầu danh sách
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "Chọn chi nhánh";
    emptyOption.disabled = true; // Không cho phép chọn lại option trống
    emptyOption.selected = true; // Đặt làm option mặc định được chọn
    warehouseSelect.appendChild(emptyOption);

    // Xác định danh sách các kho dựa trên giá trị của `wh`
    let options;
    if (wh === "All") {
        options = ['HCM', 'QN', 'BN'];
    } else if (wh) {
        options = [wh];
    } else {
        options = [];
        console.warn("Danh sách kho trống.");
    }

    // Thêm các option vào combobox "Chọn kho"
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        warehouseSelect.appendChild(opt);
    });
}

function create_wh_xuat_export() {
    const wh = sessionStorage.getItem("wh"); // Lấy giá trị "wh" từ sessionStorage
    const warehouseSelect = document.getElementById("selectFilter");

    if (!warehouseSelect) {
        console.error("Không tìm thấy combobox 'warehouse'");
        return;
    }

    // Xóa tất cả các option hiện có trong combobox để làm mới
    warehouseSelect.innerHTML = '';

    // Thêm option trống ở đầu danh sách
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "Chọn chi nhánh";
    emptyOption.disabled = true; // Không cho phép chọn lại option trống
    emptyOption.selected = true; // Đặt làm option mặc định được chọn
    warehouseSelect.appendChild(emptyOption);

    // Xác định danh sách các kho dựa trên giá trị của `wh`
    let options;
    if (wh === "All") {
        options = ['All','HCM', 'QN', 'BN'];
    } else if (wh) {
        options = [wh];
    } else {
        options = [];
        console.warn("Danh sách kho trống.");
    }

    // Thêm các option vào combobox "Chọn kho"
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        warehouseSelect.appendChild(opt);
    });
}

function create_wh_nhap_export() {
    const wh = sessionStorage.getItem("wh"); // Lấy giá trị "wh" từ sessionStorage
    const warehouseSelect = document.getElementById("selectFilter2");

    if (!warehouseSelect) {
        console.error("Không tìm thấy combobox 'warehouse'");
        return;
    }

    // Xóa tất cả các option hiện có trong combobox để làm mới
    warehouseSelect.innerHTML = '';

    // Thêm option trống ở đầu danh sách
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "Chọn chi nhánh";
    emptyOption.disabled = true; // Không cho phép chọn lại option trống
    emptyOption.selected = true; // Đặt làm option mặc định được chọn
    warehouseSelect.appendChild(emptyOption);

    // Xác định danh sách các kho dựa trên giá trị của `wh`
    let options;
    if (wh === "All") {
        options = ['All','HCM', 'QN', 'BN'];
    } else if (wh) {
        options = [wh];
    } else {
        options = [];
        console.warn("Danh sách kho trống.");
    }

    // Thêm các option vào combobox "Chọn kho"
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        warehouseSelect.appendChild(opt);
    });
}

function create_wh_onhand_export() {
    const wh = sessionStorage.getItem("wh"); // Lấy giá trị "wh" từ sessionStorage
    const warehouseSelect = document.getElementById("selectFilter3");

    if (!warehouseSelect) {
        console.error("Không tìm thấy combobox 'warehouse'");
        return;
    }

    // Xóa tất cả các option hiện có trong combobox để làm mới
    warehouseSelect.innerHTML = '';

    // Thêm option trống ở đầu danh sách
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "Chọn chi nhánh";
    emptyOption.disabled = true; // Không cho phép chọn lại option trống
    emptyOption.selected = true; // Đặt làm option mặc định được chọn
    warehouseSelect.appendChild(emptyOption);

    // Xác định danh sách các kho dựa trên giá trị của `wh`
    let options;
    if (wh === "All") {
        options = ['All','HCM', 'QN', 'BN'];
    } else if (wh) {
        options = [wh];
    } else {
        options = [];
        console.warn("Danh sách kho trống.");
    }

    // Thêm các option vào combobox "Chọn kho"
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        warehouseSelect.appendChild(opt);
    });
}

function create_wh_crm() {
    const wh = sessionStorage.getItem("wh"); // Lấy giá trị "wh" từ sessionStorage
    const warehouseSelect = document.getElementById("wh_crm");

    if (!warehouseSelect) {
        console.error("Không tìm thấy combobox 'warehouse'");
        return;
    }

    // Xóa tất cả các option hiện có trong combobox để làm mới
    warehouseSelect.innerHTML = '';

    // Thêm option trống ở đầu danh sách
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "Chọn chi nhánh";
    emptyOption.disabled = true; // Không cho phép chọn lại option trống
    emptyOption.selected = true; // Đặt làm option mặc định được chọn
    warehouseSelect.appendChild(emptyOption);

    // Xác định danh sách các kho dựa trên giá trị của `wh`
    let options;
    if (wh === "All") {
        options = ['HCM', 'QN', 'BN','SG'];
    } else if (wh) {
        options = [wh,'SG'];
    } else {
        options = [];
        console.warn("Danh sách kho trống.");
    }

    // Thêm các option vào combobox "Chọn kho"
    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        warehouseSelect.appendChild(opt);
    });
}


create_wh_nhap()
create_wh_xuat()
create_wh_xuat_export()
create_wh_nhap_export()
create_wh_onhand_export()
create_wh_crm()

//////**** */ Nhập //////

// Hàm debounce để giới hạn số lần gọi tìm kiếm
function debounce(func, delay) {
    let debounceTimer;
    return function(...args) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Xử lý tìm kiếm "Loại vật tư"
function handleMaterialTypeInput(event) {
    const searchTerm = removeAccents(event.target.value).toUpperCase(); // Chuyển đổi thành uppercase không dấu
    const results = mml_data.filter(item => removeAccents(item[0]).toUpperCase().includes(searchTerm)); // Tìm kiếm không dấu

    // Hiển thị kết quả tìm kiếm từ cột mml_data[1]
    if (results.length > 0) {
        showSearchResults(results.map(item => item[0]), results); // Truyền danh sách tên vật tư và dữ liệu gốc
    } else {
        hideDropdown(); // Ẩn dropdown nếu không có kết quả
        console.log("Không tìm thấy kết quả.");
    }
}

// Hàm hiển thị kết quả tìm kiếm trong dropdown
function showSearchResults(displayList, fullData) {
    console.table(fullData)
    const dropdown = document.getElementById("dropdown");
    dropdown.innerHTML = ''; // Xóa nội dung cũ

    // Hiển thị dropdown
    dropdown.style.display = 'block';

    // Sử dụng Set để giữ lại các giá trị duy nhất
    const uniqueItems = [...new Set(displayList)];

    // Tạo các mục dropdown từ danh sách uniqueItems
    uniqueItems.forEach((item, index) => {
        const dropdownItem = document.createElement("div");
        dropdownItem.classList.add("dropdown-item");
        dropdownItem.textContent = item;

        // Lấy chỉ số của phần tử đầu tiên trong fullData tương ứng với item
        const originalIndex = fullData.findIndex(dataItem => dataItem[0] === item);
        
        // Xử lý sự kiện khi người dùng chọn một mục từ dropdown
        dropdownItem.addEventListener("click", () => {
            document.getElementById("material-type").value = item; // Gán lựa chọn vào ô nhập liệu
            dropdown.style.display = 'none'; // Ẩn dropdown sau khi chọn

            // Gọi hàm để xử lý lựa chọn đầu tiên và tìm danh sách thứ hai
            showSecondaryOptions(fullData[originalIndex]);
        });

        dropdown.appendChild(dropdownItem);
    });
}

/// Hàm hiển thị modal với các lựa chọn từ secondaryOptions
function showSecondaryOptions(selectedItem) {
    console.log(selectedItem[0]);
    const filteredResults = mml_data.filter(item => item[0] === selectedItem[0]); // Filter rows based on selection
    const modal = document.getElementById("secondaryModal");
    const modalOptions = document.getElementById("modalOptions");
    modalOptions.innerHTML = ''; // Clear old content

    // Use a Set to store unique option keys
    const uniqueOptions = new Set();

    // Display modal with unique options
    filteredResults.forEach(option => {
        const optionKey = `${option[1]} - ${option[2]}`; // Create a unique key based on ID and description

        // Check if this option has already been added
        if (!uniqueOptions.has(optionKey)) {
            uniqueOptions.add(optionKey); // Add the key to the Set to ensure uniqueness

            const optionDiv = document.createElement("div");
            optionDiv.classList.add("modal-option");

            // Display both ID (mml_data[1]) and Description (mml_data[2])
            optionDiv.textContent = optionKey; // Set the text content to the unique key

            // Add event listener for selecting this option
            optionDiv.addEventListener("click", () => {
                handleModalSelection_nhap(option); // Call function when an option is selected
                modal.style.display = 'none'
            });

            // Append the unique option to the modal
            modalOptions.appendChild(optionDiv);
        }
    });

    // Display the modal
    modal.style.display = 'flex';
}


// Xử lý khi người dùng chọn một mục trong modal
function handleModalSelection_nhap(selectedOption) {
    console.log("Người dùng đã chọn:", selectedOption);
    [type_nhap,sku_name_nhap,part_number_nhap,unit_nhap,price_mml_nhap,vendor_id_nhap,vendor_name_nhap] = selectedOption
    
    document.getElementById("sku_name_nhap").textContent = sku_name_nhap
    document.getElementById("sku_id_nhap").textContent = part_number_nhap

    const found_vendor = mml_data.filter(u => u[0] === type_nhap);
    const vendor_list = found_vendor.map(row => `${row[5]} | ${row[6]}`);

    // Loại bỏ các giá trị trùng lặp để tạo danh sách unique
    const uniqueList = [...new Set(vendor_list)];
    // Lấy phần tử select
    const selectElement = document.getElementById("supplier-code");

    // Xóa các tùy chọn cũ (nếu có)
    selectElement.innerHTML = "";
    
    // Thêm tùy chọn trống đầu tiên
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.text = "";
    defaultOption.disabled = true; // Làm cho tùy chọn này không thể chọn
    defaultOption.selected = true; // Đặt làm tùy chọn mặc định
    selectElement.appendChild(defaultOption);

    // Thêm các tùy chọn từ uniqueList
    uniqueList.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.text = value;
        selectElement.appendChild(option);
    });

    // Xử lý sự kiện khi người dùng chọn một mục
    selectElement.addEventListener("change", function() {
        const selectedValue = selectElement.value;
        const partBeforeDash = selectedValue.split(" | ")[0]; // Lấy phần trước dấu "-"
        console.log(partBeforeDash); // In ra giá trị, hoặc xử lý tùy ý
        vendor_id_nhap2 = partBeforeDash
        closeModal(); // Đóng modal
    });
    closeModal();

    // Bạn có thể cập nhật giao diện hoặc lưu giá trị chọn này theo yêu cầu của bạn
}

function submit_nhap() {
    const warehouse = document.getElementById("warehouse").value;
    const quantity = document.getElementById("quantity").value;
    const storage_location = document.getElementById("storage-location").value;
    const expiry_date = document.getElementById("expiry-date").value;
    const unit_price = document.getElementById("unit-price").value;
    const material_type = document.getElementById("material-type").value;
    const storageInput = document.getElementById("storage-location");
    const inputValue = storageInput.value;
    
    const found_loc = location_data.find(u => u[0] === inputValue);
    console.table(found_loc)
    // Kiểm tra nếu giá trị nhập không có trong location_data
    if (storage_location === "") {
        alert("Bạn chưa nhập vị trí")
        document.getElementById("storage-location").focus()
        return
    }
    
    if (!found_loc) {
        alert("Nhập sai vị trí, vui lòng thử lại")
        document.getElementById("storage-location").value = ""
        document.getElementById("storage-location").focus()
        return
    }
    
    if (warehouse === "") {
        alert("Bạn chưa chọn Mã chi nhánh")
        return
    }

    if (material_type === "") {
        alert("Bạn chưa nhập loại vật tư")
        document.getElementById("material-type").focus()
        return
    }

    if (quantity === "") {
        alert("Bạn chưa nhập số lượng")
        document.getElementById("quantity").focus()
        return
    }

    if (unit_price === "") {
        alert("Bạn chưa nhập đơn giá")
        document.getElementById("unit-price").focus()
        return
    }

    if (expiry_date === "") {
        expiry_date_nhap = "-"
    } else {
        expiry_date_nhap = expiry_date
    }
    
    if (vendor_id_nhap2 === "") {
        alert("Bạn chưa chọn mã nhà cung cấp")
        return
    }

    if (sku_name_nhap === "" || part_number_nhap === "") {
        alert("Bạn chưa chọn vật tư")
        return
    }
    const amount_nhao_cr = unit_price * quantity
    try {
        let stock_in_table = new FormData();
        stock_in_table.append("wh", warehouse);
        stock_in_table.append("operator", sessionStorage.getItem("fullname"));
        stock_in_table.append("type", type_nhap);
        stock_in_table.append("vendor_id", vendor_id_nhap);
        stock_in_table.append("qty", quantity);
        stock_in_table.append("loc", storage_location);
        stock_in_table.append("sku_name", sku_name_nhap);
        stock_in_table.append("sku_id", part_number_nhap);
        stock_in_table.append("expiry", expiry_date_nhap);
        stock_in_table.append("price", unit_price);
        stock_in_table.append("amount", amount_nhao_cr);
        stock_in_table.append("unit", unit_nhap);

        fetch('https://script.google.com/macros/s/AKfycbwu7OABpx4V_QzVuKt113RnWkhAtG09aQ9N1vYrTs7mxcWbQrqtnSb-ISm-CJgyjci8/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: stock_in_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    reset_nhap()
    setTimeout(() => {
        load_data_nhap_without_loading()
    }, 5000);
    info("Nhập vật tư thành công !!!")
}

function reset_nhap() {
    type_nhap = ''
    sku_name_nhap = ''
    part_number_nhap = ''
    unit_nhap = ''
    price_mml_nhap = ''
    vendor_id_nhap = ''
    vendor_id_nhap2 = ''
    vendor_name_nhap = ''
    expiry_date_nhap = '-'

    document.getElementById("quantity").value = ""
    document.getElementById("storage-location").value = ""
    document.getElementById("expiry-date").value = ""
    document.getElementById("unit-price").value = ""
    document.getElementById("material-type").value = ""

    document.getElementById("sku_name_nhap").textContent = ""
    document.getElementById("sku_id_nhap").textContent = ""

    const selectElement = document.getElementById("supplier-code");

    // Xóa các tùy chọn cũ (nếu có)
    selectElement.innerHTML = "";
}

function validateInput(input) {
    // Lưu vị trí con trỏ hiện tại
    const cursorPosition = input.selectionStart;

    // Chỉ cho phép nhập số và dấu chấm
    const sanitizedValue = input.value.replace(/[^0-9.]/g, '');

    // Kiểm tra nếu có thay đổi trong giá trị nhập
    if (sanitizedValue !== input.value) {
        input.value = sanitizedValue;
        
        // Khôi phục lại vị trí con trỏ sau khi thay đổi giá trị
        input.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
    }
}

document.getElementById("storage-location").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        check_loc_nhap()
    }
});

document.getElementById("quantity").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("unit-price").focus()
    }
});

document.getElementById("unit-price").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("storage-location").focus()
    }
});

function check_loc_nhap() {
    const storageInput = document.getElementById("storage-location");
    const inputValue = storageInput.value;
    
    const found_loc = location_data.find(u => u[0] === inputValue);
    console.table(found_loc)
    // Kiểm tra nếu giá trị nhập không có trong location_data
    if (!found_loc) {
        alert("Nhập sai vị trí, vui lòng thử lại")
    } else {
        alert("oke")
    }
}

///////////////////////////////////
// Hàm đóng modal

// Hàm loại bỏ dấu tiếng Việt
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Ẩn dropdown khi không có kết quả
function hideDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = 'none';
}

function hideDropdown_xuat() {
    const dropdown = document.getElementById("dropdown_xuat");
    dropdown.style.display = 'none';
}

// Gán sự kiện input với debounce để giảm số lần tìm kiếm
document.getElementById("material-type").addEventListener("input", debounce(handleMaterialTypeInput, 400));


///////////////////////////////////////////////////
let user_data = [];
let mml_data = [];
let location_data = [];
let onhand_data = [];
let xuat_data = [];
let nhap_data = [];
let customer_data = [];
let crm_data = [];
let survey_data = [];
let survey_approval_data = []
let design_data = []
let design_approval_data = []
let quotation_data = []
let quotation_approval_data = []
let order_data = []
let mfg_data = []
let delivery_data = []
let payment_data = []

async function load_user() {
    return fetch('https://script.google.com/macros/s/AKfycbzwWx6hpZ-C5zcjFDeTjJv77nlWZ2tLlHqtg1SUZS37dOoF5c_ua8ITxzHsX-d5zIhH/exec')
        .then(res => res.json())
        .then(data => {
            user_data = data.content;
            console.log("Dữ liệu người dùng đã tải xong.");
        });
}

async function load_customer() {
    return fetch('https://script.google.com/macros/s/AKfycbxrXB9TnuVnxtVXLTuFUp4mrMp69mjSlbiDNfLJn34pmBNOw5SUfQBgb498XMz5WjVOag/exec')
        .then(res => res.json())
        .then(data => {
            customer_data = data.content;
            console.log("Dữ liệu khách hàng đã tải xong.");
        });
}
load_customer()

async function load_crm() {
    return fetch('https://script.google.com/macros/s/AKfycbxIEht5La88KujgKJsi8Vus7JrxeOToaC1wPD4fRACGKbR0Y_bF5KItAAr4_WRtRgXt/exec')
        .then(res => res.json())
        .then(data => {
            crm_data = data.content;
            console.log("Dữ liệu khách hàng đã tải xong.");
        });
}

async function load_survey() {
    return fetch('https://script.google.com/macros/s/AKfycbx9PanmgLgH8z8_-5QgO7aJdZBmAxa1A8cXrjK6HcGcgMras7dqSUeKQ5V5hwid7r3p/exec')
        .then(res => res.json())
        .then(data => {
            survey_data = data.content;
            console.log("Dữ liệu Khảo sát đã tải xong.");
        });
}

async function load_survey_approval() {
    return fetch('https://script.google.com/macros/s/AKfycbyNOqkC7GT1wfmYBPz4tg9x4rLaZw5AhgNBv45ZQttnR6k2Cztj7OO7pNBang3hPyQ/exec')
        .then(res => res.json())
        .then(data => {
            survey_approval_data = data.content;
            console.log("Dữ liệu Kháo sát Approval đã tải xong.");
        });
}

async function load_design() {
    return fetch('https://script.google.com/macros/s/AKfycbzzVbXsNhIoQG9gtjvv41rR5CQY06rBQgoNuFiNi6lGbKoPF1jpm1rR6EqbDqDPpthm/exec')
        .then(res => res.json())
        .then(data => {
            design_data = data.content;
            console.log("Dữ liệu Design đã tải xong.");
        });
}

async function load_design_approval() {
    return fetch('https://script.google.com/macros/s/AKfycbwfmTLbuvDjos7zZSz1uqrO1w-QQtA29n8NAEHKw9el9u2WIXNAtAmarlFf5-cgnQ1G/exec')
        .then(res => res.json())
        .then(data => {
            design_approval_data = data.content;
            console.log("Dữ liệu Design Approval đã tải xong.");
        });
}

async function load_quotation() {
    return fetch('https://script.google.com/macros/s/AKfycbwfL3l90BWwQHEaRl_hrkCBshV-Hd2yhvE9T2WAL_iV1_0BkViCxavmjxAax3MWT3BVNQ/exec')
        .then(res => res.json())
        .then(data => {
            quotation_data = data.content;
            console.log("Dữ liệu quotation đã tải xong.");
        });
}

async function load_quotation_approval() {
    return fetch('https://script.google.com/macros/s/AKfycbyJAAvYF2pg4QYGrLB9v8TDH6bdeTLKJPwjtH60b6TOnrqAQrafrD8hdv-cIQnxy8YW/exec')
        .then(res => res.json())
        .then(data => {
            quotation_approval_data = data.content;
            console.log("Dữ liệu quotation Approval đã tải xong.");
        });
}

async function load_order() {
    return fetch('https://script.google.com/macros/s/AKfycbyuvJht2YZ7RbMtsLW-D8VHxRaOK1pANfUNkIEaf7r3XHPVD-yCIiPzee8WJIioyYQItA/exec')
        .then(res => res.json())
        .then(data => {
            order_data = data.content;
            console.log("Dữ liệu order đã tải xong.");
        });
}

async function load_mfg() {
    return fetch('https://script.google.com/macros/s/AKfycbz-MD7uedjreW1kCgktD6YlGjSWU7Yec9CJE8w3Mb3D0f0CKyhcjQeH9NPh9j2U7dvzgg/exec')
        .then(res => res.json())
        .then(data => {
            mfg_data = data.content;
            console.log("Dữ liệu mfg đã tải xong.");
        });
}

async function load_delivery() {
    return fetch('https://script.google.com/macros/s/AKfycbxLCUb4iOPUY2EgbfPePzwRUTIueXL0btwe75bWtJD6UWzlg2tvRuKkULWhAWGnAEMXfQ/exec')
        .then(res => res.json())
        .then(data => {
            delivery_data = data.content;
            console.log("Dữ liệu delivery đã tải xong.");
        });
}

async function load_payment() {
    return fetch('https://script.google.com/macros/s/AKfycbxTLg9rKc-aB1xquQt9gCU6dMY64E6nCleYFMR2x17pDzoO1wnFtmMq_A5EC3KSfMTE/exec')
        .then(res => res.json())
        .then(data => {
            payment_data = data.content;
            console.log("Dữ liệu payment đã tải xong.");
        });
}

async function load_mml() {
    return fetch('https://script.google.com/macros/s/AKfycbxIwRRg9dRNtBp6ekhJq6j-qNLwBKT3Sny0KSLChLZHuXGnRNxSij7n58ztQtZAVSL5LA/exec')
        .then(res => res.json())
        .then(data => {
            mml_data = data.content;
            console.log("Dữ liệu tồn đã tải xong.");
        });
}

async function load_location() {
    return fetch('https://script.google.com/macros/s/AKfycbyH_slEDfveGTjZWvAtBMA1obtr8U136jdU0SvmPAg0eV69rZiqwZcujowKe0TcV8-m/exec')
        .then(res => res.json())
        .then(data => {
            location_data = data.content;
            console.log("Dữ liệu loc đã tải xong.");
        });
}

async function load_onhand() {
    return fetch('https://script.google.com/macros/s/AKfycbyz9iwzqC3ZWnKKFEtEkaVOqYrnUgbBjrkKa0ZNwO4feK5blUVKRaoSs9TNTtFJDXA/exec')
        .then(res => res.json())
        .then(data => {
            onhand_data = data.content;
            console.log("Dữ liệu onhand đã tải xong.");
        });
}

async function load_nhap() {
    return fetch('https://script.google.com/macros/s/AKfycbzh8Igcb5eoL3itYKDQBL8l3LpuHaW0xQrWkTFNivzEhtjJLfBXwtCfx04xOyS_nQAEzQ/exec')
        .then(res => res.json())
        .then(data => {
            nhap_data = data.content;
            console.log("Dữ liệu nhập đã tải xong.");
        });
}

async function load_xuat() {
    return fetch('https://script.google.com/macros/s/AKfycbxJUqqXlOU2Gbf84szDR9mEAvhoWlaQIB4rMcnC-Rfojr0sWVKh5jHyrPXqlVzHqQ/exec')
        .then(res => res.json())
        .then(data => {
            xuat_data = data.content;
            console.log("Dữ liệu xuất đã tải xong.");
        });
}

document.addEventListener("DOMContentLoaded", async () => {
    await load_user(); // Tải dữ liệu người dùng trước khi cho phép đăng nhập

    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginFrame = document.getElementById("login-frame");
    const welcomeFrame = document.getElementById("welcome-frame");
    const welcomeMessage = document.getElementById("welcome-message");
    const logoutButton = document.getElementById("logout-btn");

    const EXPIRATION_TIME = 3 * 24 * 60 * 60 * 1000; // 3 ngày

    checkLoginStatus();

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Tìm user trong user_data dựa trên tên đăng nhập và mật khẩu
        const user = user_data.find(u => u[2] === username && u[3] === password);

        if (user) {
            const fullname = user[0];
            const wh = user[1]
            const approver = user[17]
            const dept = user[19]
            // Xác định quyền của user dựa trên các cột 4, 5, 6, 7 trong user_data
            const permissions = {
                import: user[4] === "x",
                export: user[5] === "x",
                onhand: user[6] === "x",
                transaction_nhap: user[6] === "x",
                transaction_xuat: user[6] === "x",
                mml: user[7] === "x",
                crm: user[9] === "x",
                survey: user[10] === "x",
                design: user[11] === "x",
                quotation: user[12] === "x",
                order: user[13] === "x", 
                mfg: user[14] === "x",
                delivery: user[15] === "x",
                payment:user[16] === "x",
                approve_center:user[18] === "x"
            };

            // Ghi log quyền để kiểm tra
            console.log("Quyền truy cập của người dùng:", permissions);

            // Lưu quyền và thông tin người dùng vào sessionStorage
            sessionStorage.setItem("permissions", JSON.stringify(permissions));
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("fullname", fullname);
            sessionStorage.setItem("wh", wh);
            sessionStorage.setItem("approver", approver);
            sessionStorage.setItem("dept", dept);
            loginSuccess(username);
        } else {
            alert("Sai tên đăng nhập hoặc mật khẩu!");
        }
    });

    function loginSuccess(username) {
        const expirationTime = Date.now() + EXPIRATION_TIME;
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("expirationTime", expirationTime.toString());
    
        displayWelcomeFrame();
        if (welcomeMessage) {
            welcomeMessage.textContent = "Welcome, " + username;
        }
    
        // Gọi hàm khởi tạo combobox sau khi hoàn tất đăng nhập
        create_wh_nhap();
        create_wh_xuat()
        create_wh_xuat_export()
        create_wh_nhap_export()
        create_wh_onhand_export()
        create_wh_crm()
    
    }
    

    function checkLoginStatus() {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        const expirationTime = sessionStorage.getItem("expirationTime");
        const username = sessionStorage.getItem("username");
        
        if (isLoggedIn === "true" && expirationTime && Date.now() < parseInt(expirationTime)) {
            displayWelcomeFrame();
            if (welcomeMessage) {
                welcomeMessage.textContent = "Welcome, " + (username || "User");
            }
        } else {
            logout();
        }
    }

    function logout() {
        sessionStorage.clear(); // Xóa tất cả dữ liệu sessionStorage

        displayLoginFrame();
        // alert("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");

        usernameInput.value = "";
        passwordInput.value = "";
    }

    function displayLoginFrame() {
        loginFrame.style.display = "flex";
        welcomeFrame.style.display = "none";
    }

    function displayWelcomeFrame() {
        loginFrame.style.display = "none";
        welcomeFrame.style.display = "flex";
    }

    if (logoutButton) {
        logoutButton.addEventListener("click", logout);
    }

    // Hàm hiển thị frame theo id, chỉ cho phép truy cập nếu có quyền
    
});

// document.addEventListener("DOMContentLoaded", async () => {
//     await load_user(); // Tải dữ liệu người dùng trước khi cho phép đăng nhập

//     const loginForm = document.getElementById("login-form");
//     const usernameInput = document.getElementById("username");
//     const passwordInput = document.getElementById("password");
//     const loginFrame = document.getElementById("login-frame");
//     const welcomeFrame = document.getElementById("welcome-frame");
//     const welcomeMessage = document.getElementById("welcome-message");
//     const logoutButton = document.getElementById("logout-btn");

//     const EXPIRATION_TIME = 3 * 24 * 60 * 60 * 1000; // 3 ngày
//     // const EXPIRATION_TIME = 1 * 60 * 1000; // 1 phút

//     checkLoginStatus();
//     // const isLoggedIn = sessionStorage.getItem("isLoggedIn");
//     // const expirationTime = sessionStorage.getItem("expirationTime");
//     // const username = sessionStorage.getItem("username");

//     // // Kiểm tra nếu đã đăng nhập và còn hiệu lực
//     // if (isLoggedIn === "true" && expirationTime && Date.now() < parseInt(expirationTime)) {
//     //     displayWelcomeFrame(); // Hiển thị khung chào mừng
//     //     if (welcomeMessage) {
//     //         welcomeMessage.textContent = "Welcome, " + (username || "User");
//     //     }

//     //     // Gọi các hàm cần thiết sau khi hiển thị khung chào mừng
//     //     create_wh_nhap();
//     //     create_wh_xuat();
//     //     create_wh_xuat_export();
//     //     create_wh_nhap_export();
//     //     create_wh_onhand_export();
//     //     create_wh_crm();
//     // } else {
//     //     // Nếu chưa đăng nhập hoặc hết hạn, thực hiện bước tải dữ liệu
//     //     await load_user(); // Tải dữ liệu người dùng trước khi cho phép đăng nhập

//     //     // Hiển thị khung đăng nhập
//     //     displayLoginFrame();
//     // }

//     loginForm.addEventListener("submit", async (e) => {
//         e.preventDefault();
//         document.getElementById("loadingIndicator").style.display = "block";
//         await load_user()
        

//         const username = usernameInput.value;
//         const password = passwordInput.value;

//         // Tìm user trong user_data dựa trên tên đăng nhập và mật khẩu
//         const user = user_data.find(u => u[2] === username && u[3] === password);

//         if (user) {
//             const fullname = user[0];
//             const wh = user[1]
//             const approver = user[17]
//             const dept = user[19]
//             // Xác định quyền của user dựa trên các cột 4, 5, 6, 7 trong user_data
//             const permissions = {
//                 import: user[4] === "x",
//                 export: user[5] === "x",
//                 onhand: user[6] === "x",
//                 transaction_nhap: user[6] === "x",
//                 transaction_xuat: user[6] === "x",
//                 mml: user[7] === "x",
//                 crm: user[9] === "x",
//                 survey: user[10] === "x",
//                 design: user[11] === "x",
//                 quotation: user[12] === "x",
//                 order: user[13] === "x", 
//                 mfg: user[14] === "x",
//                 delivery: user[15] === "x",
//                 payment:user[16] === "x",
//                 approve_center:user[18] === "x"
//             };

//             // Ghi log quyền để kiểm tra
//             console.log("Quyền truy cập của người dùng:", permissions);

//             // Lưu quyền và thông tin người dùng vào sessionStorage
//             sessionStorage.setItem("permissions", JSON.stringify(permissions));
//             sessionStorage.setItem("username", username);
//             sessionStorage.setItem("fullname", fullname);
//             sessionStorage.setItem("wh", wh);
//             sessionStorage.setItem("approver", approver);
//             sessionStorage.setItem("dept", dept);
//             loginSuccess(username);
//         } else {
//             alert("Sai tên đăng nhập hoặc mật khẩu!");
//         }
//     });

//     function loginSuccess(username) {
//         const expirationTime = Date.now() + EXPIRATION_TIME;
//         sessionStorage.setItem("isLoggedIn", "true");
//         sessionStorage.setItem("expirationTime", expirationTime.toString());
    
//         displayWelcomeFrame();
//         if (welcomeMessage) {
//             welcomeMessage.textContent = "Welcome, " + username;
//         }
    
//         // Gọi hàm khởi tạo combobox sau khi hoàn tất đăng nhập
//         create_wh_nhap();
//         create_wh_xuat()
//         create_wh_xuat_export()
//         create_wh_nhap_export()
//         create_wh_onhand_export()
//         create_wh_crm()
//         document.getElementById("loadingIndicator").style.display = "none";
    
//     }
    

//     function checkLoginStatus() {
//         const isLoggedIn = sessionStorage.getItem("isLoggedIn");
//         const expirationTime = sessionStorage.getItem("expirationTime");
//         const username = sessionStorage.getItem("username");
        
//         if (isLoggedIn === "true" && expirationTime && Date.now() < parseInt(expirationTime)) {
//             displayWelcomeFrame();
//             if (welcomeMessage) {
//                 welcomeMessage.textContent = "Welcome, " + (username || "User");
//             }
//         } else {
//             logout();
//         }
//     }

//     function logout() {
//         sessionStorage.clear(); // Xóa tất cả dữ liệu sessionStorage

//         displayLoginFrame();
//         // alert("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");

//         usernameInput.value = "";
//         passwordInput.value = "";
//     }

//     function displayLoginFrame() {
//         loginFrame.style.display = "flex";
//         welcomeFrame.style.display = "none";
//     }

//     function displayWelcomeFrame() {
//         loginFrame.style.display = "none";
//         welcomeFrame.style.display = "flex";
//     }

//     if (logoutButton) {
//         logoutButton.addEventListener("click", logout);
//     }

//     // Hàm hiển thị frame theo id, chỉ cho phép truy cập nếu có quyền
    
// });


async function load_data_nhap() {
    warning("Đang lấy dữ liệu")
    // Show the loading indicator
    document.getElementById("loadingIndicator").style.display = "block";

    await Promise.all([load_mml(), load_location()]); // Run both fetch calls in parallel

    // Hide the loading indicator once loading is complete
    document.getElementById("loadingIndicator").style.display = "none";
    info("Lấy dữ liệu thành công")
}

async function load_data_xuat() {
    warning("Đang lấy dữ liệu")
    // Show the loading indicator
    document.getElementById("loadingIndicator").style.display = "block";

    await Promise.all([load_onhand()]); // Run both fetch calls in parallel

    // Hide the loading indicator once loading is complete
    document.getElementById("loadingIndicator").style.display = "none";
    info("Lấy dữ liệu thành công")
}

async function load_data_mml() {
    warning("Đang lấy dữ liệu")
    // Show the loading indicator
    document.getElementById("loadingIndicator").style.display = "block";

    await show_onhand()

    // Hide the loading indicator once loading is complete
    document.getElementById("loadingIndicator").style.display = "none";
    info("Lấy dữ liệu thành công")
}

async function load_data_xuat_export() {
    warning("Đang lấy dữ liệu")
    // Show the loading indicator
    document.getElementById("loadingIndicator").style.display = "block";

    await show_xuat()

    // Hide the loading indicator once loading is complete
    document.getElementById("loadingIndicator").style.display = "none";
    info("Lấy dữ liệu thành công")
}

async function load_data_nhap_export() {
    warning("Đang lấy dữ liệu")
    // Show the loading indicator
    document.getElementById("loadingIndicator").style.display = "block";

    await show_nhap()

    // Hide the loading indicator once loading is complete
    document.getElementById("loadingIndicator").style.display = "none";
    info("Lấy dữ liệu thành công")
}

function load_data_nhap_without_loading() {
    load_mml();
    load_location();
}


function showFrame(id) {
    const permissions = JSON.parse(sessionStorage.getItem("permissions")) || {};

    // Log to check access permissions
    console.log("Checking access for frame:", id);
    console.log("Current permissions:", permissions);

    // Allow access only if it's Home or the user has permission for the frame
    if (id === "home" || permissions[id] === true) {
        const frames = document.querySelectorAll('.frame');
        frames.forEach(frame => frame.classList.remove('active'));

        const activeFrame = document.getElementById(id);
        if (activeFrame) {
            if (id === 'import') {
                // Load data and then show the frame
                load_data_nhap().then(() => {
                    activeFrame.classList.add('active');
                    console.log("Access granted to frame:", id);
                    reset_nhap()
                    stopInterval()
                });
            } else if (id === 'export') {
                // Load data and then show the frame
                startInterval()
                load_data_xuat().then(() => {
                    activeFrame.classList.add('active');
                    console.log("Access granted to frame:", id);
                    reset_xuat()
                    
                });
            } else if (id === 'mml') {
                activeFrame.classList.add('active');
                console.log("Access granted to frame:", id);
                reset_mml()
                stopInterval()
            } else if (id === 'onhand') {
                // Load data and then show the frame
                load_data_mml().then(() => {
                    activeFrame.classList.add('active');
                    console.log("Access granted to frame:", id);
                    stopInterval()
                });
            } else if (id === 'transaction_xuat') {
                // Load data and then show the frame
                load_data_xuat_export().then(() => {
                    activeFrame.classList.add('active');
                    console.log("Access granted to frame:", id);
                    stopInterval()
                });
            } else if (id === 'transaction_nhap') {
                // Load data and then show the frame
                load_data_nhap_export().then(() => {
                    activeFrame.classList.add('active');
                    console.log("Access granted to frame:", id);
                    stopInterval()
                });
            } else if (id === 'crm') {
                activeFrame.classList.add('active');
                console.log("Access granted to frame:", id);
            } else if (id === 'survey') {
                get_survey_need_to_process()
                activeFrame.classList.add('active');
                console.log("Access granted to frame:", id);
            } else if (id === 'approve_center') {
                load_approval_ticket()
                activeFrame.classList.add('active');
            } else if (id === 'design') {
                get_design_need_to_process()
                activeFrame.classList.add('active');
            } else if (id === 'quotation') {
                get_quotation_need_to_process()
                activeFrame.classList.add('active');
            } else if (id === 'order') {
                get_order_need_to_process()
                activeFrame.classList.add('active');
            } else if (id === 'mfg') {
                get_mfg_need_to_process()
                activeFrame.classList.add('active');
            } else if (id === 'delivery') {
                get_delivery_need_to_process()
                activeFrame.classList.add('active');
            } else if (id === 'payment') {
                get_payment_need_to_process()
                activeFrame.classList.add('active');
            } else {
                activeFrame.classList.add('active');
                console.log("Access granted to frame:", id);
                stopInterval()
            }
        }
    } else {
        alert("You do not have permission to access this tab.");
        console.log("Access denied to frame:", id);
    }
}

/////*** */ XUẤT //////
function clear_label_xuat() {
    document.getElementById("loc_xuat").textContent = ""
    document.getElementById("exp_date_xuat").textContent = ""
    document.getElementById("ib_date_xuat").textContent = ""
    document.getElementById("sku_name_xuat").textContent = ""
    document.getElementById("sku_id_xuat").textContent = ""
    document.getElementById("cur_onhand").textContent = ""
    document.getElementById("price_at_xuat").textContent = ""
}

function reset_xuat() {
    clear_label_xuat()
    document.getElementById("quantity_xuat").value = ""
    document.getElementById("customer_name").value = ""
    document.getElementById("order_xuat").value = ""
    document.getElementById("material-type_xuat").value = ""
    

    wh_xuat = ''
    type_xuat = ''
    sku_id_xuat = ''
    loc_xuat = ''
    expiry_date_xuat = ''
    inbound_date_xuat = ''
    price_inbound_xuat = ''
    qty_ib_xuat = ''
    qty_first_xuat = ''
    qty_ob_xuat = ''
    qty_last_xuat = ''
    sku_name_xuat = ''
    price_xuat = ''
    amount_xuat = ''
    unit_xuat = ''
}

function handleMaterialTypeInput_xuat(event) {
    const wh_value = document.getElementById("warehouse_xuat").value
        if (wh_value === "") {
            alert("Vui lòng chọn mã chi nhánh trước")
            modalOptions.innerHTML = ''
            closeModal()

            document.getElementById("material-type_xuat").value = ""
            return
        }
    const searchTerm = removeAccents(event.target.value).toUpperCase(); // Chuyển đổi thành uppercase không dấu
    const results = onhand_data.filter(item => removeAccents(item[1]).toUpperCase().includes(searchTerm) && item[0] === wh_value); // Tìm kiếm không dấu
    // Hiển thị kết quả tìm kiếm từ cột mml_data[1]
    if (results.length > 0) {
        showSearchResults2(results.map(item2 => item2[1]), results); // Truyền danh sách tên vật tư và dữ liệu gốc
    } else {
        hideDropdown_xuat(); // Ẩn dropdown nếu không có kết quả
        showTemporaryLabel("Không có kết quả")
        console.log("Không tìm thấy kết quả.");

    }
}

function showSearchResults2(displayList, fullData) {
    clear_label_xuat()
    const dropdown = document.getElementById("dropdown_xuat");
    dropdown.innerHTML = ''; // Xóa nội dung cũ

    // Hiển thị dropdown
    dropdown.style.display = 'block';

    // Sử dụng Set để giữ lại các giá trị duy nhất
    const uniqueItems = [...new Set(displayList)];

    // Tạo các mục dropdown từ danh sách uniqueItems
    uniqueItems.forEach((item, index) => {
        const dropdownItem = document.createElement("div");
        dropdownItem.classList.add("dropdown-item");
        dropdownItem.textContent = item;

        // Lấy chỉ số của phần tử đầu tiên trong fullData tương ứng với item
        const originalIndex = fullData.findIndex(dataItem => dataItem[1] === item);
        console.log(originalIndex)
        
        // Xử lý sự kiện khi người dùng chọn một mục từ dropdown
        dropdownItem.addEventListener("click", () => {
            document.getElementById("material-type_xuat").value = item; // Gán lựa chọn vào ô nhập liệu
            dropdown.style.display = 'none'; // Ẩn dropdown sau khi chọn
            
            // Gọi hàm để xử lý lựa chọn đầu tiên và tìm danh sách thứ hai
            showSecondaryOptions2(fullData[originalIndex]);
        });

        dropdown.appendChild(dropdownItem);
    });
}

function showSecondaryOptions2(selectedItem) {
    const wh_value = document.getElementById("warehouse_xuat").value
    // Filter based on selected item and availability
    const filteredResults = onhand_data.filter(item => item[1] === selectedItem[1] && item[10] > 0 && item[0] === wh_value);
    const modal = document.getElementById("secondaryModal2");
    const modalOptions = document.getElementById("modalOptions2");
    modalOptions.innerHTML = ''; // Clear old content

    // Use a Set to keep track of unique options
    const uniqueOptions = new Set();

    filteredResults.forEach(option => {
        const optionKey = `${option[2]} | ${option[11]}`; // Create a unique key based on ID and description

        if (!uniqueOptions.has(optionKey)) {
            uniqueOptions.add(optionKey); // Add to the Set to ensure uniqueness

            const optionDiv = document.createElement("div");
            optionDiv.classList.add("modal-option");

            // Set the text content using the unique ID and description
            optionDiv.textContent = optionKey;

            optionDiv.addEventListener("click", () => {
                handleModalSelection_nhap2(option); // Call function when user selects an option
                modal.style.display = 'none';
            });

            modalOptions.appendChild(optionDiv);
        }
    });

    // Display the modal
    modal.style.display = 'flex';
}



document.getElementById("material-type_xuat").addEventListener("input", debounce(handleMaterialTypeInput_xuat, 400));

function showTemporaryLabel(message) {
    const label = document.getElementById("tempLabel");
    
    if (label) {
        label.textContent = message;       // Set the label's text
        label.style.display = 'block';     // Show the label
        
        // Hide the label after 5 seconds (5000 milliseconds)
        setTimeout(() => {
            label.style.display = 'none';
        }, 5000);
    } else {
        console.warn("Label element not found!");
    }
}


function handleModalSelection_nhap2(selectedOption) {
    const wh_value = document.getElementById("warehouse_xuat").value;
    console.log("Người dùng đã chọn:", selectedOption);

    [wh_xuat, type_xuat, sku_id_xuat, loc_xuat, expiry_date_xuat, inbound_date_xuat, price_inbound_xuat, qty_ib_xuat, qty_first_xuat, qty_ob_xuat, qty_last_xuat, sku_name_xuat, price_xuat, amount_xuat, unit_xuat] = selectedOption;

    document.getElementById("sku_name_xuat").textContent = sku_name_xuat;
    document.getElementById("sku_id_xuat").textContent = sku_id_xuat;
    closeModal();

    var found_table_xuat = onhand_data
        .filter(item => item[10] > 0 && item[1] === type_xuat && item[2] === sku_id_xuat && item[0] === wh_value)
        .map(col => [
            col[1],                // Type
            col[3],                // Location
            Math.ceil(col[10] * 10000) / 10000, // Round quantity up to 4 decimal places
            col[4] || "-",         // Expiry Date, default to "-"
            col[5],                 // Inbound Date
            col[6]
        ]);

    found_table_xuat.sort((a, b) => {
        const expiryA = a[3] === "-" ? Infinity : new Date(a[3]);
        const expiryB = b[3] === "-" ? Infinity : new Date(b[3]);
        const inboundA = new Date(a[4]);
        const inboundB = new Date(b[4]);

        if (expiryA - expiryB !== 0) return expiryA - expiryB;
        return inboundA - inboundB;
    });

    let earliestExpiryDate = found_table_xuat.find(row => row[3] !== "-")?.[3];
    let earliestInboundDate = found_table_xuat[0][3] === "-" ? found_table_xuat[0][4] : null;

    found_table_xuat = found_table_xuat.map(row => {
        let status = "Không thể lấy";
        if (row[3] === earliestExpiryDate || (row[3] === "-" && row[4] === earliestInboundDate)) {
            status = "Pick"; // Assign "Pick" to items that are pickable
        }
        return [...row, status];
    });

    console.table(found_table_xuat);
    console.log(found_table_xuat[5])
    displayFoundTableModal(found_table_xuat);
}



function displayFoundTableModal(data) {
    const tableBody = document.getElementById("foundTable").querySelector("tbody");
    tableBody.innerHTML = ''; // Clear any existing rows

    data.forEach((row, rowIndex) => {
        const tableRow = document.createElement("tr");

        // Append each data cell, excluding any previous status column
        row.slice(0, 6).forEach(cellData => {
            const tableCell = document.createElement("td");
            tableCell.textContent = cellData;
            tableRow.appendChild(tableCell);
        });

        // Add the new status cell with the "Pick" button or "Không thể lấy" text
        const statusCell = document.createElement("td");
        if (row[6] === "Pick") {
            const pickButton = document.createElement("button");
            pickButton.textContent = "Pick";
            pickButton.classList.add("pick-button");
            pickButton.addEventListener("click", () => handlePick(row));
            statusCell.appendChild(pickButton);
        } else {
            const statusText = document.createElement("span");
            statusText.textContent = "Không thể lấy";
            statusText.classList.add("status-text");
            statusCell.appendChild(statusText);
        }
        tableRow.appendChild(statusCell);

        tableBody.appendChild(tableRow);
    });

    // Show the modal
    document.getElementById("foundTableModal").style.display = 'block';
}


// Function to handle the "Pick" button click
let qty_xuat_selected = 0
function handlePick(selectedRow) {
    console.log("Selected row for picking:", selectedRow);
    qty_xuat_selected = selectedRow[2]
    document.getElementById("loc_xuat").textContent = selectedRow[1]
    document.getElementById("exp_date_xuat").textContent = selectedRow[3]
    document.getElementById("ib_date_xuat").textContent = selectedRow[4]
    document.getElementById("cur_onhand").textContent = selectedRow[2]
    document.getElementById("price_at_xuat").textContent = selectedRow[5]
    
    closeFoundTableModal();

    document.getElementById("quantity_xuat").value = ""
    document.getElementById("quantity_xuat").focus()
}

// Function to close the modal
function closeFoundTableModal() {
    document.getElementById("foundTableModal").style.display = 'none';
}

document.getElementById("customer_name").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("order_xuat").focus()
    }
});

document.getElementById("order_xuat").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("material-type_xuat").focus()
    }
});

document.getElementById("quantity_xuat").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        submit_xuat()
    }
});

function submit_xuat() {
    const warehouse = document.getElementById("warehouse_xuat").value;
    const quantity = document.getElementById("quantity_xuat").value;
    const material_type = document.getElementById("material-type_xuat").value;
    const customer_name = document.getElementById("customer_name").value;
    const order_xuat = document.getElementById("order_xuat").value;

    const storage_location = document.getElementById("loc_xuat").textContent;
    const sku_name_xuat = document.getElementById("sku_name_xuat").textContent;
    const sku_id_xuat = document.getElementById("sku_id_xuat").textContent;
    const expiry_date = document.getElementById("exp_date_xuat").textContent;
    const inbound_date = document.getElementById("ib_date_xuat").textContent;
    const price = document.getElementById("price_at_xuat").textContent;
    // const qty_xuat_selected = document.getElementById("cur_onhand").textContent;
    
    if (warehouse === "") {
        alert("Bạn chưa chọn chi nhánh")
        document.getElementById("warehouse_xuat").focus()
        return
    }

    if (customer_name === "") {
        alert("Bạn chưa nhập tên khách hàng")
        document.getElementById("customer_name").focus()
        return
    }

    if (order_xuat === "") {
        alert("Bạn chưa nhập mã đơn hàng cần xuất")
        document.getElementById("order_xuat").focus()
        return
    }

    if (material_type === "") {
        alert("Bạn chưa nhập Loại vật tư")
        document.getElementById("material-type_xuat").focus()
        return
    }

    if (sku_name_xuat === "" || sku_id_xuat === "" || expiry_date === "" || inbound_date === "" || storage_location === "") {
        alert("Bạn chưa chọn vật tư")
        return
    }

    if (quantity === "" || quantity <= 0) {
        alert("Số lượng xuất phải > 0")
        document.getElementById("quantity_xuat").value = ""
        document.getElementById("quantity_xuat").focus()
        return
    }

    if (quantity > qty_xuat_selected) {
        alert("Số lượng xuất không được vượt số lượng tồn hiện tại")
        document.getElementById("quantity_xuat").value = ""
        document.getElementById("quantity_xuat").focus()
        return
    }

    const amount_xuat_cr = price * quantity
    console.log(amount_xuat_cr)

    try {
        let stock_out_table = new FormData();
        stock_out_table.append("wh", warehouse);
        stock_out_table.append("operator", sessionStorage.getItem("fullname"));
        stock_out_table.append("customer", customer_name);
        stock_out_table.append("vendor_id", vendor_id_nhap);
        stock_out_table.append("order", order_xuat);
        stock_out_table.append("type", material_type);
        stock_out_table.append("qty", quantity);
        stock_out_table.append("loc", storage_location);
        stock_out_table.append("sku_name", sku_name_xuat);
        stock_out_table.append("sku_id", sku_id_xuat);
        stock_out_table.append("exp_date", "'"+expiry_date);
        stock_out_table.append("ib_date", "'"+inbound_date);
        stock_out_table.append("price", price);
        stock_out_table.append("amount", amount_xuat_cr);
        stock_out_table.append("unit", unit_xuat);
        fetch('https://script.google.com/macros/s/AKfycbzVig-uAYGFBBJ9MLuyoAtUhUBxJgbPH03AKSJBtbWt0lKjDIJI1I9P5wnyTSO_C0Nx1A/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: stock_out_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    setTimeout(() => {
        load_onhand();
    }, 5000);
    reset_xuat()
    info("Xuất vật tư thành công !!!")   
}

/// Interval Xuất
let intervalId = null;

function yourFunction() {
    console.log("Function is running");
    // Your function code here
}

function startInterval() {
    if (!intervalId) {
        intervalId = setInterval(load_onhand, 300000) //300000); // Run every 5 minutes
    }
}

function stopInterval() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        console.log("Interval stopped");
    }
}

////// MML //////\
function reset_mml() {
    document.getElementById("material-type_mml").value = "";
    document.getElementById("sku_name_mml").value = "";
    document.getElementById("sku_id_mml").value = "";
    document.getElementById("price_mml").value = "";
    document.getElementById("supplier_id_mml").value = "";
    document.getElementById("supplier_name_mml").value = "";
    document.getElementById("unit_mml").value = "";
    document.getElementById("material-type_mml").focus()
}

document.getElementById("material-type_mml").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("sku_name_mml").focus()
    }
});

document.getElementById("sku_name_mml").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("sku_id_mml").focus()
    }
});

document.getElementById("sku_id_mml").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("price_mml").focus()
    }
});

document.getElementById("price_mml").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("supplier_id_mml").focus()
    }
});

document.getElementById("supplier_id_mml").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("supplier_name_mml").focus()
    }
});

function submit_mml() {
    const type = document.getElementById("material-type_mml").value
    const sku_name = document.getElementById("sku_name_mml").value
    const sku_id = document.getElementById("sku_id_mml").value
    const price = document.getElementById("price_mml").value
    const supplier_id = document.getElementById("supplier_id_mml").value
    const supplier_name = document.getElementById("supplier_name_mml").value
    const unit = document.getElementById("unit_mml").value

    if (type === "") {
        alert("Bạn chưa nhập loại vật tư")
        document.getElementById("material-type_mml").focus()
        return
    }

    if (sku_name === "") {
        alert("Bạn chưa nhập têm vật tư")
        document.getElementById("sku_name_mml").focus()
        return
    }

    if (sku_id === "") {
        alert("Bạn chưa nhập mã vật tư")
        document.getElementById("sku_id_mml").focus()
        return
    }
    
    if (price === "") {
        alert("Bạn chưa nhập đơn giá")
        document.getElementById("price_mml").focus()
        return
    }

    if (price <= 0) {
        alert("Đơn giá phải > 0")
        document.getElementById("price_mml").value = ""
        document.getElementById("price_mml").focus()
        return
    }

    if (supplier_id === "") {
        alert("Bạn chưa nhập mã nhà cung cấp")
        document.getElementById("supplier_id_mml").focus()
        return
    }

    if (supplier_name === "") {
        alert("Bạn chưa nhập tên nhà cung cấp")
        document.getElementById("supplier_name_mml").focus()
        return
    }

    if (unit === "") {
        alert("Bạn chưa chọn đơn vị")
        document.getElementById("unit_mml").focus()
        return
    }
    //
    try {
        let mml_table = new FormData();
        mml_table.append("type", type.toUpperCase());
        mml_table.append("sku_name", sku_name);
        mml_table.append("sku_id", sku_id.toUpperCase());
        mml_table.append("price", price);
        mml_table.append("supplier_id", supplier_id.toUpperCase());
        mml_table.append("supplier_name", supplier_name.toUpperCase());
        mml_table.append("unit", unit);
        mml_table.append("operator", sessionStorage.getItem("fullname"));

        fetch('https://script.google.com/macros/s/AKfycbzCyWkpU08SF2hMz2i6k2TwMmukhYoJ2BdK1-oOqBqyHyvKE_yJNT-q_MSQw_Qut7DT-w/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: mml_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    reset_mml()

    info("Đã thêm vật tư mới thành công")
}


////*** */ Export data
/// onhand
// Define the columns based on your headers
async function show_onhand() {
    await load_onhand()
    // Define columns based on the index of each data field
    const columns = [
        { title: "Mã chi nhánh", formatter: (cell) => cell.getData()[0] },
        { title: "Loại vật tư", formatter: (cell) => cell.getData()[1] },
        { title: "Mã vật tư", formatter: (cell) => cell.getData()[2] },
        { title: "Location", formatter: (cell) => cell.getData()[3] },
        { title: "Ngày hết hạn", formatter: (cell) => cell.getData()[4] },
        { title: "Ngày nhập", formatter: (cell) => cell.getData()[5] },
        { title: "Đơn giá lúc nhập", formatter: (cell) => cell.getData()[6] },
        { title: "Nhập", formatter: (cell) => cell.getData()[7] },
        { title: "Tồn đầu", formatter: (cell) => cell.getData()[8] },
        { title: "Xuất", formatter: (cell) => cell.getData()[9] },
        { title: "Tồn cuối", formatter: (cell) => cell.getData()[10] },
        { title: "Description / SKU", formatter: (cell) => cell.getData()[11] },
        { title: "Đơn giá", formatter: (cell) => cell.getData()[12] },
        { title: "Thành tiền", formatter: (cell) => cell.getData()[13] },
        { title: "Đơn vị", formatter: (cell) => cell.getData()[14] },
        { title: "Concat", formatter: (cell) => cell.getData()[15] }
    ];


    const table = new Tabulator("#onhandTable", {
        data: onhand_data,   // Dữ liệu của bảng
        columns: columns,    // Cấu hình cột
        layout: "fitDataTable",  // Tùy chọn layout
        height: "800px",     // Đặt chiều cao để kích hoạt cuộn
        virtualDom: true,    // Bật chế độ virtual DOM
        pagination: "local",
        paginationSize: 25,
        paginationSizeSelector: [25, 50, 100],
        movableColumns: true,
        resizableRows: true,
    });


}


document.getElementById("refresh_onhand").addEventListener("click", async function() {
    await load_data_mml()
});

async function show_xuat() {
    await load_xuat()
    // Define columns based on the index of each data field
    const columns = [
        { title: 'Ngày xuất', formatter: (cell) => cell.getData()[0] },
        { title: 'Thời gian xuất', formatter: (cell) => cell.getData()[1] },
        { title: 'Mã chi nhánh', formatter: (cell) => cell.getData()[2] },
        { title: 'Tên người xuất', formatter: (cell) => cell.getData()[3] },
        { title: 'Tên khách hàng', formatter: (cell) => cell.getData()[4] },
        { title: 'Mã đơn hàng', formatter: (cell) => cell.getData()[5] },
        { title: 'Loại vật tư', formatter: (cell) => cell.getData()[6] },
        { title: 'Số lượng', formatter: (cell) => cell.getData()[7] },
        { title: 'Location', formatter: (cell) => cell.getData()[8] },
        { title: 'Tên vật tư', formatter: (cell) => cell.getData()[9] },
        { title: 'Mã vật tư', formatter: (cell) => cell.getData()[10] },
        { title: 'Ngày hết hạn', formatter: (cell) => cell.getData()[11] },
        { title: 'Ngày nhập', formatter: (cell) => cell.getData()[12] },
        { title: 'Đơn giá', formatter: (cell) => cell.getData()[13] },
        { title: 'Thành tiền', formatter: (cell) => cell.getData()[14] },
        { title: 'Đơn vị', formatter: (cell) => cell.getData()[15] }

    ];

    const table = new Tabulator("#xuatTable", {
        data: xuat_data,   // Dữ liệu của bảng
        columns: columns,    // Cấu hình cột
        layout: "fitDataTable",  // Tùy chọn layout
        height: "800px",     // Đặt chiều cao để kích hoạt cuộn
        virtualDom: true,    // Bật chế độ virtual DOM
        pagination: "local",
        paginationSize: 25,
        paginationSizeSelector: [25, 50, 100],
        movableColumns: true,
        resizableRows: true,
    });
}


document.getElementById("refresh_xuat").addEventListener("click", async function() {
    await load_data_xuat_export()
});

document.getElementById("export_xuat").addEventListener("click", function() {
    // Hiển thị modal
    document.getElementById("filterModal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function() {
    // Ẩn modal
    document.getElementById("filterModal").style.display = "none";
    document.getElementById("dateFrom").value = "";
    document.getElementById("dateTo").value = "";
});

document.getElementById("closeModal2").addEventListener("click", function() {
    // Ẩn modal
    document.getElementById("filterModal2").style.display = "none";
    document.getElementById("dateFrom2").value = "";
    document.getElementById("dateTo2").value = "";
});

document.getElementById("closeModal3").addEventListener("click", function() {
    // Ẩn modal
    document.getElementById("filterModal3").style.display = "none";
});

document.getElementById("applyFilter").addEventListener("click", async function() {
    warning("Đang xuất dữ liệu")
    await load_xuat()
    // Lấy giá trị từ các input trong modal
    const selectValue = document.getElementById("selectFilter").value;
    const dateFrom = document.getElementById("dateFrom").value;
    const dateTo = document.getElementById("dateTo").value;

    if ((dateFrom && !dateTo) || (!dateFrom && dateTo)) {
        alert("Vui lòng điền đầy đủ cả 'Date From' và 'Date To' hoặc để trống cả hai.");
        return; // Dừng lại nếu chỉ có một trong hai ngày được chọn
    }

    // Chuyển đổi ngày để so sánh
    const fromDate = new Date(dateFrom);
    const toDate = new Date(dateTo);

    const headerRow = xuat_data[0];

    // Lọc dữ liệu dựa trên điều kiện
    const filteredData = xuat_data.filter(row => {
        const rowDate = new Date(row[0]); // Giả sử ngày ở cột đầu tiên (index 0)
        
        // Kiểm tra điều kiện ngày, nếu không chọn ngày thì bỏ qua lọc theo ngày
        const isDateInRange = (!dateFrom && !dateTo) || (dateFrom && dateTo && rowDate >= fromDate && rowDate <= toDate);

        // Kiểm tra điều kiện Select, nếu không chọn thì bỏ qua lọc theo Select
        const isSelectMatch = !selectValue || selectValue === "All" || row[2] === selectValue; // Giả sử giá trị Select ở cột thứ 3 (index 2)

        return isDateInRange && isSelectMatch;
    });

    const exportData = [headerRow, ...filteredData];


    // Tạo và xuất file Excel với dữ liệu đã lọc
    const worksheet = XLSX.utils.json_to_sheet(exportData, { skipHeader: true });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Xuất");

    // Định dạng tên file với thời gian hiện tại
    const now = new Date();
    const formattedDate = `${now.getFullYear()}_${String(now.getMonth() + 1).padStart(2, '0')}_${String(now.getDate()).padStart(2, '0')}`;
    const formattedTime = `${String(now.getHours()).padStart(2, '0')}_${String(now.getMinutes()).padStart(2, '0')}_${String(now.getSeconds()).padStart(2, '0')}`;
    const filename = `Transaction_xuat_${formattedDate}_${formattedTime}.xlsx`;

    // Xuất file
    XLSX.writeFile(workbook, filename);

    // Ẩn modal
    document.getElementById("filterModal").style.display = "none";
    document.getElementById("dateFrom").value = "";
    document.getElementById("dateTo").value = "";
});


document.getElementById("applyFilter2").addEventListener("click", async function() {
    warning("Đang xuất dữ liệu")
    await load_nhap()
    // Lấy giá trị từ các input trong modal
    const selectValue = document.getElementById("selectFilter2").value;
    const dateFrom = document.getElementById("dateFrom2").value;
    const dateTo = document.getElementById("dateTo2").value;

    if ((dateFrom && !dateTo) || (!dateFrom && dateTo)) {
        alert("Vui lòng điền đầy đủ cả 'Date From' và 'Date To' hoặc để trống cả hai.");
        return; // Dừng lại nếu chỉ có một trong hai ngày được chọn
    }

    // Chuyển đổi ngày để so sánh
    const fromDate = new Date(dateFrom);
    const toDate = new Date(dateTo);

    const headerRow = nhap_data[0];

    // Lọc dữ liệu dựa trên điều kiện
    const filteredData = nhap_data.filter(row => {
        const rowDate = new Date(row[0]); // Giả sử ngày ở cột đầu tiên (index 0)
        
        // Kiểm tra điều kiện ngày, nếu không chọn ngày thì bỏ qua lọc theo ngày
        const isDateInRange = (!dateFrom && !dateTo) || (dateFrom && dateTo && rowDate >= fromDate && rowDate <= toDate);

        // Kiểm tra điều kiện Select, nếu không chọn thì bỏ qua lọc theo Select
        const isSelectMatch = !selectValue || selectValue === "All" || row[2] === selectValue; // Giả sử giá trị Select ở cột thứ 3 (index 2)

        return isDateInRange && isSelectMatch;
    });

    const exportData = [headerRow, ...filteredData];


    // Tạo và xuất file Excel với dữ liệu đã lọc
    const worksheet = XLSX.utils.json_to_sheet(exportData, { skipHeader: true });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Nhập");

    // Định dạng tên file với thời gian hiện tại
    const now = new Date();
    const formattedDate = `${now.getFullYear()}_${String(now.getMonth() + 1).padStart(2, '0')}_${String(now.getDate()).padStart(2, '0')}`;
    const formattedTime = `${String(now.getHours()).padStart(2, '0')}_${String(now.getMinutes()).padStart(2, '0')}_${String(now.getSeconds()).padStart(2, '0')}`;
    const filename = `Transaction_nhap_${formattedDate}_${formattedTime}.xlsx`;

    // Xuất file
    XLSX.writeFile(workbook, filename);

    // Ẩn modal
    document.getElementById("filterModal2").style.display = "none";
    document.getElementById("dateFrom2").value = "";
    document.getElementById("dateTo2").value = "";
});

document.getElementById("applyFilter3").addEventListener("click", async function() {
    warning("Đang xuất dữ liệu")
    await load_onhand()
    // Lấy giá trị từ các input trong modal
    const selectValue = document.getElementById("selectFilter3").value;

    const headerRow = onhand_data[0];

    // Lọc dữ liệu dựa trên điều kiện
    const filteredData = onhand_data.filter(row => {

        // Kiểm tra điều kiện Select, nếu không chọn thì bỏ qua lọc theo Select
        const isSelectMatch = !selectValue || selectValue === "All" || row[0] === selectValue; // Giả sử giá trị Select ở cột thứ 3 (index 2)

        return isSelectMatch;
    });

    const exportData = [headerRow, ...filteredData];


    // Tạo và xuất file Excel với dữ liệu đã lọc
    const worksheet = XLSX.utils.json_to_sheet(exportData, { skipHeader: true });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Onhand");

    // Định dạng tên file với thời gian hiện tại
    const now = new Date();
    const formattedDate = `${now.getFullYear()}_${String(now.getMonth() + 1).padStart(2, '0')}_${String(now.getDate()).padStart(2, '0')}`;
    const formattedTime = `${String(now.getHours()).padStart(2, '0')}_${String(now.getMinutes()).padStart(2, '0')}_${String(now.getSeconds()).padStart(2, '0')}`;
    const filename = `Onhand_${formattedDate}_${formattedTime}.xlsx`;

    // Xuất file
    XLSX.writeFile(workbook, filename);

    // Ẩn modal
    document.getElementById("filterModal3").style.display = "none";
});

document.getElementById("export_nhap").addEventListener("click", function() {
    // Hiển thị modal
    document.getElementById("filterModal2").style.display = "block";
});

document.getElementById("export_onhand").addEventListener("click", function() {
    // Hiển thị modal
    document.getElementById("filterModal3").style.display = "block";
});

async function show_nhap() {
    await load_nhap()
    // Define columns based on the index of each data field
    const columns = [
        { title: 'Ngày nhập', formatter: (cell) => cell.getData()[0] },
        { title: 'Thời gian nhập', formatter: (cell) => cell.getData()[1] },
        { title: 'Mã chi nhánh', formatter: (cell) => cell.getData()[2] },
        { title: 'Tên người nhập', formatter: (cell) => cell.getData()[3] },
        { title: 'Loại vật tư', formatter: (cell) => cell.getData()[4] },
        { title: 'Mã nhà cung cấp', formatter: (cell) => cell.getData()[5] },
        { title: 'Số lượng nhập', formatter: (cell) => cell.getData()[6] },
        { title: 'Location', formatter: (cell) => cell.getData()[7] },
        { title: 'Tên vật tư', formatter: (cell) => cell.getData()[8] },
        { title: 'Mã vật tư', formatter: (cell) => cell.getData()[9] },
        { title: 'Ngày hết hạn', formatter: (cell) => cell.getData()[10] },
        { title: 'Đơn giá', formatter: (cell) => cell.getData()[11] },
        { title: 'concat', formatter: (cell) => cell.getData()[12] },
        { title: 'Thành tiền', formatter: (cell) => cell.getData()[13] },
        { title: 'Đơn vị', formatter: (cell) => cell.getData()[14] }
    ];

    const table = new Tabulator("#nhapTable", {
        data: nhap_data,   // Dữ liệu của bảng
        columns: columns,    // Cấu hình cột
        layout: "fitDataTable",  // Tùy chọn layout
        height: "800px",     // Đặt chiều cao để kích hoạt cuộn
        virtualDom: true,    // Bật chế độ virtual DOM
        pagination: "local",
        paginationSize: 25,
        paginationSizeSelector: [25, 50, 100],
        movableColumns: true,
        resizableRows: true,
    });
}


document.getElementById("refresh_nhap").addEventListener("click", async function() {
    await load_data_nhap_export()
});

///*** CRM ////

document.getElementById("customer_crm").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        ocument.getElementById("content_crm").focus()
    }
});

// Hàm để lọc dữ liệu theo ngày hiện tại
// function filterTodayData(data) {
//     const today = new Date().toISOString().slice(0, 10); // Lấy ngày hiện tại (YYYY-MM-DD)
//     return data.filter(row => row[0] === today); // Giả sử cột đầu tiên là index 0
// }

function filterTodayData(data) {
    // Lấy ngày giờ hiện tại
    const now = new Date();

    // Thêm 7 giờ
    now.setHours(now.getHours() + 7);

    // Chuyển đổi sang định dạng YYYY-MM-DD
    const todayWithOffset = now.toISOString().slice(0, 10);

    // Lọc dữ liệu
    return data.filter(row => row[0] === todayWithOffset); // Giả sử cột đầu tiên là index 0
}

async function crm_post() {
    const wh = document.getElementById("wh_crm").value
    const customer = document.getElementById("customer_crm").value
    const content = document.getElementById("content_crm").value

    if (wh === "") {
        alert("Bạn chưa chọn mã chi nhanh")
        return
    }

    if (customer === "") {
        alert("Bạn chưa nhập tên khách hàng")
        document.getElementById("customer_crm").focus()
        return
    }

    if (content === "") {
        alert("Bạn chưa nhập nội dung")
        document.getElementById("content_crm").focus()
        return
    }

    // Kiểm tra cột đầu tiên
    const existsInFirstColumn = customer_data.some(row => row[0] === customer);

    if (existsInFirstColumn) {
        console.log('Customer exists in the first column');
    } else {
        console.log('Customer does not exist in the first column');
        alert("Sai tên Khách hàng")
        return
    }
    const now = new Date();

    const year = String(now.getFullYear()).slice(-2); // Lấy 2 chữ số cuối của năm
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Lấy tháng, thêm số 0 nếu cần
    const day = String(now.getDate()).padStart(2, '0'); // Lấy ngày, thêm số 0 nếu cần

    const datetime_id = `${year}/${month}/${day}`;

    const array = [1, 2, 3]; // Thay đổi nội dung mảng theo nhu cầu
    await load_crm()

    // Lọc các giá trị có ngày là hôm nay
    const todayData = filterTodayData(crm_data);
    
    // Lấy số lượng dữ liệu
    const length = todayData.length + 1;

    // Chuyển length thành chuỗi với định dạng 3 chữ số
    const stt_crm = String(length).padStart(3, '0');

    console.log(`Hôm nay có ${length} giá trị.`);
    console.log(`STT (định dạng 3 chữ số): ${stt_crm}`);

    const crm_id = "CRM"+"-"+wh+"-"+customer_id+"-"+datetime_id+"-"+stt_crm
    console.log(crm_id)
    try {
        let crm_table = new FormData();
        crm_table.append("wh", wh);
        crm_table.append("operator_name", sessionStorage.getItem("fullname"));
        crm_table.append("operator_id", sessionStorage.getItem("username"));
        crm_table.append("customer", customer);
        crm_table.append("customer_id", customer_id);
        crm_table.append("crm_id", crm_id);
        crm_table.append("content", content);
        
        fetch('https://script.google.com/macros/s/AKfycbxiadEptjY-QD5UVNUll7sCg7zt7FcrisleVS607ruXZ2YwrK_LmHAcE633KYAz4eQzyA/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: crm_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }

    reset_crm()
}

function reset_crm() {
    document.getElementById("customer_crm").value = ""
    document.getElementById("content_crm").value = ""
    document.getElementById("customer_id_crm").innerText = ""
    document.getElementById("customer_crm").focus()
}

// Xử lý tìm kiếm "Loại vật tư"
function handleMaterialTypeCrm(event) {
    const searchTerm = removeAccents(event.target.value).toUpperCase(); // Chuyển đổi thành uppercase không dấu
    const results = customer_data.filter(item => removeAccents(item[0]).toUpperCase().includes(searchTerm)); // Tìm kiếm không dấu

    // Hiển thị kết quả tìm kiếm từ cột customer_data[1]
    if (results.length > 0) {
        showSearchResults_crm(results.map(item => item[0]), results); // Truyền danh sách tên vật tư và dữ liệu gốc
    } else {
        hideDropdown(); // Ẩn dropdown nếu không có kết quả
        console.log("Không tìm thấy kết quả.");
    }
}

let customer_name_a = ''
let customer_id = ''

// Hàm hiển thị kết quả tìm kiếm trong dropdown
function showSearchResults_crm(displayList, fullData) {
    console.table(fullData)
    const dropdown = document.getElementById("dropdown_crm");
    dropdown.innerHTML = ''; // Xóa nội dung cũ

    // Hiển thị dropdown
    dropdown.style.display = 'block';

    // Sử dụng Set để giữ lại các giá trị duy nhất
    const uniqueItems = [...new Set(displayList)];

    // Tạo các mục dropdown từ danh sách uniqueItems
    uniqueItems.forEach((item, index) => {
        const dropdownItem = document.createElement("div");
        dropdownItem.classList.add("dropdown-item");
        dropdownItem.textContent = item;

        // Lấy chỉ số của phần tử đầu tiên trong fullData tương ứng với item
        const originalIndex = fullData.findIndex(dataItem => dataItem[0] === item);
        
        // Xử lý sự kiện khi người dùng chọn một mục từ dropdown
        dropdownItem.addEventListener("click", () => {
            document.getElementById("customer_crm").value = item; // Gán lựa chọn vào ô nhập liệu
            dropdown.style.display = 'none'; // Ẩn dropdown sau khi chọn

            const found_customer_id = customer_data.find(u => u[0] === item);
            [customer_name_a,customer_id] = found_customer_id
            document.getElementById("customer_id_crm").innerText = customer_id
        });

        dropdown.appendChild(dropdownItem);
    });
}

document.getElementById("customer_crm").addEventListener("input", debounce(handleMaterialTypeCrm, 400));

////* Survey */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
    } else {
        console.error(`Modal with id ${modalId} not found`);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

function confirmCancel(modalId) {
    let reason;
    
    if (modalId === 'reasonModalSurvey' || modalId === 'reasonModalDesignBom') {
        // Lý do dạng input
        reason = document.getElementById(modalId === 'reasonModalSurvey' ? 'cancelReasonSurvey' : 'cancelReasonDesignBom').value;
        if (!reason) {
            alert("Vui lòng nhập lý do hủy");
            return;
        }
    } else if (modalId === 'reasonModalQuotation') {
        // Lý do dạng dropdown cho QUOTATION
        reason = document.getElementById('cancelReasonQuotation').value;
    } else if (modalId === 'reasonModalOrderReceive') {
        // Lý do dạng dropdown cho ORDER RECEIVE
        reason = document.getElementById('cancelReasonOrderReceive').value;
    }
    
    alert("Hủy thành công với lý do: " + reason);
    closeModal(modalId);
}

function reset_survey() {
    document.getElementById("surveyCrmNumber").value = ""
    document.getElementById("totalHours").value = ""
    document.getElementById("surveyContent").value = ""

    document.getElementById("fileUpload").value = ""
    document.getElementById("fileData").value = ""
    document.getElementById("mimeType").value = ""
    document.getElementById("fileName").value = ""

    document.getElementById("surveyCrmNumber").focus()    

}

///////////////////
// Upload Survey //
var filesProcessed_survey = false;

function LoadFile(event) {
    var files = event.target.files;

    // Giới hạn số lượng tệp
    if (files.length > 3) {
    alert('Bạn chỉ được chọn tối đa 3 tệp.');
    event.target.value = ''; // Reset input file
    return;
    }

    var fileDataArray = [];
    var mimeTypeArray = [];
    var fileNameArray = [];

    var totalFiles = files.length;
    var filesRead = 0;
    var totalSize = 0;

    // Disable submit button while files are being processed
    document.getElementById('submitButton_survey').disabled = true;

    for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Kiểm tra kích thước tệp
    if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Tệp "' + file.name + '" vượt quá 10MB.');
        event.target.value = ''; // Reset input file
        filesProcessed_survey = false;
        document.getElementById('submitButton_survey').disabled = true;
        return;
    }

    totalSize += file.size;

    (function(file) {
        var reader = new FileReader();
        reader.onload = function(e) {
        var fileData = e.target.result.split(',')[1];
        fileDataArray.push(fileData);
        mimeTypeArray.push(file.type);
        fileNameArray.push(file.name);

        filesRead++;
        if (filesRead === totalFiles) {
            // All files processed
            document.getElementById('fileData').value = JSON.stringify(fileDataArray);
            document.getElementById('mimeType').value = JSON.stringify(mimeTypeArray);
            document.getElementById('fileName').value = JSON.stringify(fileNameArray);

            filesProcessed_survey = true;
            // Enable submit button
            document.getElementById('submitButton_survey').disabled = false;
        }
        };
        reader.readAsDataURL(file);
    })(file);
    }
}

document.getElementById("surveyCrmNumber").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("totalHours").focus()
    }
});

document.getElementById("totalHours").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("surveyContent").focus()
    }
});

async function submitForm_survey() {
    if (filesProcessed_survey === false && document.getElementById("fileData").value !== "") {
        alert('Vui lòng chờ đến khi các tệp được xử lý.');
        return false;
    }
    /////////////////
    const crm_id = document.getElementById("surveyCrmNumber").value
    const total_hour = document.getElementById("totalHours").value
    const content = document.getElementById("surveyContent").value

    const fileData = document.getElementById("fileData").value
    const mimeType = document.getElementById("mimeType").value
    const fileName = document.getElementById("fileName").value

    if (crm_id === "") {
        alert("Bạn chưa nhập mã CRM")
        document.getElementById("surveyCrmNumber").focus()
        return
    }

    if (total_hour === "") {
        alert("Bạn chưa nhập tổng số giờ làm")
        document.getElementById("totalHours").focus()
        return
    }

    if (content === "") {
        alert("Bạn chưa nhập nội dung")
        document.getElementById("surveyContent").focus()
        return
    }

    // Chuỗi ban đầu
    const inputString = crm_id

    // Split chuỗi bởi dấu "-"
    const parts = inputString.split("-");

    // Lấy phần thứ 2 và thứ 3 (chỉ số 1 và 2 trong mảng)
    const result = parts.slice(1, 3).join("-");

    const now = new Date();

    const year = String(now.getFullYear()).slice(-2); // Lấy 2 chữ số cuối của năm
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Lấy tháng, thêm số 0 nếu cần
    const day = String(now.getDate()).padStart(2, '0'); // Lấy ngày, thêm số 0 nếu cần

    const datetime_id = `${year}/${month}/${day}`;
    document.getElementById("loadingIndicator").style.display = "block";

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_survey(), load_crm()]);

    const findCrm = crm_data.filter(item => item[7] === crm_id); // Filter rows based on selection
    console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai CRM#")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }

    const findCrm2 = survey_data.filter(item => item[6] === crm_id); // Filter rows based on selection
    console.table(findCrm2)
    if (findCrm2.length >0) {
        alert("CRM# này đã được yêu cầu thiết kế")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }
    // Lọc các giá trị có ngày là hôm nay
    const todayData = filterTodayData(survey_data);
    console.table(todayData)

    
    // Lấy số lượng dữ liệu
    const length = todayData.length + 1;

    // Chuyển length thành chuỗi với định dạng 3 chữ số
    const stt_survey = String(length).padStart(3, '0');

    console.log(`Hôm nay có ${length} giá trị.`);
    console.log(`STT (định dạng 3 chữ số): ${stt_survey}`);

    const survey_id = "KS"+"-"+result+"-"+datetime_id+"-"+stt_survey

    try {
        let survey_table = new FormData();
        survey_table.append("survey_id", survey_id);
        survey_table.append("crm_id", crm_id);
        survey_table.append("total_hour", total_hour);
        survey_table.append("content", content);

        survey_table.append("operator", sessionStorage.getItem("fullname"));
        survey_table.append("username", sessionStorage.getItem("username"));
        survey_table.append("approver", sessionStorage.getItem("approver"));

        survey_table.append("fileData", fileData);
        survey_table.append("mimeType", mimeType);
        survey_table.append("fileName", fileName);

        
        await fetch('https://script.google.com/macros/s/AKfycbwp6iI5TfKnYGfcyjPUFP3Y_6s2a_UKr98B4Xvqkq1CrHCfiBaOrFIOK8nTWzo3peTL/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: survey_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    reset_survey()
    info("Gửi yêu cầu thiết kế thành công!")
    get_survey_need_to_process()
    document.getElementById("loadingIndicator").style.display = "none";

    return false; // Prevent the default form submission
}

async function get_survey_need_to_process() {
    document.getElementById("loadingIndicator").style.display = "block";
    await Promise.all([load_crm(), load_survey()]);

    // Lấy giá trị từ cột thứ 4 của mfg_data
    const crmColumn = new Set(survey_data.map(row => row[6]));

    const newArray = crm_data
        .filter(row => !crmColumn.has(row[7]))

    // Lấy dữ liệu cần thiết từ newArray: cột 10, 11, 5, 1, 6 (10 ký tự đầu), 7
    const tableData = newArray.map(row => [
        row[7],
        row[6], // Cột thứ 10
        row[5], // Cột thứ 5
        row[0], // Cột thứ 1
    ]);

    // Tạo bảng
    const tableContainer = document.getElementById("table-container_survey");
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.tableLayout = "auto"; // Tự động điều chỉnh độ rộng

    // Tạo tiêu đề bảng
    const headers = ["CRM#", "Mã KH", "Tên KH","Ngày tạo"];
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.whiteSpace = "nowrap"; // Giữ nội dung không xuống dòng
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Tạo dữ liệu bảng
    const tbody = document.createElement("tbody");
    tableData.forEach((row, index) => {
        const tr = document.createElement("tr");
        row.forEach((cell, cellIndex) => {
            const td = document.createElement("td");
            td.textContent = cell;
            td.style.border = "1px solid #ddd";
            td.style.padding = "8px";

            // Thêm sự kiện click vào cột đầu tiên (cột 10)
            if (cellIndex === 0) {
                td.style.cursor = "pointer"; // Thay đổi con trỏ để báo hiệu có thể bấm
                td.style.color = "blue"; // Thêm màu để dễ nhận biết
                td.addEventListener("click", () => {
                    // alert(`Dữ liệu dòng: ${JSON.stringify(row)}`);
                    document.getElementById("surveyCrmNumber").value = row[0]
                });
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // Xóa bảng cũ nếu có và thêm bảng mới vào `div`
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
    document.getElementById("loadingIndicator").style.display = "none";
}


//////////////////////////////
//////////////////////////////

///* survey approval ///

// async function survey_approval() {
//     // Show the loading indicator
//     document.getElementById("loadingIndicator").style.display = "block";

//     await Promise.all([load_survey(), load_survey_approval()]); // Run both fetch calls in parallel

//     // Hide the loading indicator once loading is complete
//     document.getElementById("loadingIndicator").style.display = "none";

//     survey_data.shift()
//     // const filter_approve_request = survey_data
//     //     .map((item, originalIndex) => ({ ...item, originalIndex })) // Lưu chỉ mục gốc
//     //     .filter(item => item[4] === sessionStorage.getItem("approver"));

//     const filter_approve_request = survey_data
//     .map((item, originalIndex) => ({ ...item, originalIndex })) // Lưu chỉ mục gốc
//     .filter(item => 
//         item[4] === sessionStorage.getItem("approver") && // Điều kiện 1
//         !survey_approval_data.some(approvedItem => approvedItem[5] === item[5]) // Điều kiện 2
//     );

//     console.log(filter_approve_request)
//     let tableHTML = `
//         <table border="1" style="border-collapse: collapse; width: 100%;">
//             <thead>
//                 <tr>
//                     <th>Approve Type</th>
//                     <th>CRM#</th>
//                     <th>Survey#</th>
//                     <th>Requestor</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//     `;

//     // Duyệt qua dữ liệu để tạo các hàng
//     filter_approve_request.forEach((row) => {
//         tableHTML += `
//             <tr>
//                 <td>${row[9]}</td>
//                 <td>${row[6]}</td>
//                 <td>${row[5]}</td>
//                 <td>${row[2]}</td>
//                 <td>
//                     <button onclick="viewDetail(${row.originalIndex})">View Detail</button>
//                 </td>
//             </tr>
//         `;
//     });

//     // Kết thúc bảng
//     tableHTML += `
//             </tbody>
//         </table>
//     `;

//     // Thêm bảng vào một phần tử có ID 'tableContainer'
//     document.getElementById('table_approve_survey').innerHTML = tableHTML;
// }


// // Hiển thị bảng sau khi tải trang
// // window.onload = () => survey_approval();

// let select_survey_to_approve = ""
// function viewDetail(index) {
//     // Lấy dữ liệu từ survey_data dựa trên index
//     const row = survey_data[index];
//     select_survey_to_approve = row

//     console.log(row)
//     console.log(select_survey_to_approve)

//     // Gán dữ liệu vào các phần tử trong modal
//     document.getElementById("operator_name_show").textContent = row[2];
//     document.getElementById("request_time_show").textContent = row[0] + " " + row[1];
//     document.getElementById("crm_show").textContent = row[6];
//     document.getElementById("survey_show").textContent = row[5];
//     document.getElementById("total_hours_show").textContent = row[7];
//     document.getElementById("content_show").textContent = row[8];

//     // Lấy phần tử link_show
//     const linkElement = document.getElementById("link_show");

//     // Tạo thẻ <a>
//     const anchor = document.createElement("a");

//     // Gán giá trị cho href từ row[10]
//     anchor.href = row[10];

//     // Gán nội dung hiển thị của link
//     anchor.textContent = "Xem File đính kèm tại đây";

//     // Đặt thuộc tính target để mở tab mới
//     anchor.target = "_blank";

//     // Xóa nội dung cũ của link_show (nếu cần)
//     linkElement.textContent = "";

//     // Thêm thẻ <a> vào link_show
//     linkElement.appendChild(anchor);

//     // Hiển thị modal và backdrop
//     document.getElementById("detailModal").style.display = "block";
//     document.getElementById("modalBackdrop").style.display = "block";
// }

// Hàm đóng modal
function closeModal() {
    document.getElementById("secondaryModal").style.display = 'none';
    document.getElementById("secondaryModal2").style.display = 'none';
    document.getElementById("detailModal").style.display = "none";
    document.getElementById("modalBackdrop").style.display = "none";
}

// Hàm xử lý khi nhấn Approve
// async function approveSurvey() {
//     try {
//         let survey_table_approved = new FormData();

//         survey_table_approved.append("operator", select_survey_to_approve[2])
//         survey_table_approved.append("username", select_survey_to_approve[3])
//         survey_table_approved.append("approver", select_survey_to_approve[4])

//         survey_table_approved.append("survey_id", select_survey_to_approve[5])
//         survey_table_approved.append("crm_id", select_survey_to_approve[6])
//         survey_table_approved.append("total_hour", select_survey_to_approve[7])
//         survey_table_approved.append("content", select_survey_to_approve[8])

//         survey_table_approved.append("status", "Thiết kế")

//         survey_table_approved.append("link", select_survey_to_approve[10])
//         document.getElementById("loadingIndicator").style.display = "block";
//         await fetch('https://script.google.com/macros/s/AKfycbwDK4k3oW8SrStcwMamUrBt5TKLeWojHDTcEi1hpazA_TD1jjF2mCaxTG530K3DG7x8/exec', {
//             method: 'POST',
//             mode: 'no-cors',
//             body: survey_table_approved
//         }).then(response => response.text)
//             .then(result => console.log('Đã gửi data thành công'))
//             .catch(error => console.error('Error:', error));
//         }
//     catch (error) {
//         console.error('Error:', error);
//     }
//     load_approval_ticket()
//     closeModal();
//     info("Survey Ticket Approved")
//     document.getElementById("loadingIndicator").style.display = "block";
// }

// // Hàm xử lý khi nhấn Reject
// async function rejectSurvey() {
//     try {
//         let survey_table_rejected = new FormData();

//         survey_table_rejected.append("operator", select_survey_to_approve[2])
//         survey_table_rejected.append("username", select_survey_to_approve[3])
//         survey_table_rejected.append("approver", select_survey_to_approve[4])

//         survey_table_rejected.append("survey_id", select_survey_to_approve[5])
//         survey_table_rejected.append("crm_id", select_survey_to_approve[6])
//         survey_table_rejected.append("total_hour", select_survey_to_approve[7])
//         survey_table_rejected.append("content", select_survey_to_approve[8])

//         survey_table_rejected.append("status", "Khảo sát Rejected")

//         survey_table_rejected.append("link", select_survey_to_approve[10])
//         document.getElementById("loadingIndicator").style.display = "block";
//         await fetch('https://script.google.com/macros/s/AKfycbwDK4k3oW8SrStcwMamUrBt5TKLeWojHDTcEi1hpazA_TD1jjF2mCaxTG530K3DG7x8/exec', {
//             method: 'POST',
//             mode: 'no-cors',
//             body: survey_table_rejected
//         }).then(response => response.text)
//             .then(result => console.log('Đã gửi data thành công'))
//             .catch(error => console.error('Error:', error));
//         }
//     catch (error) {
//         console.error('Error:', error);
//     }
//     load_approval_ticket()
//     info("Survey Ticket rejected!");
//     closeModal();
//     document.getElementById("loadingIndicator").style.display = "block";
// }


//////////////////////////////
//////////////////////////////

///* Design + BOM ///

function reset_design() {
    document.getElementById("designCrmNumber").value = "";
    document.getElementById("designBomNumber").value = "";
    document.getElementById("designTotalPrice").value = "";
    document.getElementById("designTotalHour").value = "";
    document.getElementById("designProductName").value = "";

    document.getElementById("fileUpload2").value = ""
    document.getElementById("fileData2").value = ""
    document.getElementById("mimeType2").value = ""
    document.getElementById("fileName2").value = ""

    document.getElementById("designCrmNumber").focus()  
}

var filesProcessed_design = false;

function LoadFile2(event) {
    var files = event.target.files;

    // Giới hạn số lượng tệp
    if (files.length > 3) {
    alert('Bạn chỉ được chọn tối đa 3 tệp.');
    event.target.value = ''; // Reset input file
    return;
    }

    var fileDataArray = [];
    var mimeTypeArray = [];
    var fileNameArray = [];

    var totalFiles = files.length;
    var filesRead = 0;
    var totalSize = 0;

    // Disable submit button while files are being processed
    document.getElementById('submitButton_design').disabled = true;

    for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Kiểm tra kích thước tệp
    if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Tệp "' + file.name + '" vượt quá 10MB.');
        event.target.value = ''; // Reset input file
        filesProcessed_design = false;
        document.getElementById('submitButton_design').disabled = true;
        return;
    }

    totalSize += file.size;

    (function(file) {
        var reader = new FileReader();
        reader.onload = function(e) {
        var fileData = e.target.result.split(',')[1];
        fileDataArray.push(fileData);
        mimeTypeArray.push(file.type);
        fileNameArray.push(file.name);

        filesRead++;
        if (filesRead === totalFiles) {
            // All files processed
            document.getElementById('fileData2').value = JSON.stringify(fileDataArray);
            document.getElementById('mimeType2').value = JSON.stringify(mimeTypeArray);
            document.getElementById('fileName2').value = JSON.stringify(fileNameArray);

            filesProcessed_design = true;
            // Enable submit button
            document.getElementById('submitButton_design').disabled = false;
        }
        };
        reader.readAsDataURL(file);
    })(file);
    }
}

document.getElementById("designCrmNumber").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("designBomNumber").focus()
    }
});

document.getElementById("designBomNumber").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("designTotalPrice").focus()
    }
});

document.getElementById("designTotalPrice").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("designTotalHour").focus()
    }
});

document.getElementById("designTotalHour").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("designProductName").focus()
    }
});

async function submitForm_design() {
    if (filesProcessed_design === false && document.getElementById("fileData2").value !== "") {
        alert('Vui lòng chờ đến khi các tệp được xử lý.');
        return false;
    }
    /////////////////
    const crm_id = document.getElementById("designCrmNumber").value
    const bom_id = document.getElementById("designBomNumber").value
    const total_price = document.getElementById("designTotalPrice").value
    const total_hour = document.getElementById("designTotalHour").value
    const product_name = document.getElementById("designProductName").value

    const fileData = document.getElementById("fileData2").value
    const mimeType = document.getElementById("mimeType2").value
    const fileName = document.getElementById("fileName2").value

    if (crm_id === "") {
        alert("Bạn chưa nhập mã CRM")
        document.getElementById("designCrmNumber").focus()
        return
    }

    if (bom_id === "") {
        alert("Bạn chưa nhập mã BOM")
        document.getElementById("designBomNumber").focus()
        return
    }

    if (total_price === "") {
        alert("Bạn chưa nhập tổng số giá trị BOM")
        document.getElementById("designTotalPrice").focus()
        return
    }

    if (total_hour === "") {
        alert("Bạn chưa nhập tổng số giờ làm")
        document.getElementById("designTotalHour").focus()
        return
    }

    if (product_name === "") {
        alert("Bạn chưa nhập tên sản phẩm")
        document.getElementById("designProductName").focus()
        return
    }
    
    document.getElementById("loadingIndicator").style.display = "block";

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_survey(), load_design(), load_design_approval()]); //, load_design_approval()

    const findCrm = survey_data.filter(item => item[6] === crm_id); // Filter rows based on selection
    console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai CRM# hoặc CRM# chưa được duyệt")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }

    const findCrm1 = design_data.filter(item => item[6] === crm_id); // Filter rows based on selection
    console.table(findCrm1)

    const column0Array2 = design_approval_data.map(row => row[13]);
    const uniqueArray1 = findCrm1.filter(row => !column0Array2.includes(row[13]));
    console.log(uniqueArray1)

    if (uniqueArray1.length > 0) {
        const des_to_find = uniqueArray1[0][13];

        const findCrm2 = design_approval_data.filter(item => item[5] === des_to_find); // Filter rows based on selection

        if (findCrm2.length === 0) {
            alert("CRM# này đang chờ duyệt");
            document.getElementById("loadingIndicator").style.display = "none";
            return;
        }
    } else {
        console.log("tiếp tục");
    }


    const findCrm3 = design_approval_data.filter(item => item[6] === crm_id && item[11] ===  "Báo giá"); // Filter rows based on selection
    // console.table(findCrm2)

    if (findCrm3.length > 0) {
        alert("CRM# này đã được duyệt")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }

    // const findCrm = survey_data.filter(item => item[6] === crm_id); // Filter rows based on selection
    // console.table(findCrm)
    // if (findCrm.length === 0) {
    //     alert("Sai CRM# hoặc CRM# chưa được duyệt")
    //     document.getElementById("loadingIndicator").style.display = "none";
    //     return
    // }

    // const findCrm2 = design_data.filter(item => item[6] === crm_id); // Filter rows based on selection
    // console.table(findCrm2)
    // console.table(design_approval_data)
    // if (findCrm2.length >0) {
    //     alert("CRM# này đã được yêu cầu báo giá")
    //     document.getElementById("loadingIndicator").style.display = "none";
    //     return
    // }

    // Chuỗi ban đầu
    const inputString = crm_id

    // Split chuỗi bởi dấu "-"
    const parts = inputString.split("-");

    // Lấy phần thứ 2 và thứ 3 (chỉ số 1 và 2 trong mảng)
    const site_id = parts[1];

    const now = new Date();

    const year = String(now.getFullYear()).slice(-2); // Lấy 2 chữ số cuối của năm
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Lấy tháng, thêm số 0 nếu cần
    const day = String(now.getDate()).padStart(2, '0'); // Lấy ngày, thêm số 0 nếu cần

    const datetime_id = `${year}/${month}/${day}`;

    // Lọc các giá trị có ngày là hôm nay
    const todayData = filterTodayData(design_data);
    
    // Lấy số lượng dữ liệu
    const length = todayData.length + 1;

    // Chuyển length thành chuỗi với định dạng 3 chữ số
    const stt_design = String(length).padStart(3, '0');

    const dept_id = sessionStorage.getItem("dept")

    const design_id = "DSB"+"-"+site_id+"-"+ dept_id +"-"+ datetime_id+"-"+stt_design

    try {
        let design_table = new FormData();
        design_table.append("crm_id", crm_id);
        design_table.append("bom_id", bom_id);
        design_table.append("total_price", total_price);
        design_table.append("total_hour", total_hour);
        design_table.append("product_name", product_name);

        design_table.append("dept", site_id+"-"+ dept_id);

        design_table.append("design_id", design_id);

        design_table.append("operator", sessionStorage.getItem("fullname"));
        design_table.append("username", sessionStorage.getItem("username"));
        design_table.append("approver", sessionStorage.getItem("approver"));

        design_table.append("fileData", fileData);
        design_table.append("mimeType", mimeType);
        design_table.append("fileName", fileName);

        
        await fetch('https://script.google.com/macros/s/AKfycbz5uaspF1KdhDyvPTCMstRvpuF0xpYMcCm_pfbblcV5KlDEyT1unes0zSO4Z0CjKW0BaA/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: design_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    reset_design()
    info("Gửi yêu cầu báo giá thành công!")
    get_design_need_to_process()
    document.getElementById("loadingIndicator").style.display = "none";

    return false; // Prevent the default form submission
}

async function get_design_need_to_process() {
    document.getElementById("loadingIndicator").style.display = "block";
    await Promise.all([load_survey(), load_design()]);

    // Lấy giá trị từ cột thứ 4 của mfg_data
    const crmColumn = new Set(design_data.map(row => row[6]));

    const newArray = survey_data
        .filter(row => !crmColumn.has(row[6]))

    // Lấy dữ liệu cần thiết từ newArray: cột 10, 11, 5, 1, 6 (10 ký tự đầu), 7
    const tableData = newArray.map(row => [
        row[6], // Cột thứ 10
        row[5], // Cột thứ 5
        row[0], // Cột thứ 1
    ]);

    // Tạo bảng
    const tableContainer = document.getElementById("table-container_design");
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.tableLayout = "auto"; // Tự động điều chỉnh độ rộng

    // Tạo tiêu đề bảng
    const headers = ["CRM#", "SURVEY#", "Ngày tạo"];
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.whiteSpace = "nowrap"; // Giữ nội dung không xuống dòng
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Tạo dữ liệu bảng
    const tbody = document.createElement("tbody");
    tableData.forEach((row, index) => {
        const tr = document.createElement("tr");
        row.forEach((cell, cellIndex) => {
            const td = document.createElement("td");
            td.textContent = cell;
            td.style.border = "1px solid #ddd";
            td.style.padding = "8px";

            // Thêm sự kiện click vào cột đầu tiên (cột 10)
            if (cellIndex === 0) {
                td.style.cursor = "pointer"; // Thay đổi con trỏ để báo hiệu có thể bấm
                td.style.color = "blue"; // Thêm màu để dễ nhận biết
                td.addEventListener("click", () => {
                    // alert(`Dữ liệu dòng: ${JSON.stringify(row)}`);
                    document.getElementById("designCrmNumber").value = row[0]
                });
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // Xóa bảng cũ nếu có và thêm bảng mới vào `div`
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
    document.getElementById("loadingIndicator").style.display = "none";
}


///* Design approval ///

async function design_approval() {
    // Show the loading indicator
    document.getElementById("loadingIndicator").style.display = "block";

    await Promise.all([load_design(), load_design_approval()]); // Run both fetch calls in parallel

    // Hide the loading indicator once loading is complete
    document.getElementById("loadingIndicator").style.display = "none";

    design_data.shift()


    // const filter_approve_request = design_data
    // .map((item, originalIndex) => ({ ...item, originalIndex })) // Lưu chỉ mục gốc
    // .filter(item => 
    //     item[4] === sessionStorage.getItem("approver") && // Điều kiện 1
    //     !design_approval_data.some(approvedItem => approvedItem[6] === item[6]) // Điều kiện 2
    // );

    const filter_approve_request = design_data
    .map((item, originalIndex) => ({ ...item, originalIndex })) // Lưu chỉ mục gốc
    .filter(item => 
        item[4] === sessionStorage.getItem("approver")  // Điều kiện 1
        //&& quotation_approval_data.some(approvedItem => approvedItem[6] === item[6]) // Điều kiện 2
    );
    console.table(filter_approve_request)

    const column0Array2 = design_approval_data.map(row => row[13]);
    console.log(column0Array2)
    const uniqueArray1 = filter_approve_request.filter(row => !column0Array2.includes(row[13]));

    let tableHTML = `
        <table border="1" style="border-collapse: collapse; width: 100%;">
            <thead>
                <tr>
                    <th>Approve Type</th>
                    <th>CRM#</th>
                    <th>Department</th>
                    <th>Requestor</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Duyệt qua dữ liệu để tạo các hàng
    uniqueArray1.forEach((row) => {
        tableHTML += `
            <tr>
                <td>${row[11]}</td>
                <td>${row[6]}</td>
                <td>${row[5]}</td>
                <td>${row[2]}</td>
                <td>
                    <button onclick="viewDetaildesign(${row.originalIndex})">View Detail</button>
                </td>
            </tr>
        `;
    });

    // Kết thúc bảng
    tableHTML += `
            </tbody>
        </table>
    `;

    // Thêm bảng vào một phần tử có ID 'tableContainer'
    document.getElementById('table_approve_design').innerHTML = tableHTML;
}

// Hiển thị bảng sau khi tải trang
// window.onload = () => design_approval();

let select_design_to_approve = ""
function viewDetaildesign(index) {
    // Lấy dữ liệu từ survey_data dựa trên index
    const row = design_data[index];
    select_design_to_approve = row

    // Gán dữ liệu vào các phần tử trong modal
    document.getElementById("operator_name_show2").textContent = row[2];
    document.getElementById("request_time_show2").textContent = row[0] + " " + row[1];
    document.getElementById("crm_show2").textContent = row[6];
    document.getElementById("total_hours_show2").textContent = row[7];
    document.getElementById("content_show2").textContent = row[8];

    document.getElementById("bom_show2").textContent = row[9];
    document.getElementById("total_price_show2").textContent = row[10];

    // Lấy phần tử link_show
    const linkElement = document.getElementById("link_show2");

    // Tạo thẻ <a>
    const anchor = document.createElement("a");

    // Gán giá trị cho href từ row[10]
    anchor.href = row[12];

    // Gán nội dung hiển thị của link
    anchor.textContent = "Xem File đính kèm tại đây";

    // Đặt thuộc tính target để mở tab mới
    anchor.target = "_blank";

    // Xóa nội dung cũ của link_show (nếu cần)
    linkElement.textContent = "";

    // Thêm thẻ <a> vào link_show
    linkElement.appendChild(anchor);

    // Hiển thị modal và backdrop
    document.getElementById("detailModal2").style.display = "block";
    document.getElementById("modalBackdrop2").style.display = "block";
}

// Hàm đóng modal
function closeModal2() {
    document.getElementById("detailModal2").style.display = "none";
    document.getElementById("modalBackdrop2").style.display = "none";
}

// Hàm xử lý khi nhấn Approve
async function approveDesign() {
    try {
        let design_table_approved = new FormData();

        design_table_approved.append("operator", select_design_to_approve[2])
        design_table_approved.append("username", select_design_to_approve[3])
        design_table_approved.append("approver", select_design_to_approve[4])

        design_table_approved.append("dept", select_design_to_approve[5])
        design_table_approved.append("crm_id", select_design_to_approve[6])
        design_table_approved.append("total_hour", select_design_to_approve[7])
        design_table_approved.append("product_name", select_design_to_approve[8])

        design_table_approved.append("bom_id", select_design_to_approve[9])
        design_table_approved.append("total_price", select_design_to_approve[10])

        design_table_approved.append("status", "Báo giá")

        design_table_approved.append("link", select_design_to_approve[12])
        design_table_approved.append("design_id", select_design_to_approve[13])

        document.getElementById("loadingIndicator").style.display = "block";
        await fetch('https://script.google.com/macros/s/AKfycbyVIm0bJDZmWJ8qEHTHXFVcORi4xgWEdX86I1HEjO4I3DR58sA8p_xPfqCjaw5ENbXI/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: design_table_approved
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    load_approval_ticket()
    closeModal2();
    info("Design Ticket Approved")
    document.getElementById("loadingIndicator").style.display = "block";
}

// Hàm xử lý khi nhấn Reject
async function rejectDesign() {
    try {
        let design_table_rejected = new FormData();

        design_table_rejected.append("operator", select_design_to_approve[2])
        design_table_rejected.append("username", select_design_to_approve[3])
        design_table_rejected.append("approver", select_design_to_approve[4])

        design_table_rejected.append("dept", select_design_to_approve[5])
        design_table_rejected.append("crm_id", select_design_to_approve[6])
        design_table_rejected.append("total_hour", select_design_to_approve[7])
        design_table_rejected.append("product_name", select_design_to_approve[8])

        design_table_rejected.append("bom_id", select_design_to_approve[9])
        design_table_rejected.append("total_price", select_design_to_approve[10])

        design_table_rejected.append("status", "Thiết kế Rejected")

        design_table_rejected.append("link", select_design_to_approve[12])
        design_table_rejected.append("design_id", select_design_to_approve[13])

        document.getElementById("loadingIndicator").style.display = "block";
        await fetch('https://script.google.com/macros/s/AKfycbyVIm0bJDZmWJ8qEHTHXFVcORi4xgWEdX86I1HEjO4I3DR58sA8p_xPfqCjaw5ENbXI/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: design_table_rejected
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    load_approval_ticket()
    closeModal2();
    info("Design Ticket Rejected")
    document.getElementById("loadingIndicator").style.display = "block";
}


async function load_approval_ticket() {
    document.getElementById("loadingIndicator").style.display = "block";

    await Promise.all([design_approval(), quotation_approval()]); // Run both fetch calls in parallel

    // Hide the loading indicator once loading is complete
    document.getElementById("loadingIndicator").style.display = "none";
}

//////////////////////////////
//////////////////////////////

///* Quotation ///

function reset_quotation() {
    document.getElementById("quotationCrmNumber").value = "";
    document.getElementById("quotationTotalPrice").value = "";

    document.getElementById("fileUpload3").value = ""
    document.getElementById("fileData3").value = ""
    document.getElementById("mimeType3").value = ""
    document.getElementById("fileName3").value = ""

    document.getElementById("quotationCrmNumber").focus()  
}

var filesProcessed_quotation = false;

function LoadFile3(event) {
    var files = event.target.files;

    // Giới hạn số lượng tệp
    if (files.length > 3) {
    alert('Bạn chỉ được chọn tối đa 3 tệp.');
    event.target.value = ''; // Reset input file
    return;
    }

    var fileDataArray = [];
    var mimeTypeArray = [];
    var fileNameArray = [];

    var totalFiles = files.length;
    var filesRead = 0;
    var totalSize = 0;

    // Disable submit button while files are being processed
    document.getElementById('submitButton_quotation').disabled = true;

    for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Kiểm tra kích thước tệp
    if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Tệp "' + file.name + '" vượt quá 10MB.');
        event.target.value = ''; // Reset input file
        filesProcessed_quotation = false;
        document.getElementById('submitButton_quotation').disabled = true;
        return;
    }

    totalSize += file.size;

    (function(file) {
        var reader = new FileReader();
        reader.onload = function(e) {
        var fileData = e.target.result.split(',')[1];
        fileDataArray.push(fileData);
        mimeTypeArray.push(file.type);
        fileNameArray.push(file.name);

        filesRead++;
        if (filesRead === totalFiles) {
            // All files processed
            document.getElementById('fileData3').value = JSON.stringify(fileDataArray);
            document.getElementById('mimeType3').value = JSON.stringify(mimeTypeArray);
            document.getElementById('fileName3').value = JSON.stringify(fileNameArray);

            filesProcessed_quotation = true;
            // Enable submit button
            document.getElementById('submitButton_quotation').disabled = false;
        }
        };
        reader.readAsDataURL(file);
    })(file);
    }
}

document.getElementById("quotationCrmNumber").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("quotationTotalPrice").focus()
    }
});

async function submitForm_quotation() {
    if (filesProcessed_quotation === false && document.getElementById("fileData3").value !== "") {
        alert('Vui lòng chờ đến khi các tệp được xử lý.');
        return false;
    }
    /////////////////
    const crm_id = document.getElementById("quotationCrmNumber").value
    const total_price = document.getElementById("quotationTotalPrice").value

    const fileData = document.getElementById("fileData3").value
    const mimeType = document.getElementById("mimeType3").value
    const fileName = document.getElementById("fileName3").value

    if (crm_id === "") {
        alert("Bạn chưa nhập mã CRM")
        document.getElementById("quotationCrmNumber").focus()
        return
    }

    if (total_price === "") {
        alert("Bạn chưa nhập báo giá")
        document.getElementById("quotationTotalPrice").focus()
        return
    }

    document.getElementById("loadingIndicator").style.display = "block";

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_design_approval(), load_quotation(), load_quotation_approval()]);

    const findCrm = design_approval_data.filter(item => item[6] === crm_id); // Filter rows based on selection
    // console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai CRM# hoặc CRM chưa được duyệt báo giá")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }

    const findCrm1 = quotation_data.filter(item => item[6] === crm_id); // Filter rows based on selection
    console.table(findCrm1)

    const column0Array2 = quotation_approval_data.map(row => row[5]);
    const uniqueArray1 = findCrm1.filter(row => !column0Array2.includes(row[5]));
    console.log(uniqueArray1)

    if (uniqueArray1.length > 0) {
        const quota_to_find = uniqueArray1[0][5];

        const findCrm2 = quotation_approval_data.filter(item => item[5] === quota_to_find); // Filter rows based on selection

        if (findCrm2.length === 0) {
            alert("CRM# này đang chờ duyệt");
            document.getElementById("loadingIndicator").style.display = "none";
            return;
        }
    } else {
        console.log("tiếp tục");
    }


    const findCrm3 = quotation_approval_data.filter(item => item[6] === crm_id && item[10] ===  "Chờ nhận đơn hàng"); // Filter rows based on selection
    // console.table(findCrm2)

    if (findCrm3.length > 0) {
        alert("CRM# này đã được duyệt")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }

    const bom_id = findCrm[0][9]
    const bom_price = findCrm[0][10]
    const product_name = findCrm[0][8]
    
    // Chuỗi ban đầu
    const inputString = crm_id

    // Split chuỗi bởi dấu "-"
    const parts = inputString.split("-");

    // Lấy phần thứ 2 và thứ 3 (chỉ số 1 và 2 trong mảng)
    const site_id = parts[1];

    const now = new Date();

    const year = String(now.getFullYear()).slice(-2); // Lấy 2 chữ số cuối của năm
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Lấy tháng, thêm số 0 nếu cần
    const day = String(now.getDate()).padStart(2, '0'); // Lấy ngày, thêm số 0 nếu cần

    const datetime_id = `${year}/${month}/${day}`;

    // Lọc các giá trị có ngày là hôm nay
    const todayData = filterTodayData(quotation_data);
    
    // Lấy số lượng dữ liệu
    const length = todayData.length + 1;

    // Chuyển length thành chuỗi với định dạng 3 chữ số
    const stt_quotation = String(length).padStart(3, '0');

    const dept_id = sessionStorage.getItem("dept")

    const quotation_id = "RMG"+"-"+site_id+"-"+ dept_id +"-"+ datetime_id+"-"+stt_quotation
    
    try {
        let quotation_table = new FormData();

        quotation_table.append("crm_id", crm_id);
        quotation_table.append("total_price", total_price);

        quotation_table.append("bom_id", bom_id);
        quotation_table.append("bom_price", bom_price);
        quotation_table.append("quotation_id", quotation_id);
        quotation_table.append("product_name", product_name);

        quotation_table.append("operator", sessionStorage.getItem("fullname"));
        quotation_table.append("username", sessionStorage.getItem("username"));
        quotation_table.append("approver", sessionStorage.getItem("approver"));

        quotation_table.append("fileData", fileData);
        quotation_table.append("mimeType", mimeType);
        quotation_table.append("fileName", fileName);

        
        await fetch('https://script.google.com/macros/s/AKfycbzu7yHZG_M2a5jG0lD4-DHQykqq9ssfB0x93rRTUOKq-wWYYemF8uyV7lp2CTbY4srK/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: quotation_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    reset_quotation()
    get_quotation_need_to_process()
    info("Gửi yêu cầu chờ nhận đơn hàng thành công!")
    document.getElementById("loadingIndicator").style.display = "none";

    return false; // Prevent the default form submission
}

async function get_quotation_need_to_process() {
    document.getElementById("loadingIndicator").style.display = "block";
    await Promise.all([load_design_approval(), load_quotation()]);

    // Lấy giá trị từ cột thứ 4 của mfg_data
    const crmColumn = new Set(quotation_data.map(row => row[6]));

    const newArray = design_approval_data
        .filter(row => !crmColumn.has(row[6]) && row[11] === "Báo giá")

    // Lấy dữ liệu cần thiết từ newArray: cột 10, 11, 5, 1, 6 (10 ký tự đầu), 7
    const tableData = newArray.map(row => [
        row[6], // Cột thứ 10
        row[9], // Cột thứ 5
        row[0], // Cột thứ 1
    ]);

    // Tạo bảng
    const tableContainer = document.getElementById("table-container_quotation");
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.tableLayout = "auto"; // Tự động điều chỉnh độ rộng

    // Tạo tiêu đề bảng
    const headers = ["CRM#", "BOM#", "Ngày tạo"];
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.whiteSpace = "nowrap"; // Giữ nội dung không xuống dòng
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Tạo dữ liệu bảng
    const tbody = document.createElement("tbody");
    tableData.forEach((row, index) => {
        const tr = document.createElement("tr");
        row.forEach((cell, cellIndex) => {
            const td = document.createElement("td");
            td.textContent = cell;
            td.style.border = "1px solid #ddd";
            td.style.padding = "8px";

            // Thêm sự kiện click vào cột đầu tiên (cột 10)
            if (cellIndex === 0) {
                td.style.cursor = "pointer"; // Thay đổi con trỏ để báo hiệu có thể bấm
                td.style.color = "blue"; // Thêm màu để dễ nhận biết
                td.addEventListener("click", () => {
                    // alert(`Dữ liệu dòng: ${JSON.stringify(row)}`);
                    document.getElementById("quotationCrmNumber").value = row[0]
                });
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // Xóa bảng cũ nếu có và thêm bảng mới vào `div`
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
    document.getElementById("loadingIndicator").style.display = "none";
}

///* Quotation approval ///

async function quotation_approval() {
    // Show the loading indicator
    document.getElementById("loadingIndicator").style.display = "block";

    await Promise.all([load_quotation(), load_quotation_approval()]); // Run both fetch calls in parallel

    // Hide the loading indicator once loading is complete
    document.getElementById("loadingIndicator").style.display = "none";

    quotation_data.shift()


    const filter_approve_request = quotation_data
    .map((item, originalIndex) => ({ ...item, originalIndex })) // Lưu chỉ mục gốc
    .filter(item => 
        item[4] === sessionStorage.getItem("approver")  // Điều kiện 1
        //&& quotation_approval_data.some(approvedItem => approvedItem[6] === item[6]) // Điều kiện 2
    );
    console.table(filter_approve_request)

    const column0Array2 = quotation_approval_data.map(row => row[5]);
    console.log(column0Array2)
    const uniqueArray1 = filter_approve_request.filter(row => !column0Array2.includes(row[5]));

    console.table(uniqueArray1)
    let tableHTML = `
        <table border="1" style="border-collapse: collapse; width: 100%;">
            <thead>
                <tr>
                    <th>Approve Type</th>
                    <th>CRM#</th>
                    <th>BOM#</th>
                    <th>Requestor</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Duyệt qua dữ liệu để tạo các hàng
    uniqueArray1.forEach((row) => {
        tableHTML += `
            <tr>
                <td>${row[10]}</td>
                <td>${row[6]}</td>
                <td>${row[8]}</td>
                <td>${row[2]}</td>
                <td>
                    <button onclick="viewDetailquotation(${row.originalIndex})">View Detail</button>
                </td>
            </tr>
        `;
    });

    // Kết thúc bảng
    tableHTML += `
            </tbody>
        </table>
    `;

    // Thêm bảng vào một phần tử có ID 'tableContainer'
    document.getElementById('table_approve_quotation').innerHTML = tableHTML;
}

// Hiển thị bảng sau khi tải trang
// window.onload = () => design_approval();

let select_quotation_to_approve = ""
function viewDetailquotation(index) {
    // Lấy dữ liệu từ survey_data dựa trên index
    const row = quotation_data[index];
    select_quotation_to_approve = row

    // Gán dữ liệu vào các phần tử trong modal
    document.getElementById("operator_name_show3").textContent = row[2];
    document.getElementById("request_time_show3").textContent = row[0] + " " + row[1];
    document.getElementById("crm_show3").textContent = row[6];
    document.getElementById("total_price_show3").textContent = row[9];
    document.getElementById("total_bom_price_show3").textContent = row[12];
    document.getElementById("content_show3").textContent = row[7];

    document.getElementById("bom_show3").textContent = row[8];
    document.getElementById("quotation_show3").textContent = row[5];

    // Lấy phần tử link_show
    const linkElement = document.getElementById("link_show3");

    // Tạo thẻ <a>
    const anchor = document.createElement("a");

    // Gán giá trị cho href từ row[10]
    anchor.href = row[11];

    // Gán nội dung hiển thị của link
    anchor.textContent = "Xem File đính kèm tại đây";

    // Đặt thuộc tính target để mở tab mới
    anchor.target = "_blank";

    // Xóa nội dung cũ của link_show (nếu cần)
    linkElement.textContent = "";

    // Thêm thẻ <a> vào link_show
    linkElement.appendChild(anchor);

    // Chuyển đổi giá trị thành số để so sánh
    const totalPrice = parseFloat(row[9]);
    const totalBomPrice = parseFloat(row[12]);

    // Kiểm tra nếu totalPrice >= totalBomPrice * 1.25
    if (totalPrice >= totalBomPrice * 1.25) {
        // Giá trị đạt yêu cầu, không làm gì hoặc đặt màu mặc định
        document.getElementById("total_price_show3").style.color = ""; // Hoặc đặt màu mặc định
        document.getElementById("total_price_show3").style.backgroundColor = "";

    } else {
        // Giá trị không đạt yêu cầu, làm nổi bật bằng màu đỏ
        document.getElementById("total_price_show3").style.color = "white";
        document.getElementById("total_price_show3").style.backgroundColor = "red";
        document.getElementById("total_price_show3").style.padding = "5px";
    }

    // Hiển thị modal và backdrop
    document.getElementById("detailModal3").style.display = "block";
    document.getElementById("modalBackdrop3").style.display = "block";
}

// Hàm đóng modal
function closeModal3() {
    document.getElementById("detailModal3").style.display = "none";
    document.getElementById("modalBackdrop3").style.display = "none";
}

// Hàm xử lý khi nhấn Approve
async function approveQuotation() {
    try {
        let quotation_table_approved = new FormData();

        quotation_table_approved.append("operator", select_quotation_to_approve[2])
        quotation_table_approved.append("username", select_quotation_to_approve[3])
        quotation_table_approved.append("approver", select_quotation_to_approve[4])

        quotation_table_approved.append("quotation_id", select_quotation_to_approve[5])
        quotation_table_approved.append("crm_id", select_quotation_to_approve[6])
        quotation_table_approved.append("product_name", select_quotation_to_approve[7])
        quotation_table_approved.append("bom_id", select_quotation_to_approve[8])

        quotation_table_approved.append("total_price", select_quotation_to_approve[9])

        quotation_table_approved.append("status", "Chờ nhận đơn hàng")

        quotation_table_approved.append("folderUrl", select_quotation_to_approve[11])
        quotation_table_approved.append("bom_price", select_quotation_to_approve[12])

        document.getElementById("loadingIndicator").style.display = "block";
        await fetch('https://script.google.com/macros/s/AKfycbwSxghu5wSRFWmYtivSqcZHnqKtl88MyOJ0anJTKg7X2YLAu4cPcGFSEXAAV_1T2w3O/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: quotation_table_approved
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    load_approval_ticket()
    closeModal3();
    info("Quotation Ticket Approved")
    document.getElementById("loadingIndicator").style.display = "block";
}

// Hàm xử lý khi nhấn Reject
async function rejectQuotation() {
    try {
        let quotation_table_rejected = new FormData();

        quotation_table_rejected.append("operator", select_quotation_to_approve[2])
        quotation_table_rejected.append("username", select_quotation_to_approve[3])
        quotation_table_rejected.append("approver", select_quotation_to_approve[4])

        quotation_table_rejected.append("quotation_id", select_quotation_to_approve[5])
        quotation_table_rejected.append("crm_id", select_quotation_to_approve[6])
        quotation_table_rejected.append("product_name", select_quotation_to_approve[7])
        quotation_table_rejected.append("bom_id", select_quotation_to_approve[8])

        quotation_table_rejected.append("total_price", select_quotation_to_approve[9])

        quotation_table_rejected.append("status", "Báo giá Rejected")

        quotation_table_rejected.append("folderUrl", select_quotation_to_approve[11])
        quotation_table_rejected.append("bom_price", select_quotation_to_approve[12])

        document.getElementById("loadingIndicator").style.display = "block";
        await fetch('https://script.google.com/macros/s/AKfycbwSxghu5wSRFWmYtivSqcZHnqKtl88MyOJ0anJTKg7X2YLAu4cPcGFSEXAAV_1T2w3O/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: quotation_table_rejected
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    load_approval_ticket()
    closeModal3();
    info("Quotation Ticket Rejected")
    document.getElementById("loadingIndicator").style.display = "block";
}

//////////////////////////////

///* Order Receive ///

function reset_order() {
    document.getElementById("orderQuotationNumber").value = "";
    document.getElementById("orderOrderID").value = "";
    document.getElementById("orderDate").value = "";
    

    document.getElementById("fileUpload4").value = ""
    document.getElementById("fileData4").value = ""
    document.getElementById("mimeType4").value = ""
    document.getElementById("fileName4").value = ""

    document.getElementById("orderQuotationNumber").focus()  
}

var filesProcessed_order = false;

function LoadFile4(event) {
    var files = event.target.files;

    // Giới hạn số lượng tệp
    if (files.length > 3) {
    alert('Bạn chỉ được chọn tối đa 3 tệp.');
    event.target.value = ''; // Reset input file
    return;
    }

    var fileDataArray = [];
    var mimeTypeArray = [];
    var fileNameArray = [];

    var totalFiles = files.length;
    var filesRead = 0;
    var totalSize = 0;

    // Disable submit button while files are being processed
    document.getElementById('submitButton_order').disabled = true;

    for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Kiểm tra kích thước tệp
    if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Tệp "' + file.name + '" vượt quá 10MB.');
        event.target.value = ''; // Reset input file
        filesProcessed_order = false;
        document.getElementById('submitButton_order').disabled = true;
        return;
    }

    totalSize += file.size;

    (function(file) {
        var reader = new FileReader();
        reader.onload = function(e) {
        var fileData = e.target.result.split(',')[1];
        fileDataArray.push(fileData);
        mimeTypeArray.push(file.type);
        fileNameArray.push(file.name);

        filesRead++;
        if (filesRead === totalFiles) {
            // All files processed
            document.getElementById('fileData4').value = JSON.stringify(fileDataArray);
            document.getElementById('mimeType4').value = JSON.stringify(mimeTypeArray);
            document.getElementById('fileName4').value = JSON.stringify(fileNameArray);

            filesProcessed_order = true;
            // Enable submit button
            document.getElementById('submitButton_order').disabled = false;
        }
        };
        reader.readAsDataURL(file);
    })(file);
    }
}

document.getElementById("orderQuotationNumber").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("orderOrderID").focus()
    }
});

async function submitForm_order() {
    if (filesProcessed_order === false && document.getElementById("fileData4").value !== "") {
        alert('Vui lòng chờ đến khi các tệp được xử lý.');
        return false;
    }
    /////////////////
    const quotation_id = document.getElementById("orderQuotationNumber").value
    const order_id = document.getElementById("orderOrderID").value
    const date = document.getElementById("orderDate").value

    const fileData = document.getElementById("fileData4").value
    const mimeType = document.getElementById("mimeType4").value
    const fileName = document.getElementById("fileName4").value

    if (quotation_id === "") {
        alert("Bạn chưa nhập mã Quotation")
        document.getElementById("orderQuotationNumber").focus()
        return
    }

    if (order_id === "") {
        alert("Bạn chưa nhập mã đơn hàng")
        document.getElementById("orderOrderID").focus()
        return
    }

    if (date === "") {
        alert("Bạn chưa chọn ngày giao hàng")
        return
    }

    document.getElementById("loadingIndicator").style.display = "block";

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_quotation_approval(), load_order()]);

    const findCrm = quotation_approval_data.filter(item => item[5] === quotation_id); // Filter rows based on selection
    console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai QUOTATION# hoặc QUOTATION# chưa được duyệt")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }

    const crm_id = findCrm[0][6]

    const findCrm2 = order_data.filter(item => item[3] === quotation_id); // Filter rows based on selection
    console.table(findCrm2)
    if (findCrm2.length >0) {
        alert("QUOTATION# này đã được yêu cầu SX, đặt hàng")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }
    
    try {
        let order_receive_table = new FormData();

        order_receive_table.append("operator", sessionStorage.getItem("fullname"));
        order_receive_table.append("crm_id", crm_id);
        order_receive_table.append("quotation_id", quotation_id);
        order_receive_table.append("order_id", order_id);
        order_receive_table.append("date", date);

        order_receive_table.append("fileData", fileData);
        order_receive_table.append("mimeType", mimeType);
        order_receive_table.append("fileName", fileName);

        
        await fetch('https://script.google.com/macros/s/AKfycbxnIkZqbKn5NE82h-lIsS_4cz2u2e7_PCQW8fgcenURmxHiLRZsquAGY-gvajw1BJCu/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: order_receive_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    reset_order()
    get_order_need_to_process()
    info("Gửi yêu cầu SX - Đặt hàng thành công!")
    document.getElementById("loadingIndicator").style.display = "none";

    return false; // Prevent the default form submission
}

async function get_order_need_to_process() {
    document.getElementById("loadingIndicator").style.display = "block";
    await Promise.all([load_quotation_approval(), load_order()]);

    // Lấy giá trị từ cột thứ 4 của mfg_data
    const crmColumn = new Set(order_data.map(row => row[3]));

    const newArray = quotation_approval_data
        .filter(row => !crmColumn.has(row[5]) && row[10] === "Chờ nhận đơn hàng")

    // Lấy dữ liệu cần thiết từ newArray: cột 10, 11, 5, 1, 6 (10 ký tự đầu), 7
    const tableData = newArray.map(row => [
        row[5], // Cột thứ 10
        row[6], // Cột thứ 5
        row[0], // Cột thứ 1
    ]);

    // Tạo bảng
    const tableContainer = document.getElementById("table-container_order");
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.tableLayout = "auto"; // Tự động điều chỉnh độ rộng

    // Tạo tiêu đề bảng
    const headers = ["QUOTATION#", "CRM#", "Ngày tạo"];
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.whiteSpace = "nowrap"; // Giữ nội dung không xuống dòng
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Tạo dữ liệu bảng
    const tbody = document.createElement("tbody");
    tableData.forEach((row, index) => {
        const tr = document.createElement("tr");
        row.forEach((cell, cellIndex) => {
            const td = document.createElement("td");
            td.textContent = cell;
            td.style.border = "1px solid #ddd";
            td.style.padding = "8px";

            // Thêm sự kiện click vào cột đầu tiên (cột 10)
            if (cellIndex === 0) {
                td.style.cursor = "pointer"; // Thay đổi con trỏ để báo hiệu có thể bấm
                td.style.color = "blue"; // Thêm màu để dễ nhận biết
                td.addEventListener("click", () => {
                    // alert(`Dữ liệu dòng: ${JSON.stringify(row)}`);
                    document.getElementById("orderQuotationNumber").value = row[0]
                });
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // Xóa bảng cũ nếu có và thêm bảng mới vào `div`
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
    document.getElementById("loadingIndicator").style.display = "none";
}


///* MFG / PUR ///

function reset_mfg() {
    document.getElementById("mfgCrm").value = "";
    document.getElementById("mfgContent").value = "";
    
    document.getElementById("mfgCustomerID").innerText = ""
    document.getElementById("mfgCustomerName").innerText = ""

    document.getElementById("fileUpload5").value = ""
    document.getElementById("fileData5").value = ""
    document.getElementById("mimeType5").value = ""
    document.getElementById("fileName5").value = ""

    document.getElementById("mfgCrm").focus()  
}

var filesProcessed_mfg = false;

function LoadFile5(event) {
    var files = event.target.files;

    // Giới hạn số lượng tệp
    if (files.length > 3) {
    alert('Bạn chỉ được chọn tối đa 3 tệp.');
    event.target.value = ''; // Reset input file
    return;
    }

    var fileDataArray = [];
    var mimeTypeArray = [];
    var fileNameArray = [];

    var totalFiles = files.length;
    var filesRead = 0;
    var totalSize = 0;

    // Disable submit button while files are being processed
    document.getElementById('submitButton_mfg').disabled = true;

    for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Kiểm tra kích thước tệp
    if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Tệp "' + file.name + '" vượt quá 10MB.');
        event.target.value = ''; // Reset input file
        filesProcessed_mfg = false;
        document.getElementById('submitButton_mfg').disabled = true;
        return;
    }

    totalSize += file.size;

    (function(file) {
        var reader = new FileReader();
        reader.onload = function(e) {
        var fileData = e.target.result.split(',')[1];
        fileDataArray.push(fileData);
        mimeTypeArray.push(file.type);
        fileNameArray.push(file.name);

        filesRead++;
        if (filesRead === totalFiles) {
            // All files processed
            document.getElementById('fileData5').value = JSON.stringify(fileDataArray);
            document.getElementById('mimeType5').value = JSON.stringify(mimeTypeArray);
            document.getElementById('fileName5').value = JSON.stringify(fileNameArray);

            filesProcessed_mfg = true;
            // Enable submit button
            document.getElementById('submitButton_mfg').disabled = false;
        }
        };
        reader.readAsDataURL(file);
    })(file);
    }
}

document.getElementById("mfgCrm").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        document.getElementById("mfgContent").focus()
    }
});

async function submitForm_mfg() {
    if (filesProcessed_mfg === false && document.getElementById("fileData5").value !== "") {
        alert('Vui lòng chờ đến khi các tệp được xử lý.');
        return false;
    }
    /////////////////
    const crm_id = document.getElementById("mfgCrm").value
    const content = document.getElementById("mfgContent").value

    const vendor_id = document.getElementById("mfgCustomerID").textContent
    const vendor_name = document.getElementById("mfgCustomerName").textContent

    const fileData = document.getElementById("fileData5").value
    const mimeType = document.getElementById("mimeType5").value
    const fileName = document.getElementById("fileName5").value

    if (crm_id === "") {
        alert("Bạn chưa nhập mã Quotation")
        document.getElementById("mfgCrm").focus()
        return
    }

    if (content === "") {
        alert("Bạn chưa nhập mã đơn hàng")
        document.getElementById("mfgContent").focus()
        return
    }


    document.getElementById("loadingIndicator").style.display = "block";

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_order(), load_mfg()]);

    const findCrm = order_data.filter(item => item[6] === crm_id); // Filter rows based on selection
    console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai CRM# hoặc CRM# chưa được chờ nhận đơn hàng")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }

    const findCrm2 = mfg_data.filter(item => item[3] === crm_id); // Filter rows based on selection
    console.table(findCrm2)
    if (findCrm2.length >0) {
        alert("CRM# này đã được yêu cầu giao hàng")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }
    
    try {
        let mfg_table = new FormData();

        mfg_table.append("operator", sessionStorage.getItem("fullname"));
        mfg_table.append("crm_id", crm_id);
        mfg_table.append("vendor_id", vendor_id);
        mfg_table.append("vendor_name", vendor_name);
        mfg_table.append("content", content);

        mfg_table.append("fileData", fileData);
        mfg_table.append("mimeType", mimeType);
        mfg_table.append("fileName", fileName);

        
        await fetch('https://script.google.com/macros/s/AKfycbzWocGD20MXdcTDm2GehRBMG1cGw01liMw3AyMj2vgOY7wqwqC42Vv4rGmJi9aKY95w/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: mfg_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    reset_mfg()
    get_mfg_need_to_process()
    info("Gửi yêu cầu giao hàng thành công!")
    document.getElementById("loadingIndicator").style.display = "none";

    return false; // Prevent the default form submission
}

async function get_mfg_need_to_process() {
    document.getElementById("loadingIndicator").style.display = "block";
    await Promise.all([load_order(), load_mfg()]);

    // Lấy giá trị từ cột thứ 4 của mfg_data
    const mfgColumn4 = new Set(mfg_data.map(row => row[3]));

    // Lọc và xử lý dữ liệu từ order_data
    const newArray = order_data
        .filter(row => !mfgColumn4.has(row[6]))
        .map(row => {
            const splitData = row[6].split("-");
            const thirdElement = splitData[2];
            const foundCustomer = customer_data.find(customer => customer[1] === thirdElement);
            const customerId = foundCustomer ? foundCustomer[0] : null;
            return [...row, thirdElement, customerId];
        });

    // Lấy dữ liệu cần thiết từ newArray: cột 10, 11, 5, 1, 6 (10 ký tự đầu), 7
    const tableData = newArray.map(row => [
        row[9], // Cột thứ 10
        row[4], // Cột thứ 5
        row[0], // Cột thứ 1
        row[5]?.slice(0, 10), // Cột thứ 6: Chỉ lấy 10 ký tự đầu
        row[6]  // Cột thứ 7
    ]);

    // Tạo bảng
    const tableContainer = document.getElementById("table-container_mfg");
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.tableLayout = "auto"; // Tự động điều chỉnh độ rộng

    // Tạo tiêu đề bảng
    const headers = ["Mã hhách hàng", "Mã đơn hàng", "Ngày tạo", "Ngày giao", "Mã CRM"];
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.whiteSpace = "nowrap"; // Giữ nội dung không xuống dòng
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Tạo dữ liệu bảng
    const tbody = document.createElement("tbody");
    tableData.forEach((row, index) => {
        const tr = document.createElement("tr");
        row.forEach((cell, cellIndex) => {
            const td = document.createElement("td");
            td.textContent = cell;
            td.style.border = "1px solid #ddd";
            td.style.padding = "8px";

            // Thêm sự kiện click vào cột đầu tiên (cột 10)
            if (cellIndex === 0) {
                td.style.cursor = "pointer"; // Thay đổi con trỏ để báo hiệu có thể bấm
                td.style.color = "blue"; // Thêm màu để dễ nhận biết
                td.addEventListener("click", () => {
                    // alert(`Dữ liệu dòng: ${JSON.stringify(row)}`);
                    document.getElementById("mfgCrm").value = row[4]
                    document.getElementById("mfgCustomerID").textContent = row[0]
                    document.getElementById("mfgCustomerName").textContent = row[1]
                });
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // Xóa bảng cũ nếu có và thêm bảng mới vào `div`
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
    document.getElementById("loadingIndicator").style.display = "none";
}


///* DELIVERY ///

function reset_delivery() {
    document.getElementById("deliveryCrm").value = "";
    document.getElementById("deliveryContent").value = "";

    document.getElementById("deliveryDate").value = "";
    
    document.getElementById("deliveryCustomerID").innerText = ""
    document.getElementById("deliveryCustomerName").innerText = ""

    document.getElementById("fileUpload6").value = ""
    document.getElementById("fileData6").value = ""
    document.getElementById("mimeType6").value = ""
    document.getElementById("fileName6").value = ""

    document.getElementById("deliveryCrm").focus()  
}

var filesProcessed_delivery = false;

function LoadFile6(event) {
    var files = event.target.files;

    // Giới hạn số lượng tệp
    if (files.length > 3) {
    alert('Bạn chỉ được chọn tối đa 3 tệp.');
    event.target.value = ''; // Reset input file
    return;
    }

    var fileDataArray = [];
    var mimeTypeArray = [];
    var fileNameArray = [];

    var totalFiles = files.length;
    var filesRead = 0;
    var totalSize = 0;

    // Disable submit button while files are being processed
    document.getElementById('submitButton_delivery').disabled = true;

    for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Kiểm tra kích thước tệp
    if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Tệp "' + file.name + '" vượt quá 10MB.');
        event.target.value = ''; // Reset input file
        filesProcessed_delivery = false;
        document.getElementById('submitButton_delivery').disabled = true;
        return;
    }

    totalSize += file.size;

    (function(file) {
        var reader = new FileReader();
        reader.onload = function(e) {
        var fileData = e.target.result.split(',')[1];
        fileDataArray.push(fileData);
        mimeTypeArray.push(file.type);
        fileNameArray.push(file.name);

        filesRead++;
        if (filesRead === totalFiles) {
            // All files processed
            document.getElementById('fileData6').value = JSON.stringify(fileDataArray);
            document.getElementById('mimeType6').value = JSON.stringify(mimeTypeArray);
            document.getElementById('fileName6').value = JSON.stringify(fileNameArray);

            filesProcessed_delivery = true;
            // Enable submit button
            document.getElementById('submitButton_delivery').disabled = false;
        }
        };
        reader.readAsDataURL(file);
    })(file);
    }
}

async function submitForm_delivery() {
    if (filesProcessed_delivery === false && document.getElementById("fileData6").value !== "") {
        alert('Vui lòng chờ đến khi các tệp được xử lý.');
        return false;
    }
    /////////////////
    const crm_id = document.getElementById("deliveryCrm").value
    const delivery_date = document.getElementById("deliveryDate").value
    const content = document.getElementById("deliveryContent").value

    const vendor_id = document.getElementById("deliveryCustomerID").textContent
    const vendor_name = document.getElementById("deliveryCustomerName").textContent

    const fileData = document.getElementById("fileData6").value
    const mimeType = document.getElementById("mimeType6").value
    const fileName = document.getElementById("fileName6").value

    if (crm_id === "") {
        alert("Bạn chưa nhập mã Quotation")
        document.getElementById("deliveryCrm").focus()
        return
    }

    if (delivery_date === "") {
        alert("Bạn chưa chọn ngày giao hàng")
        return
    }

    if (content === "") {
        alert("Bạn chưa nhập mã đơn hàng")
        document.getElementById("deliveryContent").focus()
        return
    }


    document.getElementById("loadingIndicator").style.display = "block";

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_mfg(), load_delivery()]);

    const findCrm = mfg_data.filter(item => item[3] === crm_id); // Filter rows based on selection
    console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai CRM# hoặc CRM# chưa được sản xuất")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }

    const findCrm2 = delivery_data.filter(item => item[3] === crm_id); // Filter rows based on selection
    console.table(findCrm2)
    if (findCrm2.length >0) {
        alert("CRM# này đã được yêu cầu thanh toán")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }
    
    try {
        let delivery_table = new FormData();

        delivery_table.append("operator", sessionStorage.getItem("fullname"));
        delivery_table.append("crm_id", crm_id);
        delivery_table.append("vendor_id", vendor_id);
        delivery_table.append("vendor_name", vendor_name);
        delivery_table.append("delivery_date", delivery_date);

        delivery_table.append("content", content);

        delivery_table.append("fileData", fileData);
        delivery_table.append("mimeType", mimeType);
        delivery_table.append("fileName", fileName);

        
        await fetch('https://script.google.com/macros/s/AKfycbx6Za6GKMWWlvb1Li7Oe7OW9pAsu5mBQRYCx6upMCEGmWA6MTlFDCFkScRE3WDR1v_sTQ/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: delivery_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    reset_delivery()
    get_mfg_need_to_process()
    info("Gửi yêu cầu thanh toán thành công!")
    document.getElementById("loadingIndicator").style.display = "none";

    return false; // Prevent the default form submission
}

async function get_delivery_need_to_process() {
    document.getElementById("loadingIndicator").style.display = "block";
    await Promise.all([load_mfg(), load_delivery()]);

    // Lấy giá trị từ cột thứ 4 của delivery_data
    const deliveryColumn4 = new Set(delivery_data.map(row => row[3]));

    // Lọc và xử lý dữ liệu từ order_data
    const newArray = mfg_data
        .filter(row => !deliveryColumn4.has(row[3]))
        .map(row => {
            const splitData = row[3].split("-");
            const thirdElement = splitData[2];
            const foundCustomer = customer_data.find(customer => customer[1] === thirdElement);
            const customerId = foundCustomer ? foundCustomer[0] : null;
            return [...row, thirdElement, customerId];
        });

    // Lấy dữ liệu cần thiết từ newArray: cột 10, 11, 5, 1, 6 (10 ký tự đầu), 7
    const tableData = newArray.map(row => [
        row[4],
        row[5],
        row[0],
        row[3] 
    ]);

    // Tạo bảng
    const tableContainer = document.getElementById("table-container_delivery");
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.tableLayout = "auto"; // Tự động điều chỉnh độ rộng

    // Tạo tiêu đề bảng
    const headers = ["Mã hhách hàng", "Mã đơn hàng", "Ngày tạo", "Mã CRM"];
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.whiteSpace = "nowrap"; // Giữ nội dung không xuống dòng
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Tạo dữ liệu bảng
    const tbody = document.createElement("tbody");
    tableData.forEach((row, index) => {
        const tr = document.createElement("tr");
        row.forEach((cell, cellIndex) => {
            const td = document.createElement("td");
            td.textContent = cell;
            td.style.border = "1px solid #ddd";
            td.style.padding = "8px";

            // Thêm sự kiện click vào cột đầu tiên (cột 10)
            if (cellIndex === 0) {
                td.style.cursor = "pointer"; // Thay đổi con trỏ để báo hiệu có thể bấm
                td.style.color = "blue"; // Thêm màu để dễ nhận biết
                td.addEventListener("click", () => {
                    // alert(`Dữ liệu dòng: ${JSON.stringify(row)}`);
                    document.getElementById("deliveryCrm").value = row[3]
                    document.getElementById("deliveryCustomerID").textContent = row[0]
                    document.getElementById("deliveryCustomerName").textContent = row[1]
                });
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // Xóa bảng cũ nếu có và thêm bảng mới vào `div`
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
    document.getElementById("loadingIndicator").style.display = "none";
}


///* PAYMENT ///

function reset_payment() {
    document.getElementById("paymentCrm").value = "";
    document.getElementById("paymentContent").value = "";
    
    document.getElementById("paymentCustomerID").innerText = ""
    document.getElementById("paymentCustomerName").innerText = ""

    document.getElementById("paymentCrm").focus()  
}

async function submitForm_payment() {
    const crm_id = document.getElementById("paymentCrm").value
    const content = document.getElementById("paymentContent").value

    const vendor_id = document.getElementById("paymentCustomerID").textContent
    const vendor_name = document.getElementById("paymentCustomerName").textContent

    if (crm_id === "") {
        alert("Bạn chưa nhập mã CRM")
        document.getElementById("paymentCrm").focus()
        return
    }

    if (content === "") {
        alert("Bạn chưa nhập mã đơn hàng")
        document.getElementById("paymentContent").focus()
        return
    }


    document.getElementById("loadingIndicator").style.display = "block";

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_delivery(), load_payment()]);

    const findCrm = delivery_data.filter(item => item[3] === crm_id); // Filter rows based on selection
    console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai CRM# hoặc CRM# chưa được giao hàng")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }

    const findCrm2 = payment_data.filter(item => item[3] === crm_id); // Filter rows based on selection
    console.table(findCrm2)
    if (findCrm2.length >0) {
        alert("CRM# này đã hoàn tất thanh toán")
        document.getElementById("loadingIndicator").style.display = "none";
        return
    }
    
    try {
        let payment_table = new FormData();

        payment_table.append("operator", sessionStorage.getItem("fullname"));
        payment_table.append("crm_id", crm_id);
        payment_table.append("vendor_id", vendor_id);
        payment_table.append("vendor_name", vendor_name);
        payment_table.append("content", content);
        
        await fetch('https://script.google.com/macros/s/AKfycbyiNrVjoLDxbikY9YgdtmsNFQ7YOjuX75wyNFAokq3-KRvYkE1pdXhYZIyXXNlIDzo/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: payment_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    reset_payment()
    get_payment_need_to_process()
    info("Hoàn tất thanh toán!")
    document.getElementById("loadingIndicator").style.display = "none";

    return false; // Prevent the default form submission
}

async function get_payment_need_to_process() {
    document.getElementById("loadingIndicator").style.display = "block";
    await Promise.all([load_delivery(), load_payment()]);

    // Lấy giá trị từ cột thứ 4 của payment_data
    const paymentColumn4 = new Set(payment_data.map(row => row[3]));

    // Lọc và xử lý dữ liệu từ order_data
    const newArray = delivery_data
        .filter(row => !paymentColumn4.has(row[3]))
        .map(row => {
            const splitData = row[3].split("-");
            const thirdElement = splitData[2];
            const foundCustomer = customer_data.find(customer => customer[1] === thirdElement);
            const customerId = foundCustomer ? foundCustomer[0] : null;
            return [...row, thirdElement, customerId];
        });

    // Lấy dữ liệu cần thiết từ newArray: cột 10, 11, 5, 1, 6 (10 ký tự đầu), 7
    const tableData = newArray.map(row => [
        row[4],
        row[5],
        row[0],
        row[3] 
    ]);

    // Tạo bảng
    const tableContainer = document.getElementById("table-container_payment");
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.tableLayout = "auto"; // Tự động điều chỉnh độ rộng

    // Tạo tiêu đề bảng
    const headers = ["Mã hhách hàng", "Mã đơn hàng", "Ngày tạo", "Mã CRM"];
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.whiteSpace = "nowrap"; // Giữ nội dung không xuống dòng
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Tạo dữ liệu bảng
    const tbody = document.createElement("tbody");
    tableData.forEach((row, index) => {
        const tr = document.createElement("tr");
        row.forEach((cell, cellIndex) => {
            const td = document.createElement("td");
            td.textContent = cell;
            td.style.border = "1px solid #ddd";
            td.style.padding = "8px";

            // Thêm sự kiện click vào cột đầu tiên (cột 10)
            if (cellIndex === 0) {
                td.style.cursor = "pointer"; // Thay đổi con trỏ để báo hiệu có thể bấm
                td.style.color = "blue"; // Thêm màu để dễ nhận biết
                td.addEventListener("click", () => {
                    // alert(`Dữ liệu dòng: ${JSON.stringify(row)}`);
                    document.getElementById("paymentCrm").value = row[3]
                    document.getElementById("paymentCustomerID").textContent = row[0]
                    document.getElementById("paymentCustomerName").textContent = row[1]
                });
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    // Xóa bảng cũ nếu có và thêm bảng mới vào `div`
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
    document.getElementById("loadingIndicator").style.display = "none";
}
