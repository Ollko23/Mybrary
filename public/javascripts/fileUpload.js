const rootSryles = window.getComputedStyle(document.documentElement)

if (rootSryles.getPropertyValue("--book-cover-width-large") != null && rootSryles.getPropertyValue("--book-cover-width-large") != "") {
    ready()
} else {
    document.getElementById("main-css").addEventListener("load", ready)
}

function ready() {
    const coverWidth = parseFloat(rootSryles.getPropertyValue("--book-cover-width-large"))
    const coverAspectRatio = parseFloat(rootSryles.getPropertyValue("--book-cover-aspect-ratio"))
    const coverHight = coverWidth / coverAspectRatio
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginFileEncode,
    )
    FilePond.setOptions({
        stylePanelAspectRatio: 1 / coverAspectRatio,
        imageResizeTargetHight: coverHight,
        imageResizeTargetWidth: coverWidth,
    })
    FilePond.parse(document.body);
}
