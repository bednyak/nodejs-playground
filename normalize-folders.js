const existingFolders = [
    '/home/user/photos',
    '/home',
    '/root/documents/photos'
];

const newFolders = [
    '/home/user/',
    '/home/user/photos',
    '/home/user/tech/guides/old',
    '/home/user/tech/guides/new',
    '/home',
    '/docs',
    '/root/old/photos'
];

// Normalize the folder paths to remove trailing slashes
function normalize(path) {
    return path.replace(/\/+$/, '');
}

// Function to check if a folder or any of its parents exist
function folderExistsInTree(existing, folder) {
    let currentPath = normalize(folder);
    while (currentPath !== "") {
        if (existing.has(currentPath)) {
            return true;
        }
        currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
    }
    return false;
}

function findNewFolders(existing, toCreate) {
    const existingSet = new Set(existing.map(normalize));
    const foldersToCreate = [];

    toCreate.forEach(folder => {
        const normalizedFolder = normalize(folder);
        if (!folderExistsInTree(existingSet, normalizedFolder)) {
            foldersToCreate.push(normalizedFolder);
            existingSet.add(normalizedFolder);
        }
    });

    return foldersToCreate;
}

const foldersToCreate = findNewFolders(existingFolders, newFolders);

console.log('New folders to be created:', foldersToCreate);