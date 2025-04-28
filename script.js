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

let active_frame = ""

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
        color: 'white',
        didOpen: () => {
            // Set z-index to ensure it's on the highest layer
            const swalContainer = document.querySelector('.swal2-container');
            if (swalContainer) {
                swalContainer.style.zIndex = '999999';
            }
        }
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
        color: 'white',
        didOpen: () => {
            // Set z-index to ensure it's on the highest layer
            const swalContainer = document.querySelector('.swal2-container');
            if (swalContainer) {
                swalContainer.style.zIndex = '999999';
            }
        }
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
        color: 'black',
        didOpen: () => {
            // Set z-index to ensure it's on the highest layer
            const swalContainer = document.querySelector('.swal2-container');
            if (swalContainer) {
                swalContainer.style.zIndex = '999999';
            }
        }
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

function create_wh_pr() {
    const wh = sessionStorage.getItem("wh"); // Lấy giá trị "wh" từ sessionStorage
    const warehouseSelect = document.getElementById("warehouse_pr");

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


create_wh_nhap()
create_wh_xuat()
create_wh_xuat_export()
create_wh_nhap_export()
create_wh_onhand_export()
create_wh_crm()
create_wh_pr()

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
    document.getElementById("unit_nhap").textContent = unit_nhap; // Gán lựa chọn vào ô nhập liệu

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
    const rmgPO = document.getElementById("rmg_po_nhap").value;
    
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
        stock_in_table.append("rmg_po", rmgPO);

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
    document.getElementById("rmg_po_nhap").value = ""

    document.getElementById("sku_name_nhap").textContent = ""
    document.getElementById("sku_id_nhap").textContent = ""
    document.getElementById("unit_nhap").textContent = "" // Gán lựa chọn vào ô nhập liệu

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
let cancel_data = []
let bom_data = []
let bom_draft_data = []
let bom_link_data = []
let bom_link_filter_data = []
let vendor_data = []
let pr_approve_list = []
let pr_to_po_data = []
let vendor_pr_data = []
let po_approval_list = []
let po_need_to_release_list = []
let po_data_raw = []
let po_need_to_pre_payment_list = []
let po_need_to_receiving_list = []
let po_need_to_final_payment_list = []

let po_approval_2_list = []
let po_approval_3_list = []
let po_approval_4_list = []

let detail_pr_data = [];
let detail_po_to_approve_data = [];
let detail_po_raw = []

// 16, 19, 4, 42, 43, 23, 24, 25, 20
async function load_detail_po_to_approve() {
    return fetch('https://script.google.com/macros/s/AKfycbwFycsxNE17ZAt6YP4o9UpYZWG-uaeEQOpt1uwymnFb25R3ikmcwKje3Gmjal3DmKvQyg/exec')
        .then(res => res.json())
        .then(data => {
            detail_po_to_approve_data = data.content;
            console.log(detail_po_to_approve_data)

        });
}


async function updateBeforeExport() {
    startLoading();
    const url = 'https://script.google.com/macros/s/AKfycbziYKt0K_0_3kAuOR58ykuG03128L0dNA1cUhcQ2aZ2jitEbRXLTkEeFB4F5cLD-m27/exec'; // Thay bằng URL Web App của bạn
    const res = await fetch(url);
    const text = await res.text();
    console.log(text); // Đã chạy xong cập nhật PR và PO.
}

async function updateAndLoadPR() {
    // 1. Chạy cập nhật trước
    await updateBeforeExport();
  
    // 2. Sau đó mới load dữ liệu
    await load_detail_pr();
    endLoading();
}

async function updateAndLoadPO() {
    // 1. Chạy cập nhật trước
    await updateBeforeExport();
  
    // 2. Sau đó mới load dữ liệu
    await load_detail_po();
    endLoading();
}
  

let poInfo_data = [];

async function load_po_info() {
    return fetch('https://script.google.com/macros/s/AKfycbxaHFDj1LtFommzR4AUe-_zz7gZzpOsvY83G4uWPi5jKkSXOIAfO0wtJRKc9RNUDn2byw/exec')
        .then(res => res.json())
        .then(data => {
            const columnsToRemove = new Set([10, 11, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57]);
            poInfo_data = data.content.map(row =>
                row.filter((_, index) => !columnsToRemove.has(index))
            );

            poInfo_data.shift(); // Bỏ header gốc nếu có
        }

    );
}


async function load_detail_pr() {
    return fetch('https://script.google.com/macros/s/AKfycbx7AbFWNtkEmz6kh13TNSNZDDVdYZaUCufmzUTmjaScj2eHxEzQrBBE_wFyxftorg4FqA/exec')
        .then(res => res.json())
        .then(data => {
            prExportData = data.content.map(row =>
                row.filter((_, index) => index !== 8 && (index < 23 || index > 30))
            );

            prExportData.shift();

            // Lấy giá trị duy nhất cho Operator (cột 3)
            const operators = [...new Set(prExportData.map(row => row[3]).filter(v => v))];
            const operatorSelect = document.getElementById('pr_export_modal_operator');
            operatorSelect.innerHTML = '<option value="">-- Tất cả --</option>';
            operators.forEach(op => {
                const option = document.createElement('option');
                option.value = op;
                option.textContent = op;
                operatorSelect.appendChild(option);
            });

            // Lấy giá trị duy nhất cho Chi nhánh (cột 6)
            const branches = [...new Set(prExportData.map(row => row[6]).filter(v => v))];
            const branchSelect = document.getElementById('pr_export_modal_branch');
            branchSelect.innerHTML = '<option value="">-- Tất cả --</option>';
            branches.forEach(br => {
                const option = document.createElement('option');
                option.value = br;
                option.textContent = br;
                branchSelect.appendChild(option);
            });

            // Mở modal
            document.getElementById('pr_export_modal').style.display = 'block';
        });
}

function filterAndExportPR() {
    const date = document.getElementById('pr_export_modal_date').value;
    const branch = document.getElementById('pr_export_modal_branch').value;
    const operator = document.getElementById('pr_export_modal_operator').value;

    const filtered = prExportData.filter(row => {
        const matchDate = date === '' || (row[0] && row[0].startsWith(date));
        
        const matchBranch = branch === '' || row[6] === branch;
        const matchOperator = operator === '' || row[3] === operator;
        return matchDate && matchBranch && matchOperator;
    });

    filtered.forEach(row => {
        [18].forEach(i => {
          if (row[i]) {
            const date = new Date(row[i]);
            date.setHours(date.getHours() + 7); // cộng 7 giờ
            row[i] = date.toISOString().slice(0, 10); // lấy YYYY-MM-DD
          }
        });
    });

    const header = [
        'Ngày tạo PR', 'Thời gian tạo PR', 'PR #', 'Người yêu cầu', 'Người duyệt PR',
        'Bộ phận', 'Chi nhánh', 'Mục đích mua hàng', 'Ngày duyệt PR', 'Thời gian duyệt PR',
        'Trạng thái PR', 'Loại vật tư', 'Tên vật tư', 'Mã vật tư', 'Thông số kỹ thuật',
        'Đơn vị', 'Tên khách hàng', 'Số PO của khách hàng', 'Ngày cần có vật tư',
        'Đơn giá / đơn vị dự kiến', 'Số lượng cần', 'Tổng tiền'
    ];    
      
    const exportData = [header, ...filtered];

    const ws = XLSX.utils.aoa_to_sheet(exportData);
    // const ws = XLSX.utils.aoa_to_sheet(filtered);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Detail PR");

    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.-]/g, '').slice(0, 15);
    const filename = `detail_pr_${timestamp}.xlsx`;
    XLSX.writeFile(wb, filename);

    document.getElementById('pr_export_modal').style.display = 'none';
}

function hideModalExportPR() {
    document.getElementById('pr_export_modal').style.display = 'none';
}

function hideModalExportPO() {
    document.getElementById('po_export_modal').style.display = 'none';
}

let poExportData = [];

async function load_detail_po() {
    return fetch('https://script.google.com/macros/s/AKfycbxaHFDj1LtFommzR4AUe-_zz7gZzpOsvY83G4uWPi5jKkSXOIAfO0wtJRKc9RNUDn2byw/exec')
        .then(res => res.json())
        .then(data => {
            const columnsToRemove = new Set([10, 11, 31, 32, 33, 36, 37, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57]);
            poExportData = data.content.map(row =>
                row.filter((_, index) => !columnsToRemove.has(index))
            );

            poExportData.shift(); // Bỏ header gốc nếu có

            // Lấy giá trị duy nhất cho Operator (cột 5)
            const operators = [...new Set(poExportData.map(row => row[5]).filter(v => v))];
            const operatorSelect = document.getElementById('po_export_modal_operator');
            operatorSelect.innerHTML = '<option value="">-- Tất cả --</option>';
            operators.forEach(op => {
                const option = document.createElement('option');
                option.value = op;
                option.textContent = op;
                operatorSelect.appendChild(option);
            });

            // Lấy giá trị duy nhất cho Chi nhánh (cột cuối)
            const branches = [...new Set(poExportData.map(row => row[row.length - 1]).filter(v => v))];
            const branchSelect = document.getElementById('po_export_modal_branch');
            branchSelect.innerHTML = '<option value="">-- Tất cả --</option>';
            branches.forEach(br => {
                const option = document.createElement('option');
                option.value = br;
                option.textContent = br;
                branchSelect.appendChild(option);
            });

            document.getElementById('po_export_modal').style.display = 'block';
        });
}

function filterAndExportPO() {
    const date = document.getElementById('po_export_modal_date').value;
    const branch = document.getElementById('po_export_modal_branch').value;
    const operator = document.getElementById('po_export_modal_operator').value;


    const filtered = poExportData.filter(row => {
        const matchDate = date === '' || (row[0] && row[0].startsWith(date));
        const matchOperator = operator === '' || row[5] === operator;
        const matchBranch = branch === '' || row[row.length - 1] === branch;
        return matchDate && matchOperator && matchBranch;
      });
      
      // 👉 Sửa định dạng ngày
    filtered.forEach(row => {
        [29, 30].forEach(i => {
            if (row[i]) {
                const date = new Date(row[i]);
                date.setHours(date.getHours() + 7); // cộng thêm 7h
                row[i] = date.toISOString().slice(0, 10); // lấy YYYY-MM-DD
            }
        });

        // 👉 Nếu "Approve / Reject" rỗng thì xóa "Link xem PDF PO"
        if (!row[13]) { // index 13 là "Approve / Reject"
            row[8] = ''; // index 8 là "Link xem PDF PO"
        }
    });   

    const header = [
        "Ngày tạo PO", "Thời gian tạo PO", "PO #", "PR #", "Nhà cung cấp",
        "Người tạo PO", "Người tạo PR", "Người Approve", "Link xem PDF PO",
        "Link xem files đính kèm", "Tổng giá trị PO", "Ngày approve PO",
        "Thời gian approve PO", "Approve / Reject", "Lý do reject", "Loại vật tư",
        "Tên vật tư", "Tên vật tư (tiếng việt)", "Mã vật tư", "Đơn vị",
        "Đơn vị tiền tệ", "Giá bán", "Xuất xứ hàng hóa", "Số lượng cần mua",
        "Đơn giá", "Thành tiền", "% Thuế GTGT", "Tổng tiền", "Ghi chú",
        "Ngày giao hàng dự kiến", "Ngày thanh toán dự kiến", "Delivery address",
        "Delivery to", "Attts:", "Phone#", "Ship via", "Delivery terms",
        "Payment terms", "Lead time", "Warranty", "Shipping Value",
        "Số PO của khách hàng", "Số lượng cần từ PR", "Số tiền từ PR", "Chi nhánh"
    ];

    const exportData = [header, ...filtered];

    const ws = XLSX.utils.aoa_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Detail PO");

    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.-]/g, '').slice(0, 15);
    const filename = `detail_po_${timestamp}.xlsx`;
    XLSX.writeFile(wb, filename);

    document.getElementById('po_export_modal').style.display = 'none';
}

async function load_po_approve_2_list() {
    return fetch('https://script.google.com/macros/s/AKfycbzA7zGoRs7-xiMTmIgF4CVcBvhDEqSdABhqlaRJj_RO8IZL1yi6r8YqCdyuBf49dGXSYg/exec')
        .then(res => res.json())
        .then(data => {
            po_approval_2_list = data.content;
            console.log("Dữ liệu danh sách phê duyệt PO 2 đã tải xong.");
            // add_po_need_to_approve()
        });
}

async function load_po_approve_3_list() {
    return fetch('https://script.google.com/macros/s/AKfycbyZQo7eME4o8r4IcPmW3wg_WfzzvJ9cf5TwuDNKHmh1qr2r9cA2nai46MSH32z9fXq6wg/exec')
        .then(res => res.json())
        .then(data => {
            po_approval_3_list = data.content;
            console.log("Dữ liệu danh sách phê duyệt PO 3 đã tải xong.");
            // add_po_need_to_approve()
        });
}

async function load_po_approve_4_list() {
    return fetch('https://script.google.com/macros/s/AKfycbzmv1n0cwQlS4LCw6_oroglNINiV4tF3bGvQGUd-iRQmZKc4CMV2MylbOH-iM7fb0rZ/exec')
        .then(res => res.json())
        .then(data => {
            po_approval_4_list = data.content;
            console.log("Dữ liệu danh sách phê duyệt PO 4 đã tải xong.");
            // add_po_need_to_approve()
        });
}

async function load_po_need_to_release() {
    return fetch('https://script.google.com/macros/s/AKfycbyNvLnAUPYAQ1VhsKLmUBt1jq2bExhq_X7Bj4_AtMpEuDD-0sFvptzaPAJV8Cfxmv6W/exec')
        .then(res => res.json())
        .then(data => {
            po_need_to_release_list = data.content;

            // Chỉ lấy các cột mong muốn từ mỗi hàng
            po_need_to_release_list = po_need_to_release_list.map(row => [
                row[1], row[2], row[3], row[4], row[5], row[0], row[8], row[6]
            ]);

            console.log("Dữ liệu PO cần ra đơn hàng đã tải xong.", po_need_to_release_list);
        });
}

async function load_po_need_to_pre_payment() {
    return fetch('https://script.google.com/macros/s/AKfycbxn5RBQcC6vkFmEfbflNdIY__nF9iGdHgH0FgrcRQ48FbESqXF_Vu73FbW74Co--NI/exec')
        .then(res => res.json())
        .then(data => {
            po_need_to_pre_payment_list = data.content;

            console.log("Dữ liệu PO trả trước đã tải xong.", po_need_to_pre_payment_list);
        });
}

async function load_po_need_to_receiving() {
    return fetch('https://script.google.com/macros/s/AKfycby2AhvzBP0bo4ptn6zjOHM0m8EuEIXf_PwHQWUClFSUbO1jhx62osi-wL-nypmkeFCEmg/exec')
        .then(res => res.json())
        .then(data => {
            po_need_to_receiving_list = data.content;

            console.log("Dữ liệu PO Receiving đã tải xong.", po_need_to_receiving_list);
        });
}

async function load_po_need_to_final_payment() {
    return fetch('https://script.google.com/macros/s/AKfycbyMWQkDTu_jw9zeDP5nBHX40vKH9uu7LkO3IhBom7GSjKiSGbz_kyF9enEjVN1Yz-b05Q/exec')
        .then(res => res.json())
        .then(data => {
            po_need_to_final_payment_list = data.content;

            console.log("Dữ liệu PO Final Payment đã tải xong.", po_need_to_final_payment_list);
        });
}

async function load_purchase_order() {
    return fetch('https://script.google.com/macros/s/AKfycbzu8iYj_TknCQuEPrEQCOnp9NPPo2cljMpvzYWrU8frt0qgEu5lOhv9H8Y1nPMNSJcq/exec')
        .then(res => res.json())
        .then(data => {
            po_data_raw = data.content;
            console.log("Dữ liệu PO đã tải xong.");
        });
}

async function load_vendor_pr() {
    return fetch('https://script.google.com/macros/s/AKfycbxA9jQQw3FI6w8Ywmz4lXUzZ1Y-Pou96NWbKlCZ_9nzuYAdrKM0tHEA4yjGL00K_y-v/exec')
        .then(res => res.json())
        .then(data => {
            vendor_pr_data = data.content;
            console.log("Dữ liệu vendor PR đã tải xong.");
        });
}

async function load_pr_approve_list() {
    return fetch('https://script.google.com/macros/s/AKfycbyrb44xlBobTsL3z4DmAP6q8A_tRt692y4dPiMWuU2Wbilvb_SQUjhElGdY-Vg9lvV2kg/exec')
        .then(res => res.json())
        .then(data => {
            pr_approve_list = data.content;
            console.log("Dữ liệu danh sách phê duyệt PR đã tải xong.");
        });
}

async function load_po_approve_list() {
    return fetch('https://script.google.com/macros/s/AKfycbxwWsuNOuf23lyaqFsQeRw2AOMCncbfh1SIx_JA0UD02u4K0AhlbhqGN8fhqHLQSJ_G1Q/exec')
        .then(res => res.json())
        .then(data => {
            po_approval_list = data.content;
            console.log("Dữ liệu danh sách phê duyệt PO đã tải xong.");
            // add_po_need_to_approve()
        });
}

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

async function load_cancel() {
    return fetch('https://script.google.com/macros/s/AKfycbzJzPgmnJQ--IeFGjyoeFow4KGu1FQCc9aQFRqjf4KGUaaK6Pbl4RrioQbATbXpmQHL/exec')
        .then(res => res.json())
        .then(data => {
            cancel_data = data.content;
            console.log("Dữ liệu cancel đã tải xong.");
        });
}

async function load_bom() {
    return fetch('https://script.google.com/macros/s/AKfycbyYLnc0F_JT3Rtl8_gjBZvOTuzFalEqQduUdshd2-rXc7rC7mjZKVJwGYRL28zk_BWIBQ/exec')
        .then(res => res.json())
        .then(data => {
            bom_data = data.content;
            console.log("Dữ liệu bom đã tải xong.");
        });
}

async function load_bom_draft() {
    return fetch('https://script.google.com/macros/s/AKfycbzOQOzfkRQBj6IHuU7QNz82cSaYSkzSMkCX8dp8VH1Pte_LxyvV2hY0h01AY3X8-0ke/exec')
        .then(res => res.json())
        .then(data => {
            bom_draft_data = data.content;
            console.log("Dữ liệu bom draft đã tải xong.");
        });
}

async function load_bom_link() {
    return fetch('https://script.google.com/macros/s/AKfycbzj_XC0HrdRg6rEGT_aT0rq7z0-M5zyoBXcf9tLMxmVm2CoobAGD1PNpStFTKmmPK8HKg/exec')
        .then(res => res.json())
        .then(data => {
            bom_link_data = data.content;
            bom_link_filter_data = data.content;
            bom_link_filter_data.shift()
            console.log("Dữ liệu bom link đã tải xong.");
        });
}

async function load_vendor() {
    return fetch('https://script.google.com/macros/s/AKfycbyYeLB_5H0htgBm3Iz7szF6NGr44-CyeltVdPaP0dHBa9nZj8dkkmX5nlLrwbMdhgI7/exec')
        .then(res => res.json())
        .then(data => {
            vendor_data = data.content;
            console.log("Dữ liệu vendor đã tải xong.");
        });
}


async function load_mml() {
    return fetch('https://script.google.com/macros/s/AKfycbxIwRRg9dRNtBp6ekhJq6j-qNLwBKT3Sny0KSLChLZHuXGnRNxSij7n58ztQtZAVSL5LA/exec')
        .then(res => res.json())
        .then(data => {
            mml_data = data.content;
            console.log("Dữ liệu MML đã tải xong.");
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
            const pr_approver = user[27]
            const po_approver = user[28]
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
                approve_center:user[18] === "x",
                bom_creation:user[20] === "x",
                pur_pr:user[21] === "x",
                pur_po:user[22] === "x",
                pur_po_release:user[23] === "x",
                pur_pre_payment:user[24] === "x",
                pur_po_receiving:user[25] === "x",
                pur_final_payment:user[26] === "x",
                bom_approval:user[29] === "x",
                quotation_approval:user[30] === "x",
                pr_approval:user[31] === "x",
                po_1_approval:user[32] === "x",
                po_2_approval:user[33] === "x",
                po_3_approval:user[34] === "x",
                po_4_approval:user[35] === "x",
                export_pr:user[36] === "x",
                export_po:user[37] === "x",
                pr_po_summary:user[38] === "x"
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
            sessionStorage.setItem("pr_approver", pr_approver);
            sessionStorage.setItem("po_approver", po_approver);
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
            welcomeMessage.textContent = username;
        }
    
        // Gọi hàm khởi tạo combobox sau khi hoàn tất đăng nhập
        create_wh_nhap();
        create_wh_xuat()
        create_wh_xuat_export()
        create_wh_nhap_export()
        create_wh_onhand_export()
        create_wh_crm()
        create_wh_pr()
    
    }
    

    function checkLoginStatus() {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        const expirationTime = sessionStorage.getItem("expirationTime");
        const username = sessionStorage.getItem("username");
        
        if (isLoggedIn === "true" && expirationTime && Date.now() < parseInt(expirationTime)) {
            displayWelcomeFrame();
            if (welcomeMessage) {
                welcomeMessage.textContent = (username || "User");
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


async function load_data_nhap() {
    warning("Đang lấy dữ liệu")
    // Show the loading indicator
    startLoading()

    await Promise.all([load_mml(), load_location()]); // Run both fetch calls in parallel

    // Hide the loading indicator once loading is complete
    endLoading()
    info("Lấy dữ liệu thành công")
}

async function load_data_xuat() {
    warning("Đang lấy dữ liệu")
    // Show the loading indicator
    startLoading()

    await Promise.all([load_onhand()]); // Run both fetch calls in parallel

    // Hide the loading indicator once loading is complete
    endLoading()
    info("Lấy dữ liệu thành công")
}

async function load_data_mml() {
    warning("Đang lấy dữ liệu")
    // Show the loading indicator
    startLoading()

    await show_onhand()

    // Hide the loading indicator once loading is complete
    endLoading()
    info("Lấy dữ liệu thành công")
}

async function load_data_xuat_export() {
    warning("Đang lấy dữ liệu")
    // Show the loading indicator
    startLoading()

    await show_xuat()

    // Hide the loading indicator once loading is complete
    endLoading()
    info("Lấy dữ liệu thành công")
}

async function load_data_nhap_export() {
    warning("Đang lấy dữ liệu")
    // Show the loading indicator
    startLoading()

    await show_nhap()

    // Hide the loading indicator once loading is complete
    endLoading()
    info("Lấy dữ liệu thành công")
}

function load_data_nhap_without_loading() {
    load_mml();
    load_location();
}


async function showFrame(id) {
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
                active_frame = id;
                console.log("Access granted to frame:", id);
            } else if (id === 'survey') {
                get_survey_need_to_process()
                activeFrame.classList.add('active');
                active_frame = id;
                console.log("Access granted to frame:", id);
            } else if (id === 'approve_center') {
                load_approval_ticket()
                activeFrame.classList.add('active');
            } else if (id === 'design') {
                get_design_need_to_process()
                activeFrame.classList.add('active');
                active_frame = id;
                console.log("Access granted to frame:", id);
            } else if (id === 'quotation') {
                get_quotation_need_to_process()
                activeFrame.classList.add('active');
                active_frame = id;
                console.log("Access granted to frame:", id);
            } else if (id === 'order') {
                get_order_need_to_process()
                activeFrame.classList.add('active');
                active_frame = id;
                console.log("Access granted to frame:", id);
            } else if (id === 'mfg') {
                get_mfg_need_to_process()
                activeFrame.classList.add('active');
                active_frame = id;
                console.log("Access granted to frame:", id);
            } else if (id === 'delivery') {
                get_delivery_need_to_process()
                activeFrame.classList.add('active');
                active_frame = id;
                console.log("Access granted to frame:", id);
            } else if (id === 'payment') {
                get_payment_need_to_process()
                activeFrame.classList.add('active');
                active_frame = id;
                console.log("Access granted to frame:", id);
            } else if (id === 'bom_creation') {
                activeFrame.classList.add('active');
                active_frame = id;
                await Promise.all([get_bom_scorecard(), displayTableData()])
                console.log("Access granted to frame:", id);
            } else if (id === 'pur_po') {
                activeFrame.classList.add('active');
                active_frame = id;
                load_pr_to_po()
                console.log("Access granted to frame:", id);
            } else if (id === 'pur_po_release') {
                activeFrame.classList.add('active');
                active_frame = id;
                get_po_need_to_release()
                console.log("Access granted to frame:", id);
            } else if (id === 'pur_pre_payment') {
                activeFrame.classList.add('active');
                active_frame = id;
                get_po_need_to_pre_payment()
                console.log("Access granted to frame:", id);
            } else if (id === 'pur_po_receiving') {
                activeFrame.classList.add('active');
                active_frame = id;
                get_po_need_to_po_receiving()
                console.log("Access granted to frame:", id);
            } else if (id === 'pur_final_payment') {
                activeFrame.classList.add('active');
                active_frame = id;
                get_po_need_to_final_payment()
                console.log("Access granted to frame:", id);
            } else if (id === 'bom_approval') {
                activeFrame.classList.add('active');
                active_frame = id;
                design_approval()
                console.log("Access granted to frame:", id);
            } else if (id === 'quotation_approval') {
                activeFrame.classList.add('active');
                active_frame = id;
                quotation_approval()
                console.log("Access granted to frame:", id);
            } else if (id === 'pr_approval') {
                activeFrame.classList.add('active');
                active_frame = id;
                pr_approval()
                console.log("Access granted to frame:", id);
            } else if (id === 'po_1_approval') {
                activeFrame.classList.add('active');
                active_frame = id;
                po_1_approval()
                console.log("Access granted to frame:", id);
            } else if (id === 'po_2_approval') {
                activeFrame.classList.add('active');
                active_frame = id;
                po_2_approval()
                console.log("Access granted to frame:", id);
            } else if (id === 'po_3_approval') {
                activeFrame.classList.add('active');
                active_frame = id;
                po_3_approval()
                console.log("Access granted to frame:", id);
            } else if (id === 'po_4_approval') {
                activeFrame.classList.add('active');
                active_frame = id;
                po_4_approval()
                console.log("Access granted to frame:", id);
            } if (id === "pr_po_summary") {
                activeFrame.classList.add('active');
                active_frame = id;
                get_pr_po_summary()
                console.log("Access granted to frame:", id);
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
    document.getElementById("unit_xuat").textContent = ""
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
    document.getElementById("unit_xuat").textContent = unit_xuat;
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
    document.getElementById("mb_code_mml").value = "";
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
    const mb_code = document.getElementById("mb_code_mml").value

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
        mml_table.append("mb_code", mb_code.toUpperCase());

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
        { title: "Description / SKU", formatter: (cell) => cell.getData()[11] },
        { title: "Location", formatter: (cell) => cell.getData()[3] },
        { title: "Ngày hết hạn", formatter: (cell) => cell.getData()[4] },
        { title: "Ngày nhập", formatter: (cell) => cell.getData()[5] },
        { title: "Đơn giá lúc nhập", formatter: (cell) => cell.getData()[6] },
        { title: "Nhập", formatter: (cell) => cell.getData()[7] },
        { title: "Tồn đầu", formatter: (cell) => cell.getData()[8] },
        { title: "Xuất", formatter: (cell) => cell.getData()[9] },
        { title: "Tồn cuối", formatter: (cell) => cell.getData()[10] },
        { title: "Đơn giá", formatter: (cell) => cell.getData()[12] },
        { title: "Thành tiền", formatter: (cell) => cell.getData()[13] },
        { title: "Đơn vị", formatter: (cell) => cell.getData()[14] },
        { title: "Mã nhà cung cấp", formatter: (cell) => cell.getData()[17] },
        { title: "Tên nhà cung cấp", formatter: (cell) => cell.getData()[18] },
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
    startLoading()
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

    endLoading()

    // Ẩn modal
    document.getElementById("filterModal").style.display = "none";
    document.getElementById("dateFrom").value = "";
    document.getElementById("dateTo").value = "";
});


document.getElementById("applyFilter2").addEventListener("click", async function() {
    startLoading()
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

    endLoading()

    // Ẩn modal
    document.getElementById("filterModal2").style.display = "none";
    document.getElementById("dateFrom2").value = "";
    document.getElementById("dateTo2").value = "";
});

document.getElementById("applyFilter3").addEventListener("click", async function() {
    startLoading()
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

    // const exportData = [headerRow, ...filteredData];
    const exportData = [headerRow, ...filteredData].map(row => {
        if (!Array.isArray(row) || row.length <= 11) return row; // kiểm tra an toàn
      
        const newRow = [...row];
        const [col11] = newRow.splice(11, 1); // lấy ra phần tử ở index 11
        newRow.splice(3, 0, col11);           // chèn vào vị trí index 3
      
        return newRow;
      });
      


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

    endLoading()

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
        { title: 'Thành tiền', formatter: (cell) => cell.getData()[12] },
        { title: 'Đơn vị', formatter: (cell) => cell.getData()[13] }
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

///* CRM ////

document.getElementById("customer_crm").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Kiểm tra phím Enter
        ocument.getElementById("content_crm").focus()
    }
});

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

    startLoading()
    document.getElementById("button_crm").disabled = true;

    // Kiểm tra cột đầu tiên
    const existsInFirstColumn = customer_data.some(row => row[0] === customer);

    if (existsInFirstColumn) {
        console.log('Customer exists in the first column');
    } else {
        console.log('Customer does not exist in the first column');
        alert("Sai tên Khách hàng")
        endLoading()
        document.getElementById("button_crm").disabled = false;
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
    endLoading()
    document.getElementById("button_crm").disabled = false;
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

async function crm_to_design() {
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

    startLoading()
    document.getElementById("button_crm").disabled = true;

    // Kiểm tra cột đầu tiên
    const existsInFirstColumn = customer_data.some(row => row[0] === customer);

    if (existsInFirstColumn) {
        console.log('Customer exists in the first column');
    } else {
        console.log('Customer does not exist in the first column');
        alert("Sai tên Khách hàng")
        endLoading()
        document.getElementById("button_crm").disabled = false;
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
        crm_table.append("remark", "Bypass")
        
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
    
    try {
        let crm_to_quotation_table = new FormData();

        crm_to_quotation_table.append("operator", sessionStorage.getItem("fullname"))
        crm_to_quotation_table.append("username", sessionStorage.getItem("username"))
        crm_to_quotation_table.append("approver", sessionStorage.getItem("approver"))

        crm_to_quotation_table.append("dept","")
        crm_to_quotation_table.append("crm_id", crm_id)
        crm_to_quotation_table.append("total_hour", "")
        crm_to_quotation_table.append("product_name", "")

        crm_to_quotation_table.append("bom_id", "")
        crm_to_quotation_table.append("total_price", "")

        crm_to_quotation_table.append("status", "BOM ĐÃ DUYỆT")

        crm_to_quotation_table.append("link", "")
        crm_to_quotation_table.append("design_id", "")

        startLoading()
        await fetch('https://script.google.com/macros/s/AKfycbyVIm0bJDZmWJ8qEHTHXFVcORi4xgWEdX86I1HEjO4I3DR58sA8p_xPfqCjaw5ENbXI/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: crm_to_quotation_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }
    info("Báo giá thành công")
    endLoading()
    document.getElementById("button_crm").disabled = false;
}

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

    document.getElementById("operator_show_survey").textContent = ""
    document.getElementById("content_show_survey").textContent = ""

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
    startLoading()
    document.getElementById("submitButton_survey").disabled = true;

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_survey(), load_crm()]);

    const findCrm = crm_data.filter(item => item[7] === crm_id); // Filter rows based on selection
    console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai CRM#")
        endLoading()
        document.getElementById("submitButton_survey").disabled = false;
        return
    }

    const findCrm2 = survey_data.filter(item => item[6] === crm_id); // Filter rows based on selection
    console.table(findCrm2)
    if (findCrm2.length >0) {
        alert("CRM# này đã được yêu cầu thiết kế")
        endLoading()
        document.getElementById("submitButton_survey").disabled = false;
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
    endLoading()
    document.getElementById("submitButton_survey").disabled = false;

    return false; // Prevent the default form submission
}

async function get_survey_need_to_process() {
    startLoading()
    await Promise.all([load_crm(), load_survey(),load_cancel()]);

    const crm_cancel_list = [...new Set(cancel_data.map(row => row[3]))];
    // Lấy giá trị từ cột thứ 4 của mfg_data
    const crmColumn = new Set(survey_data.map(row => row[6]));

    const newArray = crm_data
        .filter(row => !crmColumn.has(row[7]) && row[10] !== "Bypass"); // Lọc ra các giá trị không tồn tại trong mfgColumn

    const filtered = newArray.filter(row => !crm_cancel_list.includes(row[7]));
    // Lấy dữ liệu cần thiết từ newArray: cột 10, 11, 5, 1, 6 (10 ký tự đầu), 7
    const tableData = filtered.map(row => [
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
                    crm_data.sort((a, b) => new Date(`${b[0]} ${b[1]}`) - new Date(`${a[0]} ${a[1]}`));
                    const findCrm = crm_data.find(item => item[7] === row[0])
                    const content = findCrm[8]
                    const operator = findCrm[4]
                    document.getElementById("operator_show_survey").textContent = operator
                    document.getElementById("content_show_survey").textContent = content
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
    endLoading()
}

function get_content_and_operator(array_data, crm_id) {
    array_data.sort((a, b) => new Date(`${b[0]} ${b[1]}`) - new Date(`${a[0]} ${a[1]}`));
    findCrm = array_data.find(item => item[7] === crm_id)
    const content = findCrm[8]
    const operator = findCrm[4]

    console.log(content, operator)

}

// Hàm đóng modal
function closeModal() {
    document.getElementById("secondaryModal").style.display = 'none';
    document.getElementById("secondaryModal2").style.display = 'none';
    document.getElementById("secondaryModal_bom").style.display = 'none';
    // document.getElementById("detailModal").style.display = "none";
    // document.getElementById("modalBackdrop").style.display = "none";
}
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

    document.getElementById("operator_show_design").textContent = ""
    document.getElementById("content_show_design").textContent = ""
    document.getElementById("link_show_design").textContent = ""

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
    
    startLoading()
    document.getElementById("submitButton_design").disabled = true;

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_survey(), load_design(), load_design_approval()]); //, load_design_approval()

    const findCrm = survey_data.filter(item => item[6] === crm_id); // Filter rows based on selection
    console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai CRM# hoặc CRM# chưa được duyệt")
        endLoading()
        document.getElementById("submitButton_design").disabled = false;
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
            endLoading()
            document.getElementById("submitButton_design").disabled = false;
            return;
        }
    } else {
        console.log("tiếp tục");
    }


    const findCrm3 = design_approval_data.filter(item => item[6] === crm_id && item[11] ===  "BOM ĐÃ DUYỆT"); // Filter rows based on selection
    // console.table(findCrm2)

    if (findCrm3.length > 0) {
        alert("CRM# này đã được duyệt")
        endLoading()
        document.getElementById("submitButton_design").disabled = false;
        return
    }

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
    endLoading()
    document.getElementById("submitButton_design").disabled = false;
    return false; // Prevent the default form submission
}

