/**
 * <p>
 * 用户数据管理
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-02 09:24
 */
import { defineStore } from 'pinia'

type UserStoreState = {
  isLogin: boolean
}

const state = (): UserStoreState => {
  return {
    isLogin: false
  }
}

export const useUserStore = defineStore('use', {
  state
})
