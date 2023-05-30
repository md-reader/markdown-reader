import codeIcon from '@/images/icon_code.svg'
import sideIcon from '@/images/icon_side.svg'
import goTopIcon from '@/images/icon_go_top.svg'
import fileHideIcon from '@/images/icon_file_hidden.svg'
import fileIcon from '@/images/icon_file.svg'
import folderHideIcon from '@/images/icon_folder_hidden.svg'
import folderIcon from '@/images/icon_folder.svg'
import fileMDIcon from '@/images/icon_file_md.svg'
import arrowRightIcon from '@/images/icon_arrow_right.svg'
import logoIcon from '@/images/icon_logo.svg'
import { mdFilePathPattern, type FileItem } from '@/shared'

export default {
  codeIcon,
  sideIcon,
  goTopIcon,
  fileHideIcon,
  fileIcon,
  folderHideIcon,
  folderIcon,
  fileMDIcon,
  arrowRightIcon,
  logoIcon,
}

export function getFileIcon(file: FileItem) {
  if (file.name.startsWith('.')) {
    return file.isFolder ? folderHideIcon : fileHideIcon
  } else if (file.isFolder) {
    return folderIcon
  } else {
    if (mdFilePathPattern.test(file.path)) {
      return fileMDIcon
    } else {
      return fileIcon
    }
  }
}