let crmList = [];
let bomCrmSelect = document.getElementById("bom-crm");
let bomDraftCrmSelect = document.getElementById("bomDraftDropdown");
async function get_design_need_to_process() {
    crmList = []
    startLoading()
    await Promise.all([load_survey(), load_design(), load_design_approval(), load_cancel()]);
    const crm_cancel_list = [...new Set(cancel_data.map(row => row[3]))];

    // Lấy giá trị từ cột thứ 4 của mfg_data
    const crmColumn = new Set(design_data.map(row => row[6]));

    const newArray = survey_data
        .filter(row => !crmColumn.has(row[6]))
    ////////////
    // Bước 1: Xác định các crm_id có trạng thái "approve"
    const approvedCrmIds = new Set();

    design_approval_data.forEach(row => {
        if (row[11] === "BOM ĐÃ DUYỆT") { // Kiểm tra status
            approvedCrmIds.add(row[6]); // Lưu crm_id có trạng thái approve
        }
    });

    // Bước 2: Lọc design_approval_data, chỉ giữ các dòng có status "reject" và không thuộc crm_id đã được approve
    const filteredRejects = design_approval_data.filter(
        row => row[11] === "BOM REJECTED" && !approvedCrmIds.has(row[6])
    );

    // Bước 3: Chỉ giữ lại dòng có thời gian mới nhất cho mỗi crm_id
    const latestRejects = {};

    filteredRejects.forEach(row => {
        const crm_id = row[6];
        const dateTime = new Date(`${row[0]}T${row[1]}`); // Kết hợp date và time

        if (
            !latestRejects[crm_id] ||
            new Date(`${latestRejects[crm_id][0]}T${latestRejects[crm_id][1]}`) < dateTime
        ) {
            latestRejects[crm_id] = row;
        }
    });

    // Bước 4: Lọc trước `survey_data` để chỉ giữ thời gian mới nhất cho mỗi `crm_id`
    const latestSurveyData = {};
    design_data.forEach(row => {
        const crm_id = row[6];
        const dateTime = new Date(`${row[0]}T${row[1]}`); // Kết hợp date và time

        if (
            !latestSurveyData[crm_id] ||
            new Date(`${latestSurveyData[crm_id][0]}T${latestSurveyData[crm_id][1]}`) < dateTime
        ) {
            latestSurveyData[crm_id] = row;
        }
    });

    // Bước 5: Loại bỏ các crm_id khỏi `latestRejects` nếu `survey_data` có thời gian lớn hơn
    const reprocess = Object.values(latestRejects).filter(row => {
        const crm_id = row[6];
        const designDateTime = new Date(`${row[0]}T${row[1]}`); // Thời gian của dòng `latestReject`

        if (latestSurveyData[crm_id]) {
            const surveyDateTime = new Date(`${latestSurveyData[crm_id][0]}T${latestSurveyData[crm_id][1]}`);
            return surveyDateTime <= designDateTime; // Loại bỏ nếu surveyDateTime lớn hơn
        }

        // Giữ lại nếu không có dòng nào trong survey_data khớp crm_id
        return true;
    });

    const filtered = newArray.filter(row => !crm_cancel_list.includes(row[6]));
    const filtered2 = reprocess.filter(row => !crm_cancel_list.includes(row[6]));
    

    // Lấy dữ liệu cần thiết từ newArray: cột 10, 11, 5, 1, 6 (10 ký tự đầu), 7
    const tableData = filtered.map(row => [
        row[6], // Cột thứ 10
        row[5], // Cột thứ 5
        row[0], // Cột thứ 1
    ]);

    const tableData2 = filtered2.map(row => [
        row[6], // Cột thứ 10
        row[13], // Cột thứ 5
        row[0], // Cột thứ 1
    ]);

    // Gộp giá trị row[6] từ tableData
    tableData.forEach(item => {
        crmList.push(item[0]);
    });
      // Gộp tiếp giá trị row[6] từ tableData2
      tableData2.forEach(item => {
        crmList.push(item[0]);
    }); 

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
                    survey_data.sort((a, b) => new Date(`${b[0]} ${b[1]}`) - new Date(`${a[0]} ${a[1]}`));
                    const findCrm = survey_data.find(item => item[6] === row[0])
                    console.table(findCrm)
                    const content = findCrm[8]
                    const operator = findCrm[2]
                    const link = findCrm[10]
                    document.getElementById("operator_show_design").textContent = operator
                    document.getElementById("content_show_design").textContent = content

                    const linkElement = document.getElementById("link_show_design");

                    // Đặt thuộc tính href cho hyperlink
                    linkElement.href = link;
                    if (link === "-" || link === "") {
                        linkElement.textContent = "";
                    } else {
                        // Cập nhật nội dung hiển thị của hyperlink
                        linkElement.textContent = "Xem File đính kèm";
                    }
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


    // Tạo bảng
    const tableContainer2 = document.getElementById("table-container_design2");
    const table2 = document.createElement("table");
    table2.style.width = "100%";
    table2.style.borderCollapse = "collapse";
    table2.style.tableLayout = "auto"; // Tự động điều chỉnh độ rộng

    // Tạo tiêu đề bảng
    const headers2 = ["CRM#", "SURVEY#", "Ngày tạo"];
    const thead2 = document.createElement("thead");
    const headerRow2 = document.createElement("tr");
    headers2.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.whiteSpace = "nowrap"; // Giữ nội dung không xuống dòng
        headerRow2.appendChild(th);
    });
    thead2.appendChild(headerRow2);
    table2.appendChild(thead2);

    // Tạo dữ liệu bảng
    const tbody2 = document.createElement("tbody");
    tableData2.forEach((row, index) => {
        const tr2 = document.createElement("tr");
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
                    survey_data.sort((a, b) => new Date(`${b[0]} ${b[1]}`) - new Date(`${a[0]} ${a[1]}`));
                    const findCrm = survey_data.find(item => item[6] === row[0])
                    console.table(findCrm)
                    const content = findCrm[8]
                    const operator = findCrm[2]
                    const link = findCrm[10]
                    document.getElementById("operator_show_design").textContent = operator
                    document.getElementById("content_show_design").textContent = content

                    const linkElement = document.getElementById("link_show_design");

                    // Đặt thuộc tính href cho hyperlink
                    linkElement.href = link;
                    if (link === "-" || link === "") {
                        linkElement.textContent = "";
                    } else {
                        // Cập nhật nội dung hiển thị của hyperlink
                        linkElement.textContent = "Xem File đính kèm";
                    }
                });
            }
            tr2.appendChild(td);
        });
        tbody2.appendChild(tr2);
    });
    table2.appendChild(tbody2);

    // Xóa bảng cũ nếu có và thêm bảng mới vào `div`
    tableContainer2.innerHTML = "";
    tableContainer2.appendChild(table2);

    endLoading()
}


///* Design approval ///

async function design_approval() {
    // Show the loading indicator
    startLoading()

    await Promise.all([load_design(), load_design_approval()]); // Run both fetch calls in parallel

    // Hide the loading indicator once loading is complete
    endLoading()

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
        item[4] === sessionStorage.getItem("username")  // Điều kiện 1
        //&& quotation_approval_data.some(approvedItem => approvedItem[6] === item[6]) // Điều kiện 2
    );
    console.table(filter_approve_request)
    console.log(sessionStorage.getItem("username"))

    const column0Array2 = design_approval_data.map(row => row[13]);

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

        design_table_approved.append("status", "BOM ĐÃ DUYỆT")

        design_table_approved.append("link", select_design_to_approve[12])
        design_table_approved.append("design_id", select_design_to_approve[13])

        startLoading()
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
    startLoading()
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

        design_table_rejected.append("status", "BOM REJECTED")

        design_table_rejected.append("link", select_design_to_approve[12])
        design_table_rejected.append("design_id", select_design_to_approve[13])

        startLoading()
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
    startLoading()
}


async function load_approval_ticket() {
    startLoading()

    await Promise.all([design_approval(), quotation_approval(),pr_approval(),po_1_approval()]); // Run both fetch calls in parallel

    // Hide the loading indicator once loading is complete
    endLoading()
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

    document.getElementById("operator_show_quotation").textContent = ""
    document.getElementById("link_show_quotation").textContent = ""

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

    startLoading()
    document.getElementById("submitButton_quotation").disabled = true;

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_design_approval(), load_quotation(), load_quotation_approval()]);

    const findCrm = design_approval_data.filter(item => item[6] === crm_id); // Filter rows based on selection
    // console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai CRM# hoặc CRM chưa được duyệt báo giá")
        endLoading()
        document.getElementById("submitButton_quotation").disabled = false;
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
            endLoading()
            document.getElementById("submitButton_quotation").disabled = false;
            return;
        }
    } else {
        console.log("tiếp tục");
    }


    const findCrm3 = quotation_approval_data.filter(item => item[6] === crm_id && item[10] ===  "BÁO GIÁ ĐÃ DUYỆT"); // Filter rows based on selection
    // console.table(findCrm2)

    if (findCrm3.length > 0) {
        alert("CRM# này đã được duyệt")
        endLoading()
        document.getElementById("submitButton_quotation").disabled = false;
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
    endLoading()
    document.getElementById("submitButton_quotation").disabled = false;

    return false; // Prevent the default form submission
}

async function get_quotation_need_to_process() {
    startLoading()
    await Promise.all([load_design_approval(), load_quotation(), load_quotation_approval(),load_cancel()]); // Run both fetch calls in parallel
    const crm_cancel_list = [...new Set(cancel_data.map(row => row[3]))];
    // Lấy giá trị từ cột thứ 4 của mfg_data
    const crmColumn = new Set(quotation_data.map(row => row[6]));

    const newArray = design_approval_data
        .filter(row => !crmColumn.has(row[6]) && row[11] === "BOM ĐÃ DUYỆT")

    ////////////
    // Bước 1: Xác định các crm_id có trạng thái "approve"
    const approvedCrmIds = new Set();

    quotation_approval_data.forEach(row => {
        if (row[10] === "BÁO GIÁ ĐÃ DUYỆT") { // Kiểm tra status
            approvedCrmIds.add(row[6]); // Lưu crm_id có trạng thái approve
        }
    });

    // Bước 2: Lọc quotation_approval_data, chỉ giữ các dòng có status "reject" và không thuộc crm_id đã được approve
    const filteredRejects = quotation_approval_data.filter(
        row => row[10] === "QUOTATION REJECTED" && !approvedCrmIds.has(row[6])
    );

    // Bước 3: Chỉ giữ lại dòng có thời gian mới nhất cho mỗi crm_id
    const latestRejects = {};

    filteredRejects.forEach(row => {
        const crm_id = row[6];
        const dateTime = new Date(`${row[0]}T${row[1]}`); // Kết hợp date và time

        if (
            !latestRejects[crm_id] ||
            new Date(`${latestRejects[crm_id][0]}T${latestRejects[crm_id][1]}`) < dateTime
        ) {
            latestRejects[crm_id] = row;
        }
    });

    // Bước 4: Lọc trước `survey_data` để chỉ giữ thời gian mới nhất cho mỗi `crm_id`
    const latestSurveyData = {};
    quotation_data.forEach(row => {
        const crm_id = row[6];
        const dateTime = new Date(`${row[0]}T${row[1]}`); // Kết hợp date và time

        if (
            !latestSurveyData[crm_id] ||
            new Date(`${latestSurveyData[crm_id][0]}T${latestSurveyData[crm_id][1]}`) < dateTime
        ) {
            latestSurveyData[crm_id] = row;
        }
    });

    console.log(latestSurveyData)

    // Bước 5: Loại bỏ các crm_id khỏi `latestRejects` nếu `survey_data` có thời gian lớn hơn
    const reprocess = Object.values(latestRejects).filter(row => {
        const crm_id = row[6];
        const quotationDateTime = new Date(`${row[0]}T${row[1]}`); // Thời gian của dòng `latestReject`

        if (latestSurveyData[crm_id]) {
            const surveyDateTime = new Date(`${latestSurveyData[crm_id][0]}T${latestSurveyData[crm_id][1]}`);
            return surveyDateTime <= quotationDateTime; // Loại bỏ nếu surveyDateTime lớn hơn
        }

        // Giữ lại nếu không có dòng nào trong survey_data khớp crm_id
        return true;
    });

    const filtered = newArray.filter(row => !crm_cancel_list.includes(row[6]));
    const filtered2 = reprocess.filter(row => !crm_cancel_list.includes(row[6]));

    // Lấy dữ liệu cần thiết từ newArray: cột 10, 11, 5, 1, 6 (10 ký tự đầu), 7
    const tableData = filtered.map(row => [
        row[6], // Cột thứ 10
        row[9], // Cột thứ 5
        row[0], // Cột thứ 1
    ]);

    const tableData2 = filtered2.map(row => [
        row[6], // Cột thứ 10
        row[8], // Cột thứ 5
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
                    design_approval_data.sort((a, b) => new Date(`${b[0]} ${b[1]}`) - new Date(`${a[0]} ${a[1]}`));
                    const findCrm = design_approval_data.find(item => item[6] === row[0])
                    console.table(findCrm)
                    const operator = findCrm[2]
                    const link = findCrm[12]
                    document.getElementById("operator_show_quotation").textContent = operator
                    const linkElement = document.getElementById("link_show_quotation");

                    // Đặt thuộc tính href cho hyperlink
                    linkElement.href = link;

                    if (link === "-" || link === "") {
                        linkElement.textContent = "";
                    } else {
                        // Cập nhật nội dung hiển thị của hyperlink
                        linkElement.textContent = "Xem File đính kèm";
                    }
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

    // Tạo bảng
    const tableContainer2 = document.getElementById("table-container_quotation2");
    const table2 = document.createElement("table");
    table2.style.width = "100%";
    table2.style.borderCollapse = "collapse";
    table2.style.tableLayout = "auto"; // Tự động điều chỉnh độ rộng

    // Tạo tiêu đề bảng
    const headers2 = ["CRM#", "BOM#", "Ngày tạo"];
    const thead2 = document.createElement("thead");
    const headerRow2 = document.createElement("tr");
    headers2.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header;
        th.style.border = "1px solid #ddd";
        th.style.padding = "8px";
        th.style.whiteSpace = "nowrap"; // Giữ nội dung không xuống dòng
        headerRow2.appendChild(th);
    });
    thead2.appendChild(headerRow2);
    table2.appendChild(thead2);

    // Tạo dữ liệu bảng
    const tbody2 = document.createElement("tbody");
    tableData2.forEach((row, index) => {
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
                    design_approval_data.sort((a, b) => new Date(`${b[0]} ${b[1]}`) - new Date(`${a[0]} ${a[1]}`));
                    const findCrm = design_approval_data.find(item => item[6] === row[0])
                    console.table(findCrm)
                    const operator = findCrm[2]
                    const link = findCrm[12]
                    document.getElementById("operator_show_quotation").textContent = operator
                    const linkElement = document.getElementById("link_show_quotation");

                    // Đặt thuộc tính href cho hyperlink
                    linkElement.href = link;

                    // Cập nhật nội dung hiển thị của hyperlink
                    if (link === "-" || link === "") {
                        linkElement.textContent = "";
                    } else {
                        // Cập nhật nội dung hiển thị của hyperlink
                        linkElement.textContent = "Xem File đính kèm";
                    }
                });
            }
            tr.appendChild(td);
        });
        tbody2.appendChild(tr);
    });
    table2.appendChild(tbody2);

    // Xóa bảng cũ nếu có và thêm bảng mới vào `div`
    tableContainer2.innerHTML = "";
    tableContainer2.appendChild(table2);
    endLoading()
}

///* Quotation approval ///

async function quotation_approval() {
    // Show the loading indicator
    startLoading()

    await Promise.all([load_quotation(), load_quotation_approval()]); // Run both fetch calls in parallel

    // Hide the loading indicator once loading is complete
    endLoading()

    quotation_data.shift()


    const filter_approve_request = quotation_data
    .map((item, originalIndex) => ({ ...item, originalIndex })) // Lưu chỉ mục gốc
    .filter(item => 
        item[4] === sessionStorage.getItem("username")  // Điều kiện 1
        //&& quotation_approval_data.some(approvedItem => approvedItem[6] === item[6]) // Điều kiện 2
    );
    console.table(filter_approve_request)

    const column0Array2 = quotation_approval_data.map(row => row[5]);
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

        quotation_table_approved.append("status", "BÁO GIÁ ĐÃ DUYỆT")

        quotation_table_approved.append("folderUrl", select_quotation_to_approve[11])
        quotation_table_approved.append("bom_price", select_quotation_to_approve[12])

        startLoading()
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
    startLoading()
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

        quotation_table_rejected.append("status", "QUOTATION REJECTED")

        quotation_table_rejected.append("folderUrl", select_quotation_to_approve[11])
        quotation_table_rejected.append("bom_price", select_quotation_to_approve[12])

        startLoading()
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
    startLoading()
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

    document.getElementById("operator_show_order").textContent = ""
    document.getElementById("link_show_order").textContent = ""

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

    startLoading()
    document.getElementById('submitButton_order').disabled = true;

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_quotation_approval(), load_order()]);

    const findCrm = quotation_approval_data.filter(item => item[5] === quotation_id); // Filter rows based on selection
    console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai QUOTATION# hoặc QUOTATION# chưa được duyệt")
        endLoading()
        document.getElementById('submitButton_order').disabled = false;
        return
    }

    const crm_id = findCrm[0][6]

    const findCrm2 = order_data.filter(item => item[3] === quotation_id); // Filter rows based on selection
    console.table(findCrm2)
    if (findCrm2.length >0) {
        alert("QUOTATION# này đã được yêu cầu SX, đặt hàng")
        endLoading()
        document.getElementById('submitButton_order').disabled = false;
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
    endLoading()
    document.getElementById('submitButton_order').disabled = false;

    return false; // Prevent the default form submission
}

async function get_order_need_to_process() {
    startLoading()
    await Promise.all([load_quotation_approval(), load_order(), load_crm(),load_cancel()]);
    const crm_cancel_list = [...new Set(cancel_data.map(row => row[3]))];
    // Lấy giá trị từ cột thứ 4 của mfg_data
    const crmColumn = new Set(order_data.map(row => row[3]));

    const newArray = quotation_approval_data
        .filter(row => !crmColumn.has(row[5]) && row[10] === "BÁO GIÁ ĐÃ DUYỆT")

    const filtered = newArray.filter(row => !crm_cancel_list.includes(row[5]));
    // Lấy dữ liệu cần thiết từ newArray: cột 10, 11, 5, 1, 6 (10 ký tự đầu), 7
    const tableData = filtered.map(row => [
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
                    quotation_approval_data.sort((a, b) => new Date(`${b[0]} ${b[1]}`) - new Date(`${a[0]} ${a[1]}`));
                    const findCrm = quotation_approval_data.find(item => item[5] === row[0] && item[10] === "BÁO GIÁ ĐÃ DUYỆT")
                    console.table(findCrm)
                    const operator = findCrm[2]
                    const link = findCrm[11]
                    document.getElementById("operator_show_order").textContent = operator
                    const linkElement = document.getElementById("link_show_order");

                    // Đặt thuộc tính href cho hyperlink
                    linkElement.href = link;

                    // Cập nhật nội dung hiển thị của hyperlink
                    if (link === "-" || link === "") {
                        linkElement.textContent = "";
                    } else {
                        // Cập nhật nội dung hiển thị của hyperlink
                        linkElement.textContent = "Xem File đính kèm";
                    }

                    const find_crm_content = crm_data.find(item => item[7] === row[1])
                    document.getElementById("crm_content_order").textContent = find_crm_content[8]
                    // const find_quotation_content = quotation_approval_data.find(item => item[5] === row[0] && item[10] === "BÁO GIÁ ĐÃ DUYỆT")
                    // document.getElementById("quotation_content_order").textContent = find_quotation_content[7]

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
    endLoading()
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

    document.getElementById("operator_show_mfg").textContent = ""
    document.getElementById("link_show_mfg").textContent = ""
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


    startLoading()
    document.getElementById('submitButton_mfg').disabled = true;
    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_order(), load_mfg()]);

    const findCrm = order_data.filter(item => item[6] === crm_id); // Filter rows based on selection
    console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai CRM# hoặc CRM# chưa được chờ nhận đơn hàng")
        endLoading()
        document.getElementById('submitButton_mfg').disabled = false;
        return
    }

    const findCrm2 = mfg_data.filter(item => item[3] === crm_id); // Filter rows based on selection
    console.table(findCrm2)
    if (findCrm2.length >0) {
        alert("CRM# này đã được yêu cầu giao hàng")
        endLoading()
        document.getElementById('submitButton_mfg').disabled = false;
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
    endLoading()
    document.getElementById('submitButton_mfg').disabled = false;

    return false; // Prevent the default form submission
}

async function get_mfg_need_to_process() {
    startLoading()
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

                    order_data.sort((a, b) => new Date(`${b[0]} ${b[1]}`) - new Date(`${a[0]} ${a[1]}`));
                    const findCrm = order_data.find(item => item[6] === row[4])
                    console.table(findCrm)
                    const operator = findCrm[2]
                    const link = findCrm[8]
                    document.getElementById("operator_show_mfg").textContent = operator
                    const linkElement = document.getElementById("link_show_mfg");

                    // Đặt thuộc tính href cho hyperlink
                    linkElement.href = link;

                    // Cập nhật nội dung hiển thị của hyperlink
                    if (link === "-" || link === "") {
                        linkElement.textContent = "";
                    } else {
                        // Cập nhật nội dung hiển thị của hyperlink
                        linkElement.textContent = "Xem File đính kèm";
                    }
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
    endLoading()
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

    document.getElementById("operator_show_delivery").textContent = ""
    document.getElementById("content_show_delivery").textContent = ""
    document.getElementById("link_show_delivery").textContent = ""

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
        alert("Bạn chưa nhập mã CRM")
        document.getElementById("deliveryCrm").focus()
        return
    }

    if (delivery_date === "") {
        alert("Bạn chưa chọn ngày giao hàng")
        return
    }

    if (content === "") {
        alert("Bạn chưa nhập nội dung")
        document.getElementById("deliveryContent").focus()
        return
    }


    startLoading()
    document.getElementById('submitButton_delivery').disabled = true;

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_mfg(), load_delivery()]);

    const findCrm = mfg_data.filter(item => item[3] === crm_id); // Filter rows based on selection
    console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai CRM# hoặc CRM# chưa được sản xuất")
        endLoading()
        document.getElementById('submitButton_delivery').disabled = false;
        return
    }

    const findCrm2 = delivery_data.filter(item => item[3] === crm_id); // Filter rows based on selection
    console.table(findCrm2)
    if (findCrm2.length >0) {
        alert("CRM# này đã được yêu cầu thanh toán")
        endLoading()
        document.getElementById('submitButton_delivery').disabled = false;
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
    get_delivery_need_to_process()
    info("Gửi yêu cầu thanh toán thành công!")
    endLoading()
    document.getElementById('submitButton_delivery').disabled = false;

    return false; // Prevent the default form submission
}

