const useNaira = () => {
  const money_ = (money: number) => {
    return Number(money).toLocaleString('en-NG', {
      currency: 'NGN'
    })
  }
  return {
    amountNaira: money_
  }
}
export default useNaira
