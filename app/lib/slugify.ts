import {default as slg} from 'slugify'

export const slugify = (toSlugify: string) => {

    toSlugify = toSlugify.replace(/[^\w\s]/gi, '')
    toSlugify = toSlugify.substr(0, 50)

    return slg(toSlugify, {
        replacement: '-', 
        lower: true,
      })
}
