let newUrl =
  'https://star.toutiao.com/v/api/demand/author_list/?limit=20&need_detail=true&page=1&platform_source=1&task_category=1&tag=55&tag_level_two=56&order_by=follower&sort_type=2'

const result = newUrl.replace(/page=\d/, 'page=3')
console.log(result)
