async function init() {
  let rustaApp = null

  // 
  try {
    rustApp = await import('../pkg') // created by wasm plugin
  } catch (e) {
    console.error(e)
    return;
  }

  console.log(rustApp)

  const input = document.getElementById('upload')
  const fileReader = new FileReader()

  input.addEventListener('change', () => {
    fileReader.readAsDataURL(input.files[0])
  })

  fileReader.onloadend = () => {
    let base64 = fileReader.result.replace(
    	/^data:image\/(png|jpeg|jpg);base64,/, ''
    )
    let img_data_url = rustApp.grayscale(base64)
    document.getElementById('new-img').setAttribute(
      'src', img_data_url
    )
  }
}

init()