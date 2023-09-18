const dummyProducts = [
  {
    id: 1,
    name: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
    image:
      'https://s3-alpha-sig.figma.com/img/4317/a36f/f76deef6a57c602511e6ad3a14ba02ca?Expires=1695600000&Signature=HiPXoOK52W2lhVSWwP8gkqQgJe5CQwSdonwsiZtOsbpHU1rOWXdqCtWNnrpJkZuwq19GIevnoqOpdk2ADZ9DFo3~szT9p6CJzORDx~qSPqgbqubMUUrqVIYJWhYmbjPhcHWSKqMBuhWE3HTO-jz4XTJ5L8G2bkhNxb-myHgyB~dA84~AMcEvmV5Ct-dcYdIIxoX2Ofv3lm8-STMUSHJ1Rluqhx4BqlOWuRSivtUiV5O9rqw9i6eRiHhuI9h1hAsLqF~pwcy82pVYffEcph4MBo6jrz5qyKm7WuGEx~UDLw2izywmdDXJzw6Yfz4DETcz0LsvEGJ9gLV~sdZqxQLYkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    price: 20.0,
    rating: {
      accumulative: 4,
      total: 45235,
      ratingPercentages: {
        5: 70,
        4: 16,
        3: 8,
        2: 3,
        1: 3
      }
    },
    category: "Men's T-Shirts",
    rank: '3',
    TotalItems: '100'
  },
  {
    id: 2,
    name: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
    image:
      'https://s3-alpha-sig.figma.com/img/4317/a36f/f76deef6a57c602511e6ad3a14ba02ca?Expires=1695600000&Signature=HiPXoOK52W2lhVSWwP8gkqQgJe5CQwSdonwsiZtOsbpHU1rOWXdqCtWNnrpJkZuwq19GIevnoqOpdk2ADZ9DFo3~szT9p6CJzORDx~qSPqgbqubMUUrqVIYJWhYmbjPhcHWSKqMBuhWE3HTO-jz4XTJ5L8G2bkhNxb-myHgyB~dA84~AMcEvmV5Ct-dcYdIIxoX2Ofv3lm8-STMUSHJ1Rluqhx4BqlOWuRSivtUiV5O9rqw9i6eRiHhuI9h1hAsLqF~pwcy82pVYffEcph4MBo6jrz5qyKm7WuGEx~UDLw2izywmdDXJzw6Yfz4DETcz0LsvEGJ9gLV~sdZqxQLYkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    price: 20.0,
    rating: {
      accumulative: 4,
      total: 45235,
      ratingPercentages: {
        5: 70,
        4: 16,
        3: 8,
        2: 3,
        1: 3
      }
    },
    category: "Men's T-Shirts",
    rank: '3',
    TotalItems: '100'
  },
  {
    id: 3,
    name: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
    image:
      'https://s3-alpha-sig.figma.com/img/4317/a36f/f76deef6a57c602511e6ad3a14ba02ca?Expires=1695600000&Signature=HiPXoOK52W2lhVSWwP8gkqQgJe5CQwSdonwsiZtOsbpHU1rOWXdqCtWNnrpJkZuwq19GIevnoqOpdk2ADZ9DFo3~szT9p6CJzORDx~qSPqgbqubMUUrqVIYJWhYmbjPhcHWSKqMBuhWE3HTO-jz4XTJ5L8G2bkhNxb-myHgyB~dA84~AMcEvmV5Ct-dcYdIIxoX2Ofv3lm8-STMUSHJ1Rluqhx4BqlOWuRSivtUiV5O9rqw9i6eRiHhuI9h1hAsLqF~pwcy82pVYffEcph4MBo6jrz5qyKm7WuGEx~UDLw2izywmdDXJzw6Yfz4DETcz0LsvEGJ9gLV~sdZqxQLYkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    price: 20.0,
    rating: {
      accumulative: 4,
      total: 45235,
      ratingPercentages: {
        5: 70,
        4: 16,
        3: 8,
        2: 3,
        1: 3
      }
    },
    category: "Men's T-Shirts",
    rank: '3',
    TotalItems: '100'
  },
  {
    id: 4,
    name: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
    image:
      'https://s3-alpha-sig.figma.com/img/4317/a36f/f76deef6a57c602511e6ad3a14ba02ca?Expires=1695600000&Signature=HiPXoOK52W2lhVSWwP8gkqQgJe5CQwSdonwsiZtOsbpHU1rOWXdqCtWNnrpJkZuwq19GIevnoqOpdk2ADZ9DFo3~szT9p6CJzORDx~qSPqgbqubMUUrqVIYJWhYmbjPhcHWSKqMBuhWE3HTO-jz4XTJ5L8G2bkhNxb-myHgyB~dA84~AMcEvmV5Ct-dcYdIIxoX2Ofv3lm8-STMUSHJ1Rluqhx4BqlOWuRSivtUiV5O9rqw9i6eRiHhuI9h1hAsLqF~pwcy82pVYffEcph4MBo6jrz5qyKm7WuGEx~UDLw2izywmdDXJzw6Yfz4DETcz0LsvEGJ9gLV~sdZqxQLYkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    price: 20.0,
    rating: {
      accumulative: 4,
      total: 45235,
      ratingPercentages: {
        5: 70,
        4: 16,
        3: 8,
        2: 3,
        1: 3
      }
    },
    category: "Men's T-Shirts",
    rank: '3',
    TotalItems: '100'
  },
  {
    id: 5,
    name: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
    image:
      'https://s3-alpha-sig.figma.com/img/4317/a36f/f76deef6a57c602511e6ad3a14ba02ca?Expires=1695600000&Signature=HiPXoOK52W2lhVSWwP8gkqQgJe5CQwSdonwsiZtOsbpHU1rOWXdqCtWNnrpJkZuwq19GIevnoqOpdk2ADZ9DFo3~szT9p6CJzORDx~qSPqgbqubMUUrqVIYJWhYmbjPhcHWSKqMBuhWE3HTO-jz4XTJ5L8G2bkhNxb-myHgyB~dA84~AMcEvmV5Ct-dcYdIIxoX2Ofv3lm8-STMUSHJ1Rluqhx4BqlOWuRSivtUiV5O9rqw9i6eRiHhuI9h1hAsLqF~pwcy82pVYffEcph4MBo6jrz5qyKm7WuGEx~UDLw2izywmdDXJzw6Yfz4DETcz0LsvEGJ9gLV~sdZqxQLYkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    price: 20.0,
    rating: {
      accumulative: 4,
      total: 45235,
      ratingPercentages: {
        5: 70,
        4: 16,
        3: 8,
        2: 3,
        1: 3
      }
    },
    category: "Men's T-Shirts",
    rank: '3',
    TotalItems: '100'
  },
  {
    id: 6,
    name: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
    image:
      'https://s3-alpha-sig.figma.com/img/4317/a36f/f76deef6a57c602511e6ad3a14ba02ca?Expires=1695600000&Signature=HiPXoOK52W2lhVSWwP8gkqQgJe5CQwSdonwsiZtOsbpHU1rOWXdqCtWNnrpJkZuwq19GIevnoqOpdk2ADZ9DFo3~szT9p6CJzORDx~qSPqgbqubMUUrqVIYJWhYmbjPhcHWSKqMBuhWE3HTO-jz4XTJ5L8G2bkhNxb-myHgyB~dA84~AMcEvmV5Ct-dcYdIIxoX2Ofv3lm8-STMUSHJ1Rluqhx4BqlOWuRSivtUiV5O9rqw9i6eRiHhuI9h1hAsLqF~pwcy82pVYffEcph4MBo6jrz5qyKm7WuGEx~UDLw2izywmdDXJzw6Yfz4DETcz0LsvEGJ9gLV~sdZqxQLYkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    price: 20.0,
    rating: {
      accumulative: 4,
      total: 45235,
      ratingPercentages: {
        5: 70,
        4: 16,
        3: 8,
        2: 3,
        1: 3
      }
    },
    category: "Men's T-Shirts",
    rank: '3',
    TotalItems: '100'
  },
  {
    id: 7,
    name: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
    image:
      'https://s3-alpha-sig.figma.com/img/4317/a36f/f76deef6a57c602511e6ad3a14ba02ca?Expires=1695600000&Signature=HiPXoOK52W2lhVSWwP8gkqQgJe5CQwSdonwsiZtOsbpHU1rOWXdqCtWNnrpJkZuwq19GIevnoqOpdk2ADZ9DFo3~szT9p6CJzORDx~qSPqgbqubMUUrqVIYJWhYmbjPhcHWSKqMBuhWE3HTO-jz4XTJ5L8G2bkhNxb-myHgyB~dA84~AMcEvmV5Ct-dcYdIIxoX2Ofv3lm8-STMUSHJ1Rluqhx4BqlOWuRSivtUiV5O9rqw9i6eRiHhuI9h1hAsLqF~pwcy82pVYffEcph4MBo6jrz5qyKm7WuGEx~UDLw2izywmdDXJzw6Yfz4DETcz0LsvEGJ9gLV~sdZqxQLYkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    price: 20.0,
    rating: {
      accumulative: 4,
      total: 45235,
      ratingPercentages: {
        5: 70,
        4: 16,
        3: 8,
        2: 3,
        1: 3
      }
    },
    category: "Men's T-Shirts",
    rank: '3',
    TotalItems: '100'
  },
  {
    id: 8,
    name: "Amazon Essentials Men's Short Sleeve Crew neck T-Shirt",
    image:
      'https://s3-alpha-sig.figma.com/img/4317/a36f/f76deef6a57c602511e6ad3a14ba02ca?Expires=1695600000&Signature=HiPXoOK52W2lhVSWwP8gkqQgJe5CQwSdonwsiZtOsbpHU1rOWXdqCtWNnrpJkZuwq19GIevnoqOpdk2ADZ9DFo3~szT9p6CJzORDx~qSPqgbqubMUUrqVIYJWhYmbjPhcHWSKqMBuhWE3HTO-jz4XTJ5L8G2bkhNxb-myHgyB~dA84~AMcEvmV5Ct-dcYdIIxoX2Ofv3lm8-STMUSHJ1Rluqhx4BqlOWuRSivtUiV5O9rqw9i6eRiHhuI9h1hAsLqF~pwcy82pVYffEcph4MBo6jrz5qyKm7WuGEx~UDLw2izywmdDXJzw6Yfz4DETcz0LsvEGJ9gLV~sdZqxQLYkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    price: 20.0,
    rating: {
      accumulative: 4,
      total: 45235,
      ratingPercentages: {
        5: 70,
        4: 16,
        3: 8,
        2: 3,
        1: 3
      }
    },
    category: "Men's T-Shirts",
    rank: '3',
    TotalItems: '100'
  }
]


export default dummyProducts