async function get_delivery_need_to_process() {
    startLoading()
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

                    mfg_data.sort((a, b) => new Date(`${b[0]} ${b[1]}`) - new Date(`${a[0]} ${a[1]}`));
                    const findCrm = mfg_data.find(item => item[3] === row[3])
                    console.table(findCrm)
                    const operator = findCrm[2]
                    const content = findCrm[6]
                    const link = findCrm[8]
                    document.getElementById("operator_show_delivery").textContent = operator
                    document.getElementById("content_show_delivery").textContent = content
                    const linkElement = document.getElementById("link_show_delivery");

                    // Đặt thuộc tính href cho hyperlink
                    linkElement.href = link;

                    // Cập nhật nội dung hiển thị của hyperlink
                    if (link === "-" || link === "") {
                        linkElement.textContent = "";
                    } else {
                        // Cập nhật nội dung hiển thị của hyperlink
                        linkElement.textContent = "Xem File đính kèm";
                    }
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
    endLoading()
}


///* PAYMENT ///

function reset_payment() {
    document.getElementById("paymentCrm").value = "";
    document.getElementById("paymentContent").value = "";
    
    document.getElementById("paymentCustomerID").innerText = ""
    document.getElementById("paymentCustomerName").innerText = ""

    document.getElementById("operator_show_payment").textContent = ""
    document.getElementById("content_show_payment").textContent = ""
    document.getElementById("link_show_payment").textContent = ""

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


    startLoading()
    document.getElementById('submitButton_payment').disabled = true;

    warning("Đang xử lý yêu cầu  ... ")

    await Promise.all([load_delivery(), load_payment()]);

    const findCrm = delivery_data.filter(item => item[3] === crm_id); // Filter rows based on selection
    console.table(findCrm)
    if (findCrm.length === 0) {
        alert("Sai CRM# hoặc CRM# chưa được giao hàng")
        endLoading()
        document.getElementById('submitButton_payment').disabled = false;
        return
    }

    const findCrm2 = payment_data.filter(item => item[3] === crm_id); // Filter rows based on selection
    console.table(findCrm2)
    if (findCrm2.length >0) {
        alert("CRM# này đã hoàn tất thanh toán")
        endLoading()
        document.getElementById('submitButton_payment').disabled = false;
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
    endLoading()
    document.getElementById('submitButton_payment').disabled = false;

    return false; // Prevent the default form submission
}

async function get_payment_need_to_process() {
    startLoading()
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
        })
        .sort((a, b) => {
            // Chuyển đổi cột thứ 7 thành đối tượng Date để so sánh (nếu là ngày giờ)
            const dateA = new Date(a[7]);
            const dateB = new Date(b[7]);
            return dateA - dateB; // Sắp xếp tăng dần
        });


    // Lấy dữ liệu cần thiết từ newArray: cột 10, 11, 5, 1, 6 (10 ký tự đầu), 7
    const tableData = newArray.map(row => {
        // Chuyển giá trị row[7] thành đối tượng Date
        const originalDate = new Date(row[7]);
        
        // Cộng thêm 7 giờ
        originalDate.setHours(originalDate.getHours() + 7);
        
        // Chuyển đối tượng Date thành chuỗi ISO và lấy 10 ký tự đầu
        const formattedDate = originalDate.toISOString().substring(0, 10);
    
        return [
            row[4],
            row[5],
            formattedDate, // Dữ liệu đã được cộng 7 giờ và định dạng
            row[0],
            row[3]
        ];
    });

    // Tạo bảng
    const tableContainer = document.getElementById("table-container_payment");
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.tableLayout = "auto"; // Tự động điều chỉnh độ rộng

    // Tạo tiêu đề bảng
    const headers = ["Mã hhách hàng", "Mã đơn hàng","Ngày thanh toán", "Ngày tạo", "Mã CRM"];
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
                    document.getElementById("paymentCrm").value = row[4]
                    document.getElementById("paymentCustomerID").textContent = row[0]
                    document.getElementById("paymentCustomerName").textContent = row[1]

                    delivery_data.sort((a, b) => new Date(`${b[0]} ${b[1]}`) - new Date(`${a[0]} ${a[1]}`));
                    const findCrm = delivery_data.find(item => item[3] === row[4])
                    console.table(findCrm)
                    const operator = findCrm[2]
                    const content = findCrm[6]
                    const link = findCrm[9]
                    document.getElementById("operator_show_payment").textContent = operator
                    document.getElementById("content_show_payment").textContent = content
                    const linkElement = document.getElementById("link_show_payment");

                    // Đặt thuộc tính href cho hyperlink
                    linkElement.href = link;

                    // Cập nhật nội dung hiển thị của hyperlink
                    if (link === "-" || link === "") {
                        linkElement.textContent = "";
                    } else {
                        // Cập nhật nội dung hiển thị của hyperlink
                        linkElement.textContent = "Xem File đính kèm";
                    }
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
    endLoading()
}

///* CANCEL ///
// Get modal elements
const modal_cancel = document.getElementById("cancelModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelReason = document.getElementById("cancelReason");
const otherReasonInputContainer = document.getElementById("otherReasonInput");
const otherReasonInput = document.getElementById("otherReasonInput");
const submitBtn = document.getElementById("submitBtn");
const cancelSurvey = document.getElementById("cancelSurvey")
const cancelDesign = document.getElementById("cancelDesign")
const cancelQuotation = document.getElementById("cancelQuotation")
const cancelOrder = document.getElementById("cancelOrder")

// Open modal
cancelSurvey.addEventListener("click", () => {
    modal_cancel.style.display = "block";
});

cancelDesign.addEventListener("click", () => {
    modal_cancel.style.display = "block";
});

cancelQuotation.addEventListener("click", () => {
    modal_cancel.style.display = "block";
});

cancelOrder.addEventListener("click", () => {
    modal_cancel.style.display = "block";
});

// Close modal
closeModalBtn.addEventListener("click", () => {
    modal_cancel.style.display = "none";
    resetModal()
});

// Close modal when clicking outside
window.addEventListener("click", (event) => {
    if (event.target === modal_cancel) {
        modal_cancel.style.display = "none";
    }
});

// Show/Hide input based on dropdown selection
cancelReason.addEventListener("change", () => {
    if (cancelReason.value === "other") {
        otherReasonInputContainer.style.display = "block"; // Hiển thị ô input
        otherReasonInput.focus();
    } else {
        otherReasonInputContainer.style.display = "none"; // Ẩn ô input
        otherReasonInput.value = ""; // Xóa nội dung trong ô input
    }
});

let crm_no = ""
let status_cancel = ""
// Submit button logic
submitBtn.addEventListener("click", async () => {
    const selectedReason = cancelReason.value;
    const otherReason = otherReasonInput.value.trim();

    if (!selectedReason) {
        alert("Vui lòng chọn lý do hủy!");
        return;
    }

    if (selectedReason === "other" && !otherReason) {
        alert("Vui lòng nhập lý do hủy trong ô Khác!");
        return;
    }

    const finalReason = selectedReason === "other" ? otherReason : cancelReason.options[cancelReason.selectedIndex].text;
    switch (active_frame) {
        case "survey":
            crm_no = document.getElementById("surveyCrmNumber").value;
            if (crm_no === "") {
                alert("Bạn chưa nhập CRM#")
                return
            }
            status_cancel = "KHẢO SÁT BỊ CANCEL"
            break
        case "design":
            crm_no = document.getElementById("designCrmNumber").value;
            if (crm_no === "") {
                alert("Bạn chưa nhập CRM#")
                return
            }
            status_cancel = "THIẾT KẾ BỊ CANCEL"
            break
        case "quotation":
            crm_no = document.getElementById("quotationCrmNumber").value;
            if (crm_no === "") {
                alert("Bạn chưa nhập CRM#")
                return
            }
            status_cancel = "BÁO GIÁ BỊ CANCEL"
            break
        case "order":
            crm_no = document.getElementById("orderQuotationNumber").value;
            if (crm_no === "") {
                alert("Bạn chưa nhập CRM#")
                return
            }
            status_cancel = "ĐƠN HÀNG BỊ CANCEL"
            break
        default:
            alert("Không tìm thấy frame nào đang hiển thị!");
            return
    }
    startLoading()
    submitBtn.disabled = true;
    try {
        let cancel_table = new FormData();

        cancel_table.append("operator", sessionStorage.getItem("fullname"));
        cancel_table.append("crm_id", crm_no);
        cancel_table.append("reason", finalReason);
        cancel_table.append("status", status_cancel);
        
        await fetch('https://script.google.com/macros/s/AKfycbyeJNzZeOtB27gYlQpxomA5hHqz1zE_VWmJhLiOjP_mzgFBOXQVAsB66YFSjFRVEoaK/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: cancel_table
        }).then(response => response.text)
            .then(result => console.log('Đã gửi data thành công'))
            .catch(error => console.error('Error:', error));
        }
    catch (error) {
        console.error('Error:', error);
    }

    console.log(`Lý do hủy: ${finalReason}`);
    console.log(`CRM#: ${crm_no}`);
    resetModal()
    modal_cancel.style.display = "none"; // Close the modal
    endLoading()
    submitBtn.disabled = false;

    reset_survey()
    reset_design()
    reset_quotation()
    reset_order()

    switch (active_frame) {
        case "survey":
            get_survey_need_to_process()
            break
        case "design":
            get_design_need_to_process()
            break
        case "quotation":
            get_quotation_need_to_process()
            break
        case "order":
            get_order_need_to_process()
            break
        default:
            alert("Không tìm thấy frame nào đang hiển thị!");
            return
    }
});

function resetModal() {
    const select = document.getElementById('cancelReason'); // Lấy phần tử dropdown
    const otherReasonInput = document.getElementById('otherReasonInput'); // Lấy phần tử ô input
    const otherReasonInputContainer = document.getElementById('otherReasonInput'); // Lấy phần tử container của input

    select.value = ''; // Đặt lại giá trị của dropdown về giá trị mặc định
    otherReasonInput.value = ''; // Xóa nội dung trong ô input
    otherReasonInputContainer.style.display = 'none'; // Ẩn ô input "Khác"
}


//* BOM Creation ///

async function showModal_bom() {
    document.getElementById('bom-modal').classList.add('show');
    await Promise.all([get_crm_need_to_create_bom(), load_onhand(), load_mml()]);
}

function hideModal_bom() {
    document.getElementById('bom-modal').classList.remove('show');
    bomCrmSelect.innerHTML = "";
    clearModalContent()
}

async function showModal_bom_draft() {
    document.getElementById('bom-draft-modal').classList.add('show');
    await Promise.all([get_crm_need_to_load_bom_draft()]);
}

function hideModal_bom_draft() {
    document.getElementById('bom-draft-modal').classList.remove('show');
    bomDraftCrmSelect.innerHTML = "";
    clearModalContent()
}

// Close modal on outside click
document.getElementById('bom-draft-modal').addEventListener('click', function(event) {
    if (event.target.id === 'bom-draft-modal') {
        hideModal_bom_draft();
    }
});

function showAddItemModal() {
    const wh_value = document.getElementById("bom-wh").textContent
    const bom_name = document.getElementById("bom-name").value

        if (wh_value === "") {
            alert("Bạn chưa chọn mục cần tạo BOM")

            return
        }

        if (bom_name === "") {
            alert("Bạn chưa nhập tên BOM")
            document.getElementById("bom-name").focus()

            return
        }
        
    document.getElementById('add-item-modal').classList.add('show');
    document.getElementById('item-type').focus();
}

function hideAddItemModal() {
    document.getElementById('add-item-modal').classList.remove('show');
}

function addItem() {
    const table = document.getElementById('bom-item-table').getElementsByTagName('tbody')[0];
    const rowCount = table.rows.length + 1;

    // Lấy giá trị từ input và chuyển thành số (nếu cần)
    const itemType = document.getElementById('item-type').value;
    const itemName = document.getElementById('item-name').value;
    const itemCode = document.getElementById('item-code').value;
    const itemUnit = document.getElementById('item-unit').value;
    
    // Các giá trị số
    const itemQuantityNeeded = parseFloat(document.getElementById('item-quantity-needed').value) || 0;
    const itemStock = document.getElementById('item-stock').value; // nếu đây chỉ hiển thị text, giữ nguyên
    const itemQuantityBuy = parseFloat(document.getElementById('item-quantity-buy').value) || 0;
    const itemPrice = parseFloat(document.getElementById('item-price').value) || 0;

    // Tính tổng giá (có thể chuyển đổi thành số trước khi nhân)
    const totalPrice = (itemPrice * itemQuantityNeeded) || 0;

    // Định dạng các giá trị số có dấu phẩy
    const formattedItemQuantityBuy = itemQuantityBuy.toLocaleString('en-US'); // hoặc 'vi-VN' nếu muốn dấu chấm/ngăn cách theo chuẩn Việt Nam
    const formattedItemPrice = itemPrice.toLocaleString('en-US');
    const formattedTotalPrice = totalPrice.toLocaleString('en-US');

    // Tạo hàng mới trong bảng
    const row = table.insertRow();

    row.innerHTML = `
        <td>${rowCount}</td>
        <td>${itemType}</td>
        <td>${itemName}</td>
        <td>${itemCode}</td>
        <td>${itemUnit}</td>
        <td>${itemQuantityNeeded}</td>
        <td>${itemStock}</td>
        <td>${formattedItemQuantityBuy}</td>
        <td>${formattedItemPrice}</td>
        <td>${formattedTotalPrice}</td>
        <td><button class="bom-clear" onclick="deleteRow(this)">Xóa</button></td>
    `;

    // Xóa các giá trị nhập trong input sau khi thêm hàng
    document.getElementById('item-type').value = '';
    document.getElementById('item-name').value = '';
    document.getElementById('item-code').value = '';
    document.getElementById('item-unit').value = '';
    document.getElementById('item-quantity-needed').value = '';
    document.getElementById('item-stock').value = '';
    document.getElementById('item-quantity-buy').value = '';
    document.getElementById('item-price').value = '';

    // Ẩn modal thêm hàng (nếu có)
    hideAddItemModal();

    // Cập nhật lại tổng giá BOM nếu cần
    updateBOMPrice();
}


function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);

    // Cập nhật lại số thứ tự (STT) trong bảng
    const tableRows = document.getElementById('bom-item-table').getElementsByTagName('tbody')[0].rows;
    for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].cells[0].innerText = i + 1; // Cập nhật lại STT
    }
    updateBOMPrice()
}

// Close modal on outside click
// document.getElementById('bom-modal').addEventListener('click', function(event) {
//     if (event.target.id === 'bom-modal') {
//         hideModal_bom();
//     }
// });

document.getElementById('add-item-modal').addEventListener('click', function(event) {
    if (event.target.id === 'add-item-modal') {
        hideAddItemModal();
    }
});

function clearModalContent() {
    // Clear all input fields
    const inputs = document.querySelectorAll('#bom-modal input');
    inputs.forEach(input => input.value = '');

    const inputs_draft = document.querySelectorAll('#bom-draft-modal input');
    inputs_draft.forEach(input => input.value = '');

    // Clear all rows in the item table
    const tableBody = document.querySelector('#bom-item-table tbody');
    tableBody.innerHTML = '';

    // Reset "Tổng giá trị"
    const totalRow = document.querySelector('.bom-total-row');
    totalRow.textContent = 'Tổng giá trị: -';

    // Optionally reset other sections if needed (e.g., other tables, labels, etc.)
    updateBOMPrice()
    
    document.getElementById("bom-customerID").textContent = ""
    document.getElementById("bom-customerName").textContent = ""
    document.getElementById("bom-wh").textContent = ""
    document.getElementById("bom-crm-show").textContent = ""
}

function clearModalContentBomDraft() {
    // Clear all input fields
    const inputs = document.querySelectorAll('#bom-draft-modal input');
    inputs.forEach(input => input.value = '');

    // Clear all rows in the item table
    const tableBody = document.querySelector('#bom-item-table tbody');
    tableBody.innerHTML = '';

    // Reset "Tổng giá trị"
    const totalRow = document.querySelector('.bom-total-row');
    totalRow.textContent = 'Tổng giá trị: -';

    // Optionally reset other sections if needed (e.g., other tables, labels, etc.)
    updateBOMPrice()
    
    document.getElementById("bom-customerID").textContent = ""
    document.getElementById("bom-customerName").textContent = ""
    document.getElementById("bom-wh").textContent = ""
}



function bom_selected(crm) {
    // ví dụ tôi có đoạn đoạn text sau: CRM-QN-UAC-25/01/10-008 hay giúp tôi split và lấy phần tử số 3
    const splitData = crm.split("-");
    const thirdElement = splitData[2];
    const secondElement = splitData[1];
    const foundCustomer = customer_data.find(customer => customer[1] === thirdElement);
    const customerId = foundCustomer ? foundCustomer[1] : null;
    const customerName = foundCustomer ? foundCustomer[0] : null;
    document.getElementById("bom-customerID").textContent = customerId
    document.getElementById("bom-customerName").textContent = customerName
    document.getElementById("bom-wh").textContent = secondElement
    document.getElementById("bom-crm-show").textContent = crm
    document.getElementById("bom-name").focus()
}

function hideDropdown_bom() {
    const dropdown = document.getElementById("dropdown_bom");
    dropdown.style.display = 'none';
}

// Gán sự kiện input với debounce để giảm số lần tìm kiếm
document.getElementById("item-type").addEventListener("input", debounce(handleMaterialTypeInput_bom, 400));

function handleMaterialTypeInput_bom(event) {
    const wh_value = document.getElementById("bom-wh").textContent
        if (wh_value === "") {
            alert("Vui lòng chọn mã chi nhánh trước")
            modalOptions.innerHTML = ''
            closeModal()

            document.getElementById("item-type").value = ""
            return
        }
    const searchTerm = removeAccents(event.target.value).toUpperCase(); // Chuyển đổi thành uppercase không dấu
    const results = mml_data.filter(item => removeAccents(item[0]).toUpperCase().includes(searchTerm))// && item[0] === wh_value); // Tìm kiếm không dấu
    // Hiển thị kết quả tìm kiếm từ cột mml_data[1]
    if (results.length > 0) {
        showSearchResults_bom(results.map(item2 => item2[0]), results); // Truyền danh sách tên vật tư và dữ liệu gốc
    } else {
        hideDropdown_bom(); // Ẩn dropdown nếu không có kết quả
        console.log("Không tìm thấy kết quả.");

    }
}

function showSearchResults_bom(displayList, fullData) {
    clear_label_xuat()
    const dropdown = document.getElementById("dropdown_bom");
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
        console.log(originalIndex)
        
        // Xử lý sự kiện khi người dùng chọn một mục từ dropdown
        dropdownItem.addEventListener("click", () => {
            document.getElementById("item-type").value = item; // Gán lựa chọn vào ô nhập liệu
            dropdown.style.display = 'none'; // Ẩn dropdown sau khi chọn
            
            // Gọi hàm để xử lý lựa chọn đầu tiên và tìm danh sách thứ hai
            showSecondaryOptions_bom(fullData[originalIndex]);
        });

        dropdown.appendChild(dropdownItem);
    });
}

function updateArrayWithSum(array1, array2) {
    const wh = document.getElementById("bom-wh").textContent
    // Duyệt qua từng dòng của array1
    array1.forEach(row1 => {
        let key = row1[2]; // Cột thứ 2 của array1 (index 1)
        
        // Lọc các dòng trong array2 có cột thứ 2 khớp với key
        let filteredRows = array2.filter(row2 => row2[2] === key && row2[0] === wh);
        
        // Tính tổng của cột thứ 10 (index 9) trong array2
        let total = filteredRows.reduce((sum, row) => sum + (row[10] || 0), 0);
        
        // Gán tổng vào array1, ví dụ: cột thứ 10 (index 9) của array1
        row1[10] = total;
    });

    return array1;
}

function updateArrayWithSum_create_pr(array1, array2) {
    const wh = document.getElementById("warehouse_pr").value
    // Duyệt qua từng dòng của array1
    array1.forEach(row1 => {
        let key = row1[2]; // Cột thứ 2 của array1 (index 1)
        
        // Lọc các dòng trong array2 có cột thứ 2 khớp với key
        let filteredRows = array2.filter(row2 => row2[2] === key && row2[0] === wh);
        
        // Tính tổng của cột thứ 10 (index 9) trong array2
        let total = filteredRows.reduce((sum, row) => sum + (row[10] || 0), 0);
        
        // Gán tổng vào array1, ví dụ: cột thứ 10 (index 9) của array1
        row1[10] = total;
    });

    return array1;
}

function showSecondaryOptions_bom(selectedItem) {
    console.log(selectedItem)
    const wh_value = document.getElementById("bom-wh").textContent
    // Filter based on selected item and availability
    const filteredResults2 = mml_data.filter(item => item[0] === selectedItem[0]);
    const filteredResults = updateArrayWithSum(filteredResults2, onhand_data);
    const modal = document.getElementById("secondaryModal_bom");
    const modalOptions = document.getElementById("modalOptions_bom");
    modalOptions.innerHTML = ''; // Clear old content

    console.log(filteredResults)

    // Use a Set to keep track of unique options
    const uniqueOptions = new Set();

    filteredResults.forEach(option => {
        const optionKey = `${option[1]} | ${option[2]} | Tồn: ${option[10]}`; // Create a unique key based on ID and description

        if (!uniqueOptions.has(optionKey)) {
            uniqueOptions.add(optionKey); // Add to the Set to ensure uniqueness

            const optionDiv = document.createElement("div");
            optionDiv.classList.add("modal-option");

            // Set the text content using the unique ID and description
            optionDiv.textContent = optionKey;

            optionDiv.addEventListener("click", () => {
                handleModalSelection_bom2(option); // Call function when user selects an option
                modal.style.display = 'none';
            });

            modalOptions.appendChild(optionDiv);
        }
    });

    // Display the modal
    modal.style.display = 'flex';
}

let bom_sku_name = ""
let bom_sku_id = ""
let bom_unit = ""
let bom_price = ""

function handleModalSelection_bom2(selectedOption) {
    const wh_value = document.getElementById("bom-wh").textContent;
    document.getElementById("item-quantity-needed").focus();
    console.log("Người dùng đã chọn:", selectedOption);

    bom_sku_name = selectedOption[1];
    bom_sku_id = selectedOption[2];
    bom_unit = selectedOption[3];
    bom_price = selectedOption[4];

    document.getElementById("sku_name_xuat").textContent = sku_name_xuat;
    document.getElementById("sku_id_xuat").textContent = sku_id_xuat;
    closeModal();

    // Gán giá trị vào các ô nhập liệu
    document.getElementById("item-name").value = bom_sku_name;
    document.getElementById("item-code").value = bom_sku_id;
    document.getElementById("item-unit").value = bom_unit;
    document.getElementById("item-price").value = bom_price;

    const found_onhand = onhand_data.filter(
        row => row[0] === wh_value && row[2] === bom_sku_id && row[10] >= 0
    );
    
    if (found_onhand.length > 0) {
        // Tính tổng cột [10] của các hàng trong found_onhand
        const totalStock = found_onhand.reduce((sum, row) => sum + row[10], 0);
        document.getElementById("item-stock").value = totalStock;
    } else {
        document.getElementById("item-stock").value = 0;
    }
    
}

async function get_crm_need_to_create_bom() {
    crmList = []
    startLoading()
    await Promise.all([load_survey(), load_design(), load_design_approval(),load_bom(),load_bom_draft()]);


    // Lấy giá trị từ cột thứ 4 của mfg_data
    const crmColumn = new Set(design_data.map(row => row[6]));

    const newArray = survey_data
        .filter(row => !crmColumn.has(row[6]))
    ////////////
    // Bước 1: Xác định các crm_id có trạng thái "approve"
    const approvedCrmIds = new Set();

    design_approval_data.forEach(row => {
        if (row[11] === "BOM ĐÃ DUYỆT") { // Kiểm tra status
            approvedCrmIds.add(row[6]); // Lưu crm_id có trạng thái approve
        }
    });

    // Bước 2: Lọc design_approval_data, chỉ giữ các dòng có status "reject" và không thuộc crm_id đã được approve
    const filteredRejects = design_approval_data.filter(
        row => row[11] === "BOM REJECTED" && !approvedCrmIds.has(row[6])
    );

    // Bước 3: Chỉ giữ lại dòng có thời gian mới nhất cho mỗi crm_id
    const latestRejects = {};

    filteredRejects.forEach(row => {
        const crm_id = row[6];
        const dateTime = new Date(`${row[0]}T${row[1]}`); // Kết hợp date và time

        if (
            !latestRejects[crm_id] ||
            new Date(`${latestRejects[crm_id][0]}T${latestRejects[crm_id][1]}`) < dateTime
        ) {
            latestRejects[crm_id] = row;
        }
    });

    // Bước 4: Lọc trước `survey_data` để chỉ giữ thời gian mới nhất cho mỗi `crm_id`
    const latestSurveyData = {};
    design_data.forEach(row => {
        const crm_id = row[6];
        const dateTime = new Date(`${row[0]}T${row[1]}`); // Kết hợp date và time

        if (
            !latestSurveyData[crm_id] ||
            new Date(`${latestSurveyData[crm_id][0]}T${latestSurveyData[crm_id][1]}`) < dateTime
        ) {
            latestSurveyData[crm_id] = row;
        }
    });

    // Bước 5: Loại bỏ các crm_id khỏi `latestRejects` nếu `survey_data` có thời gian lớn hơn
    const reprocess = Object.values(latestRejects).filter(row => {
        const crm_id = row[6];
        const designDateTime = new Date(`${row[0]}T${row[1]}`); // Thời gian của dòng `latestReject`

        if (latestSurveyData[crm_id]) {
            const surveyDateTime = new Date(`${latestSurveyData[crm_id][0]}T${latestSurveyData[crm_id][1]}`);
            return surveyDateTime <= designDateTime; // Loại bỏ nếu surveyDateTime lớn hơn
        }

        // Giữ lại nếu không có dòng nào trong survey_data khớp crm_id
        return true;
    });

    const tableData = newArray.map(row => [
        row[6], // Cột thứ 10
        row[5], // Cột thứ 5
        row[0], // Cột thứ 1
    ]);

    const tableData2 = reprocess.map(row => [
        row[6], // Cột thứ 10
        row[13], // Cột thứ 5
        row[0], // Cột thứ 1
    ]);

    // Gộp giá trị row[6] từ tableData
    tableData.forEach(item => {
        crmList.push(item[0]);
    });
      // Gộp tiếp giá trị row[6] từ tableData2
      tableData2.forEach(item => {
        crmList.push(item[0]);
    });

    //lọc crm list
    // Lấy cột thứ 2 từ array2D
    const coiumn_crm = bom_data.map(row => row[1]);
    const coiumn_crm2 = bom_draft_data.map(row => row[11]);

    // Loại bỏ các item trong crmList có xuất hiện ở cột thứ 2 của array2D
    crmList = crmList.filter(item => !coiumn_crm.includes(item));    
    crmList = crmList.filter(item => !coiumn_crm2.includes(item));  

    // Thêm option trống ở đầu danh sách
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "Danh sách đang chờ tạo BOM";
    emptyOption.disabled = true; // Không cho phép chọn lại option trống
    emptyOption.selected = true; // Đặt làm option mặc định được chọn
    bomCrmSelect.appendChild(emptyOption);

    // Thêm các option vào select
    crmList.forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      bomCrmSelect.appendChild(option);
    });

    bomCrmSelect.addEventListener("change", function(event) {
        const selectedValue = event.target.value;
        console.log("Người dùng đã chọn: ", selectedValue);
        bom_selected(selectedValue)
      });

    endLoading()
}

