// Center and resize window when moved to a different screen
workspace.clientMoved.connect(function (client) {
    let screenCount = workspace.numScreens
    if (screenCount < 2) {
        return
    }

    let screen = client.screen
    let screenWidth = workspace.workspaceWidth / screenCount
    let screenHeight = workspace.workspaceHeight

    let targetWidth = 800
    let targetHeight = 600

    let centerX = screenWidth / 2 - targetWidth / 2
    let centerY = screenHeight / 2 - targetHeight / 2

    // Adjust for specific screen
    if (screen === 0) {
        client.geometry = {
            x: centerX,
            y: centerY,
            width: targetWidth,
            height: targetHeight,
        }
    } else if (screen === 1) {
        client.geometry = {
            x: screenWidth + centerX,
            y: centerY,
            width: targetWidth,
            height: targetHeight,
        }
    }
})
