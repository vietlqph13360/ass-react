import { Col, Row } from 'antd'

type Props = {
}

const ListBanner = (props: any) => {
  const listItems: any[] = [
    {
      title: 'Nổi bật',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-1644.svg"
    },
    {
      title: 'Phụ kiện Apple',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-43.svg"
    },
    {
      title: 'Dán màn hình',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-286.svg"
    },
    {
      title: 'Ốp lưng - Bao da',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-108.svg"
    },
    {
      title: 'Cáp, sạc',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-114.svg"
    },
    {
      title: 'Pin dự phòng',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-122.svg"
    },
    {
      title: 'Thiết bị mạng',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-676.svg"
    },
    {
      title: 'Camera',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-363.svg"
    },
    {
      title: 'Camera',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-363.svg"
    },
    {
      title: 'Camera',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-363.svg"
    },
    {
      title: 'Camera',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-363.svg"
    },
    {
      title: 'Camera',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-363.svg"
    },
    {
      title: 'Camera',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-363.svg"
    },
    {
      title: 'Camera',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-363.svg"
    },
    {
      title: 'Camera',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-363.svg"
    },
    {
      title: 'Camera',
      bg: "#FFA3A3",
      img: "https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-363.svg"
    },
  ]
  return (
    <Row className="my-4">
      {listItems.map(item => {
        return (
          <Col className={`bg-[${item.bg}] text-[#fff] px-2 border-[1px] rounded-[10px] relative`} span={3}>
          <div className="text-lg absolute py-2 px-2">{item.title}</div>
          <img src={item.img} alt="" />
        </Col>
        )
      })}
	  </Row>
  )
}

export default ListBanner