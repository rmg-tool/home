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


create_wh_nhap()
create_wh_xuat()
create_wh_xuat_export()
create_wh_nhap_export()
create_wh_onhand_export()


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

        fetch('https://script.google.com/macros/s/AKfycbx4Z3ko2bspVPllG2bmOqUpvaasTHT6Texb76HG7J3WX4a7WxHHAsgV12kxvw0FlnRv/exec', {
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
function closeModal() {
    const modal = document.getElementById("secondaryModal");
    modal.style.display = 'none';
}

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

async function load_user() {
    return fetch('https://script.google.com/macros/s/AKfycbzwWx6hpZ-C5zcjFDeTjJv77nlWZ2tLlHqtg1SUZS37dOoF5c_ua8ITxzHsX-d5zIhH/exec')
        .then(res => res.json())
        .then(data => {
            user_data = data.content;
            console.log("Dữ liệu người dùng đã tải xong.");
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
            // Xác định quyền của user dựa trên các cột 4, 5, 6, 7 trong user_data
            const permissions = {
                import: user[4] === "x",
                export: user[5] === "x",
                onhand: user[6] === "x",
                transaction_nhap: user[6] === "x",
                transaction_xuat: user[6] === "x",
                mml: user[7] === "x"
            };

            // Ghi log quyền để kiểm tra
            console.log("Quyền truy cập của người dùng:", permissions);

            // Lưu quyền và thông tin người dùng vào sessionStorage
            sessionStorage.setItem("permissions", JSON.stringify(permissions));
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("fullname", fullname);
            sessionStorage.setItem("wh", wh);
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
                });
            } else if (id === 'export') {
                // Load data and then show the frame
                load_data_xuat().then(() => {
                    activeFrame.classList.add('active');
                    console.log("Access granted to frame:", id);
                    reset_xuat()
                });
            } else if (id === 'mml') {
                activeFrame.classList.add('active');
                console.log("Access granted to frame:", id);
                reset_mml()
            } else if (id === 'onhand') {
                // Load data and then show the frame
                load_data_mml().then(() => {
                    activeFrame.classList.add('active');
                    console.log("Access granted to frame:", id);
                });
            } else if (id === 'transaction_xuat') {
                // Load data and then show the frame
                load_data_xuat_export().then(() => {
                    activeFrame.classList.add('active');
                    console.log("Access granted to frame:", id);
                });
            } else if (id === 'transaction_nhap') {
                // Load data and then show the frame
                load_data_nhap_export().then(() => {
                    activeFrame.classList.add('active');
                    console.log("Access granted to frame:", id);
                });
            } else {
                activeFrame.classList.add('active');
                console.log("Access granted to frame:", id);
            }
        }
    } else {
        alert("You do not have permission to access this tab.");
        console.log("Access denied to frame:", id);
    }
}

///// XUẤT //////
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
    const modal = document.getElementById("secondaryModal");
    const modalOptions = document.getElementById("modalOptions");
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
        stock_out_table.append("exp_date", expiry_date);
        stock_out_table.append("ib_date", "'"+inbound_date);
        stock_out_table.append("price", price);
        fetch('https://script.google.com/macros/s/AKfycbx6H32KzYyrM9G4sskPmMT90p9LZRiKUQzJ6hA88dRrF26Jw8Ntx5A6Gaci5l8TCwQsKQ/exec', {
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

let intervalId = null;

function yourFunction() {
    console.log("Function is running");
    // Your function code here
}

function startInterval() {
    if (!intervalId) {
        intervalId = setInterval(yourFunction, 1000); // Run every 5 minutes
        console.log("Interval started");
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


//// Export data
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

// document.getElementById("export_onhand").addEventListener("click", function() {
//     // Tạo bản sao của dữ liệu mà không bao gồm dòng đầu tiên
//     var exportData = onhand_data//.slice(1);
//     // Giữ lại dòng đầu tiên
//     const headerRow = exportData[0];

//     // Lọc từ dòng thứ 2 trở đi, chỉ giữ các dòng có giá trị cột 11 > 0
//     const filteredRows = exportData.slice(1).filter(row => row[10] > 0);

//     // Kết hợp dòng đầu tiên với các dòng đã lọc
//     exportData = [headerRow, ...filteredRows];


//     // Chuyển đổi dữ liệu thành worksheet mà không cần thêm cột chỉ mục
//     const worksheet = XLSX.utils.json_to_sheet(exportData, { skipHeader: true });
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Onhand Inventory");

//     // Xuất file
//     const now = new Date();
//     const formattedDate = `${now.getFullYear()}_${String(now.getMonth() + 1).padStart(2, '0')}_${String(now.getDate()).padStart(2, '0')}`;
//     const formattedTime = `${String(now.getHours()).padStart(2, '0')}_${String(now.getMinutes()).padStart(2, '0')}_${String(now.getSeconds()).padStart(2, '0')}`;
//     const filename = `Onhand_${formattedDate}_${formattedTime}.xlsx`;

//     // Xuất file
//     XLSX.writeFile(workbook, filename);
// });

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

// document.getElementById("export_xuat").addEventListener("click", function() {
//     // Tạo bản sao của dữ liệu mà không bao gồm dòng đầu tiên
//     var exportData = xuat_data//.slice(1);
//     // Giữ lại dòng đầu tiên
//     const headerRow = exportData[0];


//     // Chuyển đổi dữ liệu thành worksheet mà không cần thêm cột chỉ mục
//     const worksheet = XLSX.utils.json_to_sheet(exportData, { skipHeader: true });
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Xuất");

//     const now = new Date();
//     const formattedDate = `${now.getFullYear()}_${String(now.getMonth() + 1).padStart(2, '0')}_${String(now.getDate()).padStart(2, '0')}`;
//     const formattedTime = `${String(now.getHours()).padStart(2, '0')}_${String(now.getMinutes()).padStart(2, '0')}_${String(now.getSeconds()).padStart(2, '0')}`;
//     const filename = `Transaction_xuat_${formattedDate}_${formattedTime}.xlsx`;

//     // Xuất file
//     XLSX.writeFile(workbook, filename);
// });

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

// document.getElementById("export_nhap").addEventListener("click", function() {
//     // Tạo bản sao của dữ liệu mà không bao gồm dòng đầu tiên
//     var exportData = nhap_data//.slice(1);
//     // Giữ lại dòng đầu tiên
//     const headerRow = exportData[0];


//     // Chuyển đổi dữ liệu thành worksheet mà không cần thêm cột chỉ mục
//     const worksheet = XLSX.utils.json_to_sheet(exportData, { skipHeader: true });
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Nhập");

//     // Xuất file
//     const now = new Date();
//     const formattedDate = `${now.getFullYear()}_${String(now.getMonth() + 1).padStart(2, '0')}_${String(now.getDate()).padStart(2, '0')}`;
//     const formattedTime = `${String(now.getHours()).padStart(2, '0')}_${String(now.getMinutes()).padStart(2, '0')}_${String(now.getSeconds()).padStart(2, '0')}`;
//     const filename = `Transaction_nhap_${formattedDate}_${formattedTime}.xlsx`;

//     // Xuất file
//     XLSX.writeFile(workbook, filename);
// });

document.getElementById("refresh_nhap").addEventListener("click", async function() {
    await load_data_nhap_export()
});
