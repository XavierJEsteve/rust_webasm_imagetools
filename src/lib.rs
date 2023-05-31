use std::fmt::format;

use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log; // For single-value logging
use base64::{decode, encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;

#[wasm_bindgen]
pub fn grayscale(encoded_file: &str) -> String {
    unsafe { log(&"Greyscale called".into()) };

    let base64_to_vector = decode(encoded_file).unwrap();
    unsafe { log(&"Image decoded".into()) };

    let mut img = load_from_memory(&base64_to_vector).unwrap();
    unsafe { log(&"Image loaded".into()) };

    img = img.grayscale();
    unsafe { log(&"Grayscale applied".into()) };

    let mut buffer = vec![];
    img.write_to(&mut buffer, Png).unwrap();
    unsafe { log(&"New image written".into()) };

    let encoded_img = encode(&buffer);
    let data_url = format!("data:image/png;base64,{}",
        encoded_img
    );

    data_url
    // format!()
} 