class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query
        this.queryStr = queryStr
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {}

        this.query = this.query.find({...keyword})
        return this
    }

    filter() {
        const queryCopy = {...this.queryStr}
        const removeFeilds = ["keyword", "page", "limit"]
        removeFeilds.forEach(key => delete queryCopy[key])
        let queryStr = JSON.stringify(queryCopy)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`)
        const parsedQuery = JSON.parse(queryStr)
        parsedQuery.category = {
            $regex: parsedQuery.category,
            $options: 'i'
        }
        this.query = this.query.find(parsedQuery)
        return this
    }


    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1
        const skip = resultPerPage * (currentPage - 1)
        this.query = this.query.limit(resultPerPage).skip(skip)
        return this
    }
}

module.exports = ApiFeatures