async function get_crm_need_to_load_bom_draft() {
    crmList = [];
    startLoading()
    await Promise.all([load_bom(), load_bom_draft()]);
    
    // Xóa các option cũ trong select (nếu có)
    bomDraftCrmSelect.innerHTML = '';

    // Tiếp tục xử lý dữ liệu...
    bom_draft_data.forEach(item => {
        crmList.push(item[11] + " | " + item[16]);
    });

    // Lọc crmList
    const coiumn_crm = bom_data.map(row => row[1]);
    // crmList = crmList.filter(item => !coiumn_crm.includes(item));
    crmList = crmList.filter(item => {
        let a = item.split('|')[0].trim(); // Lấy giá trị a trước dấu |
        return !coiumn_crm.includes(a); // Lọc bỏ nếu a có trong coiumn_crm
    });
    crmList = [...new Set(crmList)];

    console.log(crmList);

    // Thêm option trống ở đầu danh sách
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "Danh sách đang chờ tạo BOM";
    emptyOption.disabled = true;
    emptyOption.selected = true;
    bomDraftCrmSelect.appendChild(emptyOption);

    // Thêm các option vào select
    crmList.forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      bomDraftCrmSelect.appendChild(option);
    });

    // Nếu cần, có thể gỡ bỏ hoặc đảm bảo chỉ thêm event listener một lần
    bomDraftCrmSelect.removeEventListener("change", bomDraftCrmSelect._changeHandler);
    bomDraftCrmSelect._changeHandler = function(event) {
        const selectedValue = event.target.value;
        console.log("Người dùng đã chọn: ", selectedValue);
        updateBOMDraft(selectedValue);
    };

    // bomDraftCrmSelect._changeHandler = function(event) {
    //     const selectedValue = event.target.value;
    //     const a1 = selectedValue.split('|')[0].trim(); // Lấy giá trị trước dấu '|'
    //     console.log("Người dùng đã chọn: ", a1);
    //     updateBOMDraft(a1); // Gọi hàm với giá trị a
    // };
    
    bomDraftCrmSelect.addEventListener("change", bomDraftCrmSelect._changeHandler);

    endLoading()
}


async function showModal_bom_load() {
    document.getElementById('bom-modal').classList.add('show');
}

function parseDateTime(row) {
    const dateStr = row[0];             // "2025-02-01"
    const timeStr = row[row.length - 1];  // "9:21:59"
    
    // Tách năm, tháng, ngày
    const [year, month, day] = dateStr.split('-').map(Number);
    // Tách giờ, phút, giây
    const [hour, minute, second] = timeStr.split(':').map(Number);
    
    // Tạo đối tượng Date (lưu ý: tháng được tính từ 0 nên phải trừ 1)
    return new Date(year, month - 1, day, hour, minute, second);
  }

async function updateBOMDraft(value) {
    const selectedValue = value.split('|')[0].trim(); // Lấy giá trị trước dấu '|'
    const operator = value.split('|')[1].trim(); // Lấy giá trị trước dấu '|'

    hideModal_bom_draft();
    const found_draft2 = bom_draft_data.filter(u => u[11] === selectedValue && u[16] === operator);
    // Bước 1: Tìm datetime mới nhất trong data
    const maxDateTime = found_draft2.reduce((max, row) => {
        const currentDateTime = parseDateTime(row);
        return currentDateTime > max ? currentDateTime : max;
    }, new Date(0));
    
    // Bước 2: Lọc ra các dòng có datetime bằng với maxDateTime
    const found_draft = found_draft2.filter(row => parseDateTime(row).getTime() === maxDateTime.getTime());

    showModal_bom_load()
    startLoading()
    warning("Đang cập nhật lại tồn kho và giá trị BOM Draft, vui lòng chờ trong giây lát...");
    await Promise.all([load_onhand(), load_mml()]);

    document.getElementById('bom-crm-show').textContent = selectedValue;
    bom_selected(selectedValue)

    const bom_name = found_draft[0][12]
    document.getElementById("bom-name").value = bom_name

    // Lặp qua từng dòng của found_draft
    found_draft.forEach(row => {
        // Lấy giá trị từ cột thứ 5 của dòng hiện tại
        const matchValue = row[4];
        const matchValue2 = row[15];
    
        // Lọc dữ liệu từ onhand_data với điều kiện cột thứ 3 = matchValue
        const filteredOnhand = onhand_data.filter(onhandRow => onhandRow[2] === matchValue && onhandRow[0] === matchValue2);
    
        // Tính tổng cột thứ 11 của kết quả lọc
        const sumColumn11 = filteredOnhand.reduce((sum, onhandRow) => sum + onhandRow[10], 0);
        // Gán tổng vào một cột mới trong dòng hiện tại của found_draft
        row.push(sumColumn11); // Hoặc row[12] = sumColumn11 nếu bạn muốn chỉ định một cột cụ thể
    });

    load_item_draft(found_draft)

    // const table = document.getElementById('bom-item-table').getElementsByTagName('tbody')[0];
    // table.innerHTML = ''; // Xóa nội dung cũ


    endLoading()
}

function load_item_draft(found_draft) {
    console.log(found_draft)
    // Lấy bảng và tbody
    const tableBody = document.querySelector("#bom-item-table tbody");

    // Lặp qua các hàng trong found_draft
    found_draft.forEach((row, index) => {
    // Tính toán các giá trị cần thiết
    const stt = index + 1;
    const loaiVatTu = row[2];
    const tenVatTu = row[3];
    const maVatTu = row[4];
    const donVi = row[5];
    const soLuongCan = row[6];
    const soLuongTonKho = row[18];
    const soLuongCanMuaThem = Math.max(0, soLuongCan - soLuongTonKho);
    const giaDuKien = row[9];
    const tongGia = soLuongCan * giaDuKien;

    // Định dạng số với dấu phân cách hàng nghìn (chỉ hiển thị phần nguyên)
    const formattedGiaDuKien = giaDuKien.toLocaleString('en-US', { maximumFractionDigits: 0 });
    const formattedTongGia = tongGia.toLocaleString('en-US', { maximumFractionDigits: 0 });

    // Tạo một hàng mới trong bảng
    const tr = document.createElement("tr");

    // Tạo các ô dữ liệu (cột)
    tr.innerHTML = `
        <td>${stt}</td>
        <td>${loaiVatTu}</td>
        <td>${tenVatTu}</td>
        <td>${maVatTu}</td>
        <td>${donVi}</td>
        <td>${soLuongCan}</td>
        <td>${soLuongTonKho}</td>
        <td>${soLuongCanMuaThem}</td>
        <td>${formattedGiaDuKien}</td>
        <td>${formattedTongGia}</td>
        <td>
            <button class="btn-delete bom-clear" onclick="deleteRow(this)">Xóa</button>
        </td>
    `;

    // Thêm hàng vào tbody của bảng
    tableBody.appendChild(tr);
    });

    updateBOMPrice()
    found_draft = []

}

// Lắng nghe sự kiện 'input' trên trường item-quantity-needed
document.getElementById("item-quantity-needed").addEventListener("input", function () {
    const itemStock = parseFloat(document.getElementById("item-stock").value) || 0; // Giá trị từ item-stock
    const quantityNeeded = parseFloat(this.value) || 0; // Giá trị từ item-quantity-needed
    
    // Tính giá trị của item-quantity-buy
    const quantityToBuy = Math.max(quantityNeeded - itemStock, 0); // Nếu < 0 thì = 0
    
    // Cập nhật giá trị vào trường item-quantity-buy
    document.getElementById("item-quantity-buy").value = quantityToBuy;
});

function calculateTotalPrice() {
    const table = document.getElementById("bom-item-table"); // Lấy bảng
    const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr"); // Lấy tất cả các hàng trong tbody
    let totalPrice = 0;

    // Duyệt qua từng hàng trong bảng
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td"); // Lấy tất cả các ô trong hàng
        const priceCell = cells[9]; // Cột thứ 10 (Tổng giá) - chỉ số bắt đầu từ 0
        if (priceCell) {
            const price = parseFloat(priceCell.textContent.replace(/,/g, '')) || 0; // Xóa dấu phẩy trước khi chuyển sang số
            totalPrice += price; // Cộng dồn giá trị
        }
    }

    // Cập nhật tổng giá trị vào bom-total-price với dấu phân cách
    document.getElementById("bom-total-price").textContent = `Tổng giá trị: ${totalPrice.toLocaleString('en-US')}`;
}

// Hàm tính tổng giá trị cho từng dòng và toàn bảng
function calculateAssetPrice() {
    const table = document.getElementById("table_asset"); // Lấy bảng theo ID
    const rows = table.querySelectorAll("tbody tr"); // Lấy tất cả các hàng trong tbody
    let totalPrice = 0; // Biến lưu tổng giá trị toàn bảng

    rows.forEach(row => {
        const input = row.querySelector("input[type='number']"); // Lấy ô input
        const pricePerUnitCell = row.cells[4]; // Cột Giá / Đơn vị
        const totalCell = row.cells[5]; // Cột Tổng giá

        const quantity = parseFloat(input.value) || 0; // Số giờ cần (nếu rỗng thì là 0)
        const pricePerUnit = parseFloat(pricePerUnitCell.textContent.replace(/,/g, '')) || 0;  // Giá / Đơn vị
        
        // Tính Tổng giá cho dòng hiện tại
        const total = quantity * pricePerUnit;

        // Hiển thị giá trị tính toán vào cột Tổng giá
        totalCell.textContent = total.toLocaleString('en-US'); // Hiển thị có dấu phẩy phân cách

        // Cộng dồn giá trị vào tổng giá trị toàn bảng
        totalPrice += total;
    });

    // Cập nhật tổng giá trị vào phần tử bom-total-price-asset
    document.getElementById("bom-total-price-asset").textContent = `Tổng giá trị: ${totalPrice.toLocaleString('en-US')}`;
}

function calculateLaborPrice() {
    const table = document.getElementById("table_labor"); // Lấy bảng theo ID
    const rows = table.querySelectorAll("tbody tr"); // Lấy tất cả các hàng trong tbody
    let totalPrice = 0; // Biến lưu tổng giá trị toàn bảng

    rows.forEach(row => {
        const input = row.querySelector("input[type='number']"); // Lấy ô input số giờ cần
        const pricePerUnitCell = row.cells[3]; // Cột Giá / Đơn vị
        const totalCell = row.cells[4]; // Cột Tổng giá

        const quantity = parseFloat(input.value) || 0; // Số giờ cần (nếu rỗng thì là 0)

        let pricePerUnit = 0; // Giá mỗi đơn vị

        // Kiểm tra nếu cột Giá / Đơn vị là input thì lấy value, ngược lại lấy textContent
        const priceInput = pricePerUnitCell.querySelector("input[type='text']");
        if (priceInput) {
            pricePerUnit = parseFloat(priceInput.value.replace(/,/g, "")) || 0; // Lấy giá trị nhập vào và loại bỏ dấu phẩy
        } else {
            pricePerUnit = parseFloat(pricePerUnitCell.textContent.replace(/,/g, "")) || 0;
        }

        // Tính Tổng giá cho dòng hiện tại
        const total = quantity * pricePerUnit;

        // Hiển thị giá trị tính toán vào cột Tổng giá
        totalCell.textContent = total.toLocaleString('en-US'); // Hiển thị có dấu phẩy phân cách

        // Cộng dồn giá trị vào tổng giá trị toàn bảng
        totalPrice += total;
    });

    // Cập nhật tổng giá trị vào phần tử bom-total-price-labor
    document.getElementById("bom-total-price-labor").textContent = `Tổng giá trị: ${totalPrice.toLocaleString('en-US')}`;
}


// Hàm tính tổng giá trị của BOM
function calculateTotalBOMPrice() {
    // Lấy tổng giá trị từ các bảng
    const bomTotalText = document.getElementById("bom-total-price").textContent;
    const assetTotalText = document.getElementById("bom-total-price-asset").textContent;
    const laborTotalText = document.getElementById("bom-total-price-labor").textContent;

    // Chuyển đổi giá trị thành số, loại bỏ phần chữ và dấu phẩy
    const assetTotal = parseFloat(assetTotalText.replace(/[^0-9.-]+/g, '')) || 0;
    const laborTotal = parseFloat(laborTotalText.replace(/[^0-9.-]+/g, '')) || 0;
    const bomTotal = parseFloat(bomTotalText.replace(/[^0-9.-]+/g, '')) || 0;

    // Tính tổng BOM
    const totalBOMPrice = assetTotal + laborTotal + bomTotal;

    // Hiển thị tổng BOM
    document.getElementById("total_bom_price_final").textContent = `TỔNG GIÁ TRỊ CỦA BOM: ${totalBOMPrice.toLocaleString('en-US')}`;
}

// Gọi hàm này sau khi tính toán xong các bảng con
function updateBOMPrice() {
    calculateTotalPrice(); // Cập nhật tổng giá trị cho bảng bom-item
    calculateAssetPrice(); // Cập nhật tổng giá trị cho table_asset
    calculateLaborPrice(); // Cập nhật tổng giá trị cho table_labor
    calculateTotalBOMPrice(); // Tính tổng giá trị của BOM
}

// Gắn sự kiện cho các ô input của bảng asset
document.querySelectorAll("#table_asset input[type='number']").forEach(input => {
    input.addEventListener("input", updateBOMPrice);
});

// Gắn sự kiện cho các ô input của bảng labor
document.querySelectorAll("#table_labor input[type='number']").forEach(input => {
    input.addEventListener("input", updateBOMPrice);
});

function get_asset_labor_table(tableId, crmSelectId) {
    const table = document.getElementById(tableId); // Lấy bảng theo ID
    const rows = table.querySelectorAll("tbody tr"); // Lấy tất cả các hàng trong tbody
    const crmValue = document.getElementById("bom-crm-show").textContent.trim(); // Lấy giá trị CRM

    // Lấy các giá trị từ các phần tử khác
    const bomName = document.getElementById("bom-name").value.trim();
    const customerID = document.getElementById("bom-customerID").textContent.trim();
    const customerName = document.getElementById("bom-customerName").textContent.trim();
    const wh = document.getElementById("bom-wh").textContent.trim();

    const dataArray = []; // Mảng lưu trữ dữ liệu

    rows.forEach(row => {
        const cells = row.querySelectorAll("td, th"); // Lấy tất cả ô trong hàng
        const rowData = []; // Mảng lưu trữ dữ liệu của hàng hiện tại

        cells.forEach(cell => {
            // Nếu bảng là table_labor và ô có <select>
            if (tableId === "table_labor") {
                const select = cell.querySelector("select");
                if (select) {
                    // Lấy giá trị của tùy chọn được chọn
                    rowData.push(select.options[select.selectedIndex].textContent.trim());
                } else {
                    // Nếu ô có input type="number", lấy giá trị
                    let inputNumber = cell.querySelector("input[type='number']");
                    let inputText = cell.querySelector("input[type='text']");

                    if (inputNumber) {
                        rowData.push(parseFloat(inputNumber.value) || 0);
                    } else if (inputText) {
                        rowData.push(inputText.value.replace(/,/g, "").trim()); // Lấy input text, loại bỏ dấu phẩy nếu có
                    } else {
                        rowData.push(cell.textContent.trim());
                    }
                }
            } else {
                // Xử lý bình thường cho table_asset
                const input = cell.querySelector("input[type='number']");
                rowData.push(input ? parseFloat(input.value) || 0 : cell.textContent.trim());
            }
        });

        // Thêm giá trị từ các phần tử bổ sung vào cuối hàng
        rowData.push(crmValue, bomName, customerID, customerName, wh);

        dataArray.push(rowData); // Thêm hàng vào mảng
    });

    return dataArray; // Trả về mảng dữ liệu
}

// Hàm chuyển đổi bảng bom-item-table thành mảng, thêm các giá trị từ các phần tử khác
function get_bom_item() {
    const table = document.getElementById("bom-item-table"); // Lấy bảng theo ID
    const rows = table.querySelectorAll("tbody tr"); // Lấy tất cả các hàng trong tbody

    // Lấy giá trị từ các phần tử bổ sung
    const crmSelect = document.getElementById("bom-crm");
    const crmValue = document.getElementById("bom-crm-show").textContent; // Lấy giá trị của bom-crm

    const bomName = document.getElementById("bom-name").value.trim();
    const customerID = document.getElementById("bom-customerID").textContent.trim();
    const customerName = document.getElementById("bom-customerName").textContent.trim();
    const wh = document.getElementById("bom-wh").textContent.trim();

    const dataArray = []; // Mảng lưu trữ dữ liệu

    rows.forEach(row => {
        const cells = row.querySelectorAll("td"); // Lấy tất cả các ô trong hàng
        const rowData = []; // Mảng lưu dữ liệu của hàng hiện tại

        cells.forEach((cell, index) => {
            // Loại bỏ cột cuối cùng (Hành động)
            if (index !== cells.length - 1) {
                const input = cell.querySelector("input"); // Kiểm tra nếu ô có input
                rowData.push(input ? parseFloat(input.value) || 0 : cell.textContent.trim()); // Lấy giá trị từ input hoặc textContent
            }
        });

        // Thêm giá trị từ các phần tử bổ sung vào cuối hàng
        rowData.push(crmValue, bomName, customerID, customerName, wh);

        dataArray.push(rowData); // Thêm hàng vào mảng
    });

    return dataArray; // Trả về mảng dữ liệu
}

// Example arrays
async function send_bom_create() {
    startLoading()
    const wh = document.getElementById("bom-wh").textContent;
    const operator = sessionStorage.getItem("fullname");
    const customer_id = document.getElementById("bom-customerID").textContent;

    await Promise.all([load_bom()]);
    const todayData = filterTodayData(bom_data);
    
    // Lấy số lượng dữ liệu
    const length = todayData.length + 1;

    // Chuyển length thành chuỗi với định dạng 3 chữ số
    const stt_bom = String(length).padStart(3, '0');

    const now = new Date();

    const year = String(now.getFullYear()).slice(-2); // Lấy 2 chữ số cuối của năm
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Lấy tháng, thêm số 0 nếu cần
    const day = String(now.getDate()).padStart(2, '0'); // Lấy ngày, thêm số 0 nếu cần

    const datetime_id = `${year}/${month}/${day}`;

    const bom_id = "BOM"+"-"+wh+"-"+customer_id+"-"+datetime_id+"-"+stt_bom

    const assetArray = get_asset_labor_table("table_asset", "bom-crm"); // Table Asset
    const laborArray = get_asset_labor_table("table_labor", "bom-crm"); // Table Labor
    const bomItemArray = get_bom_item(); // BOM Item Table

    // push bom_id vào bomItemArray
    bomItemArray.forEach(item => item.unshift(bom_id));
    // push bom_id vào assetArray
    assetArray.forEach(item => item.unshift(bom_id));
    // push bom_id vào laborArray
    laborArray.forEach(item => item.unshift(bom_id));

    // push operator vào bomItemArray
    bomItemArray.forEach(item => item.push(operator));
    // push operator vào assetArray
    assetArray.forEach(item => item.push(operator));
    // push operator vào laborArray
    laborArray.forEach(item => item.push(operator));
    
    // Google Apps Script web app URL
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxFEye3OnLnCWJa19Ngs0iS3IsQm6vb769EZYu9uaVqjkB6ub_YwrN27hDL086F5vgD/exec"; // Replace YOUR_SCRIPT_ID
    
    // Function to send data to Google Sheets
    async function sendDataToGoogleSheets() {
        try {
            // Hiển thị loading indicator
            startLoading()
    
            const response = await fetch(scriptUrl, {
                method: "POST",
                mode: "no-cors", // Lưu ý: no-cors có thể không cho phép đọc response
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    bomItemData: bomItemArray,
                    assetData: assetArray,
                    laborData: laborArray,
                }),
            });
    
            // Với no-cors, bạn không thể truy cập response hoặc result
            // Nếu không dùng no-cors:
            const result = await response.text();
            console.log("Đã gửi data thành công:", result);
            endLoading()
            info("Đã tạo BOM thành công")
            clearModalContent();
            hideModal_bom();
            hideModal_bom_draft()
            get_bom_scorecard();
            displayTableData()
            
    
        } catch (error) {
            console.error("Error:", error);
        } 
    }
    // Call the function to send data
    sendDataToGoogleSheets();
    
    
}
async function send_bom_draft() {
    startLoading()
    const wh = document.getElementById("bom-wh").textContent;
    const operator = sessionStorage.getItem("fullname");
    const customer_id = document.getElementById("bom-customerID").textContent;

    const bomItemArray = get_bom_item(); // BOM Item Table

    // push operator vào bomItemArray
    bomItemArray.forEach(item => item.push(operator));
    
    // Google Apps Script web app URL
    const scriptUrl = "https://script.google.com/macros/s/AKfycbx2519XIo9d_caklnZaqFRkF62kjNy8uWRu49oUWGdYXWRPftaFwbYf9pJFUllq9Xxc/exec"; // Replace YOUR_SCRIPT_ID
    
    // Function to send data to Google Sheets
    async function sendDataToGoogleSheets() {
        try {
            // Hiển thị loading indicator
            startLoading()
    
            const response = await fetch(scriptUrl, {
                method: "POST",
                mode: "no-cors", // Lưu ý: no-cors có thể không cho phép đọc response
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    bomItemData: bomItemArray
                }),
            });
    
            // Với no-cors, bạn không thể truy cập response hoặc result
            // Nếu không dùng no-cors:
            const result = await response.text();
            console.log("Đã gửi data thành công:", result);
            endLoading()
            info("Đã lưu BOM tạm thành công")
            clearModalContent();
            hideModal_bom();
            hideModal_bom_draft()
            
    
        } catch (error) {
            console.error("Error:", error);
        } 
    }
    // Call the function to send data
    sendDataToGoogleSheets();
    get_bom_scorecard();
    
}

async function get_bom_scorecard() {
    document.getElementById("getBomLoading").style.display = "block";
    const response = await fetch('https://script.google.com/macros/s/AKfycbw6uJbvI495PqvmtKnS-ZVJk7poYmXukAG562LA4zE0l3oW6qZ34-7mu-xjJXqOIKBt/exec');
    const data = await response.json();
    
    document.getElementById("doneValue").textContent = data.done;
    document.getElementById("pendingValue").textContent = data.pending;
    document.getElementById("getBomLoading").style.display = "none";
}

async function get_bom_link() {
    startLoading()
    const bom_input = document.getElementById("input_bom_to_export").value

    if (bom_input === "") {
        alert("Vui lòng nhập BOM")
        endLoading()
        clear_bom_link_table()
        return;
    }

    await load_bom_link();

    const findBomLink = bom_link_data.find(row => row[2] === bom_input);

    if (findBomLink) {
        info("Done")
        console.log(findBomLink)

        document.getElementById("bom_create_date").textContent = findBomLink[0];
        document.getElementById("crm_id_link").textContent = findBomLink[1];
        document.getElementById("bom_id_link").textContent = findBomLink[2];
        document.getElementById("bom_name_link").textContent = findBomLink[3];
        document.getElementById("bom_customer").textContent = findBomLink[4];
        document.getElementById("bom_wh").textContent = findBomLink[5];
        document.getElementById("bom_operator").textContent = findBomLink[6];
        var linkElement = document.getElementById("bom_link_pdf");

        // Kiểm tra nếu findBomLink[7] có giá trị hợp lệ
        if (findBomLink[7]) {
            linkElement.textContent = "Xem PDF"; // Hiển thị chữ "Xem PDF"
            linkElement.href = findBomLink[7]; // Gán đường link
            linkElement.target = "_blank"; // Mở trong tab mới
        } else {
            linkElement.textContent = "Không có PDF"; // Trường hợp không có link
            linkElement.href = "#"; // Không điều hướng
        }


    } else {
        warning("Không tìm thấy BOM")
        clear_bom_link_table()
    }
    document.getElementById("input_bom_to_export").value = "";
    endLoading()


}

function clear_bom_link_table() {
    document.getElementById("bom_create_date").textContent = "";
    document.getElementById("crm_id_link").textContent = "";
    document.getElementById("bom_id_link").textContent = "";
    document.getElementById("bom_name_link").textContent = "";
    document.getElementById("bom_customer").textContent = "";
    document.getElementById("bom_wh").textContent = "";
    document.getElementById("bom_operator").textContent = "";
    document.getElementById("bom_link_pdf").textContent = "";
}

const input_others_cost = document.getElementById("others_cost");

input_others_cost.addEventListener("input", function () {
    let value = input_others_cost.value.replace(/,/g, ""); // Loại bỏ dấu phẩy cũ trước khi xử lý

    if (!isNaN(value) && value !== "") {
        input_others_cost.value = Number(value).toLocaleString("en-US"); // Thêm dấu phẩy phân cách nghìn
    } else {
        input_others_cost.value = ""; // Nếu giá trị không hợp lệ, xóa nội dung
    }
});

input_others_cost.addEventListener("blur", function () {
    if (input_others_cost.value === "") {
        input_others_cost.value = "0"; // Nếu ô trống khi mất focus, đặt về 0
    }
});


const input_hr_other = document.getElementById("others_hours");

input_hr_other.addEventListener("input", function () {
    let value_other_cost = document.getElementById("others_cost").value
    if (value_other_cost === "" || value_other_cost === "0" || value_other_cost === 0) {
        alert("Vui lòng đơn giá trước")
        input_others_cost.focus();
        input_hr_other.value = ""
        return;
    }
});


const tableBody = document.querySelector("#bomLinkTable tbody");
const filterDate = document.getElementById("filter-date");
const filterBranch = document.getElementById("filter-branch");
const filterOperator = document.getElementById("filter-operator");

// 🛠️ Lấy danh sách operator duy nhất
function populateOperatorFilter() {
    const operators = [...new Set(bom_link_filter_data.map(row => row[6]))]; // Cột Operator
    filterOperator.innerHTML = `<option value="">Tất cả</option>` + operators.map(op => `<option value="${op}">${op}</option>`).join("");
}

// 🛠️ Hiển thị dữ liệu trong bảng
async function displayTableData() {
    clear_filter()
    startLoading()
    await load_bom_link();

    if (bom_link_filter_data.length === 0) {
        endLoading()
        return;
    }

    const data = bom_link_filter_data
    populateOperatorFilter();
    tableBody.innerHTML = "";

    data.forEach(rowData => {
        const row = document.createElement("tr");

        rowData.forEach((cellData, index) => {
            const cell = document.createElement("td");

            if (index === 7) { // Nếu là cột Link, tạo thẻ <a>
                const link = document.createElement("a");
                link.href = cellData;
                link.target = "_blank";
                link.textContent = "Xem PDF"; // Hiển thị chữ thay vì link dài
                cell.appendChild(link);
            } else if (index === 8) { // Nếu là cột Link, tạo thẻ <a>
                const link = document.createElement("a");
                link.href = cellData;
                link.target = "_blank";
                link.textContent = "Xem Folder"; // Hiển thị chữ thay vì link dài
                cell.appendChild(link);
             } else {
                cell.textContent = cellData;
            }

            row.appendChild(cell);
        });

        tableBody.appendChild(row);
        endLoading()
    });
}

