export const toJsonObj:any = {
  versionKey: false,
  virtuals: true,
  transform: (doc: any, ret: any) => {
    delete ret._id
  },
}
export const schemaOptObj: any = {
  id: true,
  timestamps: true,
}