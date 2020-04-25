export const Ids = {
  request (params) {
    if (params) {
      return {
        new: 'yes',
        name: params.name,
        age: params.age,
        city: params.city || 'ShangHai'
      }
    }
  },
  response (data) {
    return {
      time: new Date(),
      data: data
    }
  }
}