// 🛠️ Lọc dữ liệu dựa trên điều kiện
function filterTable() {
    const dateValue = filterDate.value;
    const branchValue = filterBranch.value;
    const operatorValue = filterOperator.value;

    const filteredData = bom_link_filter_data.filter(row => {
        const matchDate = dateValue ? row[0] === dateValue : true;
        const matchBranch = branchValue ? row[5] === branchValue : true;
        const matchOperator = operatorValue ? row[6] === operatorValue : true;

        return matchDate && matchBranch && matchOperator;
    });
    console.log(filteredData)
    tableBody.innerHTML = "";

    filteredData.forEach(rowData => {
        const row = document.createElement("tr");

        rowData.forEach((cellData, index) => {
            const cell = document.createElement("td");

            if (index === 7) { // Nếu là cột Link, tạo thẻ <a>
                const link = document.createElement("a");
                link.href = cellData;
                link.target = "_blank";
                link.textContent = "Xem tài liệu"; // Hiển thị chữ thay vì link dài
                cell.appendChild(link);
            } else {
                cell.textContent = cellData;
            }

            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

// 🛠️ Gán sự kiện lắng nghe thay đổi
filterDate.addEventListener("input", filterTable);
filterBranch.addEventListener("change", filterTable);
filterOperator.addEventListener("change", filterTable);

// 🛠️ Khởi tạo dữ liệu

// displayTableData(); // Hiển thị dữ liệu ban đầu


function clear_filter() {
    // Reset các giá trị của bộ lọc
    filterDate.value = "";
    filterBranch.value = "";
    filterOperator.value = "";

    // Hiển thị lại toàn bộ dữ liệu bảng
    // displayTableData(bom_link_data);
    filterTable()
};

function toggleSubmenu(event, submenuId, element) {
    event.preventDefault();
    const submenu = document.getElementById(submenuId);
    const arrow = element.querySelector('.arrow');

    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
      arrow.classList.replace('fa-chevron-up', 'fa-chevron-down');
    } else {
      submenu.style.display = 'block';
      arrow.classList.replace('fa-chevron-down', 'fa-chevron-up');
    }
}

//* PURCHASE //

async function showModal_pr() {
    document.getElementById('pr-modal').classList.add('show');
    document.getElementById("pr_dept").value = sessionStorage.getItem("dept");
    startLoading()
    await Promise.all([load_mml(), load_vendor(), load_onhand()]);
    endLoading()
}

function clearPrModalContent() {
    let table = document.getElementById("pr-item-table").getElementsByTagName('tbody')[0];
    table.innerHTML = ""; // Xóa nội dung của tbody

    document.getElementById("purpose_pr").value = ""; // Xóa nội dung của ô nhập liệu
}

function hideModal_pr() {
    document.getElementById('pr-modal').classList.remove('show');
    clearPrModalContent(); // Gọi hàm để xóa nội dung modal
}

function openModal_pr_add_item() {
    document.getElementById("pr_modal_add_item").style.display = "flex";
    document.getElementById("pr-type").focus(); // Đặt focus vào ô nhập liệu
}

function closeModal_pr_add_item() {
    document.getElementById("pr_modal_add_item").style.display = "none";
}

//add item pr type
//add item pr type

// Gán sự kiện input với debounce để giảm số lần tìm kiếm
document.getElementById("pr-type").addEventListener("input", debounce(handleMaterialTypeInput_pr_type, 400));

function handleMaterialTypeInput_pr_type(event) {
    const wh_value = document.getElementById("warehouse_pr").value
        if (wh_value === "") {
            alert("Vui lòng chọn mã chi nhánh trước")
            modalOptions.innerHTML = ''
            closeModal()

            document.getElementById("pr-type").value = ""
            return
        }
    const searchTerm = removeAccents(event.target.value).toUpperCase(); // Chuyển đổi thành uppercase không dấu
    const results = mml_data.filter(item => removeAccents(item[0]).toUpperCase().includes(searchTerm))// && item[0] === wh_value); // Tìm kiếm không dấu
    // Hiển thị kết quả tìm kiếm từ cột mml_data[1]
    if (results.length > 0) {
        showSearchResults_pr_type(results.map(item2 => item2[0]), results); // Truyền danh sách tên vật tư và dữ liệu gốc
    } else {
        hideDropdown_pr_type(); // Ẩn dropdown nếu không có kết quả
        console.log("Không tìm thấy kết quả.");

    }
}

function hideDropdown_pr_type() {
    const dropdown = document.getElementById("dropdown_pr_type");
    dropdown.style.display = 'none';
}

function showSearchResults_pr_type(displayList, fullData) {
    const dropdown = document.getElementById("dropdown_pr_type");
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
        console.log(originalIndex)
        
        // Xử lý sự kiện khi người dùng chọn một mục từ dropdown
        dropdownItem.addEventListener("click", () => {
            document.getElementById("pr-type").value = item; // Gán lựa chọn vào ô nhập liệu
            dropdown.style.display = 'none'; // Ẩn dropdown sau khi chọn
            
            // Gọi hàm để xử lý lựa chọn đầu tiên và tìm danh sách thứ hai
            showSecondaryOptions_pr_type(fullData[originalIndex]);
        });

        dropdown.appendChild(dropdownItem);
    });
}

// function showSecondaryOptions_pr_type(selectedItem) {
//     // Filter based on selected item and availability
//     const filteredResults = mml_data.filter(item => item[0] === selectedItem[0]);
//     const modal = document.getElementById("secondaryModal_pr_type");
//     const modalOptions = document.getElementById("modalOptions_pr_type");
//     modalOptions.innerHTML = ''; // Clear old content

//     console.log(filteredResults)

//     // Use a Set to keep track of unique options
//     const uniqueOptions = new Set();

//     filteredResults.forEach(option => {
//         const optionKey = `${option[1]} | ${option[2]}`

//         if (!uniqueOptions.has(optionKey)) {
//             uniqueOptions.add(optionKey); // Add to the Set to ensure uniqueness

//             const optionDiv = document.createElement("div");
//             optionDiv.classList.add("modal-option");

//             // Set the text content using the unique ID and description
//             optionDiv.textContent = optionKey;

//             optionDiv.addEventListener("click", () => {
//                 handleModalSelection_pr_type(option); // Call function when user selects an option
//                 modal.style.display = 'none';
//             });

//             modalOptions.appendChild(optionDiv);
//         }
//     });

//     // Display the modal
//     modal.style.display = 'flex';
// }

function showSecondaryOptions_pr_type(selectedItem) {
    // Filter based on selected item and availability
    const filteredResults2 = mml_data.filter(item => item[0] === selectedItem[0]);
    const filteredResults = updateArrayWithSum_create_pr(filteredResults2, onhand_data)
    const modal = document.getElementById("secondaryModal_pr_type");
    const modalOptions = document.getElementById("modalOptions_pr_type");
    modalOptions.innerHTML = ''; // Clear old content

    console.log(filteredResults)

    // Use a Set to keep track of unique options
    const uniqueOptions = new Set();

    filteredResults.forEach(option => {
        const optionKey = `${option[1]} | ${option[2]} | Tồn: ${option[10]}`; // Create a unique key based on ID and description

        if (!uniqueOptions.has(optionKey)) {
            uniqueOptions.add(optionKey); // Add to the Set to ensure uniqueness

            const optionDiv = document.createElement("div");
            optionDiv.classList.add("modal-option");

            // Set the text content using the unique ID and description
            optionDiv.textContent = optionKey;

            optionDiv.addEventListener("click", () => {
                handleModalSelection_pr_type(option); // Call function when user selects an option
                modal.style.display = 'none';
            });

            modalOptions.appendChild(optionDiv);
        }
    });

    // Display the modal
    modal.style.display = 'flex';
}


function handleModalSelection_pr_type(selectedOption) {
    console.log("Người dùng đã chọn:", selectedOption);

    // document.getElementById("item-quantity-needed").focus();
    
    pr_sku_name = selectedOption[1];
    pr_sku_id = selectedOption[2];
    pr_unit = selectedOption[3];

    console.log(pr_sku_name, pr_sku_id, pr_unit)
    // Gán giá trị vào các ô nhập liệu
    document.getElementById("pr_name").value = pr_sku_name;
    document.getElementById("pr_code").value = pr_sku_id;
    document.getElementById("pr_unit").value = pr_unit;

    document.getElementById("pr_specs").focus();
    
}

//add item pr vendor

// Gán sự kiện input với debounce để giảm số lần tìm kiếm
document.getElementById("pr-vendor").addEventListener("input", debounce(handleMaterialTypeInput_pr_vendor, 400));

function handleMaterialTypeInput_pr_vendor(event) {
    const searchTerm = removeAccents(event.target.value).toUpperCase(); // Chuyển đổi thành uppercase không dấu
    const results = customer_data.filter(item => removeAccents(item[0]).toUpperCase().includes(searchTerm))// && item[0] === wh_value); // Tìm kiếm không dấu
    // Hiển thị kết quả tìm kiếm từ cột vendor_data[1]
    if (results.length > 0) {
        showSearchResults_pr_vendor(results.map(item2 => item2[0]), results); // Truyền danh sách tên vật tư và dữ liệu gốc
    } else {
        hideDropdown_pr_vendor(); // Ẩn dropdown nếu không có kết quả
        console.log("Không tìm thấy kết quả.");

    }
}

function hideDropdown_pr_vendor() {
    const dropdown = document.getElementById("dropdown_pr_vendor");
    dropdown.style.display = 'none';
}

function showSearchResults_pr_vendor(displayList, fullData) {
    const dropdown = document.getElementById("dropdown_pr_vendor");
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
        console.log(originalIndex)
        
        // Xử lý sự kiện khi người dùng chọn một mục từ dropdown
        dropdownItem.addEventListener("click", () => {
            document.getElementById("pr-vendor").value = item; // Gán lựa chọn vào ô nhập liệu
            dropdown.style.display = 'none'; // Ẩn dropdown sau khi chọn

            document.getElementById("pr_po").focus();
        });

        dropdown.appendChild(dropdownItem);
    });
}


function addItem_pr() {
    let table = document.getElementById("pr-item-table").getElementsByTagName('tbody')[0];
    let rowCount = table.rows.length + 1; // Auto-increment STT
    
    let type = document.getElementById("pr-type").value;
    let name = document.getElementById("pr_name").value;
    let code = document.getElementById("pr_code").value;
    let specs = document.getElementById("pr_specs").value;
    let unit = document.getElementById("pr_unit").value;
    let customer = document.getElementById("pr-vendor").value;
    let po = document.getElementById("pr_po").value;
    let date = document.getElementById("pr_date").value;
    let price = parseFloat(document.getElementById("pr_price").value) || 0;
    let quantity = parseFloat(document.getElementById("pr_quantity").value) || 0;
    let total = price * quantity;

    if (name === "") {
        alert("Bạn chưa chọn vật tư từ gợi ý hệ thống")
        return
    }

    if (type === "") {
        alert("Vui lòng chọn loại vật tư")
        document.getElementById("pr-type").focus()
        return
    }

    if (customer === "") {
        alert("Vui lòng chọn Khách hàng")
        document.getElementById("pr-vendor").focus()
        return
    }

    if (po === "") {
        alert("Vui lòng nhập số PO")
        document.getElementById("pr_po").focus()
        return
    }

    if (date === "") {
        alert("Vui lòng nhập ngày cần hàng")
        return
    }
    
    if (price === 0) {
        alert("Vui lòng nhập đơn giá")
        document.getElementById("pr_price").focus()
        return
    }

    if (quantity === 0) {
        alert("Vui lòng nhập số lượng")
        document.getElementById("pr_quantity").focus()
        return
    }

    // Lấy danh sách file
    let fileNames = JSON.parse(document.getElementById('fileName_pr').value || "[]");
    let fileLinks = JSON.parse(document.getElementById('fileData_pr').value || "[]");
    let mimeTypes = JSON.parse(document.getElementById('mimeType_pr').value || "[]");

    // Tạo mảng chứa JSON hợp lệ cho từng file
    let filesArray = fileNames.map((fileName, index) => ({
        fileName: fileName,
        fileData: fileLinks[index] || "",
        mimeType: mimeTypes[index] || ""
    }));

    let fileListHTML = fileNames.map((fileName, index) => 
        `<a href="data:${mimeTypes[index]};base64,${fileLinks[index]}" download="${fileName}">
            ${fileName}
        </a>`
    ).join("<br>");

    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${type}</td>
        <td>${name}</td>
        <td>${code}</td>
        <td>${specs}</td>
        <td>${unit}</td>
        <td>${customer}</td>
        <td>${po}</td>
        <td>${date}</td>
        <td>${price.toLocaleString('en-US')}</td>
        <td>${quantity.toLocaleString('en-US')}</td>
        <td>${total.toLocaleString('en-US')}</td>
        <td>${fileListHTML || ""}</td>
        <td><input type="hidden" class="fileDataJSON" value='${JSON.stringify(filesArray)}'></td>
        <td><button class="btn-delete bom-clear" onclick="deleteRow_pr(this)">Xóa</button></td>
    `;

    closeModal_pr_add_item();
    clearItem_pr();
}



function deleteRow_pr(button) {
    let table = document.getElementById("pr-item-table").getElementsByTagName('tbody')[0];
    let row = button.parentNode.parentNode; // Get the row containing the button
    row.parentNode.removeChild(row); // Remove the row from the table

    // Update STT (Serial Numbers)
    let rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        rows[i].cells[0].innerText = i + 1; // Update the first column (STT)
    }
}


function clearItem_pr() {
    document.getElementById("pr-type").value = "";
    document.getElementById("pr_name").value = "";
    document.getElementById("pr_code").value = "";
    document.getElementById("pr_specs").value = "";
    document.getElementById("pr_unit").value = "";
    document.getElementById("pr-vendor").value = "";
    document.getElementById("pr_po").value = "";
    document.getElementById("pr_date").value = "";
    document.getElementById("pr_price").value = "";
    document.getElementById("pr_quantity").value = "";

    document.getElementById('fileName_pr').value = "";
    document.getElementById('fileData_pr').value = "";
    document.getElementById('mimeType_pr').value = "";
}


async function send_pr() {
    const pr_purpose = document.getElementById("purpose_pr").value;
    if (pr_purpose === "") {
        alert("Vui lòng chọn mục đích mua hàng")
        return
    }
    startLoading()
    let table = document.getElementById("pr-item-table").getElementsByTagName('tbody')[0];
    let rows = table.getElementsByTagName("tr");
    let data = [];
    let pr_id = "PR-" + document.getElementById("warehouse_pr").value + "-" + document.getElementById("pr_dept").value
    // let parentFolderName = pr_id

    for (let row of rows) {
        let cells = row.getElementsByTagName("td");

        let fileDataJSON = JSON.parse(row.cells[13].querySelector('.fileDataJSON').value || "[]");

        let rowData = {
            STT: cells[0].innerText,
            LoaiVatTu: cells[1].innerText,
            TenVatTu: cells[2].innerText,
            MaVatTu: cells[3].innerText,
            ThongSoKyThuat: cells[4].innerText,
            DonVi: cells[5].innerText,
            TenKhachHang: cells[6].innerText,
            SoPO: cells[7].innerText,
            NgayCan: cells[8].innerText,
            DonGia: cells[9].innerText.replace(/,/g, ""),
            SoLuong: cells[10].innerText.replace(/,/g, ""),
            TongTien: cells[11].innerText.replace(/,/g, ""),
            Files: fileDataJSON,
            PrID: pr_id,
            Requestor: sessionStorage.getItem("fullname"),
            Dept: document.getElementById("pr_dept").value,
            Warehouse: document.getElementById("warehouse_pr").value,
            Purpose: document.getElementById("purpose_pr").value,
            Approver: sessionStorage.getItem("pr_approver")
        };

        data.push(rowData);
    }

    let payload = {
        tableData: data
    };

    fetch("https://script.google.com/macros/s/AKfycbwTumzB9ZgD2kne6o6SMo9Zf38k0sf0rFkafbBb1uRAi0NJB5tt7QOcmw5xyYTgm_9wtw/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(() => updateBeforeExport())
    .catch(console.log("Lỗi khi gửi dữ liệu:"))
    .finally(() => {
        endLoading()
        clearItem_pr();
        clearPrModalContent();
        hideModal_pr();
        info("Dữ liệu đã được gửi thành công!")
    });
}

//make focus next input when input at add item pr
document.getElementById("pr_specs").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("pr-vendor").focus();
    }
});

//make focus next input when input at add item pr
document.getElementById("pr_specs").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("pr-vendor").focus();
    }
});

//make focus next input when input at add item pr
document.getElementById("pr_price").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("pr_quantity").focus();
    }
});



var filesProcessed_pr = false;

function LoadFile_pr(event) {
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
    // document.getElementById('submitButton_delivery').disabled = true;

    for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Kiểm tra kích thước tệp
    if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Tệp "' + file.name + '" vượt quá 10MB.');
        event.target.value = ''; // Reset input file
        filesProcessed_pr = false;
        // document.getElementById('submitButton_delivery').disabled = true;
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
            document.getElementById('fileData_pr').value = JSON.stringify(fileDataArray);
            document.getElementById('mimeType_pr').value = JSON.stringify(mimeTypeArray);
            document.getElementById('fileName_pr').value = JSON.stringify(fileNameArray);

            filesProcessed_pr = true;
            // Enable submit button
            // document.getElementById('submitButton_delivery').disabled = false;
        }
        };
        reader.readAsDataURL(file);
    })(file);
    }
}

// PR Approve

async function pr_approval() {
    startLoading()
    await load_pr_approve_list();
    const data = pr_approve_list
    const tbody = document.getElementById("dataTable_pr").getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; // Xóa dữ liệu cũ nếu có

    data.forEach(row => {
        let tr = document.createElement("tr");

        // Danh sách cột (theo thứ tự yêu cầu)
        let columns = ["Date", "Time", "PR#", "Requestor", "Approver", "Department", "Warehouse", "Purpose", "Spreadsheet_id"];
        let spreadsheetId = row[8];
        columns.forEach((col, index) => {
            let td = document.createElement("td");
            td.textContent = row[index];

            // Ẩn cột Spreadsheet_id
            if (col === "Spreadsheet_id") {
                td.classList.add("hidden");
            }

            tr.appendChild(td);
        });

        // Thêm nút View
        let actionTd = document.createElement("td");
        let viewBtn = document.createElement("button");
        viewBtn.textContent = "View";
        viewBtn.onclick = function() {
            showDetails(spreadsheetId, row); // Gửi cả spreadsheetId và dữ liệu dòng
        };

        actionTd.appendChild(viewBtn);
        tr.appendChild(actionTd);
        tbody.appendChild(tr);
    });
    endLoading()
}

// PO Table to Approve

function createAndLoadPoDetailTable(dataArray, tableId) {
    const table = document.getElementById(tableId);
    if (!table) {
        console.error('Không tìm thấy table có id:', tableId);
        return;
    }

    const tbody = table.querySelector('tbody');
    if (!tbody) {
        console.error('Table thiếu <tbody> để chèn dữ liệu.');
        return;
    }

    // Xóa dữ liệu cũ trong tbody nếu có
    tbody.innerHTML = '';

    // Thêm dữ liệu mới
    dataArray.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
}

function showPoDetailInNewTab(dataArray, title = 'Chi tiết PO') {
    const headers = [
        'PO #', 'PR #', 'Khách hàng', 'Tên vật tư', 'Mã vật tư', 'Đơn vị',
        'Đơn vị tiền tệ', 'Số lượng cần mua', 'Đơn giá', 'Thành tiền',
        'Số lượng cần từ PR', 'Đơn giá PR', 'Thành tiền PR'
    ];

    const numberColumns = [7, 8, 9, 10, 11, 12]; // Các cột cần format số
    let totalPoAmount = 0;  // Tổng tiền PO
    let totalPrAmount = 0;  // Tổng tiền PR

    let html = `
    <html>
    <head>
        <title>${title}</title>
        <style>
            body { font-family: Arial, sans-serif; padding: 20px; background: #f8f9fa; }
            table { width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px; }
            th { background-color: #009688; color: white; padding: 12px; text-align: left; font-weight: bold; border-bottom: 2px solid #ddd; white-space: nowrap; }
            td { padding: 12px; border-bottom: 1px solid #f0f0f0; white-space: nowrap; }
            tr:nth-child(even):not(:first-child) { background-color: #f9f9f9; }
            tr:hover { background-color: #f1f1f1; cursor: default; }
        </style>
    </head>
    <body>
        <h2>${title}</h2>
        <div style="overflow-x: auto;">
        <table>
            <thead>
                <tr>${headers.slice(2).map(h => `<th>${h}</th>`).join('')}</tr>
            </thead>
            <tbody>
    `;

    dataArray.forEach(row => {
        html += `<tr>`;
        row.forEach((cell, index) => {
            if (index >= 2) { // Bỏ 2 cột đầu
                if (numberColumns.includes(index) && typeof cell === 'number') {
                    cell = cell.toLocaleString('en-US');
                }

                // Tính tổng Thành tiền (index 9) và Thành tiền PR (index 12)
                if (index === 9 && typeof row[index] === 'number') {
                    totalPoAmount += row[index];
                }
                if (index === 12 && typeof row[index] === 'number') {
                    totalPrAmount += row[index];
                }

                html += `<td>${cell !== undefined && cell !== null ? cell : ''}</td>`;
            }
        });
        html += `</tr>`;
    });

    // Thêm dòng tổng vào dưới bảng
    html += `
            <tr>
                <td colspan="7" style="font-weight:bold; text-align:right;">Tổng tiền PO:</td>
                <td colspan="6" style="font-weight:bold;">${totalPoAmount.toLocaleString('en-US')}</td>
            </tr>
            <tr>
                <td colspan="7" style="font-weight:bold; text-align:right;">Tổng tiền PR:</td>
                <td colspan="6" style="font-weight:bold;">${totalPrAmount.toLocaleString('en-US')}</td>
            </tr>
            </tbody>
        </table>
        </div>
    </body>
    </html>
    `;

    const newTab = window.open();
    newTab.document.write(html);
    newTab.document.close();
}


// Approve 1
// load_detail_po_to_approve()

async function po_1_approval() {
    startLoading()
    await Promise.all([
        load_po_approve_list(),
        load_detail_po_to_approve()
    ]);
    const data = po_approval_list;
    console.log(data)
    const tbody = document.getElementById("dataTable_po").getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; // Xóa dữ liệu cũ nếu có

    data.forEach(row => {
        let tr = document.createElement("tr");

        // Danh sách cột (theo thứ tự yêu cầu)
        row.forEach((cell, index) => {
            let td = document.createElement("td");
            td.textContent = cell;

            // Ẩn cột thứ 7 (PDF) và thứ 8 (Files)
            if (index === 8 || index === 9 || index === 10) {
                td.classList.add("hidden");
            }

            tr.appendChild(td);
        });

        // Thêm nút View
        let actionTd = document.createElement("td");
        let viewBtn = document.createElement("button");
        viewBtn.textContent = "View";
        viewBtn.onclick = function() {
            console.log(row);
            openModal_po(row); // Gọi hàm mở modal với dữ liệu
        };

        actionTd.appendChild(viewBtn);
        tr.appendChild(actionTd);
        tbody.appendChild(tr);
    });
    endLoading()
}

function openModal_po(row) {
    // Cập nhật dữ liệu vào modal
    document.getElementById("po_date").textContent = row[0];
    document.getElementById("po_time").textContent = row[1];
    document.getElementById("po_number").textContent = row[2];
    document.getElementById("po_pr").textContent = row[3];
    document.getElementById("po_vendor").textContent = row[4];
    document.getElementById("po_creator").textContent = row[5];
    document.getElementById("po_pr_creator").textContent = row[6];
    document.getElementById("po_approver").textContent = row[7];
    document.getElementById("po_total").textContent = row[11];

    // Cập nhật link PDF
    // const poPdfViewBtn = document.getElementById("po_pdf_view");
    // if (row[8]) {
    //     poPdfViewBtn.style.display = "block";
    //     poPdfViewBtn.setAttribute("data-url", row[8]); // Lưu link PDF
    //     poPdfViewBtn.onclick = function() {
    //         window.open(row[8], "_blank");
    //     };
    // } else {
    //     poPdfViewBtn.style.display = "none";
    // }

    // Cập nhật link Files
    const poFilesViewBtn = document.getElementById("po_fils_view");
    if (row[9]) {
        poFilesViewBtn.style.display = "block";
        poFilesViewBtn.setAttribute("data-url", row[9]); // Lưu link Files
        poFilesViewBtn.onclick = function() {
            window.open(row[9], "_blank");
        };
    } else {
        poFilesViewBtn.style.display = "none";
    }

    const filteredData = detail_po_to_approve_data.filter(r => r[0] == row[2]);

    // Gán sự kiện cho nút đã có sẵn
    const openTabBtn = document.getElementById('po_1_pdf_view_new_tab');
    if (openTabBtn) {
        openTabBtn.onclick = function() {
            showPoDetailInNewTab(filteredData, `Chi tiết PO ${row[2]}`);
        };
    } else {
        console.error('Không tìm thấy nút có id po_1_pdf_view_new_tab');
    }

    

    // Hiển thị modal
    document.getElementById("modal_po").style.display = "block";
}


// Đóng modal
function closeModal_po() {
    document.getElementById("modal_po").style.display = "none";
    hide_reject_section()
}

// Approve 2

async function po_2_approval() {
    startLoading()

    await Promise.all([
        load_po_approve_2_list(),
        load_detail_po_to_approve()
    ]);
    const data = po_approval_2_list;
    console.log(data)
    const tbody = document.getElementById("dataTable_po_2").getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; // Xóa dữ liệu cũ nếu có

    data.forEach(row => {
        let tr = document.createElement("tr");

        // Danh sách cột (theo thứ tự yêu cầu)
        row.forEach((cell, index) => {
            let td = document.createElement("td");
            td.textContent = cell;

            // Ẩn cột thứ 7 (PDF) và thứ 8 (Files)
            if (index === 7 || index === 8 || index === 9 || index === 10) {
                td.classList.add("hidden");
            } else if (index === 11) {
                // Định dạng cột tổng tiền
                const formattedNumber = Number(cell).toLocaleString("en-US");
                td.textContent = formattedNumber;
            }

            tr.appendChild(td);
        });

        // Thêm nút View
        let actionTd = document.createElement("td");
        let viewBtn = document.createElement("button");
        viewBtn.textContent = "View";
        viewBtn.onclick = function() {
            // console.log(row);
            openModal_po_2(row); // Gọi hàm mở modal với dữ liệu
        };

        actionTd.appendChild(viewBtn);
        tr.appendChild(actionTd);
        tbody.appendChild(tr);
    });
    endLoading()
}

function openModal_po_2(row) {
    console.log(row)
    // Cập nhật dữ liệu vào modal
    document.getElementById("po_2_date").textContent = row[0];
    document.getElementById("po_2_time").textContent = row[1];
    document.getElementById("po_2_number").textContent = row[2];
    document.getElementById("po_2_pr").textContent = row[3];
    document.getElementById("po_2_vendor").textContent = row[4];
    document.getElementById("po_2_creator").textContent = row[5];
    document.getElementById("po_2_pr_creator").textContent = row[6];
    document.getElementById("po_2_total").textContent = row[11].toLocaleString("en-US");

    // Cập nhật link PDF
    // const poPdfViewBtn = document.getElementById("po_2_pdf_view");
    // if (row[7]) {
    //     poPdfViewBtn.style.display = "block";
    //     poPdfViewBtn.setAttribute("data-url", row[7]); // Lưu link PDF
    //     poPdfViewBtn.onclick = function() {
    //         window.open(row[7], "_blank");
    //     };
    // } else {
    //     poPdfViewBtn.style.display = "none";
    // }

    // Cập nhật link Files
    const poFilesViewBtn = document.getElementById("po_2_fils_view");
    if (row[8]) {
        poFilesViewBtn.style.display = "block";
        poFilesViewBtn.setAttribute("data-url", row[8]); // Lưu link Files
        poFilesViewBtn.onclick = function() {
            window.open(row[8], "_blank");
        };
    } else {
        poFilesViewBtn.style.display = "none";
    }
    const filteredData = detail_po_to_approve_data.filter(r => r[0] == row[2]);

    // Gán sự kiện cho nút đã có sẵn
    const openTabBtn = document.getElementById('po_2_pdf_view_new_tab');
    if (openTabBtn) {
        openTabBtn.onclick = function() {
            showPoDetailInNewTab(filteredData, `Chi tiết PO ${row[2]}`);
        };
    } else {
        console.error('Không tìm thấy nút có id po_2_pdf_view_new_tab');
    }
    
    // Hiển thị modal
    document.getElementById("modal_po_2").style.display = "block";
}


// Đóng modal
function hide_reject_section_2() {
    const rejectSection = document.getElementById("reject_reason_section_2");
    if (rejectSection) {
      rejectSection.style.display = "none";
    }
  
    // Optional: reset lại dropdown nếu muốn
    const rejectSelect = document.getElementById("reject_reason_2");
    if (rejectSelect) {
      rejectSelect.value = "";
    }
  }
  

function hide_reject_section_2() {
    document.getElementById("reject_reason_2").value = ""; // Reset lý do Reject
        // hide reject section
    document.getElementById("reject_reason_section_2").style.display = "none";
}

// Gắn sự kiện cho nút Approve và Reject
document.getElementById("po_2_approve").addEventListener("click", approvePO_2);
document.getElementById("po_2_reject").addEventListener("click", rejectPO_2);

function approvePO_2() {
    sendApprovalRequest_2("Approved", "");
}

function rejectPO_2() {
    // Hiển thị ô nhập lý do Reject
    const rejectSection = document.getElementById("reject_reason_section_2");
    
    if (rejectSection.style.display === "none") {
        rejectSection.style.display = "block";
    } else {
        const reason = document.getElementById("reject_reason_2").value.trim();
        if (!reason) {
            alert("Vui lòng nhập lý do từ chối.");
            return;
        }
        sendApprovalRequest_2("Rejected", reason);
    }
}

function sendApprovalRequest_2(status, reason) {
    GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwzDnsIXGgF-NndW9qoLdSvviJwlQLz-5pMOzcYXjxFMDO5JIzVcOVMpj906QB9WDnsQw/exec"
    const reason_value = document.getElementById("reject_reason_2").value
    if (status === "Rejected" && !reason_value) {
        alert("Vui lòng chọn lí do Reject");
        return;
    }
    startLoading()
    const poData = {
        date: document.getElementById("po_2_date").textContent,
        time: document.getElementById("po_2_time").textContent,
        po_number: document.getElementById("po_2_number").textContent,
        pr_number: document.getElementById("po_2_pr").textContent,
        vendor: document.getElementById("po_2_vendor").textContent,
        po_creator: document.getElementById("po_2_creator").textContent,
        pr_creator: document.getElementById("po_2_pr_creator").textContent,
        total_amount: document.getElementById("po_2_total").textContent,

        pdf_link: document.getElementById("po_2_pdf_view").getAttribute("data-url") || "", // Lấy link PDF
        files_link: document.getElementById("po_2_fils_view").getAttribute("data-url") || "", // Lấy link Files
        status: status,
        reason: reason
    };

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(poData)
    }).then(() => {
        info(`PO ${status} thành công!`);
        closeModal_po_2();
        hide_reject_section_2()
        po_2_approval()
    }).catch(error => {
        console.error("Lỗi khi gửi dữ liệu:", error);
        alert("Có lỗi xảy ra! Vui lòng thử lại.");
    });
}
///############################################///
///############################################///

// Approve 3

async function po_3_approval() {
    startLoading()
    await Promise.all([
        load_po_approve_3_list(),
        load_detail_po_to_approve()
    ]);
    const data = po_approval_3_list;
    console.log(data)
    const tbody = document.getElementById("dataTable_po_3").getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; // Xóa dữ liệu cũ nếu có

    data.forEach(row => {
        let tr = document.createElement("tr");

        // Danh sách cột (theo thứ tự yêu cầu)
        row.forEach((cell, index) => {
            let td = document.createElement("td");
            td.textContent = cell;

            // Ẩn cột thứ 7 (PDF) và thứ 8 (Files)
            if (index === 7 || index === 8 || index === 9 || index === 10) {
                td.classList.add("hidden");
            } else if (index === 11) {
                // Định dạng cột tổng tiền
                const formattedNumber = Number(cell).toLocaleString("en-US");
                td.textContent = formattedNumber;
            }

            tr.appendChild(td);
        });

        // Thêm nút View
        let actionTd = document.createElement("td");
        let viewBtn = document.createElement("button");
        viewBtn.textContent = "View";
        viewBtn.onclick = function() {
            // console.log(row);
            openModal_po_3(row); // Gọi hàm mở modal với dữ liệu
        };

        actionTd.appendChild(viewBtn);
        tr.appendChild(actionTd);
        tbody.appendChild(tr);
    });
    endLoading()
}

function openModal_po_3(row) {
    console.log(row)
    // Cập nhật dữ liệu vào modal
    document.getElementById("po_3_date").textContent = row[0];
    document.getElementById("po_3_time").textContent = row[1];
    document.getElementById("po_3_number").textContent = row[2];
    document.getElementById("po_3_pr").textContent = row[3];
    document.getElementById("po_3_vendor").textContent = row[4];
    document.getElementById("po_3_creator").textContent = row[5];
    document.getElementById("po_3_pr_creator").textContent = row[6];
    document.getElementById("po_3_total").textContent = row[11].toLocaleString("en-US");

    // Cập nhật link PDF
    // const poPdfViewBtn = document.getElementById("po_3_pdf_view");
    // if (row[7]) {
    //     poPdfViewBtn.style.display = "block";
    //     poPdfViewBtn.setAttribute("data-url", row[7]); // Lưu link PDF
    //     poPdfViewBtn.onclick = function() {
    //         window.open(row[7], "_blank");
    //     };
    // } else {
    //     poPdfViewBtn.style.display = "none";
    // }

    // Cập nhật link Files
    const poFilesViewBtn = document.getElementById("po_3_fils_view");
    if (row[8]) {
        poFilesViewBtn.style.display = "block";
        poFilesViewBtn.setAttribute("data-url", row[8]); // Lưu link Files
        poFilesViewBtn.onclick = function() {
            window.open(row[8], "_blank");
        };
    } else {
        poFilesViewBtn.style.display = "none";
    }

    const filteredData = detail_po_to_approve_data.filter(r => r[0] == row[2]);

    // Gán sự kiện cho nút đã có sẵn
    const openTabBtn = document.getElementById('po_3_pdf_view_new_tab');
    if (openTabBtn) {
        openTabBtn.onclick = function() {
            showPoDetailInNewTab(filteredData, `Chi tiết PO ${row[2]}`);
        };
    } else {
        console.error('Không tìm thấy nút có id po_3_pdf_view_new_tab');
    }

    // Hiển thị modal
    document.getElementById("modal_po_3").style.display = "block";
}


// Đóng modal
function closeModal_po_2() {
    document.getElementById("modal_po_2").style.display = "none";
    hide_reject_section_2()
}

// Đóng modal
function closeModal_po_3() {
    document.getElementById("modal_po_3").style.display = "none";
    hide_reject_section_3()
}

function hide_reject_section_3() {
    const rejectSection = document.getElementById("reject_reason_section_3");
    if (rejectSection) {
      rejectSection.style.display = "none";
    }
  
    // Optional: reset lại dropdown nếu muốn
    const rejectSelect = document.getElementById("reject_reason_3");
    if (rejectSelect) {
      rejectSelect.value = "";
    }
}  

// Gắn sự kiện cho nút Approve và Reject
document.getElementById("po_3_approve").addEventListener("click", approvePO_3);
document.getElementById("po_3_reject").addEventListener("click", rejectPO_3);

function approvePO_3() {
    sendApprovalRequest_3("Approved", "");
}

function rejectPO_3() {
    // Hiển thị ô nhập lý do Reject
    const rejectSection = document.getElementById("reject_reason_section_3");
    
    if (rejectSection.style.display === "none") {
        rejectSection.style.display = "block";
    } else {
        const reason = document.getElementById("reject_reason_3").value.trim();
        if (!reason) {
            alert("Vui lòng nhập lý do từ chối.");
            return;
        }
        sendApprovalRequest_3("Rejected", reason);
    }
}

function sendApprovalRequest_3(status, reason) {
    GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyFJdrBPsgZdbJDQ8Oez9tMiou77KCjah7yOZgBEXSQ860W3PqBjzz_o92p3qci-Xrs/exec"
    const reason_value = document.getElementById("reject_reason_3").value

    if (status === "Rejected" && !reason_value) {
        alert("Vui lòng chọn lí do Reject");
        return;
    }
    startLoading()
    const poData = {
        date: document.getElementById("po_3_date").textContent,
        time: document.getElementById("po_3_time").textContent,
        po_number: document.getElementById("po_3_number").textContent,
        pr_number: document.getElementById("po_3_pr").textContent,
        vendor: document.getElementById("po_3_vendor").textContent,
        po_creator: document.getElementById("po_3_creator").textContent,
        pr_creator: document.getElementById("po_3_pr_creator").textContent,
        total_amount: document.getElementById("po_3_total").textContent,

        pdf_link: document.getElementById("po_3_pdf_view").getAttribute("data-url") || "", // Lấy link PDF
        files_link: document.getElementById("po_3_fils_view").getAttribute("data-url") || "", // Lấy link Files
        status: status,
        reason: reason
    };

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(poData)
    }).then(() => {
        info(`PO ${status} thành công!`);
        closeModal_po_3();
        hide_reject_section_3()
        po_3_approval()
    }).catch(error => {
        console.error("Lỗi khi gửi dữ liệu:", error);
        alert("Có lỗi xảy ra! Vui lòng thử lại.");
    });
}
///############################################///
///############################################///

// Approve 4

async function po_4_approval() {
    startLoading()
    await Promise.all([
        load_po_approve_4_list(),
        load_detail_po_to_approve()
    ]);
    const data = po_approval_4_list;
    console.log(data)
    const tbody = document.getElementById("dataTable_po_4").getElementsByTagName("tbody")[0];
    tbody.innerHTML = ""; // Xóa dữ liệu cũ nếu có

    data.forEach(row => {
        let tr = document.createElement("tr");

        // Danh sách cột (theo thứ tự yêu cầu)
        row.forEach((cell, index) => {
            let td = document.createElement("td");
            td.textContent = cell;

            // Ẩn cột thứ 7 (PDF) và thứ 8 (Files)
            if (index === 7 || index === 8 || index === 9 || index === 10) {
                td.classList.add("hidden");
            } else if (index === 11) {
                // Định dạng cột tổng tiền
                const formattedNumber = Number(cell).toLocaleString("en-US");
                td.textContent = formattedNumber;
            }

            tr.appendChild(td);
        });

        // Thêm nút View
        let actionTd = document.createElement("td");
        let viewBtn = document.createElement("button");
        viewBtn.textContent = "View";
        viewBtn.onclick = function() {
            // console.log(row);
            openModal_po_4(row); // Gọi hàm mở modal với dữ liệu
        };

        actionTd.appendChild(viewBtn);
        tr.appendChild(actionTd);
        tbody.appendChild(tr);
    });
    endLoading()
}

function openModal_po_4(row) {
    console.log(row)
    // Cập nhật dữ liệu vào modal
    document.getElementById("po_4_date").textContent = row[0];
    document.getElementById("po_4_time").textContent = row[1];
    document.getElementById("po_4_number").textContent = row[2];
    document.getElementById("po_4_pr").textContent = row[3];
    document.getElementById("po_4_vendor").textContent = row[4];
    document.getElementById("po_4_creator").textContent = row[5];
    document.getElementById("po_4_pr_creator").textContent = row[6];
    document.getElementById("po_4_total").textContent = row[11].toLocaleString("en-US");

    // Cập nhật link PDF
    // const poPdfViewBtn = document.getElementById("po_4_pdf_view");
    // if (row[7]) {
    //     poPdfViewBtn.style.display = "block";
    //     poPdfViewBtn.setAttribute("data-url", row[7]); // Lưu link PDF
    //     poPdfViewBtn.onclick = function() {
    //         window.open(row[7], "_blank");
    //     };
    // } else {
    //     poPdfViewBtn.style.display = "none";
    // }

    // Cập nhật link Files
    const poFilesViewBtn = document.getElementById("po_4_fils_view");
    if (row[8]) {
        poFilesViewBtn.style.display = "block";
        poFilesViewBtn.setAttribute("data-url", row[8]); // Lưu link Files
        poFilesViewBtn.onclick = function() {
            window.open(row[8], "_blank");
        };
    } else {
        poFilesViewBtn.style.display = "none";
    }

    const filteredData = detail_po_to_approve_data.filter(r => r[0] == row[2]);

    // Gán sự kiện cho nút đã có sẵn
    const openTabBtn = document.getElementById('po_4_pdf_view_new_tab');
    if (openTabBtn) {
        openTabBtn.onclick = function() {
            showPoDetailInNewTab(filteredData, `Chi tiết PO ${row[2]}`);
        };
    } else {
        console.error('Không tìm thấy nút có id po_4_pdf_view_new_tab');
    }

    // Hiển thị modal
    document.getElementById("modal_po_4").style.display = "block";
}


// Đóng modal
function closeModal_po_4() {
    document.getElementById("modal_po_4").style.display = "none";
    hide_reject_section_4()
}

function hide_reject_section_4() {
    const rejectSection = document.getElementById("reject_reason_section_4");
    if (rejectSection) {
      rejectSection.style.display = "none";
    }
  
    // Optional: reset lại dropdown nếu muốn
    const rejectSelect = document.getElementById("reject_reason_4");
    if (rejectSelect) {
      rejectSelect.value = "";
    }
  }
  

// Gắn sự kiện cho nút Approve và Reject
document.getElementById("po_4_approve").addEventListener("click", approvePO_4);
document.getElementById("po_4_reject").addEventListener("click", rejectPO_4);

function approvePO_4() {
    sendApprovalRequest_4("Approved", "");
}

function rejectPO_4() {
    // Hiển thị ô nhập lý do Reject
    const rejectSection = document.getElementById("reject_reason_section_4");
    
    if (rejectSection.style.display === "none") {
        rejectSection.style.display = "block";
    } else {
        const reason = document.getElementById("reject_reason_4").value.trim();
        if (!reason) {
            alert("Vui lòng nhập lý do từ chối.");
            return;
        }
        sendApprovalRequest_4("Rejected", reason);
    }
}

function sendApprovalRequest_4(status, reason) {
    GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzabggVMG2trkf8f3ilAyHBrshSHz57hxFzaDPaO2bFDhKDiZGlM91rjG51sMgI6n9CkQ/exec"
    const reason_value = document.getElementById("reject_reason_4").value

    if (status === "Rejected" && !reason_value) {
        alert("Vui lòng chọn lí do Reject");
        return;
    }
    startLoading()
    const poData = {
        date: document.getElementById("po_4_date").textContent,
        time: document.getElementById("po_4_time").textContent,
        po_number: document.getElementById("po_4_number").textContent,
        pr_number: document.getElementById("po_4_pr").textContent,
        vendor: document.getElementById("po_4_vendor").textContent,
        po_creator: document.getElementById("po_4_creator").textContent,
        pr_creator: document.getElementById("po_4_pr_creator").textContent,
        total_amount: document.getElementById("po_4_total").textContent,

        pdf_link: document.getElementById("po_4_pdf_view").getAttribute("data-url") || "", // Lấy link PDF
        files_link: document.getElementById("po_4_fils_view").getAttribute("data-url") || "", // Lấy link Files
        status: status,
        reason: reason
    };

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(poData)
    }).then(() => {
        info(`PO ${status} thành công!`);
        closeModal_po_4();
        hide_reject_section_4()
        po_4_approval()
    }).catch(error => {
        console.error("Lỗi khi gửi dữ liệu:", error);
        alert("Có lỗi xảy ra! Vui lòng thử lại.");
    });
}
///############################################///
///############################################///

function closeModal_pr() {
    document.getElementById("modal_pr").style.display = "none";
}

let selectedRowData = []; // Biến lưu trữ dữ liệu của dòng đã View

async function showDetails(spreadsheetId, rowData) {
    let modal = document.getElementById("modal_pr");
    let modalContent = document.getElementById("modalContent_pr");
    
    modalContent.innerHTML = "Đang tải dữ liệu...";
    modal.style.display = "block"; // Hiện modal
    selectedRowData = rowData;
    const url = `https://script.google.com/macros/s/AKfycbyp22WPvm-b3FUOk49jyhNWWeDYnylJL5f8Zhd7VsWrd6tVOroy5bGNsiV8TNGP3D-N/exec?spreadsheet_id=${spreadsheetId}`; // Thay XXXXX bằng URL của bạn
    
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        if (data.error) {
            modalContent.innerHTML = `<p style="color: red;">${data.error}</p>`;
            return;
        }

        // Hiển thị dữ liệu dưới dạng bảng
        let tableHtml = "<table border='1' style='width: 100%; border-collapse: collapse;'>";
        console.log(data.content)
        let totalAmount = 0; // Biến tính tổng tiền

        data.content.forEach((row, index) => {
            tableHtml += "<tr>";

            row.forEach((cell, cellIndex) => {
                if (index === 0) {
                    tableHtml += `<th>${cell}</th>`;
                } else {
                    if (cellIndex === row.length - 1 && typeof cell === "string" && cell.startsWith("http")) {
                        tableHtml += `<td><a href="${cell}" target="_blank">Xem File đính kèm</a></td>`;
                    } else if (cellIndex === 10 || cellIndex === 11) {
                        const formattedNumber = Number(cell).toLocaleString("vi-VN");
                        tableHtml += `<td style="text-align: right;">${formattedNumber}</td>`;

                        if (cellIndex === 11) {
                            totalAmount += Number(cell); // Cộng vào tổng ở cột 11
                        }
                    } else if (cellIndex === 8) {
                        let formattedDate = new Date(cell).toLocaleDateString("vi-VN");
                        tableHtml += `<td>${formattedDate}</td>`;
                    } else {
                        tableHtml += `<td>${cell}</td>`;
                    }
                }
            });

            tableHtml += "</tr>";

        });

        // Thêm dòng Tổng tiền sau khi kết thúc bảng
        if (data.content.length > 1) {
            tableHtml += `
                <tr>
                    <td colspan="11" style="text-align: right; font-weight: bold; font-size: 26px;">Tổng tiền:</td>
                    <td style="text-align: right; font-weight: bold; font-size: 26px;">${totalAmount.toLocaleString("vi-VN")}</td>
                </tr>`;
        }

        tableHtml += "</table>";
        modalContent.innerHTML = tableHtml;

    } catch (error) {
        modalContent.innerHTML = `<p style="color: red;">Lỗi khi tải dữ liệu</p>`;
    }
}

async function sendPrApproval(status) {
    startLoading()
    if (selectedRowData.length === 0) {
        alert("Không có dữ liệu nào được chọn!");
        return;
    }

    let spreadsheetId = selectedRowData[selectedRowData.length - 1]; // Cột cuối cùng là Spreadsheet ID

    let requestData = {
        spreadsheet_id: spreadsheetId,
        data: selectedRowData,
        status: status
    };

    const url = "https://script.google.com/macros/s/AKfycbzylQEB8Q9LkxsJ1DqWpgS-tM3Q1c-sJOyffXKFBWVDOVMMrsi3Gtq7yj0IAceMKk-GwA/exec"; // Thay XXXXX bằng URL Web App của bạn

    await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        // alert(data.message);
        closeModal_pr(); // Đóng modal sau khi gửi
    })
    .catch(error => {
        console.error("Lỗi:", error);
        // alert("Lỗi khi gửi dữ liệu.");
    })
    .finally(() => {
        closeModal_pr();
        load_approval_ticket()
        info("Gửi dữ liệu thành công!");
        endLoading()
    });
}

// Gán hàm cho nút Approve & Reject
document.querySelector(".approve-btn-pr").onclick = () => sendPrApproval("Approved");
document.querySelector(".reject-btn-pr").onclick = () => sendPrApproval("Rejected");

document.querySelectorAll("#dataTable_pr tbody tr").forEach(row => {
    row.addEventListener("click", function() {
        document.querySelectorAll("#dataTable_pr tbody tr").forEach(r => r.classList.remove("selected-row"));
        this.classList.add("selected-row");
    });
});


//* Purchase Order

async function showModal_po() {
    document.getElementById('po-modal').classList.add('show');
    startLoading()
    await Promise.all([load_vendor_pr()]);
    endLoading()
}

async function hideModal_po() {
    document.getElementById('po-modal').classList.remove('show');
    clearPOModal()
}

var filesProcessed_po = false;

function LoadFile_po(event) {
    var files = event.target.files;

    // Giới hạn số lượng tệp
    if (files.length > 3) {
    alert('Bạn chỉ được chọn tối đa 2 tệp.');
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
    // document.getElementById('submitButton_delivery').disabled = true;

    for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Kiểm tra kích thước tệp
    if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Tệp "' + file.name + '" vượt quá 10MB.');
        event.target.value = ''; // Reset input file
        filesProcessed_pr = false;
        // document.getElementById('submitButton_delivery').disabled = true;
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
            document.getElementById('fileData_po').value = JSON.stringify(fileDataArray);
            document.getElementById('mimeType_po').value = JSON.stringify(mimeTypeArray);
            document.getElementById('fileName_po').value = JSON.stringify(fileNameArray);

            filesProcessed_po = true;
            // Enable submit button
            // document.getElementById('submitButton_delivery').disabled = false;
        }
        };
        reader.readAsDataURL(file);
    })(file);
    }
}


