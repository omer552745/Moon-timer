// Yayın (release) derlemesinde ek bir konsol penceresi açılmasını engeller.
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("Moon Timer başlatılırken bir hata oluştu");
}