async function load_pr_to_po() {
    startLoading()
    return fetch('https://script.google.com/macros/s/AKfycbyUqg5vHiCN6DfJ0JsZR_S7cOyhHeNSIGQ_YQug5hcvxRCLsK7sns9zkHYtCWUc0yti/exec')
        .then(res => res.json())
        .then(data => {
            pr_to_po_data = data.content;
            console.log("Danh sách PR cần tạo PR đã tải xong.");
            add_po_to_po_table(pr_to_po_data);
            calculateTotalPricePO()
            endLoading()
        });
}


function add_po_to_po_table(data) {
    const tableBody = document.querySelector("#poTable tbody");
    tableBody.innerHTML = "";

    data.forEach(row => {
        let newRow = document.createElement("tr");

        row.forEach((cell, index) => {
            let newCell = document.createElement("td");

            if (index === 2) {
                let link = document.createElement("a");
                link.href = "#";
                link.textContent = cell;
                link.style.color = "blue";
                link.style.cursor = "pointer";

                link.addEventListener("click", function () {
                    console.log(row);
                    click_pr_to_po(row);
                });

                newCell.appendChild(link);
            } 
            else if (index === 8) {
                let link = document.createElement("a");
                link.href = "#";
                link.textContent = "Xem thông tin PR";
                link.style.color = "green";
                link.style.cursor = "pointer";

                link.addEventListener("click", async function () {
                    window.selectedPoRow = row; // Lưu row hiện tại
                    const prData = await getPrInfo(cell); // cell chính là spreadsheetId
                    showPrInfoInNewTab(prData, row); // Gọi hàm hiển thị modal
                });

                newCell.appendChild(link);
            } 
            else {
                newCell.textContent = cell;
            }

            newRow.appendChild(newCell);
        });

        tableBody.appendChild(newRow);
    });
}

function showPrInfoModal(data) {
    const modal = document.getElementById("prInfoModal");
    const modalTableBody = modal.querySelector("#modalTable tbody");
    modalTableBody.innerHTML = "";

    // Header (bỏ cột file đính kèm đầu tiên ở index 12)
    const headers = [
        "STT", "Loại vật tư", "Tên vật tư", "Mã vật tư", "Thông số kỹ thuật", "Đơn vị",
        "Tên khách hàng", "Số PO của khách hàng", "Ngày cần có hàng", "Đơn giá", "Số lượng", "Tổng tiền",
        "PR #", "Người yêu cầu", "Bộ phận", "Chi nhánh", "Mục đích mua hàng", "Người approve", "File đính kèm"
    ];

    const headerRow = document.createElement("tr");
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    modalTableBody.appendChild(headerRow);

    data.forEach(row => {
        const tr = document.createElement("tr");

        let values;
        if (Array.isArray(row)) {
            values = row.filter((_, i) => i !== 12); // bỏ index 12 nếu là mảng
        } else {
            const entries = Object.entries(row);
            entries.splice(12, 1); // bỏ phần tử thứ 13
            values = entries.map(entry => entry[1]); // lấy giá trị
        }
        // Xóa cột cuối 
        values.pop(); // Bỏ cột cuối cùng (cột file đính kèm)
        values.forEach((value, i) => {
            const td = document.createElement("td");

            // Nếu là cột cuối cùng => hiển thị button mở link
            if (i === 18) {
                const button = document.createElement("button");
                button.textContent = "Xem file";
                button.style.padding = "5px 10px";
                button.style.cursor = "pointer";
                button.onclick = () => window.open(value, "_blank");
                td.appendChild(button);
            } else if (i === 8) {
                if (value) {
                    const date = new Date(value);
                    date.setHours(date.getHours() + 7); // cộng thêm 7h
                    td.textContent = date.toISOString().slice(0, 10); // lấy YYYY-MM-DD
                } else {
                    td.textContent = "";
                }
            } else if (i === 9 || i === 10 || i === 11) {
                td.textContent = typeof value === "number"
                ? value.toLocaleString("en-US")
                : value || "";
            } else {
                td.textContent = value;
            }

            tr.appendChild(td);
        });

        modalTableBody.appendChild(tr);
    });

    modal.style.display = "block";
}

function showPrInfoInNewTab(data, row) {
    const headers = [
        "STT", "Loại vật tư", "Tên vật tư", "Mã vật tư", "Thông số kỹ thuật", "Đơn vị",
        "Tên khách hàng", "Số PO của khách hàng", "Ngày cần có hàng", "Đơn giá", "Số lượng", "Tổng tiền",
        "PR #", "Người yêu cầu", "Bộ phận", "Chi nhánh", "Mục đích mua hàng", "Người approve", "File đính kèm"
    ];

    const title = row[2]; // Lấy tên PO từ dòng đã chọn

    let html = `
    <html>
    <head>
        <title>${title}</title>
        <style>
            body { font-family: Arial, sans-serif; padding: 20px; background: #f8f9fa; }
            table { width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px; }
            th { background-color: #009688; color: white; padding: 12px; text-align: left; font-weight: bold; border-bottom: 2px solid #ddd; white-space: nowrap; }
            td { padding: 12px; border-bottom: 1px solid #f0f0f0; white-space: nowrap; }
            tr:nth-child(even):not(:first-child) { background-color: #f9f9f9; }
            tr:hover { background-color: #f1f1f1; cursor: default; }
            button { padding: 10px 20px; margin: 10px 10px 0 0; font-size: 14px; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.2s ease; background: #28a745; color: white; }
            button:hover { background-color: #218838; }
        </style>
    </head>
    <body>
        <h2>${title}</h2>
        <div style="overflow-x: auto;">
        <table>
            <thead>
                <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
            </thead>
            <tbody>
    `;
    // delete last column

    data.forEach((row, idx) => {
        let values = Array.isArray(row) ? row.filter((_, i) => i !== 12) : Object.values(row).filter((_, i) => i !== 12);
        const fileLink = Array.isArray(row) ? row[18] : Object.values(row)[18];

        html += `<tr>`;
        values.forEach((val, i) => {
            if (i === 8) {
                if (val) {
                    const date = new Date(val);
                    date.setHours(date.getHours() + 7);
                    val = date.toISOString().slice(0, 10);
                } else {
                    val = "";
                }
            } else if (i === 9 || i === 10 || i === 11) {
                val = typeof val === "number" ? val.toLocaleString("en-US") : val || "";
            }

            if (i === 18) {
                html += `<td><button onclick="window.open('${val}', '_blank')">Xem file</button></td>`;
            } else {
                html += `<td>${val}</td>`;
            }

            if (i === 19) {
                html += `<td></td>`;
            }
        });
        html += `</tr>`;
    });

    html += `</tbody></table></div></body></html>`;

    const newTab = window.open();
    newTab.document.write(html);
    newTab.document.close();
}

document.getElementById("processPrInfo").addEventListener("click", () => {
    if (window.selectedPoRow) {
        click_pr_to_po(window.selectedPoRow);
        closePrInfoModal(); // Ẩn modal nếu muốn
    } else {
        alert("Không có dữ liệu PR được chọn.");
    }
});


async function getPrInfo(spreadsheetId) {
    startLoading()
    const url = `https://script.google.com/macros/s/AKfycbyxF9X6esF4wRz4mYwaQ5A96KBgmIZ6O2abtev54sRvojuORZG3fDLi7jD5faVshocdPg/exec?spreadsheet_id=${spreadsheetId}`; // Thay thế bằng URL thực tế

    try {
        let response = await fetch(url);
        let data = await response.json(); // Chuyển dữ liệu JSON
        console.log(data); // Hiển thị dữ liệu trong console
        return data
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
    } finally {
        endLoading()
    }
}

function showModalWithData(values) {
    const modalBody = document.querySelector('#modalTable tbody');
    modalBody.innerHTML = '';
  
    values.forEach(row => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const td = document.createElement('td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      modalBody.appendChild(tr);
    });
  
    document.getElementById('prInfoModal').style.display = 'block';
  }

  function attachSheetLinks() {
    document.querySelectorAll('.view-pr').forEach(link => {
      link.addEventListener('click', async (e) => {
        e.preventDefault();
        const sheetId = link.dataset.sheetId;
        const data = await getPrInfo(sheetId);
        if (data && data.length > 0) {
          showModalWithData(data);
        }
      });
    });
  }
  

function closePrInfoModal() {
    document.getElementById('prInfoModal').style.display = 'none';
  }


async function click_pr_to_po(row) {
    showModal_po();
    document.getElementById("po_po_label").textContent = row[2];
    document.getElementById("po_wh_label").textContent = row[2].split("-")[1];

    document.getElementById("po_pr_operator_label").textContent = row[3];
    document.getElementById("po_sheet_id_label").textContent = row[8];

    if (!row[8]) {
        console.error("spreadsheet_id không hợp lệ");
        return;
    }

    const url = `https://script.google.com/macros/s/AKfycbyp22WPvm-b3FUOk49jyhNWWeDYnylJL5f8Zhd7VsWrd6tVOroy5bGNsiV8TNGP3D-N/exec?spreadsheet_id=${row[8]}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        
        if (!data.content || !Array.isArray(data.content)) {
            console.error("Dữ liệu không hợp lệ:", data);
            return;
        }
        console.log(data.content)
        const filteredData = data.content.filter(row => row[20] !== "Done"); // Bỏ dòng header
        document.getElementById("po_availability_materials_date").value = filteredData[1][8].slice(0, 10); // Ngày cần có hàng
        const data_pr = filteredData.map((row, index) => [
            row[0],      // Loại vật tư
            row[1],      // Tên vật tư
            row[2],      // Mã vật tư
            "",          // Tên vật tư (tiếng Việt) - Input (400px)
            row[3],      // Đơn vị
            row[5],     
            "",      // Đơn vị tiền tệ
            "",      // giá bán
            "",     // Xuất xứ hàng hóa
            "",     // Ghi chú
            "",          // SL cần mua - Input (150px)
            "",          // Đơn giá - Input (150px)
            "",          // Thành tiền - Tự động tính toán
            "",          // % Thuế GTGT - Select (8% hoặc 10%)
            ""           // Tổng tiền - Tự động tính toán
        ]);

        data_pr.shift(); // Bỏ dòng header

        const tableBody = document.querySelector("#po_materialTable tbody");
        tableBody.innerHTML = "";
        

        data_pr.forEach(row => {
            let newRow = document.createElement("tr");

            row.forEach((cell, index) => {
                let newCell = document.createElement("td");

                if ([3, 7, 8, 9, 10, 14].includes(index)) {
                    // Tạo input cho các cột 3 (Tên vật tư tiếng Việt), 9 (SL cần mua), 10 (Đơn giá)
                    let input = document.createElement("input");
                    input.type = "text";
                    input.value = cell;
                    input.style.width = index === 3 ? "400px" : "150px";

                    // Format số khi nhập liệu
                    if ([7, 9, 10].includes(index)) {
                        // Xử lý khi người dùng đang gõ
                        input.addEventListener("input", function () {
                            let raw = input.value.replace(/[^0-9.]/g, "");
                            let parts = raw.split(".");
                    
                            if (parts.length > 2) {
                                raw = parts[0] + "." + parts.slice(1).join("");
                            }
                    
                            input.value = raw; // Không định dạng tại đây
                            updateCalculatedFields(newRow);
                        });
                    
                        // Định dạng khi người dùng rời ô input
                        input.addEventListener("blur", function () {
                            let number = parseFloat(input.value.replace(/,/g, ""));
                            if (!isNaN(number)) {
                                input.value = number.toLocaleString("en-US", {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 2
                                });
                            }
                        });
                    }                    

                    newCell.appendChild(input);
                } else if (index === 12) {
                    // Tạo dropdown cho % Thuế GTGT
                    let select = document.createElement("select");
                    select.style.width = "150px";
                    select.style.border = "1px solid #ccc";
                    ["0%", "3%","5%", "8%", "10%"].forEach(optionValue => {
                        let option = document.createElement("option");
                        option.value = optionValue.replace("%", ""); // Lưu giá trị 8 hoặc 10
                        option.textContent = optionValue;
                        option.style.textAlign = "center";
                        // i want draw border color like input above
                        option.style.fontWeight = "bold";
                        select.appendChild(option);
                    });

                    // Khi thay đổi % Thuế GTGT -> Cập nhật tổng tiền
                    select.addEventListener("change", function () {
                        updateCalculatedFields(newRow);
                    });

                    newCell.appendChild(select);
                } else if (index === 6) {
                    // Tạo dropdown cho % Thuế GTGT
                    let select = document.createElement("select");
                    select.style.width = "150px";
                    ["VND","USD","JPY","SGD","RMB", "EUR"].forEach(optionValue => {
                        let option = document.createElement("option");
                        // option.value = optionValue.replace("%", ""); // Lưu giá trị 8 hoặc 10
                        option.textContent = optionValue;
                        option.style.textAlign = "center";
                        select.appendChild(option);
                    });
                    newCell.appendChild(select);
                } else if ([11, 13].includes(index)) {
                    // Cột tự động tính toán (Thành tiền, Tổng tiền)
                    newCell.textContent = "0"; // Giá trị mặc định ban đầu
                } else {
                    newCell.textContent = cell;
                }

                newRow.appendChild(newCell);
            });

            // Thêm cột Action chứa nút Xóa
            let actionCell = document.createElement("td");
            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Xóa";
            deleteButton.style.backgroundColor = "red";
            deleteButton.classList.add("delete-btn");
            deleteButton.onclick = function () {
                newRow.remove();
                calculateTotalPricePO()
            };

            actionCell.appendChild(deleteButton);
            newRow.appendChild(actionCell);

            tableBody.appendChild(newRow);
        });

    } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
    }
}

/**
 * Hàm cập nhật giá trị tự động cho Thành tiền (index 11) và Tổng tiền (index 13)
 */
function updateCalculatedFields(row) {
    let slCanMuaInput = row.children[9].querySelector("input"); // SL cần mua
    let donGiaInput = row.children[10].querySelector("input");  // Đơn giá
    let thanhTienCell = row.children[11];  // Thành tiền
    let thueSelect = row.children[12].querySelector("select"); // % Thuế GTGT
    let tongTienCell = row.children[13];  // Tổng tiền

    // Chuyển đổi về số thập phân
    let slCanMua = parseFloat(slCanMuaInput?.value.replace(/,/g, "")) || 0;
    let donGia = parseFloat(donGiaInput?.value.replace(/,/g, "")) || 0;
    let phanTramThue = parseFloat(thueSelect?.value) || 0;

    // Tính toán Thành tiền
    let thanhTien = slCanMua * donGia;
    thanhTienCell.textContent = thanhTien.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // Tính toán Tổng tiền
    let tongTien = thanhTien + (thanhTien * phanTramThue / 100);
    tongTienCell.textContent = tongTien.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    calculateTotalPricePO();
}

// Search Company

// Gán sự kiện input với debounce để giảm số lần tìm kiếm
document.getElementById("po_company_input").addEventListener("input", debounce(handleMaterialTypeInput_po_vendor, 400));

function handleMaterialTypeInput_po_vendor(event) {
    const searchTerm = removeAccents(event.target.value).toUpperCase(); // Chuyển đổi thành uppercase không dấu
    const results = vendor_pr_data.filter(item => removeAccents(item[0]).toUpperCase().includes(searchTerm))// && item[0] === wh_value); // Tìm kiếm không dấu
    // Hiển thị kết quả tìm kiếm từ cột vendor_data[1]
    if (results.length > 0) {
        showSearchResults_po_vendor(results.map(item2 => item2[0]), results); // Truyền danh sách tên vật tư và dữ liệu gốc
    } else if (document.getElementById("po_company_input").value === "") {
        hideDropdown_po_vendor();
    } else {
        hideDropdown_po_vendor(); // Ẩn dropdown nếu không có kết quả
        console.log("Không tìm thấy kết quả.");

    }
}

function hideDropdown_po_vendor() {
    const dropdown = document.getElementById("dropdown_po_vendor");
    dropdown.style.display = 'none';
}

function showSearchResults_po_vendor(displayList, fullData) {
    const dropdown = document.getElementById("dropdown_po_vendor");
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
            dropdown.style.display = 'none'; // Ẩn dropdown sau khi chọn
            //show all row of item was selected
            document.getElementById("po_company_input").value = item;
            // console.log all row of item was selected
            console.log(fullData[originalIndex]);
            document.getElementById("po_tax_input").value = fullData[originalIndex][11];
            document.getElementById("po_bank_acc_input").value = fullData[originalIndex][6];
            document.getElementById("po_bank_name_input").value = fullData[originalIndex][4];
            document.getElementById("po_warranty_input").value = fullData[originalIndex][9];
            document.getElementById("po_lead_time_input").value = fullData[originalIndex][8];
            document.getElementById("po_payment_terms_input").value = fullData[originalIndex][7];
        });

        dropdown.appendChild(dropdownItem);
    });
}

function calculateTotalPricePO() {
    let total = 0;
    
    // Lấy bảng theo ID
    let table = document.getElementById("po_materialTable");
    let tbody = table.getElementsByTagName("tbody")[0];
    let rows = tbody.getElementsByTagName("tr");
    
    // Duyệt từng dòng để lấy giá trị từ cột "Tổng tiền"
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        let totalPriceCell = cells[13]; // Cột "Tổng tiền" (chỉ mục 13, dựa trên <th>)
        
        if (totalPriceCell) {
            let value = parseFloat(totalPriceCell.innerText.replace(/,/g, '')) || 0;
            total += value;
        }
    }
    
    // Hiển thị tổng giá trị
    document.getElementById("po_total_price").innerText = `Tổng giá trị: ${total.toLocaleString('en-US')}`;
}

function getTablePOData() {
    let table = document.getElementById("po_materialTable");
    let thead = table.getElementsByTagName("thead")[0];
    let headerCells = thead.getElementsByTagName("th");
    let tbody = table.getElementsByTagName("tbody")[0];
    let rows = tbody.getElementsByTagName("tr");
    let tableData = [];

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        let rowData = {};

        for (let j = 0; j < cells.length; j++) {
            let cell = cells[j];
            let value = "";

            let input = cell.querySelector("input");
            if (input) {
                value = input.value.trim();
            } else {
                let select = cell.querySelector("select");
                if (select) {
                    value = select.value.trim();
                } else {
                    value = cell.innerText.trim();
                }
            }

            // Kiểm tra cột bắt buộc (trừ cột 3, 7, 8, 14)
            if (![3, 7, 8, 14].includes(j) && !value) {
                let columnName = headerCells[j] ? headerCells[j].innerText.trim() : `cột ${j + 1}`;
                alert(`Dòng ${i + 1} cột ${columnName} là bắt buộc nhập.`);
                return null;
            }

            if ([7, 8, 9, 10, 11, 13].includes(j)) {
                value = parseFloat(value.replace(/,/g, '')) || 0;
            }

            rowData[`col_${j}`] = value;
        }

        rowData["po_po_label"] = document.getElementById("po_po_label").innerText.trim();
        rowData["po_wh_label"] = document.getElementById("po_wh_label").innerText.trim();
        rowData["po_expect_delivery_date"] = document.getElementById("po_expect_delivery_date").value.trim();
        rowData["po_payment_date"] = document.getElementById("po_payment_date").value.trim();
        rowData["po_company_input"] = document.getElementById("po_company_input").value.trim();
        rowData["po_address_input"] = document.getElementById("po_address_input").value.trim();
        rowData["po_tax_input"] = document.getElementById("po_tax_input").value.trim();
        rowData["po_bank_add_input"] = document.getElementById("po_bank_add_input").value.trim();
        rowData["po_bank_acc_input"] = document.getElementById("po_bank_acc_input").value.trim();
        rowData["po_bank_name_input"] = document.getElementById("po_bank_name_input").value.trim();
        rowData["po_swift_input"] = document.getElementById("po_swift_input").value.trim();
        rowData["po_delivery_address_input"] = document.getElementById("po_delivery_address_input").value.trim();
        rowData["po_delivery_to_input"] = document.getElementById("po_delivery_to_input").value.trim();
        rowData["po_atts_input"] = document.getElementById("po_atts_input").value.trim();
        rowData["po_phone_input"] = document.getElementById("po_phone_input").value.trim();
        rowData["po_ship_via_input"] = document.getElementById("po_ship_via_input").value.trim();
        rowData["po_delivery_terms_input"] = document.getElementById("po_delivery_terms_input").value.trim();
        rowData["po_payment_terms_input"] = document.getElementById("po_payment_terms_input").value.trim();
        rowData["po_lead_time_input"] = document.getElementById("po_lead_time_input").value.trim();
        rowData["po_warranty_input"] = document.getElementById("po_warranty_input").value.trim();
        rowData["po_ship_value_input"] = document.getElementById("po_ship_value_input").value.trim();
        rowData['wh_and_dept'] = "RMG-PO-" + document.getElementById("po_po_label").innerText.trim().split("-")[1] + "-" + sessionStorage.getItem("dept");
        rowData['pr_creator'] = document.getElementById("po_pr_operator_label").textContent;
        rowData['sheet_id'] = document.getElementById("po_sheet_id_label").textContent;
        rowData['po_creator'] = sessionStorage.getItem("fullname");
        rowData['po_approver'] = sessionStorage.getItem("po_approver");

        tableData.push(rowData);
    }

    return tableData;
}


async function sendPO() {
    const expt_date = document.getElementById("po_expect_delivery_date").value;
    const pay_date = document.getElementById("po_payment_date").value;
    const company = document.getElementById("po_company_input").value;

    if (!expt_date || !pay_date || !company) {
        alert("Vui lòng nhập đầy đủ thông tin bắt buộc.");
        return;
    }
    
    let tableData = getTablePOData();
    if (!tableData) {
        return; // Dừng lại nếu thiếu dữ liệu
    }
    startLoading()

    let formData = new FormData();
    formData.append("data", JSON.stringify(tableData));

    // Lấy thông tin file từ input hidden
    let fileData = document.getElementById("fileData_po").value;
    let mimeType = document.getElementById("mimeType_po").value;
    let fileName = document.getElementById("fileName_po").value;

    formData.append("fileData", fileData);
    formData.append("mimeType", mimeType);
    formData.append("fileName", fileName);

    await fetch("https://script.google.com/macros/s/AKfycbzUf7fKnUMTZEW62ot-qXKptv7yfp9yahH8HCEbJLmRtvdQb9AFi4SPP7C0G-tXtYP1IQ/exec", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));

    hideModal_po()
    // endLoading()
    load_pr_to_po()
    info("Dữ liệu đã được gửi thành công!");
}

function clearPOModal() {
    // Clear labels
    document.getElementById("po_po_label").innerText = "";
    document.getElementById("po_wh_label").innerText = "";
    document.getElementById("po_pr_operator_label").innerText = "";
    document.getElementById("po_sheet_id_label").innerText = "";
    
    // Clear input fields
    document.getElementById("po_availability_materials_date").value = "";
    document.getElementById("po_expect_delivery_date").value = "";
    document.getElementById("po_payment_date").value = "";
    document.getElementById("po_company_input").value = "";
    document.getElementById("po_address_input").value = "";
    document.getElementById("po_tax_input").value = "";
    document.getElementById("po_bank_add_input").value = "";
    document.getElementById("po_bank_acc_input").value = "";
    document.getElementById("po_bank_name_input").value = "";
    document.getElementById("po_swift_input").value = "";
    document.getElementById("po_delivery_to_input").value = "";
    document.getElementById("po_atts_input").value = "";
    document.getElementById("po_phone_input").value = "";
    document.getElementById("po_ship_via_input").value = "";
    document.getElementById("po_delivery_terms_input").value = "";
    document.getElementById("po_payment_terms_input").value = "";
    document.getElementById("po_lead_time_input").value = "";
    document.getElementById("po_warranty_input").value = "";
    document.getElementById("po_ship_value_input").value = "";
    
    // Clear file inputs
    document.getElementById("fileUpload_po").value = "";
    document.getElementById("fileData_po").value = "";
    document.getElementById("mimeType_po").value = "";
    document.getElementById("fileName_po").value = "";
    
    // Clear table body
    document.querySelector("#po_materialTable tbody").innerHTML = "";
    
    // Reset total price label
    document.getElementById("po_total_price").innerText = "Tổng giá trị: -";
}

async function sendPoApproval(status) {
    startLoading()
    if (selectedRowData.length === 0) {
        alert("Không có dữ liệu nào được chọn!");
        return;
    }

    let spreadsheetId = selectedRowData[selectedRowData.length - 1]; // Cột cuối cùng là Spreadsheet ID

    let requestData = {
        data: selectedRowData,
        status: status
    };

    const url = "https://script.google.com/macros/s/AKfycbzylQEB8Q9LkxsJ1DqWpgS-tM3Q1c-sJOyffXKFBWVDOVMMrsi3Gtq7yj0IAceMKk-GwA/exec"; // Thay XXXXX bằng URL Web App của bạn

    await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        closeModal_pr(); // Đóng modal sau khi gửi
    })
    .catch(error => {
        // console.error("Lỗi:", error);
        alert("Lỗi khi gửi dữ liệu.");
    })
    .finally(() => {
        closeModal_pr();
        load_approval_ticket()
        info("Gửi dữ liệu thành công!");
        endLoading()
    });
}

function approvePO() {
    sendApprovalRequest("Approved", "");
}

function rejectPO() {
    // Hiển thị ô nhập lý do Reject
    const rejectSection = document.getElementById("reject_reason_section");
    
    if (rejectSection.style.display === "none") {
        rejectSection.style.display = "block";
    } else {
        const reason = document.getElementById("reject_reason").value.trim();
        if (!reason) {
            alert("Vui lòng nhập lý do từ chối.");
            return;
        }
        sendApprovalRequest("Rejected", reason);
    }
}

function sendApprovalRequest(status, reason) {
    GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwiE0JdeVF9wdxGDJ5V_fay65dZwUGIw2n1TQuv54uL_eykf_FfhEHANMB-qGpKA9UKDQ/exec"
    const reason_value = document.getElementById("reject_reason").value
    if (status === "Rejected" && !reason_value) {
        alert("Vui lòng chọn lí do Reject");
        return;
    }
    startLoading()
    const poData = {
        date: document.getElementById("po_date").textContent,
        time: document.getElementById("po_time").textContent,
        po_number: document.getElementById("po_number").textContent,
        pr_number: document.getElementById("po_pr").textContent,
        vendor: document.getElementById("po_vendor").textContent,
        po_creator: document.getElementById("po_creator").textContent,
        pr_creator: document.getElementById("po_pr_creator").textContent,
        total_amount: document.getElementById("po_total").textContent,

        pdf_link: document.getElementById("po_pdf_view").getAttribute("data-url") || "", // Lấy link PDF
        files_link: document.getElementById("po_fils_view").getAttribute("data-url") || "", // Lấy link Files
        status: status,
        reason: reason
    };

    fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(poData)
    }).then(() => {
        info(`PO ${status} thành công!`);
        closeModal_po();
        hide_reject_section()
        po_1_approval()
    }).catch(error => {
        console.error("Lỗi khi gửi dữ liệu:", error);
        alert("Có lỗi xảy ra! Vui lòng thử lại.");
    });
}

function hide_reject_section() {
    const rejectSection = document.getElementById("reject_reason_section");
    if (rejectSection) {
      rejectSection.style.display = "none";
    }
  
    // Optional: reset lại dropdown nếu muốn
    const rejectSelect = document.getElementById("reject_reason");
    if (rejectSelect) {
      rejectSelect.value = "";
    }
  }
  

// Gắn sự kiện cho nút Approve và Reject
document.getElementById("po_approve").addEventListener("click", approvePO);
document.getElementById("po_reject").addEventListener("click", rejectPO);

// PO RELEASE

async function get_po_need_to_release() {
    startLoading()
    await Promise.all([load_po_info(),load_purchase_order(), load_po_need_to_release()]); 
    endLoading()

    const tableBody = document.querySelector("#po_release_table tbody");
    tableBody.innerHTML = ""; // Xóa dữ liệu cũ trước khi thêm mới

    po_need_to_release_list.forEach((rowData, rowIndex) => {
        const row = document.createElement("tr");
        console.log(row)

        // Thêm các ô dữ liệu vào hàng
        row.innerHTML = `
            <td><a href="#" class="po-link" data-index="${rowIndex}">${rowData[0]}</a></td>
            <td>${rowData[1]}</td>
            <td>${rowData[2]}</td>
            <td>${rowData[3]}</td>
            <td>${rowData[4]}</td>
            <td>${rowData[5]}</td>
            <td>${rowData[6]}</td>
            <td><button class="view-pdf-btn" data-link="${rowData[7]}">Xem PDF</button></td>
        `;

        tableBody.appendChild(row);
    });

    // Xử lý sự kiện click vào PO# để log dữ liệu hàng
    document.querySelectorAll(".po-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn mở link
            const index = this.getAttribute("data-index");
            console.log("Dữ liệu hàng:", po_need_to_release_list[index]);
            document.getElementById("pr_po_release").value = po_need_to_release_list[index][1];
            document.getElementById("po_po_release").value = po_need_to_release_list[index][0];
            document.getElementById("po_creator_po_release").value = po_need_to_release_list[index][3];
            document.getElementById("vendor_po_release").value = po_need_to_release_list[index][2];
            document.getElementById("total_value_po_release").value = po_need_to_release_list[index][6].toLocaleString('en-US');
            document.getElementById("remain_pay_po_release").value = po_need_to_release_list[index][6].toLocaleString('en-US');
            document.getElementById("pre_pay_po_release").value = 0;

            const found_delivery_date = poInfo_data.find(row => row[2] === po_need_to_release_list[index][0]);
            const delivery_date = found_delivery_date ? found_delivery_date[29] : ""; // Ngày cần có hàng
            // cần +7 giờ, vì VN là GMT +7
            const date2 = new Date(delivery_date);
            date2.setHours(date2.getHours() + 7); // Cộng thêm 7 giờ

            const formattedDate = date2.toISOString().slice(0, 10); // Định dạng lại thành YYYY-MM-DD
            document.getElementById("expect_recv_date_po_release").value = formattedDate; // Ngày cần có hàng
            
        });
    });

    // Xử lý sự kiện click của nút "Xem PDF"
    document.querySelectorAll(".view-pdf-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Ngăn việc kích hoạt sự kiện click của hàng
            window.open(this.getAttribute("data-link"), "_blank");
        });
    });
}

document.getElementById("pre_pay_po_release").addEventListener("input", function () {
    let totalValue = parseFloat(document.getElementById("total_value_po_release").value.replace(/,/g, "")) || 0;
    let prePay = parseFloat(this.value.replace(/,/g, "")) || 0;

    if (prePay > totalValue) {
        alert("Chi phí thanh toán trước không thể lớn hơn tổng giá trị PO!");
        this.value = ""; // Xóa giá trị nhập sai
        document.getElementById("remain_pay_po_release").value = ""; // Xóa ô còn lại
    } else {
        let remainPay = totalValue - prePay;

        // Định dạng số có dấu phẩy ngăn cách hàng nghìn
        this.value = prePay.toLocaleString('en-US');
        document.getElementById("remain_pay_po_release").value = remainPay.toLocaleString('en-US');
    }
});


var filesProcessed_po_release = false;

function LoadFile_po_release(event) {
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
    // document.getElementById('submitButton_delivery').disabled = true;

    for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Kiểm tra kích thước tệp
    if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Tệp "' + file.name + '" vượt quá 10MB.');
        event.target.value = ''; // Reset input file
        filesProcessed_po_release = false;
        // document.getElementById('submitButton_delivery').disabled = true;
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
            document.getElementById('fileData_po_release').value = JSON.stringify(fileDataArray);
            document.getElementById('mimeType_po_release').value = JSON.stringify(mimeTypeArray);
            document.getElementById('fileName_po_release').value = JSON.stringify(fileNameArray);

            filesProcessed_po_release = true;
            // Enable submit button
            // document.getElementById('submitButton_delivery').disabled = false;
        }
        };
        reader.readAsDataURL(file);
    })(file);
    }
}

let vendor_info = [];
async function getSpreadsheetData(spreadsheetId) {
    const url = `https://script.google.com/macros/s/AKfycbyxF9X6esF4wRz4mYwaQ5A96KBgmIZ6O2abtev54sRvojuORZG3fDLi7jD5faVshocdPg/exec?spreadsheet_id=${spreadsheetId}`; // Thay thế bằng URL thực tế

    try {
        let response = await fetch(url);
        let data = await response.json(); // Chuyển dữ liệu JSON
        console.log(data); // Hiển thị dữ liệu trong console
        vendor_info = data;
        return data
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
    }
}

document.getElementById("submitButton_po_release").addEventListener("click", async function() {
    const date_de = document.getElementById("expect_recv_date_po_release").value;

    if (date_de === "") {
        alert("Vui lòng nhập ngày nhận hàng dự kiến!");
        return;
    }
    // Hiển thị loading khi bắt đầu gửi dữ liệu
    startLoading()

    const poNumber = document.getElementById("po_po_release").value;
    const found_po = po_data_raw.find(row => row[2] === poNumber);
    console.log(found_po)
    const sheet_id = found_po[10];
    const pr_creator2 = found_po[6];
    

    // Khởi tạo giá trị mặc định để tránh lỗi
    let vendor_addr = "";
    let vendor_phone = "";
    let vendor_bank_name = "";
    let vendor_bank_acc = "";
    let payment_date2 = "";


    try {
        const spreadsheetData = await getSpreadsheetData(sheet_id); // Lưu kết quả vào biến
        console.log(spreadsheetData)

        if (!spreadsheetData || spreadsheetData.length === 0) {
            console.error("Dữ liệu trả về rỗng hoặc không hợp lệ.");
            alert("Dữ liệu không hợp lệ hoặc không có dữ liệu!");
        } else {
            // Trích xuất dữ liệu từ JSON nhận được
            vendor_addr = spreadsheetData[0]["po_address_input"] || "";
            vendor_phone = spreadsheetData[0]["po_phone_input"] || "";
            vendor_bank_name = spreadsheetData[0]["po_bank_name_input"] || "";
            vendor_bank_acc = spreadsheetData[0]["po_bank_acc_input"] || "";
            payment_date2 = spreadsheetData[0]["po_payment_date"] || "";

        }
    } catch (error) {
        alert("Lỗi khi lấy dữ liệu từ Google Sheets: " + error.message);
        console.error("Lỗi khi lấy dữ liệu từ Google Sheets:", error);
        endLoading()
    }

    let formData = {
        pr: document.getElementById("pr_po_release").value,
        po: document.getElementById("po_po_release").value,
        po_creator: document.getElementById("po_creator_po_release").value,
        vendor: document.getElementById("vendor_po_release").value,
        total_value: document.getElementById("total_value_po_release").value,
        pre_pay: document.getElementById("pre_pay_po_release").value,
        remain_pay: document.getElementById("remain_pay_po_release").value,
        expect_recv_date: document.getElementById("expect_recv_date_po_release").value,
        content: document.getElementById("content_po_release").value,
        operator: sessionStorage.getItem("fullname"),
        addr: vendor_addr,
        phone: vendor_phone,
        bank_name: vendor_bank_name,
        bank_acc: vendor_bank_acc,
        pr_creator: pr_creator2,
        payment_date: payment_date2,
        files: [] // Chứa dữ liệu file
    };

    let formData2 = {
        pr: document.getElementById("pr_po_release").value,
        po: document.getElementById("po_po_release").value,
        po_creator: document.getElementById("po_creator_po_release").value,
        pr_creator: pr_creator2,
        vendor: document.getElementById("vendor_po_release").value,
        total_value: document.getElementById("total_value_po_release").value,
        pre_pay: 0,
        remain_pay: document.getElementById("remain_pay_po_release").value,
        expect_recv_date: document.getElementById("expect_recv_date_po_release").value,
        content: document.getElementById("content_po_release").value,
        operator: sessionStorage.getItem("fullname"),
        addr: vendor_addr,
        phone: vendor_phone,
        bank_name: vendor_bank_name,
        bank_acc: vendor_bank_acc,
        payment_date: payment_date2,
        
        files: [] // Dữ liệu file upload
    };

    let fileInput = document.getElementById("fileUpload_po_release");
    if (fileInput.files.length > 0) {
        let filePromises = [];

        for (let file of fileInput.files) {
            filePromises.push(new Promise((resolve) => {
                let reader = new FileReader();
                reader.onload = function(event) {
                    resolve({
                        name: file.name,
                        type: file.type,
                        data: event.target.result.split(",")[1] // Chỉ lấy phần base64
                    });
                };
                reader.readAsDataURL(file);
            }));
        }

        // 📂 Xử lý file upload (chuyển thành base64)
        let fileInput2 = document.getElementById("fileUpload_po_release");
        if (fileInput2.files.length > 0) {
            for (let file of fileInput2.files) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                await new Promise(resolve => {
                    reader.onload = function () {
                        let base64 = reader.result.split(",")[1]; // Lấy phần base64 sau dấu ","
                        formData2.files.push({
                            fileName: file.name,
                            mimeType: file.type,
                            fileData: base64
                        });
                        resolve();
                    };
                });
            }
        }

        Promise.all(filePromises).then(filesBase64 => {
            formData.files = filesBase64;

            const tra_truoc = document.getElementById("pre_pay_po_release").value
            if ( tra_truoc === "" || tra_truoc === "0" || tra_truoc === 0) {
                console.log("Skip Pre-payment")
                Promise.all([
                    sendSkipPayment(formData2),
                    sendPoRelease(formData)
                ])
                .then(() => {
                    console.log("Cả hai hàm đã hoàn thành!");
                })
            } else {
                console.log("Process Pre-payment")
                sendPoRelease(formData);
            }
        });
    } else {
        const tra_truoc = document.getElementById("pre_pay_po_release").value
        if ( tra_truoc === "" || tra_truoc === "0" || tra_truoc === 0) {
            console.log("Skip Pre-payment")
            Promise.all([
                sendSkipPayment(formData2),
                sendPoRelease(formData)
            ])
            .then(() => {
                console.log("Cả hai hàm đã hoàn thành!");
            })
        } else {
            console.log("Process Pre-payment")
            sendPoRelease(formData);
        }
        
    }
});

async function sendSkipPayment(formData) {
    const url = "https://script.google.com/macros/s/AKfycbzizLZKv-ahyrZpHTJxuSyMnfVJ9-cscB0gyeEmz3dqeScP72E4ZXVensa1uaQxCS9iRw/exec";
    try {
        await fetch(url, {
            method: "POST",
            mode: 'no-cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        // Với no-cors, không thể kiểm tra phản hồi, giả định thành công
        // info("Dữ liệu đã gửi thành công!");
        clearForm();
        get_po_need_to_release();
    } catch (error) {
        alert("Đã xảy ra lỗi khi gửi dữ liệu!");
        console.error("Lỗi khi gửi dữ liệu:", error);
    } finally {
        endLoading()
    }
}


// Hàm gửi dữ liệu và xử lý trạng thái loading
function sendPoRelease(formData) {
    fetch("https://script.google.com/macros/s/AKfycbytNjD6aviiHownxCjor4q_8jqoOB4VuZ1AwsY7Y2BC7-sO0Ic9sKPjG4F-tyupbxy7/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        // Do "no-cors" không thể lấy phản hồi JSON, nhưng vẫn có thể giả lập success
        info("Dữ liệu đã gửi thành công!");
        clearForm(); // Gọi hàm xóa dữ liệu
        get_po_need_to_release()
    })
    .catch(error => {
        alert("Đã xảy ra lỗi khi gửi dữ liệu!");
        console.error("Lỗi khi gửi dữ liệu:", error);
    })
    .finally(() => {
        // Ẩn loading sau khi hoàn thành hoặc có lỗi
        endLoading()
    });
}

// Hàm xóa dữ liệu trong form
function clearForm() {
    document.getElementById("pr_po_release").value = "";
    document.getElementById("po_po_release").value = "";
    document.getElementById("po_creator_po_release").value = "";
    document.getElementById("vendor_po_release").value = "";
    document.getElementById("total_value_po_release").value = "";
    document.getElementById("pre_pay_po_release").value = "";
    document.getElementById("remain_pay_po_release").value = "";
    document.getElementById("expect_recv_date_po_release").value = "";
    document.getElementById("content_po_release").value = "";
    document.getElementById("fileUpload_po_release").value = ""; // Reset file input
}

// PO Pre-payment

async function get_po_need_to_pre_payment() {
    startLoading()
    await load_po_need_to_pre_payment() //Promise.all([load_purchase_order(), load_po_need_to_release()]); 
    endLoading()

    const tableBody = document.querySelector("#pre_payment_table tbody");
    tableBody.innerHTML = ""; // Xóa dữ liệu cũ trước khi thêm mới

    // po_need_to_pre_payment_list.shift()

    po_need_to_pre_payment_list.forEach((rowData, rowIndex) => {
        const row = document.createElement("tr");

        // Thêm các ô dữ liệu vào hàng
        row.innerHTML = `
            <td><a href="#" class="po-link" data-index="${rowIndex}">${rowData[2]}</a></td>
            <td>${rowData[3]}</td>
            <td>${rowData[5]}</td>
            <td>${rowData[6].toLocaleString('en-US')}</td>
            <td>${rowData[7].toLocaleString('en-US')}</td>
            <td>${rowData[4]}</td>
            <td><button class="view-pdf-btn" data-link="${rowData[12]}">Xem Files Upload</button></td>
        `;

        tableBody.appendChild(row);
    });

    // Xử lý sự kiện click vào PO# để log dữ liệu hàng
    document.querySelectorAll(".po-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn mở link
            const index = this.getAttribute("data-index");
            console.log("Dữ liệu hàng:", po_need_to_pre_payment_list[index]);
            document.getElementById("po_pre_payment").value = po_need_to_pre_payment_list[index][2];
            document.getElementById("pr_pre_payment").value = po_need_to_pre_payment_list[index][3];
            document.getElementById("total_value_pre_payment").value = po_need_to_pre_payment_list[index][6].toLocaleString('en-US');
            document.getElementById("pre_pay_pre_payment").value = po_need_to_pre_payment_list[index][7].toLocaleString('en-US');
            document.getElementById("remain_pay_pre_payment").value = po_need_to_pre_payment_list[index][8].toLocaleString('en-US');
            document.getElementById("vendor_pre_payment").value = po_need_to_pre_payment_list[index][5];
            document.getElementById("vendor_addr_pre_payment").value = po_need_to_pre_payment_list[index][13];
            document.getElementById("vendor_phone_pre_payment").value = po_need_to_pre_payment_list[index][14];
            document.getElementById("vendor_bank_name_pre_payment").value = po_need_to_pre_payment_list[index][15];
            document.getElementById("vendor_bank_acc_pre_payment").value = po_need_to_pre_payment_list[index][16];
            document.getElementById("expect_recv_date_pre_payment").value = po_need_to_pre_payment_list[index][9];
            document.getElementById("content_release_pre_payment").value = po_need_to_pre_payment_list[index][10];
            document.getElementById("po_creator_pre_payment").value = po_need_to_pre_payment_list[index][4];
            document.getElementById("pr_creator_pre_payment").value = po_need_to_pre_payment_list[index][17];
            document.getElementById("payment_date_pre_payment").value = po_need_to_pre_payment_list[index][18];

        });
    });

    // Xử lý sự kiện click của nút "Xem PDF"
    document.querySelectorAll(".view-pdf-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Ngăn việc kích hoạt sự kiện click của hàng
            window.open(this.getAttribute("data-link"), "_blank");
        });
    });
}

var filesProcessed_pre_payment = false;

function LoadFile_pre_payment(event) {
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
    // document.getElementById('submitButton_delivery').disabled = true;

    for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Kiểm tra kích thước tệp
    if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Tệp "' + file.name + '" vượt quá 10MB.');
        event.target.value = ''; // Reset input file
        filesProcessed_pre_payment = false;
        // document.getElementById('submitButton_delivery').disabled = true;
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
            document.getElementById('fileData_pre_payment').value = JSON.stringify(fileDataArray);
            document.getElementById('mimeType_pre_payment').value = JSON.stringify(mimeTypeArray);
            document.getElementById('fileName_pre_payment').value = JSON.stringify(fileNameArray);

            filesProcessed_pre_payment = true;
            // Enable submit button
            // document.getElementById('submitButton_delivery').disabled = false;
        }
        };
        reader.readAsDataURL(file);
    })(file);
    }
}

function validatePrePayment() {
    const content = document.getElementById("content_pre_payment").value.trim();
    const files = document.getElementById("fileUpload_pre_payment").files;
  
    if (!content) {
      alert("Vui lòng nhập nội dung.");
      return;
    }
  
    if (files.length === 0) {
      alert("Vui lòng đính kèm ít nhất 1 file.");
      return;
    }
  
  }

document.getElementById("submitButton_pre_payment").addEventListener("click", async function () {
    const content = document.getElementById("content_pre_payment").value.trim();
    const files = document.getElementById("fileUpload_pre_payment").files;
  
    if (!content) {
      alert("Vui lòng nhập nội dung.");
      document.getElementById("content_pre_payment").focus();
      return;
    }
  
    if (files.length === 0) {
      alert("Vui lòng đính kèm ít nhất 1 file.");
      return;
    }

    // Hiển thị loading khi bắt đầu gửi dữ liệu
    startLoading()

    // 📝 Lấy dữ liệu từ form
    let formData = {
        pr: document.getElementById("pr_pre_payment").value,
        po: document.getElementById("po_pre_payment").value,
        po_creator: document.getElementById("po_creator_pre_payment").value,
        pr_creator: document.getElementById("pr_creator_pre_payment").value,
        vendor: document.getElementById("vendor_pre_payment").value,
        total_value: document.getElementById("total_value_pre_payment").value,
        pre_pay: document.getElementById("pre_pay_pre_payment").value,
        remain_pay: document.getElementById("remain_pay_pre_payment").value,
        expect_recv_date: document.getElementById("expect_recv_date_pre_payment").value,
        content: document.getElementById("content_pre_payment").value,
        operator: sessionStorage.getItem("fullname"),
        addr: document.getElementById("vendor_addr_pre_payment").value,
        phone: document.getElementById("vendor_phone_pre_payment").value,
        bank_name: document.getElementById("vendor_bank_name_pre_payment").value,
        bank_acc: document.getElementById("vendor_bank_acc_pre_payment").value,
        payment_date: document.getElementById("payment_date_pre_payment").value,
        
        files: [] // Dữ liệu file upload
    };

    // 📂 Xử lý file upload (chuyển thành base64)
    let fileInput = document.getElementById("fileUpload_pre_payment");
    if (fileInput.files.length > 0) {
        for (let file of fileInput.files) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            await new Promise(resolve => {
                reader.onload = function () {
                    let base64 = reader.result.split(",")[1]; // Lấy phần base64 sau dấu ","
                    formData.files.push({
                        fileName: file.name,
                        mimeType: file.type,
                        fileData: base64
                    });
                    resolve();
                };
            });
        }
    }

    // 📤 Gửi dữ liệu lên Google Apps Script
    const url = "https://script.google.com/macros/s/AKfycbzizLZKv-ahyrZpHTJxuSyMnfVJ9-cscB0gyeEmz3dqeScP72E4ZXVensa1uaQxCS9iRw/exec"; // Thay bằng URL thực tế
    try {
        let response = await fetch(url, {
            method: "POST",
            mode: 'no-cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        let result = await response.json();
        if (result.status === "success") {
            info("Dữ liệu đã gửi thành công! URL")
        } else {
            console.log("Lỗi: " + result.message);
        }
    } catch (error) {
        console.log("Lỗi khi gửi dữ liệu: " + error.message);
    } finally {
        // Ẩn loading sau khi hoàn tất
        clearPrePaymentForm()
        get_po_need_to_pre_payment()
        info("Dữ liệu đã gửi thành công!");
    }
});

function clearPrePaymentForm() {
    document.getElementById("pr_pre_payment").value = "";
    document.getElementById("po_pre_payment").value = "";
    document.getElementById("po_creator_pre_payment").value = "";
    document.getElementById("pr_creator_pre_payment").value = "";
    document.getElementById("total_value_pre_payment").value = "";
    document.getElementById("pre_pay_pre_payment").value = "";
    document.getElementById("remain_pay_pre_payment").value = "";
    document.getElementById("vendor_pre_payment").value = "";
    document.getElementById("vendor_addr_pre_payment").value = "";
    document.getElementById("vendor_phone_pre_payment").value = "";
    document.getElementById("vendor_bank_name_pre_payment").value = "";
    document.getElementById("vendor_bank_acc_pre_payment").value = "";
    document.getElementById("expect_recv_date_pre_payment").value = "";
    document.getElementById("content_release_pre_payment").value = "";
    document.getElementById("content_pre_payment").value = "";
    document.getElementById("payment_date_pre_payment").value = "";

    // Xóa file upload
    document.getElementById("fileUpload_pre_payment").value = "";
    document.getElementById("fileData_pre_payment").value = "";
    document.getElementById("mimeType_pre_payment").value = "";
    document.getElementById("fileName_pre_payment").value = "";

    console.log("Tất cả dữ liệu trong form đã được xóa!");
}

// PO RECEIVING

async function get_po_need_to_po_receiving() {
    startLoading()
    await Promise.all([
        load_po_need_to_receiving(),
        load_detail_po_to_approve()
    ]);
    // await load_po_need_to_receiving() //Promise.all([load_purchase_order(), load_po_need_to_release()]); 
    endLoading()

    const tableBody = document.querySelector("#po_receiving_table tbody");
    tableBody.innerHTML = ""; // Xóa dữ liệu cũ trước khi thêm mới

    // po_need_to_po_receiving_list.shift()

    po_need_to_receiving_list.forEach((rowData, rowIndex) => {
        const row = document.createElement("tr");

        // Thêm các ô dữ liệu vào hàng
        row.innerHTML = `
            <td><a href="#" class="po-link" data-index="${rowIndex}">${rowData[2]}</a></td>
            <td>${rowData[3]}</td>
            <td>${rowData[6]}</td>
            <td>${rowData[4]}</td>
            <td>${rowData[5]}</td>
            <td><button class="view-pdf-btn" data-link="${rowData[17]}">Xem Files Upload</button></td>
        `;

        tableBody.appendChild(row);
    });

    // Xử lý sự kiện click vào PO# để log dữ liệu hàng
    document.querySelectorAll(".po-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn mở link
            const index = this.getAttribute("data-index");
            console.log("Dữ liệu hàng:", po_need_to_receiving_list[index]);
            document.getElementById("po_po_receiving").value = po_need_to_receiving_list[index][2];
            document.getElementById("pr_po_receiving").value = po_need_to_receiving_list[index][3];
            document.getElementById("total_value_po_receiving").value = po_need_to_receiving_list[index][7].toLocaleString('en-US');
            document.getElementById("content_pre_pay_po_receiving").value = po_need_to_receiving_list[index][11];
            
            const filteredData = detail_po_to_approve_data.filter(r => r[0] == po_need_to_receiving_list[index][2]);
            console.log(filteredData)

            // Gán sự kiện cho nút đã có sẵn
            const openTabBtn = document.getElementById('view_po_detail_at_receiving');
            if (openTabBtn) {
                openTabBtn.onclick = function() {
                    showPoDetailInNewTab(filteredData, `Chi tiết PO ${po_need_to_receiving_list[index][2]}`);
                };
            } else {
                console.error('Không tìm thấy nút có id view_po_detail_at_receiving');
            }
        });
    });

    // Xử lý sự kiện click của nút "Xem PDF"
    document.querySelectorAll(".view-pdf-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Ngăn việc kích hoạt sự kiện click của hàng
            window.open(this.getAttribute("data-link"), "_blank");
        });
    });
}

var filesProcessed_po_receiving = false;

function LoadFile_po_receiving(event) {
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
    // document.getElementById('submitButton_delivery').disabled = true;

    for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Kiểm tra kích thước tệp
    if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Tệp "' + file.name + '" vượt quá 10MB.');
        event.target.value = ''; // Reset input file
        filesProcessed_po_receiving = false;
        // document.getElementById('submitButton_delivery').disabled = true;
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
            document.getElementById('fileData_po_receiving').value = JSON.stringify(fileDataArray);
            document.getElementById('mimeType_po_receiving').value = JSON.stringify(mimeTypeArray);
            document.getElementById('fileName_po_receiving').value = JSON.stringify(fileNameArray);

            filesProcessed_po_receiving = true;
            // Enable submit button
            // document.getElementById('submitButton_delivery').disabled = false;
        }
        };
        reader.readAsDataURL(file);
    })(file);
    }
}


document.getElementById("submitButton_po_receiving").addEventListener("click", async function () {
    const content = document.getElementById("content_po_receiving").value.trim();
    const files = document.getElementById("fileUpload_po_receiving").files;
  
    if (!content) {
      alert("Vui lòng nhập nội dung.");
      document.getElementById("content_po_receiving").focus();
      return;
    }
  
    if (files.length === 0) {
      alert("Vui lòng đính kèm ít nhất 1 file.");
      return;
    }

    startLoading()
    const poReceiving = document.getElementById("po_po_receiving").value
    console.log(poReceiving)
    const foundPO = po_need_to_receiving_list.find(row => row[2] === poReceiving);
    
    // 📝 Thu thập dữ liệu từ form
    let formData = {
        po: foundPO[2],
        pr: foundPO[3],
        po_creator: foundPO[4],
        pr_creator: foundPO[5],
        vendor_name: foundPO[6],
        total_price: foundPO[7],
        pre_pay: foundPO[8],
        remain: foundPO[9],
        expected_date: foundPO[10],
        content: document.getElementById("content_po_receiving").value,
        operator: sessionStorage.getItem("fullname"),
        addr: foundPO[13],
        phone: foundPO[14],
        bank_name: foundPO[15],
        bank_acc: foundPO[16],
        payment_date: foundPO[18],
        files: [] // Chứa danh sách file upload
    };

    // 📂 Xử lý file upload (chuyển file thành base64)
    let fileInput = document.getElementById("fileUpload_po_receiving");
    if (fileInput.files.length > 0) {
        for (let file of fileInput.files) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            await new Promise(resolve => {
                reader.onload = function () {
                    let base64 = reader.result.split(",")[1]; // Lấy phần base64 sau dấu ","
                    formData.files.push({
                        fileName: file.name,
                        mimeType: file.type,
                        fileData: base64
                    });
                    resolve();
                };
            });
        }
    }

    // 📤 Gửi dữ liệu lên Google Apps Script
    const url = "https://script.google.com/macros/s/AKfycbzsc8oYWfBNwXEyoFqCnr5RBSOcbFaM31JiMv5mCYbDt6KnqG0GibGX9zZCSo6rPxim/exec"; // Thay bằng URL thực tế
    try {
        let response = await fetch(url, {
            method: "POST",
            mode: 'no-cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        let result = await response.json();
        if (result.status === "success") {
            info("Dữ liệu đã gửi thành công! URL thư mục: " + result.folderUrl);
        } else {
            console.log("Lỗi: " + result.message);
        }
    } catch (error) {
        console.log("Lỗi khi gửi dữ liệu: " + error.message);
    } finally {
        info("Gửi dữ liệu thành công")
        get_po_need_to_po_receiving()
        clearPOReceivingForm()
    }
});

function clearPOReceivingForm() {
    document.getElementById("pr_po_receiving").value = "";
    document.getElementById("po_po_receiving").value = "";
    document.getElementById("total_value_po_receiving").value = "";
    document.getElementById("content_pre_pay_po_receiving").value = "";
    document.getElementById("content_po_receiving").value = "";

    // Xóa file upload
    document.getElementById("fileUpload_po_receiving").value = "";
    document.getElementById("fileData_po_receiving").value = "";
    document.getElementById("mimeType_po_receiving").value = "";
    document.getElementById("fileName_po_receiving").value = "";

    console.log("Tất cả dữ liệu trong form đã được xóa!");
}

// PO Final payment

async function get_po_need_to_final_payment() {
    startLoading()
    await Promise.all([load_po_need_to_final_payment(),load_vendor_pr()]);
    // await load_po_need_to_final_payment() //Promise.all([load_purchase_order(), load_po_need_to_release()]); 
    endLoading()

    const tableBody = document.querySelector("#final_payment_table tbody");
    tableBody.innerHTML = ""; // Xóa dữ liệu cũ trước khi thêm mới

    // po_need_to_po_receiving_list.shift()

    po_need_to_final_payment_list.forEach((rowData, rowIndex) => {
        const row = document.createElement("tr");

        // Thêm các ô dữ liệu vào hàng
        row.innerHTML = `
            <td><a href="#" class="po-link" data-index="${rowIndex}">${rowData[2]}</a></td>
            <td>${rowData[3]}</td>
            <td>${rowData[6]}</td>
            <td>${rowData[18]}</td>
            <td>${rowData[9].toLocaleString('en-US')}</td>
            <td>${rowData[12]}</td>
        `;

        tableBody.appendChild(row);
    });

    // Xử lý sự kiện click vào PO# để log dữ liệu hàng
    document.querySelectorAll(".po-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn mở link
            const index = this.getAttribute("data-index");
            const vendorName = po_need_to_final_payment_list[index][6];
            const found_phone = vendor_pr_data.find(row => row[0] === vendorName);
            const phoneNumber = found_phone ? found_phone[3] : "";

            console.log("Dữ liệu hàng:", po_need_to_final_payment_list[index]);
            document.getElementById("po_final_payment").value = po_need_to_final_payment_list[index][2];
            document.getElementById("pr_final_payment").value = po_need_to_final_payment_list[index][3];
            document.getElementById("po_creator_final_payment").value = po_need_to_final_payment_list[index][4];
            document.getElementById("pr_creator_final_payment").value = po_need_to_final_payment_list[index][5];
            document.getElementById("total_value_final_payment").value = po_need_to_final_payment_list[index][7].toLocaleString('en-US');
            document.getElementById("pre_pay_final_payment").value = po_need_to_final_payment_list[index][8].toLocaleString('en-US');
            document.getElementById("remain_pay_final_payment").value = po_need_to_final_payment_list[index][9].toLocaleString('en-US');
            document.getElementById("vendor_final_payment").value = po_need_to_final_payment_list[index][6];
            document.getElementById("vendor_addr_final_payment").value = po_need_to_final_payment_list[index][13];
            document.getElementById("vendor_phone_final_payment").value = phoneNumber;
            document.getElementById("vendor_bank_name_final_payment").value = po_need_to_final_payment_list[index][15];
            document.getElementById("vendor_bank_acc_final_payment").value = po_need_to_final_payment_list[index][16];
            document.getElementById("payment_date_final_payment").value = po_need_to_final_payment_list[index][18];
            document.getElementById("expect_recv_date_final_payment").value = po_need_to_final_payment_list[index][10];
            document.getElementById("content_release_final_payment").value = po_need_to_final_payment_list[index][11];
            // document.getElementById("files_final_payment").value = po_need_to_final_payment_list[index][17];
            //button to view file po_need_to_receiving_list[index][17];
            const linkValue = po_need_to_final_payment_list[index][17];
            const button = document.createElement("button");
            button.textContent = "View File";
            button.onclick = () => {
                if (linkValue) {
                    window.open(linkValue, "_blank");
                } else {
                    alert("No file link available.");
                }
            };
            const container = document.getElementById("files_final_payment");
            container.innerHTML = ""; // Clear any existing content
            container.appendChild(button);
            

        });
    });

    // Xử lý sự kiện click của nút "Xem PDF"
    document.querySelectorAll(".view-pdf-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Ngăn việc kích hoạt sự kiện click của hàng
            window.open(this.getAttribute("data-link"), "_blank");
        });
    });
}

var filesProcessed_final_payment = false;

function LoadFile_final_payment(event) {
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
    // document.getElementById('submitButton_delivery').disabled = true;

    for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Kiểm tra kích thước tệp
    if (file.size > 10 * 1024 * 1024) { // 10MB
        alert('Tệp "' + file.name + '" vượt quá 10MB.');
        event.target.value = ''; // Reset input file
        filesProcessed_final_payment = false;
        // document.getElementById('submitButton_delivery').disabled = true;
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
            document.getElementById('fileData_final_payment').value = JSON.stringify(fileDataArray);
            document.getElementById('mimeType_final_payment').value = JSON.stringify(mimeTypeArray);
            document.getElementById('fileName_final_payment').value = JSON.stringify(fileNameArray);

            filesProcessed_final_payment = true;
            // Enable submit button
            // document.getElementById('submitButton_delivery').disabled = false;
        }
        };
        reader.readAsDataURL(file);
    })(file);
    }
}

// Lưu trạng thái gốc của container ngay khi trang tải
const filesFinalPaymentContainer = document.getElementById("files_final_payment");
const defaultContent = filesFinalPaymentContainer.innerHTML; // Lưu nội dung gốc

// Sau khi clear, khôi phục lại trạng thái ban đầu
const resetFileButton = () => {
    filesFinalPaymentContainer.innerHTML = defaultContent;
};

function clearFinalPaymentForm() {
    document.getElementById("pr_final_payment").value = "";
    document.getElementById("po_final_payment").value = "";
    document.getElementById("po_creator_final_payment").value = "";
    document.getElementById("pr_creator_final_payment").value = "";
    document.getElementById("total_value_final_payment").value = "";
    document.getElementById("pre_pay_final_payment").value = "";
    document.getElementById("remain_pay_final_payment").value = "";
    document.getElementById("vendor_final_payment").value = "";
    document.getElementById("vendor_addr_final_payment").value = "";
    document.getElementById("vendor_phone_final_payment").value = "";
    document.getElementById("vendor_bank_name_final_payment").value = "";
    document.getElementById("vendor_bank_acc_final_payment").value = "";
    document.getElementById("expect_recv_date_final_payment").value = "";
    document.getElementById("content_release_final_payment").value = "";
    document.getElementById("payment_date_final_payment").value = "";
    document.getElementById("files_final_payment").value = ""; // Reset file input
    document.getElementById("fileData_final_payment").value = "";
    document.getElementById("mimeType_final_payment").value = "";
    document.getElementById("fileName_final_payment").value = "";
    document.getElementById("fileUpload_final_payment").value = ""; // Reset file input
    document.getElementById("content_final_payment").value = "";
    resetFileButton()
    
}

document.getElementById("submitButton_final_payment").addEventListener("click", async function () {
    const content = document.getElementById("content_final_payment").value.trim();
    const files = document.getElementById("fileUpload_final_payment").files;
  
    if (!content) {
      alert("Vui lòng nhập nội dung.");
      return;
    }
  
    if (files.length === 0) {
      alert("Vui lòng đính kèm ít nhất 1 file.");
      return;
    }
    
    startLoading()
    const poValue = document.getElementById("po_final_payment").value
    console.log(poValue)
    const foundPO = po_need_to_final_payment_list.find(row => row[2] === poValue);
    
    // 📝 Thu thập dữ liệu từ form
    let formData = {
        po: foundPO[2],
        pr: foundPO[3],
        po_creator: foundPO[4],
        pr_creator: foundPO[5],
        vendor_name: foundPO[6],
        total_price: foundPO[7],
        pre_pay: foundPO[8],
        remain: foundPO[9],
        expected_date: foundPO[10],
        content: document.getElementById("content_final_payment").value,
        operator: sessionStorage.getItem("fullname"),
        addr: foundPO[13],
        phone: foundPO[14],
        bank_name: foundPO[15],
        bank_acc: foundPO[16],
        payment_date: foundPO[18],
        files: [] // Chứa danh sách file upload
    };

    // 📂 Xử lý file upload (chuyển file thành base64)
    let fileInput = document.getElementById("fileUpload_final_payment");
    if (fileInput.files.length > 0) {
        for (let file of fileInput.files) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            await new Promise(resolve => {
                reader.onload = function () {
                    let base64 = reader.result.split(",")[1]; // Lấy phần base64 sau dấu ","
                    formData.files.push({
                        fileName: file.name,
                        mimeType: file.type,
                        fileData: base64
                    });
                    resolve();
                };
            });
        }
    }

    // 📤 Gửi dữ liệu lên Google Apps Script
    const url = "https://script.google.com/macros/s/AKfycbwPUCoWvD3b3dgQr9sdhPwj1SKNC0ZhM4vasQP51Ny78YBbxMpUcZ9hla0C953vpXIa/exec"; // Thay bằng URL thực tế
    try {
        let response = await fetch(url, {
            method: "POST",
            mode: 'no-cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        let result = await response.json();
        if (result.status === "success") {
            info("Dữ liệu đã gửi thành công! URL thư mục: " + result.folderUrl);
        } else {
            console.log("Lỗi: " + result.message);
        }
    } catch (error) {
        console.log("Lỗi khi gửi dữ liệu: " + error.message);
    } finally {
        info("Gửi dữ liệu thành công")
        get_po_need_to_final_payment()
        clearFinalPaymentForm()
    }
});

function startLoading() {
    document.getElementById("loadingIndicator").style.display = "block";
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);
  }
  
  function endLoading() {
    document.getElementById("loadingIndicator").style.display = "none";
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = false);
  }
  
// PR PO Summary
let pr_po_summary_data = [];

async function get_pr_po_summary() {
    startLoading()
    const res = await fetch("https://script.google.com/macros/s/AKfycbxRhGOmuECC6RnO43JVvXkCOEHiUpCVBaKTXXeny1YHSBYqqlW-cooYm1AT-yusKyej-w/exec");
    pr_po_summary_data = await res.json();
    PurRenderTable(pr_po_summary_data);
    populateBranches(pr_po_summary_data);
    endLoading()
}

function PurRenderTable(data) {
    const table = document.getElementById("data-table-summary");
    const thead = table.querySelector("thead");
    const tbody = table.querySelector("tbody");

    thead.innerHTML = "";
    tbody.innerHTML = "";

    if (data.length === 0) {
    tbody.innerHTML = "<tr><td colspan='9'>Không có dữ liệu</td></tr>";
    return;
    }

    // Render header
    const headers = Object.keys(data[0]);
    const headerRow = document.createElement("tr");
    headers.forEach(h => {
    const th = document.createElement("th");
    th.textContent = h;
    headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Render body
    data.forEach(row => {
    const tr = document.createElement("tr");
    headers.forEach(k => {
        const td = document.createElement("td");
        td.textContent = row[k];
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
    });
}

function populateBranches(data) {
    const select = document.getElementById("pur-filter-branch");
    const branches = Array.from(new Set(data.map(d => d["Chi nhánh"]))).sort();
    branches.forEach(b => {
    const option = document.createElement("option");
    option.value = b;
    option.textContent = b;
    select.appendChild(option);
    });
}

function applyFilters_pur_summary() {
    const poFilter = document.getElementById("filter-po").value.toLowerCase();
    const prFilter = document.getElementById("filter-pr").value.toLowerCase();
    const branchFilter = document.getElementById("pur-filter-branch").value;

    const filtered = pr_po_summary_data.filter(row => {
    const poMatch = row["PO"].toLowerCase().includes(poFilter);
    const prMatch = row["PR"].toLowerCase().includes(prFilter);
    const branchMatch = !branchFilter || row["Chi nhánh"] === branchFilter;
    return poMatch && prMatch && branchMatch;
    });

    PurRenderTable(filtered);
}

document.getElementById("filter-po").addEventListener("input", applyFilters_pur_summary);
document.getElementById("filter-pr").addEventListener("input", applyFilters_pur_summary);
document.getElementById("pur-filter-branch").addEventListener("change", applyFilters_pur_summary);
