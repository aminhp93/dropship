export interface Chapter {
  time: string;
  heading: string;
  body: string[];
}

export interface Reading {
  num: string;
  title: string;
  channel: string;
  duration: string;
  url: string;
  note: string;
  chapters: Chapter[];
  quote?: { text: string; cite: string };
}

// Thêm bài đọc mới cho mỗi ngày bằng cách append vào mảng này.
export const readings: Reading[] = [
  {
    num: "01",
    title: "Sự thật về Shopify! - 1 năm lợi nhuận bao nhiêu?",
    channel: "LinhThach",
    duration: "17:04",
    url: "https://www.youtube.com/watch?v=xI65oFiv_74",
    note: "Tóm tắt & diễn giải lại theo ý riêng từ video chia sẻ thực tế về mô hình Shopify Dropshipping và biên lợi nhuận ròng sau 1 năm thực chiến (không phải transcript nguyên văn, vì đây là nội dung có bản quyền của kênh). Bấm vào nguồn để xem/đọc bản đầy đủ.",
    chapters: [
      {
        time: "0:00–3:30",
        heading: "Ảo tưởng doanh thu vs. Lợi nhuận thực tế",
        body: [
          "Hình ảnh khoe dashboard doanh thu hàng chục ngàn USD trên mạng tạo cảm giác Dropshipping là con đường làm giàu dễ dàng. Nhưng doanh thu (Revenue) không bao giờ đồng nghĩa với lợi nhuận ròng (Net Profit).",
          "Biên lợi nhuận ròng thực tế sau khi trừ hết chi phí quảng cáo (Facebook/Google Ads), giá vốn sản phẩm, phí cổng thanh toán (Stripe/PayPal) và tỷ lệ hoàn tiền (refund/chargeback) thường chỉ nằm ở mức 15% – 25%.",
        ],
      },
      {
        time: "3:30–7:45",
        heading: "Cơ cấu chi phí và bài toán dòng tiền",
        body: [
          "Chi phí lớn nhất và biến động nhất là chi phí quảng cáo (Customer Acquisition Cost). Một sản phẩm bán ra 30$ có thể tốn 15$ chạy ads, 8$ tiền sản phẩm + ship, 2$ phí cổng thanh toán và sàn, lợi nhuận thực tế chỉ còn lại khoảng 5$.",
          "Rủi ro về dòng tiền vô cùng lớn: tài khoản quảng cáo bị vô hiệu hóa bất ngờ, hoặc cổng thanh toán bị giữ tiền (hold) từ 21–90 ngày làm đứt gãy dòng vốn kinh doanh.",
        ],
      },
      {
        time: "7:45–12:10",
        heading: "Bản chất của tư duy bán hàng và thử nghiệm",
        body: [
          "Shopify Dropshipping bản chất là kinh doanh bán lẻ và marketing trực tuyến. Thất bại lớn nhất của người mới là chọn nhầm sản phẩm rồi liên tục đổ tiền chạy ads mà không hiểu lý do tại sao khách hàng không mua.",
          "Quá trình làm e-com là quá trình kiểm thử liên tục (testing): test kịch bản, test đối tượng khách hàng, test trang bán hàng. Người thành công không phải vì họ không bao giờ lỗ, mà vì họ biết cắt lỗ nhanh và nhân rộng (scale) sản phẩm thắng đúng lúc.",
        ],
      },
      {
        time: "12:10–17:04",
        heading: "Khóa học chỉ là bản đồ — năng lực thực chiến mới quyết định",
        body: [
          "Khóa học hay người hướng dẫn chỉ giúp tiết kiệm thời gian mò mẫm và tránh các sai lầm cơ bản. Không có khóa học nào đảm bảo 100% ra đơn nếu bản thân người làm thiếu sự kiên trì và tư duy giải quyết vấn đề.",
          "Lời khuyên cho người mới: Chuẩn bị tâm lý đối mặt với rủi ro tài chính, không nên dồn toàn bộ tiền tiết kiệm hay vay nợ để bắt đầu, và hãy coi đây là một hành trình học nghề kinh doanh thực sự.",
        ],
      },
    ],
    quote: {
      text: "Doanh thu là con số để khoe, lợi nhuận ròng mới là số tiền thực sự nằm trong túi bạn.",
      cite: 'LinhThach — "Sự thật về Shopify! - 1 năm lợi nhuận bao nhiêu?"',
    },
  },
  {
    num: "02",
    title: "Tuần Lễ Kỉ Lục - Lợi Nhuận Thật Sự - Nỗi Sợ Khi Chạy Ads",
    channel: "LinhThach",
    duration: "25:46",
    url: "https://www.youtube.com/watch?v=yo-Q8KfHPEg",
    note: "Tóm tắt & kể lại theo phong cách trò chuyện mộc mạc từ video chia sẻ của LinhThach về tuần trúng được tuần bán hàng kỉ lục, chuyện tính tiền lời thực sự thế nào và nỗi sợ quen thuộc của dân làm ads khi die tài khoản.",
    chapters: [
      {
        time: "0:00–5:20",
        heading: "Tuần trúng kỉ lục và tâm lý vội vàng của anh em mới làm",
        body: [
          "Ai mới làm dropship cũng thích cảm giác nhìn dashboard nổ đơn liên tục, nhất là trúng tuần bán được nhiều tiền kỉ lục. Cảm giác lúc đó sướng lắm, dễ nghĩ mình nắm chắc công thức kiếm tiền rồi.",
          "Nhưng bẫy ở chỗ: thấy nổ đơn là nôn nóng tăng tiền quảng cáo (scale) thật nhanh mà chưa tính kỹ. Tăng tiền vội quá dễ làm chi phí bốc đầu, chưa kể hàng hóa nhập không kịp là rối tung lên ngay.",
        ],
      },
      {
        time: "5:20–12:10",
        heading: "Doanh thu cao chưa chắc đã dư nhiều tiền",
        body: [
          "Bán được vài ngàn hay chục ngàn đô nhìn rất oai, nhưng tính lại thì tiền ads dạo này đắt, ship cũng tốn, rồi cộng thêm phí Stripe, PayPal với tiền khách trả hàng.",
          "Trừ hết ra mới thấy tiền thực sự cầm về tay (lợi nhuận ròng) chẳng còn bao nhiêu. Anh em làm nghề hay bảo nhau: Doanh thu là để khoe cho oai, còn tiền lời cầm về túi mới nuôi sống được mình.",
        ],
      },
      {
        time: "12:10–19:30",
        heading: "Chuyện die tài khoản ads và nỗi sợ thường trực",
        body: [
          "Làm ads thì sợ nhất là sáng ra mở máy thấy tài khoản bị khóa (die BM / die camp). Đang bán ngon lành tự dưng đứt phăng nguồn thu nhập, rất dễ hoảng.",
          "Cách xử lý thực tế là chấp nhận đây là một phần của cuộc chơi. Luôn chuẩn bị sẵn dàn tài khoản dự phòng, có nick phụ, page phụ để nếu có sự cố thì vẫn có cái dùng ngay, không bị đứng hình.",
        ],
      },
      {
        time: "19:30–25:46",
        heading: "Giữ tâm lý bình thản và làm lâu dài",
        body: [
          "Làm dropship hay bán hàng online không phải ngày một ngày hai. Tháng này ăn đậm nhưng tháng sau chưa chắc đã thế, nên quan trọng nhất là phải giữ tiền và cân bằng tâm lý.",
          "Cứ coi mấy camp lỗ là tiền học phí rút kinh nghiệm, luôn chừa lại một khoản tiền phòng thân và đừng để cảm xúc vui buồn phụ thuộc hoàn toàn vào con số nhảy trên màn hình mỗi ngày.",
        ],
      },
    ],
    quote: {
      text: "Doanh thu khoe cho vui thôi, tiền thực bỏ túi sau khi trừ hết chi phí mới là cái quyết định bạn sống được bao lâu với nghề.",
      cite: 'LinhThach — "Tuần Lễ Kỉ Lục - Lợi Nhuận Thật Sự - Nỗi Sợ Khi Chạy Ads"',
    },
  },
  {
    num: "03",
    title: "Dropshipping Đã Chết? - Tại sao bạn thất bại? - Yêu Tiền là như nào?",
    channel: "LinhThach",
    duration: "26:25",
    url: "https://www.youtube.com/watch?v=bQpS9tI35hE",
    note: "Tóm tắt & diễn giải lại theo ý riêng từ video chia sẻ của LinhThach về thực trạng Dropshipping, lý do người mới thất bại và tư duy 'yêu tiền' đúng nghĩa trong kinh doanh (không phải transcript nguyên văn, vì đây là nội dung có bản quyền của kênh). Bấm vào nguồn để xem/đọc bản đầy đủ.",
    chapters: [
      {
        time: "0:00–6:15",
        heading: "Dropshipping đã chết hay do cách làm cũ không còn hiệu quả?",
        body: [
          'Nhiều người hô hào "Dropshipping đã chết" mỗi khi thị trường biến động hoặc chi phí quảng cáo đắt đỏ hơn. Sự thật không phải mô hình kinh doanh chết, mà là cách làm hời hợt, nhân bản cửa hàng rác và phụ thuộc vào ăn may đã hết thời.',
          'Thị trường ngày càng khắt khe, đòi hỏi người làm phải dịch chuyển sang tư duy xây dựng thương hiệu (branding), tối ưu trải nghiệm khách hàng và tạo ra nội dung sáng tạo có giá trị thực sự.',
        ],
      },
      {
        time: "6:15–13:20",
        heading: "Tại sao đa số người mới bắt đầu đều thất bại?",
        body: [
          'Thất bại lớn nhất của người mới đến từ tư duy "làm giàu nhanh" (get-rich-quick), thiếu sự kiên trì và không chịu đầu tư học hỏi bài bản.',
          'Các lỗi phổ biến bao gồm: chọn sản phẩm theo cảm tính mà không test kỹ, thiết kế cửa hàng thiếu uy tín, làm content quảng cáo hời hợt và bỏ cuộc ngay sau vài chiến dịch quảng cáo không có đơn.',
        ],
      },
      {
        time: "13:20–20:10",
        heading: "Thế nào là 'Yêu Tiền' một cách đúng đắn trong kinh doanh?",
        body: [
          '"Yêu tiền" không phải là tham lam hay bất chấp mọi giá để kiếm tiền, mà là sự tôn trọng công sức lao động, kỷ luật trong quản lý tài chính và nghiêm túc với con đường mình đã chọn.',
          'Người "yêu tiền" thật sự sẽ tập trung vào việc tạo ra giá trị, quản lý tốt dòng tiền, học cách tái đầu tư thay vì tiêu xài phung phí khi vừa có lợi nhuận ban đầu.',
        ],
      },
      {
        time: "20:10–26:25",
        heading: "Hành trình từ người bình thường trở nên phi thường",
        body: [
          'Chúng ta bắt đầu đều là những người bình thường, nhưng khao khát và hành động kỷ luật mỗi ngày sẽ tạo nên sự khác biệt.',
          'Đừng sợ thất bại hay thị trường khó khăn; hãy coi mọi thử thách là cơ hội để nâng cấp bản thân, rèn luyện tư duy kinh doanh và tiến gần hơn tới sự tự do tài chính.',
        ],
      },
    ],
    quote: {
      text: "Thị trường không bao giờ chết, chỉ có những cách làm hời hợt và thiếu kỷ luật bị đào thải.",
      cite: 'LinhThach — "Dropshipping Đã Chết? - Tại sao bạn thất bại? - Yêu Tiền là như nào?"',
    },
  },
  {
    num: "04",
    title: "Làm cách nào để Ship Nhanh? Supplier Mỹ? Aliexpress và Alibaba?",
    channel: "LinhThach",
    duration: "13:17",
    url: "https://www.youtube.com/watch?v=qrhkCs5-KNY",
    note: "Tóm tắt kinh nghiệm tối ưu vận chuyển trong Dropshipping: so sánh thời gian ship từ Trung Quốc vs kho Mỹ, cách làm việc với nhà cung cấp (Suppliers) trên AliExpress và Alibaba để rút ngắn thời gian giao hàng.",
    chapters: [
      {
        time: "0:00–3:15",
        heading: "Nỗi đau ship hàng chậm từ Trung Quốc",
        body: [
          "Thách thức lớn nhất khi làm Dropship qua AliExpress là thời gian giao hàng kéo dài từ 2–4 tuần, dẫn đến trải nghiệm khách hàng tệ và tỷ lệ hoàn tiền (dispute/chargeback) tăng cao.",
          "Nếu không tối ưu thời gian giao hàng, Stripe và PayPal sẽ dễ dàng đánh giá rủi ro cao và tạm giữ tiền (hold) hoặc khóa cổng thanh toán của bạn.",
        ],
      },
      {
        time: "3:15–7:00",
        heading: "Tìm kiếm Supplier và kho hàng tại Mỹ (US Warehouse)",
        body: [
          "Sử dụng các nguồn nhà cung cấp có sẵn kho tại Mỹ hoặc làm việc với các agent tư nhân (Private Agent) có thể rút ngắn thời gian ship xuống còn 3–7 ngày làm việc.",
          "Cách trao đổi và thương lượng với supplier trên AliExpress/Alibaba: chủ động hỏi về thời gian xử lý đơn (processing time), phương thức vận chuyển ưu tiên (ePacket, YunExpress, CJ Dropshipping) trước khi vít camp.",
        ],
      },
      {
        time: "7:00–10:30",
        heading: "So sánh AliExpress vs Alibaba trong quy mô kinh doanh",
        body: [
          "AliExpress phù hợp cho giai đoạn kiểm thử sản phẩm (test product) với số lượng lẻ. Khi sản phẩm có tín hiệu bán tốt (winning product), cần chuyển sang Alibaba hoặc làm việc trực tiếp với xưởng để có giá sỉ tốt hơn và tùy biến bao bì (custom packaging).",
          "Quản lý kỳ vọng khách hàng bằng cách minh bạch thời gian giao hàng trên website và tự động gửi email cập nhật mã vận đơn (tracking number).",
        ],
      },
      {
        time: "10:30–13:17",
        heading: "Chiến lược giữ chân khách hàng bằng trải nghiệm giao hàng",
        body: [
          "Khách hàng US rất coi trọng tốc độ vận chuyển. Việc rút ngắn được 5-7 ngày giao hàng có thể làm tăng đáng kể tỷ lệ khách hàng quay lại (returning customer) và đánh giá 5 sao.",
        ],
      },
    ],
    quote: {
      text: "Tốc độ vận chuyển quyết định sự sống còn của thương hiệu. Khách hàng vui vẻ nhận hàng nhanh là bí quyết giảm bớt rủi ro khóa cổng thanh toán.",
      cite: 'LinhThach — "Làm cách nào để Ship Nhanh? Supplier Mỹ? Aliexpress và Alibaba?"',
    },
  },
  {
    num: "05",
    title: "Shopify Dropshipping mùa Dịch? Sự Thích Nghi? Cách nắm bắt thị trường?",
    channel: "LinhThach",
    duration: "11:24",
    url: "https://www.youtube.com/watch?v=Oa76IdYioiY",
    note: "Góc nhìn về sự biến động thị trường khi có biến cố lớn (mùa dịch/khủng hoảng), tư duy thích nghi linh hoạt và cách tìm kiếm nhu cầu mới của người tiêu dùng.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Thị trường biến động và tâm lý hoảng loạn của đa số",
        body: [
          "Khi đại dịch hoặc biến cố kinh tế xảy ra, chuỗi cung ứng bị gián đoạn và tâm lý người tiêu dùng thay đổi đột ngột. Đa số người mới bị hoảng loạn và vội vã tắt quảng cáo, dừng kinh doanh.",
          "Tuy nhiên, khủng hoảng luôn đi kèm cơ hội. Hành vi mua sắm online tăng vọt do người dân ở nhà nhiều hơn, mở ra nhu cầu khổng lồ cho các ngách sản phẩm gia đình và chăm sóc cá nhân.",
        ],
      },
      {
        time: "3:00–6:45",
        heading: "Nắm bắt ngách sản phẩm xu hướng mới",
        body: [
          "Phân tích các ngách bùng nổ: đồ tập thể thao tại nhà (home workout), dụng cụ làm bếp, đồ trang trí góc làm việc (home office), sản phẩm thư giãn và chăm sóc sức khỏe tâm lý.",
          "Cách thay đổi kịch bản quảng cáo (angle ad) để phù hợp với bối cảnh mới: thay vì đánh vào nhu cầu đi lại, du lịch thì tập trung vào sự tiện lợi, thoải mái khi ở nhà.",
        ],
      },
      {
        time: "6:45–9:30",
        heading: "Tư duy thích nghi và quản lý rủi ro vận chuyển",
        body: [
          "Học cách linh hoạt thay đổi phương án vận chuyển khi các tuyến đường hàng không bị hạn chế. Luôn cập nhật thông báo từ các bên logistics để điều chỉnh thời gian ship trên store.",
          "Giữ tư duy mềm dẻo: Người sống sót không phải là người mạnh nhất hay thông minh nhất, mà là người biết thích nghi nhanh nhất với sự thay đổi của thị trường.",
        ],
      },
      {
        time: "9:30–11:24",
        heading: "Bài học lâu dài về sự kiên cường trong kinh doanh",
        body: [
          "Thị trường luôn luôn biến động. Hôm nay là đại dịch, ngày mai có thể là thuật toán Facebook thay đổi hay chi phí ads tăng. Khả năng giải quyết vấn đề mới là năng lực lõi của một entrepreneur.",
        ],
      },
    ],
    quote: {
      text: "Người sống sót không phải là người mạnh nhất, mà là người biết thích nghi nhanh nhất với thay đổi.",
      cite: 'LinhThach — "Shopify Dropshipping mùa Dịch? Sự Thích Nghi? Cách nắm bắt thị trường?"',
    },
  },
  {
    num: "06",
    title: "Tiền có VAI TRÒ gì và HOẠT ĐỘNG ra sao với Adset Budget?",
    channel: "LinhThach",
    duration: "11:05",
    url: "https://www.youtube.com/watch?v=lTLBVkkz-Vo",
    note: "Phân tích bản chất kỹ thuật của ngân sách quảng cáo Facebook (Adset Budget), cơ chế đấu giá (bidding) và cách thuật toán Facebook phân bổ tiền của bạn.",
    chapters: [
      {
        time: "0:00–3:10",
        heading: "Bản chất của ngân sách quảng cáo (Adset Budget)",
        body: [
          "Tiền trong quảng cáo Facebook thực chất là công cụ để bạn đi đấu giá lượt hiển thị (impressions) với các nhà quảng cáo khác trên cùng nhóm đối tượng.",
          "Ngân sách adset cho Facebook biết bạn sẵn sàng chi trả bao nhiêu tiền trong một ngày để máy học (machine learning) đi tìm kiếm những người có khả năng chuyển đổi cao nhất.",
        ],
      },
      {
        time: "3:10–6:30",
        heading: "Máy học Facebook hoạt động như thế nào với ngân sách?",
        body: [
          "Khi bạn đặt ngân sách quá thấp, máy học không có đủ dữ liệu để hoàn thành giai đoạn học (learning phase - 50 chuyển đổi/tuần). Ngược lại, nhân đôi ngân sách đột ngột sẽ làm xáo trộn tập đối tượng máy học đang tiếp cận.",
          "Quy tắc tăng ngân sách an toàn: tăng dần 15% – 20% mỗi 24-48 giờ để Facebook điều chỉnh tệp khách hàng mà không làm vọt chi phí trên mỗi đơn hàng (CPA).",
        ],
      },
      {
        time: "6:30–9:15",
        heading: "Chiến lược phân bổ ngân sách test vs scale",
        body: [
          "Tách biệt rõ ràng ngân sách thử nghiệm (Testing Budget) và ngân sách nhân rộng (Scaling Budget). Đừng bao giờ đụng vào nhóm quảng cáo đang chạy ổn định để test kịch bản mới.",
          "Sự khác biệt giữa ABO (Ad Set Budget Optimization) và CBO (Campaign Budget Optimization) và thời điểm thích hợp để chuyển giao ngân sách.",
        ],
      },
      {
        time: "9:15–11:05",
        heading: "Tư duy coi tiền quảng cáo là chi phí đầu tư dữ liệu",
        body: [
          "Đừng coi tiền chạy ads bị lỗ là mất đi. Mỗi đô la chi ra là tiền mua dữ liệu (data) về hành vi khách hàng, giúp bạn hiểu kịch bản nào giữ chân người xem và góc bán nào hiệu quả.",
        ],
      },
    ],
    quote: {
      text: "Ngân sách quảng cáo là nhiên liệu để máy học đi tìm khách hàng. Tăng tiền thông minh là tăng theo nhịp của thuật toán.",
      cite: 'LinhThach — "Tiền có VAI TRÒ gì và HOẠT ĐỘNG ra sao với Adset Budget?"',
    },
  },
  {
    num: "07",
    title: "Quảng Cáo Facebook Đã Chết? Điều gì đang xảy ra?",
    channel: "LinhThach",
    duration: "19:50",
    url: "https://www.youtube.com/watch?v=ST6p4YOViTI",
    note: "Mổ xẻ nguyên nhân chi phí quảng cáo Facebook tăng cao, các đợt bão quét tài khoản và tư duy thích nghi khi thuật toán cạnh tranh ngày càng khốc liệt.",
    chapters: [
      {
        time: "0:00–4:30",
        heading: "Tại sao người người nhà nhà than 'FB Ads đã chết'?",
        body: [
          "Mỗi khi CPM (chi phí cho 1000 lượt hiển thị) tăng cao hoặc tài khoản bị vô hiệu hóa hàng loạt, cộng đồng lại dấy lên làn sóng cho rằng Facebook Ads không còn hiệu quả.",
          "Bản chất là số lượng nhà quảng cáo tham gia cuộc chơi ngày càng đông, trong khi diện tích hiển thị quảng cáo trên Feed có hạn, dẫn đến giá thầu tự nhiên bị đẩy lên cao.",
        ],
      },
      {
        time: "4:30–9:45",
        heading: "Sự thay đổi của thuật toán và tiêu chuẩn nội dung",
        body: [
          "Facebook ngày càng ưu ái các nội dung có giữ chân người dùng tốt (retention) và tương tác tự nhiên. Những quảng cáo giật gân, bán hàng chộp giật hay vi phạm chính sách sẽ bị trừng phạt bằng CPM cắt cổ hoặc khóa tài khoản.",
          "Chuyển dịch từ việc 'bắt bài thuật toán' sang tập trung làm nội dung chất lượng (Creative First). Nội dung quảng cáo chính là phần kỹ thuật nhắm mục tiêu (targeting) tốt nhất.",
        ],
      },
      {
        time: "9:45–15:00",
        heading: "Xây dựng hệ thống tài khoản bền vững (Infrastructure)",
        body: [
          "Không bao giờ phụ thuộc vào một tài khoản quảng cáo hay một Business Manager (BM) duy nhất. Cần xây dựng dàn tài khoản dự phòng có phân quyền rõ ràng để vận hành liên tục.",
          "Tuân thủ chính sách quảng cáo (Ad Policies), kiểm tra kỹ trang đích (landing page) và chất lượng trang Fanpage (Page Score) để tránh bị ăn gậy vô lý.",
        ],
      },
      {
        time: "15:00–19:50",
        heading: "Lời khuyên cho dân Dropship trong thời đại mới",
        body: [
          "Facebook Ads không chết, chỉ có cách làm quảng cáo ngây thơ và thiếu chuyên nghiệp bị loại bỏ. Muốn thắng lớn, bạn phải đầu tư sâu vào kịch bản video, hiểu sản phẩm và tối ưu chuyển đổi trang bán hàng.",
        ],
      },
    ],
    quote: {
      text: "Nội dung quảng cáo chính là phần nhắm mục tiêu tốt nhất. Thuật toán sẽ đưa video hay đến đúng người cần mua.",
      cite: 'LinhThach — "Quảng Cáo Facebook Đã Chết? Điều gì đang xảy ra?"',
    },
  },
  {
    num: "08",
    title: "Cách Tìm Sản Phẩm để bán Trên Shopify - Winning Product là gì?",
    channel: "LinhThach",
    duration: "24:26",
    url: "https://www.youtube.com/watch?v=scZOAZlUmOM",
    note: "Hướng dẫn phương pháp nghiên cứu và săn tìm sản phẩm thắng (Winning Product) cho cửa hàng Shopify, tiêu chí đánh giá một sản phẩm tiềm năng có thể vít đơn.",
    chapters: [
      {
        time: "0:00–5:30",
        heading: "Khái niệm sản phẩm thắng (Winning Product)",
        body: [
          "Winning Product không phải là sản phẩm thần thánh do bạn tự tưởng tượng ra, mà là sản phẩm giải quyết được một nỗi đau cụ thể (Problem-Solving) hoặc mang lại yếu tố bất ngờ, độc đáo (Wow Factor).",
          "Sản phẩm đó phải có biên độ lợi nhuận tốt (thường bán giá gấp 3–4 lần giá vốn nhập) để đảm bảo chi trả đủ cho chi phí quảng cáo và vận hành.",
        ],
      },
      {
        time: "5:30–12:00",
        heading: "Các phương pháp và công cụ tìm sản phẩm thực chiến",
        body: [
          "Sử dụng Facebook Ad Library để soi các đối thủ đang chạy quảng cáo lâu ngày (quảng cáo chạy càng lâu chứng tỏ đang có lời).",
          "Săn sản phẩm trên TikTok, AliExpress, Amazon Mover & Shakers, Pinterest và các công cụ spy sản phẩm để phát hiện ra xu hướng trước khi nó quá đại trà.",
        ],
      },
      {
        time: "12:00–18:15",
        heading: "Bộ tiêu chí lọc sản phẩm trước khi quyết định test",
        body: [
          "Tiêu chí 1: Khó tìm thấy ở các cửa hàng bán lẻ truyền thống (Walmart, Target).",
          "Tiêu chí 2: Dễ làm nội dung quảng cáo bằng video (Visual Appeals) — nhìn vào là hiểu ngay công dụng.",
          "Tiêu chí 3: Không vi phạm bản quyền thương hiệu lớn, không thuộc danh mục hàng cấm/nguy hiểm.",
        ],
      },
      {
        time: "18:15–24:26",
        heading: "Tư duy test sản phẩm nhanh và cắt lỗ kỷ luật",
        body: [
          "Đừng bao giờ đem lòng 'yêu' sản phẩm. Sản phẩm chỉ là công cụ kinh doanh. Test theo quy trình 3–5 ngày, nếu chỉ số xấu và không ra đơn thì kiên quyết đổi sản phẩm khác, không bảo thủ giữ camp.",
        ],
      },
    ],
    quote: {
      text: "Đừng yêu sản phẩm, hãy yêu kết quả và dữ liệu. Sản phẩm thắng là sản phẩm thị trường chấp nhận móc tiền trả.",
      cite: 'LinhThach — "Cách Tìm Sản Phẩm để bán Trên Shopify - Winning Product là gì?"',
    },
  },
  {
    num: "09",
    title: "Shopify Dropshipping là gì? Cần có và biết những gì?",
    channel: "LinhThach",
    duration: "37:24",
    url: "https://www.youtube.com/watch?v=k7Qg3j5A-Ss",
    note: "Bức tranh tổng quan và hướng dẫn toàn diện từ A-Z cho người mới bắt đầu tìm hiểu mô hình kinh doanh Shopify Dropshipping.",
    chapters: [
      {
        time: "0:00–7:45",
        heading: "Bản chất mô hình Shopify Dropshipping",
        body: [
          "Dropshipping là mô hình bán lẻ mà bạn không cần lưu trữ hàng hóa trong kho. Khi có đơn hàng từ khách, bạn mua lại từ bên thứ ba (nhà cung cấp) và họ sẽ giao hàng trực tiếp cho người mua.",
          "Vai trò chính của bạn là người làm Marketing, xây dựng cửa hàng online uy tín và thu hút khách hàng tiềm năng.",
        ],
      },
      {
        time: "7:45–16:30",
        heading: "Các trụ cột chính cần chuẩn bị khi bắt đầu",
        body: [
          "Trụ cột 1: Website bán hàng chuyên nghiệp dựng trên nền tảng Shopify — tối ưu trải nghiệm người dùng (UX/UI) và tốc độ tải trang.",
          "Trụ cột 2: Cổng thanh toán quốc tế (PayPal, Stripe, 2Checkout) — huyết mạch nhận tiền của mô hình.",
          "Trụ cột 3: Nguồn hàng và đơn vị vận chuyển (AliExpress, CJ Dropshipping, Private Agent).",
        ],
      },
      {
        time: "16:30–27:00",
        heading: "Kỹ năng bắt buộc phải học để thành công",
        body: [
          "Kỹ năng chạy quảng cáo (Facebook Ads, Google Ads, TikTok Ads): Cách đọc chỉ số CTR, CPC, CPM, ROAS.",
          "Kỹ năng sáng tạo nội dung (Content Creation): Viết tiêu đề hook, dựng video quảng cáo ngắn thu hút.",
          "Kỹ năng phân tích số liệu và quản lý dòng tiền kinh doanh.",
        ],
      },
      {
        time: "27:00–37:24",
        heading: "Lộ trình thực thi cho người mới và tâm thế chuẩn",
        body: [
          "Đặt kỳ vọng thực tế: Đây là mô hình kinh doanh nghiêm túc, không phải trò chơi may rủi hay bấm nút ra tiền.",
          "Lộ trình khuyến nghị: Học lý thuyết cơ bản -> Thực hành dựng gian hàng -> Tập test sản phẩm nhỏ -> Rút kinh nghiệm từ thất bại -> Nhân rộng khi tìm ra sản phẩm thắng.",
        ],
      },
    ],
    quote: {
      text: "Dropshipping không phải là cách làm giàu nhanh qua đêm, nó là một môn nghệ thuật bán hàng và tối ưu dòng tiền.",
      cite: 'LinhThach — "Shopify Dropshipping là gì? Cần có và biết những gì?"',
    },
  },
  {
    num: "10",
    title: "Thế nào là Giỏi Quảng Cáo Facebook? Cơ bản về Quảng cáo Chuyển Đổi.",
    channel: "LinhThach",
    duration: "24:17",
    url: "https://www.youtube.com/watch?v=BOIGdfJW_uA",
    note: "Giải mã định nghĩa 'giỏi ads' thực sự trong thương mại điện tử: không nằm ở thủ thuật tệp ẩn hay tut/tricks, mà ở tư duy quảng cáo chuyển đổi (Conversion Ads) và thấu hiểu hành vi mua hàng.",
    chapters: [
      {
        time: "0:00–5:15",
        heading: "Ảo tưởng về 'Thủ thuật / Tut / Trick' quảng cáo",
        body: [
          "Nhiều người mới tin rằng người giỏi ads là người biết những thủ thuật ẩn, mua nick chạy bùng hoặc biết cách set chiến dịch thần thánh nào đó.",
          "Sự thật: Thuật toán Facebook ngày càng thông minh. Các thủ thuật ngắn hạn chỉ mang lại kết quả chốc lát và sớm muộn cũng bị vá. Người giỏi ads là người hiểu bản chất cuộc chơi.",
        ],
      },
      {
        time: "5:15–12:00",
        heading: "Bản chất của Quảng cáo Chuyển Đổi (Conversion Objective)",
        body: [
          "Mục tiêu Chuyển đổi (Conversion) yêu cầu thuật toán tìm kiếm những người có lịch sử và thói quen mua hàng trên mạng, chứ không chỉ là bấm thích hay bình luận dạo.",
          "Cách Pixel Facebook ghi nhận dữ liệu sự kiện: PageView -> ViewContent -> AddToCart -> InitiateCheckout -> Purchase.",
        ],
      },
      {
        time: "12:00–18:30",
        heading: "Định nghĩa thực sự của một người giỏi Quảng cáo",
        body: [
          "Người giỏi ads là người biết đọc và phân tích chỉ số để chẩn đoán bệnh của chiến dịch (Ví dụ: CTR thấp = Video dở; AddToCart cao nhưng không Purchase = Giá ship đắt hoặc cổng thanh toán lỗi).",
          "Người giỏi ads biết cách tạo ra góc bán (angle) độc đáo và viết kịch bản quảng cáo đánh trúng tâm lý khách hàng.",
        ],
      },
      {
        time: "18:30–24:17",
        heading: "Quy trình tối ưu hóa chiến dịch từ dữ liệu",
        body: [
          "Cách đưa ra quyết định dựa trên con số: Khi nào nên tắt nhóm quảng cáo, khi nào nên giữ, và khi nào tăng ngân sách.",
          "Kết luận: Kỹ thuật set camp chỉ chiếm 20% thành công, 80% còn lại nằm ở sản phẩm, nội dung quảng cáo và trang bán hàng.",
        ],
      },
    ],
    quote: {
      text: "Giỏi ads không phải là biết tut trick, mà là đọc hiểu dữ liệu và biết kịch bản nào khiến khách hàng vui vẻ móc tiền mua.",
      cite: 'LinhThach — "Thế nào là Giỏi Quảng Cáo Facebook? Cơ bản về Quảng cáo Chuyển Đổi."',
    },
  },
  {
    num: "11",
    title: "Cái nào Quan Trong Hơn? Sản Phẩm hay Marketing?",
    channel: "LinhThach",
    duration: "20:24",
    url: "https://www.youtube.com/watch?v=XLvcszINdSg",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cái nào Quan Trong Hơn? Sản Phẩm hay Marketing?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Cái nào Quan Trong Hơn? Sản Phẩm hay Marketin",
        body: [
          "Giới thiệu chủ đề chính về \"Cái nào Quan Trong Hơn? Sản Phẩm hay Marketing?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–10:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "10:00–20:24",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cái nào Quan Trong Hơn? Sản Phẩm hay Marketing?",
      cite: 'LinhThach — "Cái nào Quan Trong Hơn? Sản Phẩm hay Marketing?"',
    },
  },
  {
    num: "12",
    title: "Cách Xây Thương Hiệu nhỏ (Micro Brand). Làm thế nào để được nhớ tới?",
    channel: "LinhThach",
    duration: "17:37",
    url: "https://www.youtube.com/watch?v=bAjP0ROMEjg",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cách Xây Thương Hiệu nhỏ (Micro Brand). Làm thế nào để được nhớ tới?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Cách Xây Thương Hiệu nhỏ (Micro Brand). Làm t",
        body: [
          "Giới thiệu chủ đề chính về \"Cách Xây Thương Hiệu nhỏ (Micro Brand). Làm thế nào để được nhớ tới?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–17:37",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cách Xây Thương Hiệu nhỏ (Micro Brand). Làm thế nào để được nhớ tới?",
      cite: 'LinhThach — "Cách Xây Thương Hiệu nhỏ (Micro Brand). Làm thế nào để được nhớ tới?"',
    },
  },
  {
    num: "13",
    title: "Linh Thach| Phần lớn Chúng ta Không Hiểu những điều này.",
    channel: "LinhThach",
    duration: "12:40",
    url: "https://www.youtube.com/watch?v=MGP-z5JY26w",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Linh Thach| Phần lớn Chúng ta Không Hiểu những điều này.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Linh Thach| Phần lớn Chúng ta Không Hiểu nhữn",
        body: [
          "Giới thiệu chủ đề chính về \"Linh Thach| Phần lớn Chúng ta Không Hiểu những điều này.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:40",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Linh Thach| Phần lớn Chúng ta Không Hiểu những điều này.",
      cite: 'LinhThach — "Linh Thach| Phần lớn Chúng ta Không Hiểu những điều này."',
    },
  },
  {
    num: "14",
    title: "4 Lí do Chính| Tại Sao không Bán được Hàng?",
    channel: "LinhThach",
    duration: "18:23",
    url: "https://www.youtube.com/watch?v=FeKps7BYBuA",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"4 Lí do Chính| Tại Sao không Bán được Hàng?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Lí do Chính| Tại Sao không Bán được Hàng?",
        body: [
          "Giới thiệu chủ đề chính về \"Lí do Chính| Tại Sao không Bán được Hàng?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–18:23",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "4 Lí do Chính| Tại Sao không Bán được Hàng?",
      cite: 'LinhThach — "4 Lí do Chính| Tại Sao không Bán được Hàng?"',
    },
  },
  {
    num: "15",
    title: "Làm Thế nào để Chạy Quảng Cáo ra Đơn?",
    channel: "LinhThach",
    duration: "11:17",
    url: "https://www.youtube.com/watch?v=6Tx_kwG-1bc",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Thế nào để Chạy Quảng Cáo ra Đơn?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Thế nào để Chạy Quảng Cáo ra Đơn?",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Thế nào để Chạy Quảng Cáo ra Đơn?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–11:17",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Thế nào để Chạy Quảng Cáo ra Đơn?",
      cite: 'LinhThach — "Làm Thế nào để Chạy Quảng Cáo ra Đơn?"',
    },
  },
  {
    num: "16",
    title: "Dropshipping mùa Dịch cần Lưu ý những gì?",
    channel: "LinhThach",
    duration: "14:15",
    url: "https://www.youtube.com/watch?v=bfjUYX6LtUg",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Dropshipping mùa Dịch cần Lưu ý những gì?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Dropshipping mùa Dịch cần Lưu ý những gì?",
        body: [
          "Giới thiệu chủ đề chính về \"Dropshipping mùa Dịch cần Lưu ý những gì?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–14:15",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Dropshipping mùa Dịch cần Lưu ý những gì?",
      cite: 'LinhThach — "Dropshipping mùa Dịch cần Lưu ý những gì?"',
    },
  },
  {
    num: "17",
    title: "Cập Nhật về Giao Diện mới của Facebook",
    channel: "LinhThach",
    duration: "13:04",
    url: "https://www.youtube.com/watch?v=SSd_MbB_0IQ",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cập Nhật về Giao Diện mới của Facebook\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Cập Nhật về Giao Diện mới của Facebook",
        body: [
          "Giới thiệu chủ đề chính về \"Cập Nhật về Giao Diện mới của Facebook\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–13:04",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cập Nhật về Giao Diện mới của Facebook",
      cite: 'LinhThach — "Cập Nhật về Giao Diện mới của Facebook"',
    },
  },
  {
    num: "18",
    title: "Bán Hàng bằng Instagram Influencer| Cách sử dụng hiệu quả?",
    channel: "LinhThach",
    duration: "18:37",
    url: "https://www.youtube.com/watch?v=57oXAYwIupU",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Bán Hàng bằng Instagram Influencer| Cách sử dụng hiệu quả?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Bán Hàng bằng Instagram Influencer| Cách sử d",
        body: [
          "Giới thiệu chủ đề chính về \"Bán Hàng bằng Instagram Influencer| Cách sử dụng hiệu quả?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–18:37",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Bán Hàng bằng Instagram Influencer| Cách sử dụng hiệu quả?",
      cite: 'LinhThach — "Bán Hàng bằng Instagram Influencer| Cách sử dụng hiệu quả?"',
    },
  },
  {
    num: "19",
    title: "Mức Giá dễ Bán nhất cho Bán Hàng Quốc tế| Lí do và Giải thích",
    channel: "LinhThach",
    duration: "14:32",
    url: "https://www.youtube.com/watch?v=rxkj4opPr8A",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Mức Giá dễ Bán nhất cho Bán Hàng Quốc tế| Lí do và Giải thích\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Mức Giá dễ Bán nhất cho Bán Hàng Quốc tế| Lí",
        body: [
          "Giới thiệu chủ đề chính về \"Mức Giá dễ Bán nhất cho Bán Hàng Quốc tế| Lí do và Giải thích\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–14:32",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Mức Giá dễ Bán nhất cho Bán Hàng Quốc tế| Lí do và Giải thích",
      cite: 'LinhThach — "Mức Giá dễ Bán nhất cho Bán Hàng Quốc tế| Lí do và Giải thích"',
    },
  },
  {
    num: "20",
    title: "(Tập 1) Chuyện Khởi \"Nghiệp\": Doanh thu 800 Triệu trong 3 tháng!",
    channel: "LinhThach",
    duration: "48:39",
    url: "https://www.youtube.com/watch?v=cnO09O_P_1U",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"(Tập 1) Chuyện Khởi Nghiệp: Doanh thu 800 Triệu trong 3 tháng!\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–12:00",
        heading: "Mở đầu & Đặt vấn đề: (Tập 1) Chuyện Khởi \"Nghiệp\": Doanh thu 800 T",
        body: [
          "Giới thiệu chủ đề chính về \"(Tập 1) Chuyện Khởi \"Nghiệp\": Doanh thu 800 Triệu trong 3 tháng!\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "12:00–24:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "24:00–48:39",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "(Tập 1) Chuyện Khởi \"Nghiệp\": Doanh thu 800 Triệu trong 3 tháng!",
      cite: 'LinhThach — "(Tập 1) Chuyện Khởi "Nghiệp": Doanh thu 800 Triệu trong 3 tháng!"',
    },
  },
  {
    num: "21",
    title: "Sắp tới BÁN gì? Xu hướng sản phẩm bán chạy trong Quý 4",
    channel: "LinhThach",
    duration: "10:57",
    url: "https://www.youtube.com/watch?v=v5-Nn39YQHE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Sắp tới BÁN gì? Xu hướng sản phẩm bán chạy trong Quý 4\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Sắp tới BÁN gì? Xu hướng sản phẩm bán chạy tr",
        body: [
          "Giới thiệu chủ đề chính về \"Sắp tới BÁN gì? Xu hướng sản phẩm bán chạy trong Quý 4\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:57",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Sắp tới BÁN gì? Xu hướng sản phẩm bán chạy trong Quý 4",
      cite: 'LinhThach — "Sắp tới BÁN gì? Xu hướng sản phẩm bán chạy trong Quý 4"',
    },
  },
  {
    num: "22",
    title: "Cài Đặt Pixel vào Shopify và Chia sẻ Pixel giữa các BM",
    channel: "LinhThach",
    duration: "10:06",
    url: "https://www.youtube.com/watch?v=z5gC5kapWPk",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cài Đặt Pixel vào Shopify và Chia sẻ Pixel giữa các BM\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Cài Đặt Pixel vào Shopify và Chia sẻ Pixel gi",
        body: [
          "Giới thiệu chủ đề chính về \"Cài Đặt Pixel vào Shopify và Chia sẻ Pixel giữa các BM\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:06",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cài Đặt Pixel vào Shopify và Chia sẻ Pixel giữa các BM",
      cite: 'LinhThach — "Cài Đặt Pixel vào Shopify và Chia sẻ Pixel giữa các BM"',
    },
  },
  {
    num: "23",
    title: "Back Up Tài khoản Doanh Nghiệp, Chia sẻ quyền, Chia sẻ tài nguyên Facebook.",
    channel: "LinhThach",
    duration: "18:53",
    url: "https://www.youtube.com/watch?v=mPn3Tx3rF_E",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Back Up Tài khoản Doanh Nghiệp, Chia sẻ quyền, Chia sẻ tài nguyên Facebook.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Back Up Tài khoản Doanh Nghiệp, Chia sẻ quyền",
        body: [
          "Giới thiệu chủ đề chính về \"Back Up Tài khoản Doanh Nghiệp, Chia sẻ quyền, Chia sẻ tài nguyên Facebook.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–18:53",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Back Up Tài khoản Doanh Nghiệp, Chia sẻ quyền, Chia sẻ tài nguyên Facebook.",
      cite: 'LinhThach — "Back Up Tài khoản Doanh Nghiệp, Chia sẻ quyền, Chia sẻ tài nguyên Facebook."',
    },
  },
  {
    num: "24",
    title: "Tiềm năng của 1 Business thật sự. Thế nào là 1 Business đủ để Bán?",
    channel: "LinhThach",
    duration: "28:57",
    url: "https://www.youtube.com/watch?v=jiQBgq9YZck",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tiềm năng của 1 Business thật sự. Thế nào là 1 Business đủ để Bán?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–7:00",
        heading: "Mở đầu & Đặt vấn đề: Tiềm năng của 1 Business thật sự. Thế nào là",
        body: [
          "Giới thiệu chủ đề chính về \"Tiềm năng của 1 Business thật sự. Thế nào là 1 Business đủ để Bán?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "7:00–14:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "14:00–28:57",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tiềm năng của 1 Business thật sự. Thế nào là 1 Business đủ để Bán?",
      cite: 'LinhThach — "Tiềm năng của 1 Business thật sự. Thế nào là 1 Business đủ để Bán?"',
    },
  },
  {
    num: "25",
    title: "Bán hàng Hội nhóm | Sự Thành Công ngoài mong đợi",
    channel: "LinhThach",
    duration: "20:03",
    url: "https://www.youtube.com/watch?v=MKHc1RmQoZo",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Bán hàng Hội nhóm | Sự Thành Công ngoài mong đợi\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Bán hàng Hội nhóm | Sự Thành Công ngoài mong",
        body: [
          "Giới thiệu chủ đề chính về \"Bán hàng Hội nhóm | Sự Thành Công ngoài mong đợi\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–10:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "10:00–20:03",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Bán hàng Hội nhóm | Sự Thành Công ngoài mong đợi",
      cite: 'LinhThach — "Bán hàng Hội nhóm | Sự Thành Công ngoài mong đợi"',
    },
  },
  {
    num: "26",
    title: "POPCAST#1: Khi nào nên Bắt Đầu?",
    channel: "LinhThach",
    duration: "22:35",
    url: "https://www.youtube.com/watch?v=OfPSx7oHzlE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"POPCAST#1: Khi nào nên Bắt Đầu?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: POPCAST#1: Khi nào nên Bắt Đầu?",
        body: [
          "Giới thiệu chủ đề chính về \"POPCAST#1: Khi nào nên Bắt Đầu?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–11:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "11:00–22:35",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "POPCAST#1: Khi nào nên Bắt Đầu?",
      cite: 'LinhThach — "POPCAST#1: Khi nào nên Bắt Đầu?"',
    },
  },
  {
    num: "27",
    title: "BÁN HÀNG SHOPIFY - NHỮNG ĐIỀU NÊN BIẾT TRƯỚC KHI BẮT ĐẦU!",
    channel: "LinhThach",
    duration: "38:06",
    url: "https://www.youtube.com/watch?v=63-4AAextXk",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"BÁN HÀNG SHOPIFY - NHỮNG ĐIỀU NÊN BIẾT TRƯỚC KHI BẮT ĐẦU!\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–9:00",
        heading: "Mở đầu & Đặt vấn đề: BÁN HÀNG SHOPIFY - NHỮNG ĐIỀU NÊN BIẾT TRƯỚC",
        body: [
          "Giới thiệu chủ đề chính về \"BÁN HÀNG SHOPIFY - NHỮNG ĐIỀU NÊN BIẾT TRƯỚC KHI BẮT ĐẦU!\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "9:00–19:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "19:00–38:06",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "BÁN HÀNG SHOPIFY - NHỮNG ĐIỀU NÊN BIẾT TRƯỚC KHI BẮT ĐẦU!",
      cite: 'LinhThach — "BÁN HÀNG SHOPIFY - NHỮNG ĐIỀU NÊN BIẾT TRƯỚC KHI BẮT ĐẦU!"',
    },
  },
  {
    num: "28",
    title: "BÁN HÀNG SHOPIFY: 4 KĨ NĂNG CƠ BẢN CẦN PHẢI CÓ!",
    channel: "LinhThach",
    duration: "24:31",
    url: "https://www.youtube.com/watch?v=52IvTPBfrVw",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"BÁN HÀNG SHOPIFY: 4 KĨ NĂNG CƠ BẢN CẦN PHẢI CÓ!\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: BÁN HÀNG SHOPIFY: 4 KĨ NĂNG CƠ BẢN CẦN PHẢI C",
        body: [
          "Giới thiệu chủ đề chính về \"BÁN HÀNG SHOPIFY: 4 KĨ NĂNG CƠ BẢN CẦN PHẢI CÓ!\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–12:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "12:00–24:31",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "BÁN HÀNG SHOPIFY: 4 KĨ NĂNG CƠ BẢN CẦN PHẢI CÓ!",
      cite: 'LinhThach — "BÁN HÀNG SHOPIFY: 4 KĨ NĂNG CƠ BẢN CẦN PHẢI CÓ!"',
    },
  },
  {
    num: "29",
    title: "Cách Nhập hàng Alibaba An Toàn và Thuê kho tại Mĩ",
    channel: "LinhThach",
    duration: "26:56",
    url: "https://www.youtube.com/watch?v=m1BC_yRhA4Y",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cách Nhập hàng Alibaba An Toàn và Thuê kho tại Mĩ\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Cách Nhập hàng Alibaba An Toàn và Thuê kho tạ",
        body: [
          "Giới thiệu chủ đề chính về \"Cách Nhập hàng Alibaba An Toàn và Thuê kho tại Mĩ\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–13:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "13:00–26:56",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cách Nhập hàng Alibaba An Toàn và Thuê kho tại Mĩ",
      cite: 'LinhThach — "Cách Nhập hàng Alibaba An Toàn và Thuê kho tại Mĩ"',
    },
  },
  {
    num: "30",
    title: "IOS 14 ảnh hưởng như nào tới Facebook Ads?",
    channel: "LinhThach",
    duration: "12:57",
    url: "https://www.youtube.com/watch?v=SR1-N3w__mg",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"IOS 14 ảnh hưởng như nào tới Facebook Ads?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: IOS 14 ảnh hưởng như nào tới Facebook Ads?",
        body: [
          "Giới thiệu chủ đề chính về \"IOS 14 ảnh hưởng như nào tới Facebook Ads?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:57",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "IOS 14 ảnh hưởng như nào tới Facebook Ads?",
      cite: 'LinhThach — "IOS 14 ảnh hưởng như nào tới Facebook Ads?"',
    },
  },
  {
    num: "31",
    title: "Chuyến bay về việt nam",
    channel: "LinhThach",
    duration: "26:56",
    url: "https://www.youtube.com/watch?v=TyHXy8rdLTA",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Chuyến bay về việt nam\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Chuyến bay về việt nam",
        body: [
          "Giới thiệu chủ đề chính về \"Chuyến bay về việt nam\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–13:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "13:00–26:56",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Chuyến bay về việt nam",
      cite: 'LinhThach — "Chuyến bay về việt nam"',
    },
  },
  {
    num: "32",
    title: "Con người thay đổi",
    channel: "LinhThach",
    duration: "9:18",
    url: "https://www.youtube.com/watch?v=loHpdeme9b8",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Con người thay đổi\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Con người thay đổi",
        body: [
          "Giới thiệu chủ đề chính về \"Con người thay đổi\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–9:18",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Con người thay đổi",
      cite: 'LinhThach — "Con người thay đổi"',
    },
  },
  {
    num: "33",
    title: "Làm thế nào để phát triển doanh nghiệp Online?",
    channel: "LinhThach",
    duration: "39:56",
    url: "https://www.youtube.com/watch?v=4lcQp4f89zM",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm thế nào để phát triển doanh nghiệp Online?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–10:00",
        heading: "Mở đầu & Đặt vấn đề: Làm thế nào để phát triển doanh nghiệp Online",
        body: [
          "Giới thiệu chủ đề chính về \"Làm thế nào để phát triển doanh nghiệp Online?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "10:00–20:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "20:00–39:56",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm thế nào để phát triển doanh nghiệp Online?",
      cite: 'LinhThach — "Làm thế nào để phát triển doanh nghiệp Online?"',
    },
  },
  {
    num: "34",
    title: "Cập nhật tình hình, kế hoạch tiếp theo",
    channel: "LinhThach",
    duration: "7:04",
    url: "https://www.youtube.com/watch?v=8HJKTq29WSY",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cập nhật tình hình, kế hoạch tiếp theo\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Cập nhật tình hình, kế hoạch tiếp theo",
        body: [
          "Giới thiệu chủ đề chính về \"Cập nhật tình hình, kế hoạch tiếp theo\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–4:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "4:00–7:04",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cập nhật tình hình, kế hoạch tiếp theo",
      cite: 'LinhThach — "Cập nhật tình hình, kế hoạch tiếp theo"',
    },
  },
  {
    num: "35",
    title: "Tạo ra cuộc sống mình muốn",
    channel: "LinhThach",
    duration: "5:07",
    url: "https://www.youtube.com/watch?v=xJ7lG-nAC3s",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tạo ra cuộc sống mình muốn\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–1:00",
        heading: "Mở đầu & Đặt vấn đề: Tạo ra cuộc sống mình muốn",
        body: [
          "Giới thiệu chủ đề chính về \"Tạo ra cuộc sống mình muốn\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "1:00–3:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "3:00–5:07",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tạo ra cuộc sống mình muốn",
      cite: 'LinhThach — "Tạo ra cuộc sống mình muốn"',
    },
  },
  {
    num: "36",
    title: "Những SAI LẦM phổ biến khiến bạn không thể ra đơn khi làm Dropship",
    channel: "LinhThach",
    duration: "9:37",
    url: "https://www.youtube.com/watch?v=xas47aDWjVU",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Những SAI LẦM phổ biến khiến bạn không thể ra đơn khi làm Dropship\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Những SAI LẦM phổ biến khiến bạn không thể ra",
        body: [
          "Giới thiệu chủ đề chính về \"Những SAI LẦM phổ biến khiến bạn không thể ra đơn khi làm Dropship\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–9:37",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Những SAI LẦM phổ biến khiến bạn không thể ra đơn khi làm Dropship",
      cite: 'LinhThach — "Những SAI LẦM phổ biến khiến bạn không thể ra đơn khi làm Dropship"',
    },
  },
  {
    num: "37",
    title: "3 sai lầm của người làm dropship mắc phải",
    channel: "LinhThach",
    duration: "16:39",
    url: "https://www.youtube.com/watch?v=xhfSRM4PCfc",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"3 sai lầm của người làm dropship mắc phải\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: sai lầm của người làm dropship mắc phải",
        body: [
          "Giới thiệu chủ đề chính về \"sai lầm của người làm dropship mắc phải\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–16:39",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "3 sai lầm của người làm dropship mắc phải",
      cite: 'LinhThach — "3 sai lầm của người làm dropship mắc phải"',
    },
  },
  {
    num: "38",
    title: "Cách mình đạt được thu nhập thụ động ở tuổi 27 l Linh Thach",
    channel: "LinhThach",
    duration: "5:33",
    url: "https://www.youtube.com/watch?v=_Ow1G8-ix74",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cách mình đạt được thu nhập thụ động ở tuổi 27 l Linh Thach\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–1:00",
        heading: "Mở đầu & Đặt vấn đề: Cách mình đạt được thu nhập thụ động ở tuổi 2",
        body: [
          "Giới thiệu chủ đề chính về \"Cách mình đạt được thu nhập thụ động ở tuổi 27 l Linh Thach\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "1:00–3:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "3:00–5:33",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cách mình đạt được thu nhập thụ động ở tuổi 27 l Linh Thach",
      cite: 'LinhThach — "Cách mình đạt được thu nhập thụ động ở tuổi 27 l Linh Thach"',
    },
  },
  {
    num: "39",
    title: "Cho những ai đang cảm thấy bị thụt lại phía sau",
    channel: "LinhThach",
    duration: "10:37",
    url: "https://www.youtube.com/watch?v=_7JoSAgC0f4",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cho những ai đang cảm thấy bị thụt lại phía sau\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Cho những ai đang cảm thấy bị thụt lại phía s",
        body: [
          "Giới thiệu chủ đề chính về \"Cho những ai đang cảm thấy bị thụt lại phía sau\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:37",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cho những ai đang cảm thấy bị thụt lại phía sau",
      cite: 'LinhThach — "Cho những ai đang cảm thấy bị thụt lại phía sau"',
    },
  },
  {
    num: "40",
    title: "VLOG l 24H của một Dropshipper Việt Nam.",
    channel: "LinhThach",
    duration: "16:43",
    url: "https://www.youtube.com/watch?v=a7R0khcLpLM",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"VLOG l 24H của một Dropshipper Việt Nam.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: VLOG l 24H của một Dropshipper Việt Nam.",
        body: [
          "Giới thiệu chủ đề chính về \"VLOG l 24H của một Dropshipper Việt Nam.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–16:43",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "VLOG l 24H của một Dropshipper Việt Nam.",
      cite: 'LinhThach — "VLOG l 24H của một Dropshipper Việt Nam."',
    },
  },
  {
    num: "41",
    title: "Cách mình đạt 30 tỷ doanh thu/tháng từ Dropship",
    channel: "LinhThach",
    duration: "15:43",
    url: "https://www.youtube.com/watch?v=TpZlpCwvbNA",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cách mình đạt 30 tỷ doanh thu/tháng từ Dropship\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Cách mình đạt 30 tỷ doanh thu/tháng từ Dropsh",
        body: [
          "Giới thiệu chủ đề chính về \"Cách mình đạt 30 tỷ doanh thu/tháng từ Dropship\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–15:43",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cách mình đạt 30 tỷ doanh thu/tháng từ Dropship",
      cite: 'LinhThach — "Cách mình đạt 30 tỷ doanh thu/tháng từ Dropship"',
    },
  },
  {
    num: "42",
    title: "16 phút giải thích lí do tại sao 90% các bạn lại khởi nghiệp thất bại",
    channel: "LinhThach",
    duration: "16:20",
    url: "https://www.youtube.com/watch?v=c4G7KdpFwTo",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"16 phút giải thích lí do tại sao 90% các bạn lại khởi nghiệp thất bại\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: phút giải thích lí do tại sao 90% các bạn lại",
        body: [
          "Giới thiệu chủ đề chính về \"phút giải thích lí do tại sao 90% các bạn lại khởi nghiệp thất bại\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–16:20",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "16 phút giải thích lí do tại sao 90% các bạn lại khởi nghiệp thất bại",
      cite: 'LinhThach — "16 phút giải thích lí do tại sao 90% các bạn lại khởi nghiệp thất bại"',
    },
  },
  {
    num: "43",
    title: "Hướng Dẫn Làm Content Facebook Ads Thật Sự! Sau 8 Năm Làm Dropship",
    channel: "LinhThach",
    duration: "14:01",
    url: "https://www.youtube.com/watch?v=uFxQLEPEaxw",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Hướng Dẫn Làm Content Facebook Ads Thật Sự! Sau 8 Năm Làm Dropship\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Hướng Dẫn Làm Content Facebook Ads Thật Sự! S",
        body: [
          "Giới thiệu chủ đề chính về \"Hướng Dẫn Làm Content Facebook Ads Thật Sự! Sau 8 Năm Làm Dropship\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–14:01",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Hướng Dẫn Làm Content Facebook Ads Thật Sự! Sau 8 Năm Làm Dropship",
      cite: 'LinhThach — "Hướng Dẫn Làm Content Facebook Ads Thật Sự! Sau 8 Năm Làm Dropship"',
    },
  },
  {
    num: "44",
    title: "Mình trả lời các câu hỏi HOT về làm DROPSHIPPING l Linh Thach",
    channel: "LinhThach",
    duration: "18:32",
    url: "https://www.youtube.com/watch?v=Fg0ljKcwXFo",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Mình trả lời các câu hỏi HOT về làm DROPSHIPPING l Linh Thach\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Mình trả lời các câu hỏi HOT về làm DROPSHIPP",
        body: [
          "Giới thiệu chủ đề chính về \"Mình trả lời các câu hỏi HOT về làm DROPSHIPPING l Linh Thach\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–18:32",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Mình trả lời các câu hỏi HOT về làm DROPSHIPPING l Linh Thach",
      cite: 'LinhThach — "Mình trả lời các câu hỏi HOT về làm DROPSHIPPING l Linh Thach"',
    },
  },
  {
    num: "45",
    title: "Chỉ Cách Làm Facebook Ads, Làm Content Ads.",
    channel: "LinhThach",
    duration: "34:41",
    url: "https://www.youtube.com/watch?v=GN-FikTouK8",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Chỉ Cách Làm Facebook Ads, Làm Content Ads.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–8:00",
        heading: "Mở đầu & Đặt vấn đề: Chỉ Cách Làm Facebook Ads, Làm Content Ads.",
        body: [
          "Giới thiệu chủ đề chính về \"Chỉ Cách Làm Facebook Ads, Làm Content Ads.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "8:00–17:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "17:00–34:41",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Chỉ Cách Làm Facebook Ads, Làm Content Ads.",
      cite: 'LinhThach — "Chỉ Cách Làm Facebook Ads, Làm Content Ads."',
    },
  },
  {
    num: "46",
    title: "Phân tích sản phẩm tiềm năng & cách thị trường hoạt động, cách đối thủ kiếm tiền tỷ online",
    channel: "LinhThach",
    duration: "28:17",
    url: "https://www.youtube.com/watch?v=bwqp5FEdz4k",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Phân tích sản phẩm tiềm năng & cách thị trường hoạt động, cách đối thủ kiếm tiền tỷ online\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–7:00",
        heading: "Mở đầu & Đặt vấn đề: Phân tích sản phẩm tiềm năng & cách thị trườn",
        body: [
          "Giới thiệu chủ đề chính về \"Phân tích sản phẩm tiềm năng & cách thị trường hoạt động, cách đối thủ kiếm tiền tỷ online\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "7:00–14:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "14:00–28:17",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Phân tích sản phẩm tiềm năng & cách thị trường hoạt động, cách đối thủ kiếm tiền tỷ online",
      cite: 'LinhThach — "Phân tích sản phẩm tiềm năng & cách thị trường hoạt động, cách đối thủ kiếm tiền tỷ online"',
    },
  },
  {
    num: "47",
    title: "Hướng Dẫn Bán Sản Phẩm Dropship. Chia Sẻ Sản Phẩm Biên Độ Cao Và Dễ Làm!",
    channel: "LinhThach",
    duration: "25:37",
    url: "https://www.youtube.com/watch?v=iEby195sI68",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Hướng Dẫn Bán Sản Phẩm Dropship. Chia Sẻ Sản Phẩm Biên Độ Cao Và Dễ Làm!\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Hướng Dẫn Bán Sản Phẩm Dropship. Chia Sẻ Sản",
        body: [
          "Giới thiệu chủ đề chính về \"Hướng Dẫn Bán Sản Phẩm Dropship. Chia Sẻ Sản Phẩm Biên Độ Cao Và Dễ Làm!\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–13:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "13:00–25:37",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Hướng Dẫn Bán Sản Phẩm Dropship. Chia Sẻ Sản Phẩm Biên Độ Cao Và Dễ Làm!",
      cite: 'LinhThach — "Hướng Dẫn Bán Sản Phẩm Dropship. Chia Sẻ Sản Phẩm Biên Độ Cao Và Dễ Làm!"',
    },
  },
  {
    num: "48",
    title: "Chia sẻ sản phẩm & hướng dẫn cách làm ads ảnh, ads video và chiến lược bán hàng",
    channel: "LinhThach",
    duration: "23:41",
    url: "https://www.youtube.com/watch?v=wVOCZV1dkT4",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Chia sẻ sản phẩm & hướng dẫn cách làm ads ảnh, ads video và chiến lược bán hàng\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Chia sẻ sản phẩm & hướng dẫn cách làm ads ảnh",
        body: [
          "Giới thiệu chủ đề chính về \"Chia sẻ sản phẩm & hướng dẫn cách làm ads ảnh, ads video và chiến lược bán hàng\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–12:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "12:00–23:41",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Chia sẻ sản phẩm & hướng dẫn cách làm ads ảnh, ads video và chiến lược bán hàng",
      cite: 'LinhThach — "Chia sẻ sản phẩm & hướng dẫn cách làm ads ảnh, ads video và chiến lược bán hàng"',
    },
  },
  {
    num: "49",
    title: "Hướng Dẫn Bán Hàng Dropship - Làm Store - Làm ảnh - Chạy ads",
    channel: "LinhThach",
    duration: "20:35",
    url: "https://www.youtube.com/watch?v=0ioETvdVOMw",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Hướng Dẫn Bán Hàng Dropship - Làm Store - Làm ảnh - Chạy ads\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Hướng Dẫn Bán Hàng Dropship - Làm Store - Làm",
        body: [
          "Giới thiệu chủ đề chính về \"Hướng Dẫn Bán Hàng Dropship - Làm Store - Làm ảnh - Chạy ads\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–10:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "10:00–20:35",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Hướng Dẫn Bán Hàng Dropship - Làm Store - Làm ảnh - Chạy ads",
      cite: 'LinhThach — "Hướng Dẫn Bán Hàng Dropship - Làm Store - Làm ảnh - Chạy ads"',
    },
  },
  {
    num: "50",
    title: "Chia sẻ sản phẩm tiềm năng & hướng dẫn cách làm ads ảnh, ads video và chiến lược bán hàng",
    channel: "LinhThach",
    duration: "18:22",
    url: "https://www.youtube.com/watch?v=d_0FZX-OoFc",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Chia sẻ sản phẩm tiềm năng & hướng dẫn cách làm ads ảnh, ads video và chiến lược bán hàng\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Chia sẻ sản phẩm tiềm năng & hướng dẫn cách l",
        body: [
          "Giới thiệu chủ đề chính về \"Chia sẻ sản phẩm tiềm năng & hướng dẫn cách làm ads ảnh, ads video và chiến lược bán hàng\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–18:22",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Chia sẻ sản phẩm tiềm năng & hướng dẫn cách làm ads ảnh, ads video và chiến lược bán hàng",
      cite: 'LinhThach — "Chia sẻ sản phẩm tiềm năng & hướng dẫn cách làm ads ảnh, ads video và chiến lược bán hàng"',
    },
  },
  {
    num: "51",
    title: "Chia sẻ sản phẩm tiềm năng để bán & hướng dẫn cách làm ads ảnh, ads video và tư duy làm store online",
    channel: "LinhThach",
    duration: "23:41",
    url: "https://www.youtube.com/watch?v=CfJjnNPF2Jc",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Chia sẻ sản phẩm tiềm năng để bán & hướng dẫn cách làm ads ảnh, ads video và tư duy làm store online\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Chia sẻ sản phẩm tiềm năng để bán & hướng dẫn",
        body: [
          "Giới thiệu chủ đề chính về \"Chia sẻ sản phẩm tiềm năng để bán & hướng dẫn cách làm ads ảnh, ads video và tư duy làm store online\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–12:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "12:00–23:41",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Chia sẻ sản phẩm tiềm năng để bán & hướng dẫn cách làm ads ảnh, ads video và tư duy làm store online",
      cite: 'LinhThach — "Chia sẻ sản phẩm tiềm năng để bán & hướng dẫn cách làm ads ảnh, ads video và tư duy làm store online"',
    },
  },
  {
    num: "52",
    title: "Chia Sẻ Cách Để Bán Sản Phẩm Dropship Và Hướng Dẫn Rất Chi Tiết Cách Để Kiếm Ra Tiền.",
    channel: "LinhThach",
    duration: "25:50",
    url: "https://www.youtube.com/watch?v=RZv6KTa-L7w",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Chia Sẻ Cách Để Bán Sản Phẩm Dropship Và Hướng Dẫn Rất Chi Tiết Cách Để Kiếm Ra Tiền.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Chia Sẻ Cách Để Bán Sản Phẩm Dropship Và Hướn",
        body: [
          "Giới thiệu chủ đề chính về \"Chia Sẻ Cách Để Bán Sản Phẩm Dropship Và Hướng Dẫn Rất Chi Tiết Cách Để Kiếm Ra Tiền.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–13:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "13:00–25:50",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Chia Sẻ Cách Để Bán Sản Phẩm Dropship Và Hướng Dẫn Rất Chi Tiết Cách Để Kiếm Ra Tiền.",
      cite: 'LinhThach — "Chia Sẻ Cách Để Bán Sản Phẩm Dropship Và Hướng Dẫn Rất Chi Tiết Cách Để Kiếm Ra Tiền."',
    },
  },
  {
    num: "53",
    title: "Share Sản Phẩm Dropship Tiềm năng Làm Cho Người Mới + Làm Store & Hướng Dẫn Chạy Ads Ảnh & Ads Video",
    channel: "LinhThach",
    duration: "26:46",
    url: "https://www.youtube.com/watch?v=nWg38GgKJac",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Share Sản Phẩm Dropship Tiềm năng Làm Cho Người Mới + Làm Store & Hướng Dẫn Chạy Ads Ảnh & Ads Video\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Share Sản Phẩm Dropship Tiềm năng Làm Cho Ngư",
        body: [
          "Giới thiệu chủ đề chính về \"Share Sản Phẩm Dropship Tiềm năng Làm Cho Người Mới + Làm Store & Hướng Dẫn Chạy Ads Ảnh & Ads Video\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–13:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "13:00–26:46",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Share Sản Phẩm Dropship Tiềm năng Làm Cho Người Mới + Làm Store & Hướng Dẫn Chạy Ads Ảnh & Ads Video",
      cite: 'LinhThach — "Share Sản Phẩm Dropship Tiềm năng Làm Cho Người Mới + Làm Store & Hướng Dẫn Chạy Ads Ảnh & Ads Video"',
    },
  },
  {
    num: "54",
    title: "Share Sản Phẩm Dropship Cực Dễ Làm Cho Người Mới + Làm Store & Hướng Dẫn Chạy Ads Ảnh & Ads Video",
    channel: "LinhThach",
    duration: "27:41",
    url: "https://www.youtube.com/watch?v=IVcTOwwlFhQ",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Share Sản Phẩm Dropship Cực Dễ Làm Cho Người Mới + Làm Store & Hướng Dẫn Chạy Ads Ảnh & Ads Video\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–7:00",
        heading: "Mở đầu & Đặt vấn đề: Share Sản Phẩm Dropship Cực Dễ Làm Cho Người",
        body: [
          "Giới thiệu chủ đề chính về \"Share Sản Phẩm Dropship Cực Dễ Làm Cho Người Mới + Làm Store & Hướng Dẫn Chạy Ads Ảnh & Ads Video\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "7:00–14:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "14:00–27:41",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Share Sản Phẩm Dropship Cực Dễ Làm Cho Người Mới + Làm Store & Hướng Dẫn Chạy Ads Ảnh & Ads Video",
      cite: 'LinhThach — "Share Sản Phẩm Dropship Cực Dễ Làm Cho Người Mới + Làm Store & Hướng Dẫn Chạy Ads Ảnh & Ads Video"',
    },
  },
  {
    num: "55",
    title: "Share Sản Phẩm Làm Dropship Và Hướng Dẫn Làm Store Và Cách làm Ads.",
    channel: "LinhThach",
    duration: "23:44",
    url: "https://www.youtube.com/watch?v=TEMRYMs2hKQ",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Share Sản Phẩm Làm Dropship Và Hướng Dẫn Làm Store Và Cách làm Ads.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Share Sản Phẩm Làm Dropship Và Hướng Dẫn Làm",
        body: [
          "Giới thiệu chủ đề chính về \"Share Sản Phẩm Làm Dropship Và Hướng Dẫn Làm Store Và Cách làm Ads.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–12:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "12:00–23:44",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Share Sản Phẩm Làm Dropship Và Hướng Dẫn Làm Store Và Cách làm Ads.",
      cite: 'LinhThach — "Share Sản Phẩm Làm Dropship Và Hướng Dẫn Làm Store Và Cách làm Ads."',
    },
  },
  {
    num: "56",
    title: "Share Sản Phẩm Làm Dropship Và Hướng Dẫn Làm Store Và Cách làm Ads.",
    channel: "LinhThach",
    duration: "22:08",
    url: "https://www.youtube.com/watch?v=0fu_rq71di8",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Share Sản Phẩm Làm Dropship Và Hướng Dẫn Làm Store Và Cách làm Ads.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Share Sản Phẩm Làm Dropship Và Hướng Dẫn Làm",
        body: [
          "Giới thiệu chủ đề chính về \"Share Sản Phẩm Làm Dropship Và Hướng Dẫn Làm Store Và Cách làm Ads.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–11:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "11:00–22:08",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Share Sản Phẩm Làm Dropship Và Hướng Dẫn Làm Store Và Cách làm Ads.",
      cite: 'LinhThach — "Share Sản Phẩm Làm Dropship Và Hướng Dẫn Làm Store Và Cách làm Ads."',
    },
  },
  {
    num: "57",
    title: "Share Sản Phẩm Biên Độ Lợi Nhuận Cao Và Hướng Dẫn Đánh Ads và Làm Organic",
    channel: "LinhThach",
    duration: "25:23",
    url: "https://www.youtube.com/watch?v=E6LdyPf73O0",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Share Sản Phẩm Biên Độ Lợi Nhuận Cao Và Hướng Dẫn Đánh Ads và Làm Organic\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Share Sản Phẩm Biên Độ Lợi Nhuận Cao Và Hướng",
        body: [
          "Giới thiệu chủ đề chính về \"Share Sản Phẩm Biên Độ Lợi Nhuận Cao Và Hướng Dẫn Đánh Ads và Làm Organic\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–13:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "13:00–25:23",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Share Sản Phẩm Biên Độ Lợi Nhuận Cao Và Hướng Dẫn Đánh Ads và Làm Organic",
      cite: 'LinhThach — "Share Sản Phẩm Biên Độ Lợi Nhuận Cao Và Hướng Dẫn Đánh Ads và Làm Organic"',
    },
  },
  {
    num: "58",
    title: "Phân tích sản phẩm tiềm năng & cách làm ảnh sản phẩm ai và mindset cần có để bán thành công",
    channel: "LinhThach",
    duration: "16:09",
    url: "https://www.youtube.com/watch?v=gYIN5VlF1-o",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Phân tích sản phẩm tiềm năng & cách làm ảnh sản phẩm ai và mindset cần có để bán thành công\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Phân tích sản phẩm tiềm năng & cách làm ảnh s",
        body: [
          "Giới thiệu chủ đề chính về \"Phân tích sản phẩm tiềm năng & cách làm ảnh sản phẩm ai và mindset cần có để bán thành công\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–16:09",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Phân tích sản phẩm tiềm năng & cách làm ảnh sản phẩm ai và mindset cần có để bán thành công",
      cite: 'LinhThach — "Phân tích sản phẩm tiềm năng & cách làm ảnh sản phẩm ai và mindset cần có để bán thành công"',
    },
  },
  {
    num: "59",
    title: "Share Sản Phẩm Mới Làm Cực Ngon Và Hướng Dẫn Đánh Quảng Cáo Và Organic",
    channel: "LinhThach",
    duration: "22:05",
    url: "https://www.youtube.com/watch?v=ntJbX-BtRc8",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Share Sản Phẩm Mới Làm Cực Ngon Và Hướng Dẫn Đánh Quảng Cáo Và Organic\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Share Sản Phẩm Mới Làm Cực Ngon Và Hướng Dẫn",
        body: [
          "Giới thiệu chủ đề chính về \"Share Sản Phẩm Mới Làm Cực Ngon Và Hướng Dẫn Đánh Quảng Cáo Và Organic\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–11:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "11:00–22:05",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Share Sản Phẩm Mới Làm Cực Ngon Và Hướng Dẫn Đánh Quảng Cáo Và Organic",
      cite: 'LinhThach — "Share Sản Phẩm Mới Làm Cực Ngon Và Hướng Dẫn Đánh Quảng Cáo Và Organic"',
    },
  },
  {
    num: "60",
    title: "Phân tích + hướng dẫn cách bán sản phẩm thành công với dropshipping ( chiến lược chuẩn )",
    channel: "LinhThach",
    duration: "19:31",
    url: "https://www.youtube.com/watch?v=wlpNz3HbEjY",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Phân tích + hướng dẫn cách bán sản phẩm thành công với dropshipping ( chiến lược chuẩn )\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Phân tích + hướng dẫn cách bán sản phẩm thành",
        body: [
          "Giới thiệu chủ đề chính về \"Phân tích + hướng dẫn cách bán sản phẩm thành công với dropshipping ( chiến lược chuẩn )\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–10:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "10:00–19:31",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Phân tích + hướng dẫn cách bán sản phẩm thành công với dropshipping ( chiến lược chuẩn )",
      cite: 'LinhThach — "Phân tích + hướng dẫn cách bán sản phẩm thành công với dropshipping ( chiến lược chuẩn )"',
    },
  },
  {
    num: "61",
    title: "Làm Dropship năm 2024: Tìm Sản Phẩm (Phần 1)",
    channel: "LinhThach",
    duration: "10:29",
    url: "https://www.youtube.com/watch?v=Qilftk42mIc",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Dropship năm 2024: Tìm Sản Phẩm (Phần 1)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Dropship năm 2024: Tìm Sản Phẩm (Phần 1)",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Dropship năm 2024: Tìm Sản Phẩm (Phần 1)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:29",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Dropship năm 2024: Tìm Sản Phẩm (Phần 1)",
      cite: 'LinhThach — "Làm Dropship năm 2024: Tìm Sản Phẩm (Phần 1)"',
    },
  },
  {
    num: "62",
    title: "Thử thách 72 Giờ Dropship (Vốn $200)",
    channel: "LinhThach",
    duration: "22:51",
    url: "https://www.youtube.com/watch?v=_8HaKLoyAEE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Thử thách 72 Giờ Dropship (Vốn $200)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Thử thách 72 Giờ Dropship (Vốn $200)",
        body: [
          "Giới thiệu chủ đề chính về \"Thử thách 72 Giờ Dropship (Vốn $200)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–11:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "11:00–22:51",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Thử thách 72 Giờ Dropship (Vốn $200)",
      cite: 'LinhThach — "Thử thách 72 Giờ Dropship (Vốn $200)"',
    },
  },
  {
    num: "63",
    title: "Kiếm tiền Dropship 2024: Phần 1 - Organic Content",
    channel: "LinhThach",
    duration: "10:21",
    url: "https://www.youtube.com/watch?v=nj7u4KVIqBg",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Kiếm tiền Dropship 2024: Phần 1 - Organic Content\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Kiếm tiền Dropship 2024: Phần 1 - Organic Con",
        body: [
          "Giới thiệu chủ đề chính về \"Kiếm tiền Dropship 2024: Phần 1 - Organic Content\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:21",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Kiếm tiền Dropship 2024: Phần 1 - Organic Content",
      cite: 'LinhThach — "Kiếm tiền Dropship 2024: Phần 1 - Organic Content"',
    },
  },
  {
    num: "64",
    title: "Làm Dropship năm 2024: Tạo Cửa hàng Chuyên Nghiệp (Phần 2)",
    channel: "LinhThach",
    duration: "17:03",
    url: "https://www.youtube.com/watch?v=2LNT9e8zzs8",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Dropship năm 2024: Tạo Cửa hàng Chuyên Nghiệp (Phần 2)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Dropship năm 2024: Tạo Cửa hàng Chuyên Ng",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Dropship năm 2024: Tạo Cửa hàng Chuyên Nghiệp (Phần 2)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–17:03",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Dropship năm 2024: Tạo Cửa hàng Chuyên Nghiệp (Phần 2)",
      cite: 'LinhThach — "Làm Dropship năm 2024: Tạo Cửa hàng Chuyên Nghiệp (Phần 2)"',
    },
  },
  {
    num: "65",
    title: "Tất Cả Mọi Thứ Về Dropshipping Trong 16 Phút",
    channel: "LinhThach",
    duration: "16:11",
    url: "https://www.youtube.com/watch?v=d63o1KqCL3Y",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tất Cả Mọi Thứ Về Dropshipping Trong 16 Phút\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Tất Cả Mọi Thứ Về Dropshipping Trong 16 Phút",
        body: [
          "Giới thiệu chủ đề chính về \"Tất Cả Mọi Thứ Về Dropshipping Trong 16 Phút\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–16:11",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tất Cả Mọi Thứ Về Dropshipping Trong 16 Phút",
      cite: 'LinhThach — "Tất Cả Mọi Thứ Về Dropshipping Trong 16 Phút"',
    },
  },
  {
    num: "66",
    title: "Kiếm tiền Dropship 2024: Phần 2 - Lãi sau 30 ngày?",
    channel: "LinhThach",
    duration: "12:34",
    url: "https://www.youtube.com/watch?v=xJb2Q3tqQps",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Kiếm tiền Dropship 2024: Phần 2 - Lãi sau 30 ngày?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Kiếm tiền Dropship 2024: Phần 2 - Lãi sau 30",
        body: [
          "Giới thiệu chủ đề chính về \"Kiếm tiền Dropship 2024: Phần 2 - Lãi sau 30 ngày?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:34",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Kiếm tiền Dropship 2024: Phần 2 - Lãi sau 30 ngày?",
      cite: 'LinhThach — "Kiếm tiền Dropship 2024: Phần 2 - Lãi sau 30 ngày?"',
    },
  },
  {
    num: "67",
    title: "Case Study Dropship của Linh Thạch (Từ 2016 - Hiện Tại)",
    channel: "LinhThach",
    duration: "21:58",
    url: "https://www.youtube.com/watch?v=5aDK5Ynk0N8",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Case Study Dropship của Linh Thạch (Từ 2016 - Hiện Tại)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Case Study Dropship của Linh Thạch (Từ 2016 -",
        body: [
          "Giới thiệu chủ đề chính về \"Case Study Dropship của Linh Thạch (Từ 2016 - Hiện Tại)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–11:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "11:00–21:58",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Case Study Dropship của Linh Thạch (Từ 2016 - Hiện Tại)",
      cite: 'LinhThach — "Case Study Dropship của Linh Thạch (Từ 2016 - Hiện Tại)"',
    },
  },
  {
    num: "68",
    title: "Hướng Đi TỐT NHẤT Khi Làm DROPSHIP NĂM 2025",
    channel: "LinhThach",
    duration: "15:38",
    url: "https://www.youtube.com/watch?v=-Axo0pv-qlA",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Hướng Đi TỐT NHẤT Khi Làm DROPSHIP NĂM 2025\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Hướng Đi TỐT NHẤT Khi Làm DROPSHIP NĂM 2025",
        body: [
          "Giới thiệu chủ đề chính về \"Hướng Đi TỐT NHẤT Khi Làm DROPSHIP NĂM 2025\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–15:38",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Hướng Đi TỐT NHẤT Khi Làm DROPSHIP NĂM 2025",
      cite: 'LinhThach — "Hướng Đi TỐT NHẤT Khi Làm DROPSHIP NĂM 2025"',
    },
  },
  {
    num: "69",
    title: "Làm Dropship năm 2024: Làm Video để chạy Ads (Phần 3)",
    channel: "LinhThach",
    duration: "12:55",
    url: "https://www.youtube.com/watch?v=Wabx12tZ5k0",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Dropship năm 2024: Làm Video để chạy Ads (Phần 3)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Dropship năm 2024: Làm Video để chạy Ads",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Dropship năm 2024: Làm Video để chạy Ads (Phần 3)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:55",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Dropship năm 2024: Làm Video để chạy Ads (Phần 3)",
      cite: 'LinhThach — "Làm Dropship năm 2024: Làm Video để chạy Ads (Phần 3)"',
    },
  },
  {
    num: "70",
    title: "Tạo Công ty ở Mĩ và Anh. Bank và Cổng Chính Chủ",
    channel: "LinhThach",
    duration: "7:30",
    url: "https://www.youtube.com/watch?v=m72buD8ygng",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tạo Công ty ở Mĩ và Anh. Bank và Cổng Chính Chủ\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Tạo Công ty ở Mĩ và Anh. Bank và Cổng Chính C",
        body: [
          "Giới thiệu chủ đề chính về \"Tạo Công ty ở Mĩ và Anh. Bank và Cổng Chính Chủ\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–4:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "4:00–7:30",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tạo Công ty ở Mĩ và Anh. Bank và Cổng Chính Chủ",
      cite: 'LinhThach — "Tạo Công ty ở Mĩ và Anh. Bank và Cổng Chính Chủ"',
    },
  },
  {
    num: "71",
    title: "Một ngày của tôi: 26 tuổi, làm Dropship và xây Công Ty",
    channel: "LinhThach",
    duration: "26:16",
    url: "https://www.youtube.com/watch?v=rVHegq-uSHg",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Một ngày của tôi: 26 tuổi, làm Dropship và xây Công Ty\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Một ngày của tôi: 26 tuổi, làm Dropship và xâ",
        body: [
          "Giới thiệu chủ đề chính về \"Một ngày của tôi: 26 tuổi, làm Dropship và xây Công Ty\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–13:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "13:00–26:16",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Một ngày của tôi: 26 tuổi, làm Dropship và xây Công Ty",
      cite: 'LinhThach — "Một ngày của tôi: 26 tuổi, làm Dropship và xây Công Ty"',
    },
  },
  {
    num: "72",
    title: "Kiếm tiền Dropship 2024: Phần 3 - Cách tìm Sản Phẩm",
    channel: "LinhThach",
    duration: "16:02",
    url: "https://www.youtube.com/watch?v=_Tq7QVd9R7E",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Kiếm tiền Dropship 2024: Phần 3 - Cách tìm Sản Phẩm\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Kiếm tiền Dropship 2024: Phần 3 - Cách tìm Sả",
        body: [
          "Giới thiệu chủ đề chính về \"Kiếm tiền Dropship 2024: Phần 3 - Cách tìm Sản Phẩm\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–16:02",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Kiếm tiền Dropship 2024: Phần 3 - Cách tìm Sản Phẩm",
      cite: 'LinhThach — "Kiếm tiền Dropship 2024: Phần 3 - Cách tìm Sản Phẩm"',
    },
  },
  {
    num: "73",
    title: "7 Điều rút ra sau 7 Năm Kinh Doanh Online",
    channel: "LinhThach",
    duration: "22:26",
    url: "https://www.youtube.com/watch?v=Wl1_cRv2KSo",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"7 Điều rút ra sau 7 Năm Kinh Doanh Online\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Điều rút ra sau 7 Năm Kinh Doanh Online",
        body: [
          "Giới thiệu chủ đề chính về \"Điều rút ra sau 7 Năm Kinh Doanh Online\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–11:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "11:00–22:26",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "7 Điều rút ra sau 7 Năm Kinh Doanh Online",
      cite: 'LinhThach — "7 Điều rút ra sau 7 Năm Kinh Doanh Online"',
    },
  },
  {
    num: "74",
    title: "Kiếm tiền Dropship 2024: Tập 4 - Thiết bị cần có?",
    channel: "LinhThach",
    duration: "14:00",
    url: "https://www.youtube.com/watch?v=GG1mvJFmEPE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Kiếm tiền Dropship 2024: Tập 4 - Thiết bị cần có?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Kiếm tiền Dropship 2024: Tập 4 - Thiết bị cần",
        body: [
          "Giới thiệu chủ đề chính về \"Kiếm tiền Dropship 2024: Tập 4 - Thiết bị cần có?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–14:00",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Kiếm tiền Dropship 2024: Tập 4 - Thiết bị cần có?",
      cite: 'LinhThach — "Kiếm tiền Dropship 2024: Tập 4 - Thiết bị cần có?"',
    },
  },
  {
    num: "75",
    title: "Làm Dropship năm 2024: Cách làm Quảng cáo Tốt (Phần 4)",
    channel: "LinhThach",
    duration: "9:08",
    url: "https://www.youtube.com/watch?v=OJftPZ71U8I",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Dropship năm 2024: Cách làm Quảng cáo Tốt (Phần 4)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Dropship năm 2024: Cách làm Quảng cáo Tốt",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Dropship năm 2024: Cách làm Quảng cáo Tốt (Phần 4)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–9:08",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Dropship năm 2024: Cách làm Quảng cáo Tốt (Phần 4)",
      cite: 'LinhThach — "Làm Dropship năm 2024: Cách làm Quảng cáo Tốt (Phần 4)"',
    },
  },
  {
    num: "76",
    title: "TƯ DUY ĐỂ TRỞ NÊN GIÀU TRONG 31 PHÚT - LINH THACH ECOM",
    channel: "LinhThach",
    duration: "31:39",
    url: "https://www.youtube.com/watch?v=rArPjeFsgRI",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"TƯ DUY ĐỂ TRỞ NÊN GIÀU TRONG 31 PHÚT - LINH THACH ECOM\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–8:00",
        heading: "Mở đầu & Đặt vấn đề: TƯ DUY ĐỂ TRỞ NÊN GIÀU TRONG 31 PHÚT",
        body: [
          "Giới thiệu chủ đề chính về \"TƯ DUY ĐỂ TRỞ NÊN GIÀU TRONG 31 PHÚT\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "8:00–16:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "16:00–31:39",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "TƯ DUY ĐỂ TRỞ NÊN GIÀU TRONG 31 PHÚT - LINH THACH ECOM",
      cite: 'LinhThach — "TƯ DUY ĐỂ TRỞ NÊN GIÀU TRONG 31 PHÚT - LINH THACH ECOM"',
    },
  },
  {
    num: "77",
    title: "CIgar Talk số 2: Mục đích sống và nỗi sợ.",
    channel: "LinhThach",
    duration: "34:37",
    url: "https://www.youtube.com/watch?v=G0SG4QGx-sk",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"CIgar Talk số 2: Mục đích sống và nỗi sợ.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–8:00",
        heading: "Mở đầu & Đặt vấn đề: CIgar Talk số 2: Mục đích sống và nỗi sợ.",
        body: [
          "Giới thiệu chủ đề chính về \"CIgar Talk số 2: Mục đích sống và nỗi sợ.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "8:00–17:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "17:00–34:37",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "CIgar Talk số 2: Mục đích sống và nỗi sợ.",
      cite: 'LinhThach — "CIgar Talk số 2: Mục đích sống và nỗi sợ."',
    },
  },
  {
    num: "78",
    title: "Cách Tìm Sản Phẩm Dropship Nhanh Nhất 2025",
    channel: "LinhThach",
    duration: "23:49",
    url: "https://www.youtube.com/watch?v=afTTCA7M_Os",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cách Tìm Sản Phẩm Dropship Nhanh Nhất 2025\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Cách Tìm Sản Phẩm Dropship Nhanh Nhất 2025",
        body: [
          "Giới thiệu chủ đề chính về \"Cách Tìm Sản Phẩm Dropship Nhanh Nhất 2025\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–12:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "12:00–23:49",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cách Tìm Sản Phẩm Dropship Nhanh Nhất 2025",
      cite: 'LinhThach — "Cách Tìm Sản Phẩm Dropship Nhanh Nhất 2025"',
    },
  },
  {
    num: "79",
    title: "Làm Dropshipp năm 2022? Những điều chính cần ghi nhớ!",
    channel: "LinhThach",
    duration: "38:12",
    url: "https://www.youtube.com/watch?v=5tz0MDo6Bqc",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Dropshipp năm 2022? Những điều chính cần ghi nhớ!\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–9:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Dropshipp năm 2022? Những điều chính cần",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Dropshipp năm 2022? Những điều chính cần ghi nhớ!\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "9:00–19:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "19:00–38:12",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Dropshipp năm 2022? Những điều chính cần ghi nhớ!",
      cite: 'LinhThach — "Làm Dropshipp năm 2022? Những điều chính cần ghi nhớ!"',
    },
  },
  {
    num: "80",
    title: "Làm Store Dropshipping trong 5 phút",
    channel: "LinhThach",
    duration: "12:04",
    url: "https://www.youtube.com/watch?v=G0e6nTEUrp0",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Store Dropshipping trong 5 phút\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Store Dropshipping trong 5 phút",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Store Dropshipping trong 5 phút\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:04",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Store Dropshipping trong 5 phút",
      cite: 'LinhThach — "Làm Store Dropshipping trong 5 phút"',
    },
  },
  {
    num: "81",
    title: "Cigar Talk số 3: Tiền, Cái Tôi, Gà và Chó.",
    channel: "LinhThach",
    duration: "33:36",
    url: "https://www.youtube.com/watch?v=gHozJJCnUyg",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cigar Talk số 3: Tiền, Cái Tôi, Gà và Chó.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–8:00",
        heading: "Mở đầu & Đặt vấn đề: Cigar Talk số 3: Tiền, Cái Tôi, Gà và Chó.",
        body: [
          "Giới thiệu chủ đề chính về \"Cigar Talk số 3: Tiền, Cái Tôi, Gà và Chó.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "8:00–17:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "17:00–33:36",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cigar Talk số 3: Tiền, Cái Tôi, Gà và Chó.",
      cite: 'LinhThach — "Cigar Talk số 3: Tiền, Cái Tôi, Gà và Chó."',
    },
  },
  {
    num: "82",
    title: "Dropship giờ còn NGON không? Cái gì làm DỄ?",
    channel: "LinhThach",
    duration: "12:26",
    url: "https://www.youtube.com/watch?v=WeaiCEBUVaU",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Dropship giờ còn NGON không? Cái gì làm DỄ?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Dropship giờ còn NGON không? Cái gì làm DỄ?",
        body: [
          "Giới thiệu chủ đề chính về \"Dropship giờ còn NGON không? Cái gì làm DỄ?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:26",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Dropship giờ còn NGON không? Cái gì làm DỄ?",
      cite: 'LinhThach — "Dropship giờ còn NGON không? Cái gì làm DỄ?"',
    },
  },
  {
    num: "83",
    title: "Tấm lý yếu thì đừng xem video này.",
    channel: "LinhThach",
    duration: "12:06",
    url: "https://www.youtube.com/watch?v=kTlkwVW2Ryc",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tấm lý yếu thì đừng xem video này.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Tấm lý yếu thì đừng xem video này.",
        body: [
          "Giới thiệu chủ đề chính về \"Tấm lý yếu thì đừng xem video này.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:06",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tấm lý yếu thì đừng xem video này.",
      cite: 'LinhThach — "Tấm lý yếu thì đừng xem video này."',
    },
  },
  {
    num: "84",
    title: "Ads Facebook Tài khoản Mới hay Cũ sẽ tốt hơn?",
    channel: "LinhThach",
    duration: "20:06",
    url: "https://www.youtube.com/watch?v=MOeQl2B0RoM",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Ads Facebook Tài khoản Mới hay Cũ sẽ tốt hơn?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Ads Facebook Tài khoản Mới hay Cũ sẽ tốt hơn?",
        body: [
          "Giới thiệu chủ đề chính về \"Ads Facebook Tài khoản Mới hay Cũ sẽ tốt hơn?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–10:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "10:00–20:06",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Ads Facebook Tài khoản Mới hay Cũ sẽ tốt hơn?",
      cite: 'LinhThach — "Ads Facebook Tài khoản Mới hay Cũ sẽ tốt hơn?"',
    },
  },
  {
    num: "85",
    title: "Cigar Talk: Hãy xứng đáng với điều mình muốn.",
    channel: "LinhThach",
    duration: "34:51",
    url: "https://www.youtube.com/watch?v=2_lp6EG8uXE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cigar Talk: Hãy xứng đáng với điều mình muốn.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–8:00",
        heading: "Mở đầu & Đặt vấn đề: Cigar Talk: Hãy xứng đáng với điều mình muốn.",
        body: [
          "Giới thiệu chủ đề chính về \"Cigar Talk: Hãy xứng đáng với điều mình muốn.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "8:00–17:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "17:00–34:51",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cigar Talk: Hãy xứng đáng với điều mình muốn.",
      cite: 'LinhThach — "Cigar Talk: Hãy xứng đáng với điều mình muốn."',
    },
  },
  {
    num: "86",
    title: "Ưu Nhược điểm của Dropship Website và Amazon FBA",
    channel: "LinhThach",
    duration: "22:54",
    url: "https://www.youtube.com/watch?v=TMM-IzjcOmw",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Ưu Nhược điểm của Dropship Website và Amazon FBA\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Ưu Nhược điểm của Dropship Website và Amazon",
        body: [
          "Giới thiệu chủ đề chính về \"Ưu Nhược điểm của Dropship Website và Amazon FBA\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–11:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "11:00–22:54",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Ưu Nhược điểm của Dropship Website và Amazon FBA",
      cite: 'LinhThach — "Ưu Nhược điểm của Dropship Website và Amazon FBA"',
    },
  },
  {
    num: "87",
    title: "Tiêu tiền, Đầu tư và Kiên nhẫn",
    channel: "LinhThach",
    duration: "18:14",
    url: "https://www.youtube.com/watch?v=Y7rkw6Sk0_Y",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tiêu tiền, Đầu tư và Kiên nhẫn\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Tiêu tiền, Đầu tư và Kiên nhẫn",
        body: [
          "Giới thiệu chủ đề chính về \"Tiêu tiền, Đầu tư và Kiên nhẫn\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–18:14",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tiêu tiền, Đầu tư và Kiên nhẫn",
      cite: 'LinhThach — "Tiêu tiền, Đầu tư và Kiên nhẫn"',
    },
  },
  {
    num: "88",
    title: "Cách các Store Dropship thành công Bắt Đầu!",
    channel: "LinhThach",
    duration: "27:50",
    url: "https://www.youtube.com/watch?v=4KCTBVuiG1o",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cách các Store Dropship thành công Bắt Đầu!\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–7:00",
        heading: "Mở đầu & Đặt vấn đề: Cách các Store Dropship thành công Bắt Đầu!",
        body: [
          "Giới thiệu chủ đề chính về \"Cách các Store Dropship thành công Bắt Đầu!\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "7:00–14:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "14:00–27:50",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cách các Store Dropship thành công Bắt Đầu!",
      cite: 'LinhThach — "Cách các Store Dropship thành công Bắt Đầu!"',
    },
  },
  {
    num: "89",
    title: "Sợ Thất Bại trong Kinh Doanh?",
    channel: "LinhThach",
    duration: "17:38",
    url: "https://www.youtube.com/watch?v=9TKRG5B8YTY",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Sợ Thất Bại trong Kinh Doanh?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Sợ Thất Bại trong Kinh Doanh?",
        body: [
          "Giới thiệu chủ đề chính về \"Sợ Thất Bại trong Kinh Doanh?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–17:38",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Sợ Thất Bại trong Kinh Doanh?",
      cite: 'LinhThach — "Sợ Thất Bại trong Kinh Doanh?"',
    },
  },
  {
    num: "90",
    title: "#1: Tiếp Cận khách hàng Tiềm Năng bằng Influencer Marketing",
    channel: "LinhThach",
    duration: "18:14",
    url: "https://www.youtube.com/watch?v=ujIte2DJj2U",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#1: Tiếp Cận khách hàng Tiềm Năng bằng Influencer Marketing\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Tiếp Cận khách hàng Tiềm Năng bằng Influencer",
        body: [
          "Giới thiệu chủ đề chính về \"Tiếp Cận khách hàng Tiềm Năng bằng Influencer Marketing\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–18:14",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#1: Tiếp Cận khách hàng Tiềm Năng bằng Influencer Marketing",
      cite: 'LinhThach — "#1: Tiếp Cận khách hàng Tiềm Năng bằng Influencer Marketing"',
    },
  },
  {
    num: "91",
    title: "#2: Case Study trong và ngoài nước về Influencer Marketing",
    channel: "LinhThach",
    duration: "26:43",
    url: "https://www.youtube.com/watch?v=e0ohpBZYcn4",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#2: Case Study trong và ngoài nước về Influencer Marketing\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Case Study trong và ngoài nước về Influencer",
        body: [
          "Giới thiệu chủ đề chính về \"Case Study trong và ngoài nước về Influencer Marketing\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–13:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "13:00–26:43",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#2: Case Study trong và ngoài nước về Influencer Marketing",
      cite: 'LinhThach — "#2: Case Study trong và ngoài nước về Influencer Marketing"',
    },
  },
  {
    num: "92",
    title: "#3: Tại sao Sản Phẩm của bạn Thất Bại?",
    channel: "LinhThach",
    duration: "20:17",
    url: "https://www.youtube.com/watch?v=_PBFc6CAjLo",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#3: Tại sao Sản Phẩm của bạn Thất Bại?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Tại sao Sản Phẩm của bạn Thất Bại?",
        body: [
          "Giới thiệu chủ đề chính về \"Tại sao Sản Phẩm của bạn Thất Bại?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–10:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "10:00–20:17",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#3: Tại sao Sản Phẩm của bạn Thất Bại?",
      cite: 'LinhThach — "#3: Tại sao Sản Phẩm của bạn Thất Bại?"',
    },
  },
  {
    num: "93",
    title: "#4: Con đường phát triển của các loại Sản Phẩm",
    channel: "LinhThach",
    duration: "15:43",
    url: "https://www.youtube.com/watch?v=hkPS8Zqbj68",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#4: Con đường phát triển của các loại Sản Phẩm\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Con đường phát triển của các loại Sản Phẩm",
        body: [
          "Giới thiệu chủ đề chính về \"Con đường phát triển của các loại Sản Phẩm\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–15:43",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#4: Con đường phát triển của các loại Sản Phẩm",
      cite: 'LinhThach — "#4: Con đường phát triển của các loại Sản Phẩm"',
    },
  },
  {
    num: "94",
    title: "#5: Thay Đổi để Bắt Đầu",
    channel: "LinhThach",
    duration: "14:28",
    url: "https://www.youtube.com/watch?v=JVDQaz5V-Ik",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#5: Thay Đổi để Bắt Đầu\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Thay Đổi để Bắt Đầu",
        body: [
          "Giới thiệu chủ đề chính về \"Thay Đổi để Bắt Đầu\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–14:28",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#5: Thay Đổi để Bắt Đầu",
      cite: 'LinhThach — "#5: Thay Đổi để Bắt Đầu"',
    },
  },
  {
    num: "95",
    title: "#6: Sự Kiên nhẫn - Kiên trì trong Kinh doanh",
    channel: "LinhThach",
    duration: "18:15",
    url: "https://www.youtube.com/watch?v=fhRM-aZc0aM",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#6: Sự Kiên nhẫn - Kiên trì trong Kinh doanh\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Sự Kiên nhẫn - Kiên trì trong Kinh doanh",
        body: [
          "Giới thiệu chủ đề chính về \"Sự Kiên nhẫn - Kiên trì trong Kinh doanh\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–18:15",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#6: Sự Kiên nhẫn - Kiên trì trong Kinh doanh",
      cite: 'LinhThach — "#6: Sự Kiên nhẫn - Kiên trì trong Kinh doanh"',
    },
  },
  {
    num: "96",
    title: "#7: Case Study 1,2 Triệu Đô trong 3 tháng",
    channel: "LinhThach",
    duration: "15:39",
    url: "https://www.youtube.com/watch?v=99tAF61Pkso",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#7: Case Study 1,2 Triệu Đô trong 3 tháng\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Case Study 1,2 Triệu Đô trong 3 tháng",
        body: [
          "Giới thiệu chủ đề chính về \"Case Study 1,2 Triệu Đô trong 3 tháng\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–15:39",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#7: Case Study 1,2 Triệu Đô trong 3 tháng",
      cite: 'LinhThach — "#7: Case Study 1,2 Triệu Đô trong 3 tháng"',
    },
  },
  {
    num: "97",
    title: "#8: Làm thế nào để Kiếm Tiền?",
    channel: "LinhThach",
    duration: "11:57",
    url: "https://www.youtube.com/watch?v=VOM9Rrrh6OE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#8: Làm thế nào để Kiếm Tiền?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Làm thế nào để Kiếm Tiền?",
        body: [
          "Giới thiệu chủ đề chính về \"Làm thế nào để Kiếm Tiền?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–11:57",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#8: Làm thế nào để Kiếm Tiền?",
      cite: 'LinhThach — "#8: Làm thế nào để Kiếm Tiền?"',
    },
  },
  {
    num: "98",
    title: "#9: Add sản phẩm từ Aliexpress vào Shopify đúng cách.",
    channel: "LinhThach",
    duration: "16:21",
    url: "https://www.youtube.com/watch?v=-hgaKTRLxLE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#9: Add sản phẩm từ Aliexpress vào Shopify đúng cách.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Add sản phẩm từ Aliexpress vào Shopify đúng c",
        body: [
          "Giới thiệu chủ đề chính về \"Add sản phẩm từ Aliexpress vào Shopify đúng cách.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–16:21",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#9: Add sản phẩm từ Aliexpress vào Shopify đúng cách.",
      cite: 'LinhThach — "#9: Add sản phẩm từ Aliexpress vào Shopify đúng cách."',
    },
  },
  {
    num: "99",
    title: "#10: Cách tìm Influencer - KOL",
    channel: "LinhThach",
    duration: "10:30",
    url: "https://www.youtube.com/watch?v=i-P0YZaMRnY",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#10: Cách tìm Influencer - KOL\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Cách tìm Influencer - KOL",
        body: [
          "Giới thiệu chủ đề chính về \"Cách tìm Influencer - KOL\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:30",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#10: Cách tìm Influencer - KOL",
      cite: 'LinhThach — "#10: Cách tìm Influencer - KOL"',
    },
  },
  {
    num: "100",
    title: "#11: Phá bỏ \"Cái Hộp\" bạn đang sống",
    channel: "LinhThach",
    duration: "11:12",
    url: "https://www.youtube.com/watch?v=RKzH2V3SAj4",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#11: Phá bỏ Cái Hộp bạn đang sống\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Phá bỏ \"Cái Hộp\" bạn đang sống",
        body: [
          "Giới thiệu chủ đề chính về \"Phá bỏ \"Cái Hộp\" bạn đang sống\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–11:12",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#11: Phá bỏ \"Cái Hộp\" bạn đang sống",
      cite: 'LinhThach — "#11: Phá bỏ "Cái Hộp" bạn đang sống"',
    },
  },
  {
    num: "101",
    title: "#12: Làm thế nào để tìm Công việc Phù hợp với mình?",
    channel: "LinhThach",
    duration: "17:21",
    url: "https://www.youtube.com/watch?v=h8vDjq6gB4g",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#12: Làm thế nào để tìm Công việc Phù hợp với mình?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Làm thế nào để tìm Công việc Phù hợp với mình",
        body: [
          "Giới thiệu chủ đề chính về \"Làm thế nào để tìm Công việc Phù hợp với mình?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–17:21",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#12: Làm thế nào để tìm Công việc Phù hợp với mình?",
      cite: 'LinhThach — "#12: Làm thế nào để tìm Công việc Phù hợp với mình?"',
    },
  },
  {
    num: "102",
    title: "#13: Làm thế nào để \"Giàu\" ngay bây giờ? Đi kèm Mindmap",
    channel: "LinhThach",
    duration: "18:40",
    url: "https://www.youtube.com/watch?v=WFBudZGCAyE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#13: Làm thế nào để Giàu ngay bây giờ? Đi kèm Mindmap\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Làm thế nào để \"Giàu\" ngay bây giờ? Đi kèm Mi",
        body: [
          "Giới thiệu chủ đề chính về \"Làm thế nào để \"Giàu\" ngay bây giờ? Đi kèm Mindmap\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–18:40",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#13: Làm thế nào để \"Giàu\" ngay bây giờ? Đi kèm Mindmap",
      cite: 'LinhThach — "#13: Làm thế nào để "Giàu" ngay bây giờ? Đi kèm Mindmap"',
    },
  },
  {
    num: "103",
    title: "#14: Tại sao bạn NÊN thấy \"TỨC GIẬN\"?",
    channel: "LinhThach",
    duration: "15:49",
    url: "https://www.youtube.com/watch?v=BOFNJcdk3Gs",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#14: Tại sao bạn NÊN thấy TỨC GIẬN?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Tại sao bạn NÊN thấy \"TỨC GIẬN\"?",
        body: [
          "Giới thiệu chủ đề chính về \"Tại sao bạn NÊN thấy \"TỨC GIẬN\"?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–15:49",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#14: Tại sao bạn NÊN thấy \"TỨC GIẬN\"?",
      cite: 'LinhThach — "#14: Tại sao bạn NÊN thấy "TỨC GIẬN"?"',
    },
  },
  {
    num: "104",
    title: "#15: Kiếm Tiền không cần VỐN??",
    channel: "LinhThach",
    duration: "19:17",
    url: "https://www.youtube.com/watch?v=H9E9wO7WaLQ",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#15: Kiếm Tiền không cần VỐN??\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Kiếm Tiền không cần VỐN??",
        body: [
          "Giới thiệu chủ đề chính về \"Kiếm Tiền không cần VỐN??\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–10:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "10:00–19:17",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#15: Kiếm Tiền không cần VỐN??",
      cite: 'LinhThach — "#15: Kiếm Tiền không cần VỐN??"',
    },
  },
  {
    num: "105",
    title: "#16: Thấy được Cơ hội và Không bỏ lỡ Cơ hội",
    channel: "LinhThach",
    duration: "16:08",
    url: "https://www.youtube.com/watch?v=MSoSLPM5Yvg",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#16: Thấy được Cơ hội và Không bỏ lỡ Cơ hội\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Thấy được Cơ hội và Không bỏ lỡ Cơ hội",
        body: [
          "Giới thiệu chủ đề chính về \"Thấy được Cơ hội và Không bỏ lỡ Cơ hội\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–16:08",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#16: Thấy được Cơ hội và Không bỏ lỡ Cơ hội",
      cite: 'LinhThach — "#16: Thấy được Cơ hội và Không bỏ lỡ Cơ hội"',
    },
  },
  {
    num: "106",
    title: "#17: Thu nhập Thụ Động? (Passive Income)",
    channel: "LinhThach",
    duration: "5:51",
    url: "https://www.youtube.com/watch?v=GaVEVbNC7G4",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#17: Thu nhập Thụ Động? (Passive Income)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–1:00",
        heading: "Mở đầu & Đặt vấn đề: Thu nhập Thụ Động? (Passive Income)",
        body: [
          "Giới thiệu chủ đề chính về \"Thu nhập Thụ Động? (Passive Income)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "1:00–3:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "3:00–5:51",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#17: Thu nhập Thụ Động? (Passive Income)",
      cite: 'LinhThach — "#17: Thu nhập Thụ Động? (Passive Income)"',
    },
  },
  {
    num: "107",
    title: "#18: Làm thế nào để TỰ TIN?",
    channel: "LinhThach",
    duration: "13:01",
    url: "https://www.youtube.com/watch?v=K2q5wxF2JE4",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#18: Làm thế nào để TỰ TIN?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Làm thế nào để TỰ TIN?",
        body: [
          "Giới thiệu chủ đề chính về \"Làm thế nào để TỰ TIN?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–13:01",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#18: Làm thế nào để TỰ TIN?",
      cite: 'LinhThach — "#18: Làm thế nào để TỰ TIN?"',
    },
  },
  {
    num: "108",
    title: "#19: Cách để BÁN MỌI THỨ?",
    channel: "LinhThach",
    duration: "11:34",
    url: "https://www.youtube.com/watch?v=DfSp45uEk5o",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#19: Cách để BÁN MỌI THỨ?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Cách để BÁN MỌI THỨ?",
        body: [
          "Giới thiệu chủ đề chính về \"Cách để BÁN MỌI THỨ?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–11:34",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#19: Cách để BÁN MỌI THỨ?",
      cite: 'LinhThach — "#19: Cách để BÁN MỌI THỨ?"',
    },
  },
  {
    num: "109",
    title: "#20: Lợi ích của \"Tư Duy Drop-Ship\"",
    channel: "LinhThach",
    duration: "12:48",
    url: "https://www.youtube.com/watch?v=JsE2XHONfjs",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#20: Lợi ích của Tư Duy Drop-Ship\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Lợi ích của \"Tư Duy Drop-Ship\"",
        body: [
          "Giới thiệu chủ đề chính về \"Lợi ích của \"Tư Duy Drop-Ship\"\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:48",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#20: Lợi ích của \"Tư Duy Drop-Ship\"",
      cite: 'LinhThach — "#20: Lợi ích của "Tư Duy Drop-Ship""',
    },
  },
  {
    num: "110",
    title: "#21: Làm thế nào để Thuê nhân viên và Outsource Online",
    channel: "LinhThach",
    duration: "11:17",
    url: "https://www.youtube.com/watch?v=ePj-Lq6_3WE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#21: Làm thế nào để Thuê nhân viên và Outsource Online\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Làm thế nào để Thuê nhân viên và Outsource On",
        body: [
          "Giới thiệu chủ đề chính về \"Làm thế nào để Thuê nhân viên và Outsource Online\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–11:17",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#21: Làm thế nào để Thuê nhân viên và Outsource Online",
      cite: 'LinhThach — "#21: Làm thế nào để Thuê nhân viên và Outsource Online"',
    },
  },
  {
    num: "111",
    title: "#22: Sự Sụp đổ LỚN đang tới, chúng ta nên làm gì?",
    channel: "LinhThach",
    duration: "17:57",
    url: "https://www.youtube.com/watch?v=XHd7aM3EZe8",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#22: Sự Sụp đổ LỚN đang tới, chúng ta nên làm gì?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Sự Sụp đổ LỚN đang tới, chúng ta nên làm gì?",
        body: [
          "Giới thiệu chủ đề chính về \"Sự Sụp đổ LỚN đang tới, chúng ta nên làm gì?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–17:57",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#22: Sự Sụp đổ LỚN đang tới, chúng ta nên làm gì?",
      cite: 'LinhThach — "#22: Sự Sụp đổ LỚN đang tới, chúng ta nên làm gì?"',
    },
  },
  {
    num: "112",
    title: "#23: Hãy có Nhiều nơi Cất Tiền, Kĩ Năng và Quan hệ",
    channel: "LinhThach",
    duration: "16:29",
    url: "https://www.youtube.com/watch?v=gLFrzwxpxl4",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#23: Hãy có Nhiều nơi Cất Tiền, Kĩ Năng và Quan hệ\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Hãy có Nhiều nơi Cất Tiền, Kĩ Năng và Quan hệ",
        body: [
          "Giới thiệu chủ đề chính về \"Hãy có Nhiều nơi Cất Tiền, Kĩ Năng và Quan hệ\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–16:29",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#23: Hãy có Nhiều nơi Cất Tiền, Kĩ Năng và Quan hệ",
      cite: 'LinhThach — "#23: Hãy có Nhiều nơi Cất Tiền, Kĩ Năng và Quan hệ"',
    },
  },
  {
    num: "113",
    title: "#24: Khi nào nên Vay Tiền để Kinh Doanh?",
    channel: "LinhThach",
    duration: "9:33",
    url: "https://www.youtube.com/watch?v=BKvmCCDJJBQ",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#24: Khi nào nên Vay Tiền để Kinh Doanh?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Khi nào nên Vay Tiền để Kinh Doanh?",
        body: [
          "Giới thiệu chủ đề chính về \"Khi nào nên Vay Tiền để Kinh Doanh?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–9:33",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#24: Khi nào nên Vay Tiền để Kinh Doanh?",
      cite: 'LinhThach — "#24: Khi nào nên Vay Tiền để Kinh Doanh?"',
    },
  },
  {
    num: "114",
    title: "#25: Làm thế nào để Vay Nhiều Tiền khi Cần?",
    channel: "LinhThach",
    duration: "10:49",
    url: "https://www.youtube.com/watch?v=Kw2anGk4y-w",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#25: Làm thế nào để Vay Nhiều Tiền khi Cần?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Làm thế nào để Vay Nhiều Tiền khi Cần?",
        body: [
          "Giới thiệu chủ đề chính về \"Làm thế nào để Vay Nhiều Tiền khi Cần?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:49",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#25: Làm thế nào để Vay Nhiều Tiền khi Cần?",
      cite: 'LinhThach — "#25: Làm thế nào để Vay Nhiều Tiền khi Cần?"',
    },
  },
  {
    num: "115",
    title: "#26: May mắn và Sự Phàn nàn",
    channel: "LinhThach",
    duration: "12:26",
    url: "https://www.youtube.com/watch?v=U-8-gZTIdnI",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#26: May mắn và Sự Phàn nàn\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: May mắn và Sự Phàn nàn",
        body: [
          "Giới thiệu chủ đề chính về \"May mắn và Sự Phàn nàn\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:26",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#26: May mắn và Sự Phàn nàn",
      cite: 'LinhThach — "#26: May mắn và Sự Phàn nàn"',
    },
  },
  {
    num: "116",
    title: "#27: Chúng ta cần Tiền để \"Hạnh Phúc\"",
    channel: "LinhThach",
    duration: "9:03",
    url: "https://www.youtube.com/watch?v=BDFlA6Y4Pmk",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#27: Chúng ta cần Tiền để Hạnh Phúc\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Chúng ta cần Tiền để \"Hạnh Phúc\"",
        body: [
          "Giới thiệu chủ đề chính về \"Chúng ta cần Tiền để \"Hạnh Phúc\"\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–9:03",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#27: Chúng ta cần Tiền để \"Hạnh Phúc\"",
      cite: 'LinhThach — "#27: Chúng ta cần Tiền để "Hạnh Phúc""',
    },
  },
  {
    num: "117",
    title: "#28: Case Study $300k/tháng chuẩn Dropship",
    channel: "LinhThach",
    duration: "9:33",
    url: "https://www.youtube.com/watch?v=jkbcKURWics",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#28: Case Study $300k/tháng chuẩn Dropship\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Case Study $300k/tháng chuẩn Dropship",
        body: [
          "Giới thiệu chủ đề chính về \"Case Study $300k/tháng chuẩn Dropship\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–9:33",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#28: Case Study $300k/tháng chuẩn Dropship",
      cite: 'LinhThach — "#28: Case Study $300k/tháng chuẩn Dropship"',
    },
  },
  {
    num: "118",
    title: "#29: Ta quá \"Ngu\" để Thay đổi \"Vô điều kiện\"",
    channel: "LinhThach",
    duration: "8:37",
    url: "https://www.youtube.com/watch?v=mzMW9q1JJVI",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#29: Ta quá Ngu để Thay đổi Vô điều kiện\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Ta quá \"Ngu\" để Thay đổi \"Vô điều kiện\"",
        body: [
          "Giới thiệu chủ đề chính về \"Ta quá \"Ngu\" để Thay đổi \"Vô điều kiện\"\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–4:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "4:00–8:37",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#29: Ta quá \"Ngu\" để Thay đổi \"Vô điều kiện\"",
      cite: 'LinhThach — "#29: Ta quá "Ngu" để Thay đổi "Vô điều kiện""',
    },
  },
  {
    num: "119",
    title: "#30: Bí mật bạn không biết về Kinh Doanh",
    channel: "LinhThach",
    duration: "24:50",
    url: "https://www.youtube.com/watch?v=5rgkx9XenOw",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"#30: Bí mật bạn không biết về Kinh Doanh\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Bí mật bạn không biết về Kinh Doanh",
        body: [
          "Giới thiệu chủ đề chính về \"Bí mật bạn không biết về Kinh Doanh\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–12:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "12:00–24:50",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "#30: Bí mật bạn không biết về Kinh Doanh",
      cite: 'LinhThach — "#30: Bí mật bạn không biết về Kinh Doanh"',
    },
  },
  {
    num: "120",
    title: "Tại sao thói quen hàng ngày gây hại cho bạn?",
    channel: "LinhThach",
    duration: "10:11",
    url: "https://www.youtube.com/watch?v=6hvEAck28f8",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tại sao thói quen hàng ngày gây hại cho bạn?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Tại sao thói quen hàng ngày gây hại cho bạn?",
        body: [
          "Giới thiệu chủ đề chính về \"Tại sao thói quen hàng ngày gây hại cho bạn?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:11",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tại sao thói quen hàng ngày gây hại cho bạn?",
      cite: 'LinhThach — "Tại sao thói quen hàng ngày gây hại cho bạn?"',
    },
  },
  {
    num: "121",
    title: "Đừng Tham lam và Vội vã khi đứng trước Nhiều lựa chọn",
    channel: "LinhThach",
    duration: "12:35",
    url: "https://www.youtube.com/watch?v=aeJGLMSiIGg",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Đừng Tham lam và Vội vã khi đứng trước Nhiều lựa chọn\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Đừng Tham lam và Vội vã khi đứng trước Nhiều",
        body: [
          "Giới thiệu chủ đề chính về \"Đừng Tham lam và Vội vã khi đứng trước Nhiều lựa chọn\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:35",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Đừng Tham lam và Vội vã khi đứng trước Nhiều lựa chọn",
      cite: 'LinhThach — "Đừng Tham lam và Vội vã khi đứng trước Nhiều lựa chọn"',
    },
  },
  {
    num: "122",
    title: "Làm Private Label cho thương hiệu?",
    channel: "LinhThach",
    duration: "8:14",
    url: "https://www.youtube.com/watch?v=jSUp0BM32zI",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Private Label cho thương hiệu?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Private Label cho thương hiệu?",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Private Label cho thương hiệu?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–4:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "4:00–8:14",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Private Label cho thương hiệu?",
      cite: 'LinhThach — "Làm Private Label cho thương hiệu?"',
    },
  },
  {
    num: "123",
    title: "Muốn làm, Phải làm, và Nên làm?",
    channel: "LinhThach",
    duration: "15:52",
    url: "https://www.youtube.com/watch?v=2u432aygsKw",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Muốn làm, Phải làm, và Nên làm?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Muốn làm, Phải làm, và Nên làm?",
        body: [
          "Giới thiệu chủ đề chính về \"Muốn làm, Phải làm, và Nên làm?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–15:52",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Muốn làm, Phải làm, và Nên làm?",
      cite: 'LinhThach — "Muốn làm, Phải làm, và Nên làm?"',
    },
  },
  {
    num: "124",
    title: "Tôi tiêu 500 Triệu 1 tháng? (Không Clickbait)",
    channel: "LinhThach",
    duration: "20:17",
    url: "https://www.youtube.com/watch?v=saCL-WO_5SE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tôi tiêu 500 Triệu 1 tháng? (Không Clickbait)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Tôi tiêu 500 Triệu 1 tháng? (Không Clickbait)",
        body: [
          "Giới thiệu chủ đề chính về \"Tôi tiêu 500 Triệu 1 tháng? (Không Clickbait)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–10:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "10:00–20:17",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tôi tiêu 500 Triệu 1 tháng? (Không Clickbait)",
      cite: 'LinhThach — "Tôi tiêu 500 Triệu 1 tháng? (Không Clickbait)"',
    },
  },
  {
    num: "125",
    title: "Tối ưu Store Ecommerce bằng App",
    channel: "LinhThach",
    duration: "13:55",
    url: "https://www.youtube.com/watch?v=TDQVVcmRLkE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tối ưu Store Ecommerce bằng App\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Tối ưu Store Ecommerce bằng App",
        body: [
          "Giới thiệu chủ đề chính về \"Tối ưu Store Ecommerce bằng App\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–13:55",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tối ưu Store Ecommerce bằng App",
      cite: 'LinhThach — "Tối ưu Store Ecommerce bằng App"',
    },
  },
  {
    num: "126",
    title: "Tôi Ghét Những Kẻ Thất Bại và Tôi Cũng Đã Từng Là Họ.",
    channel: "LinhThach",
    duration: "19:01",
    url: "https://www.youtube.com/watch?v=wS3Xky9UCfY",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tôi Ghét Những Kẻ Thất Bại và Tôi Cũng Đã Từng Là Họ.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Tôi Ghét Những Kẻ Thất Bại và Tôi Cũng Đã Từn",
        body: [
          "Giới thiệu chủ đề chính về \"Tôi Ghét Những Kẻ Thất Bại và Tôi Cũng Đã Từng Là Họ.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–10:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "10:00–19:01",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tôi Ghét Những Kẻ Thất Bại và Tôi Cũng Đã Từng Là Họ.",
      cite: 'LinhThach — "Tôi Ghét Những Kẻ Thất Bại và Tôi Cũng Đã Từng Là Họ."',
    },
  },
  {
    num: "127",
    title: "Làm Giàu Dễ và Nhanh?",
    channel: "LinhThach",
    duration: "10:04",
    url: "https://www.youtube.com/watch?v=6bFDudfp8lQ",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Giàu Dễ và Nhanh?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Giàu Dễ và Nhanh?",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Giàu Dễ và Nhanh?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:04",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Giàu Dễ và Nhanh?",
      cite: 'LinhThach — "Làm Giàu Dễ và Nhanh?"',
    },
  },
  {
    num: "128",
    title: "Niềm tin và Môi trường sống của bạn",
    channel: "LinhThach",
    duration: "15:22",
    url: "https://www.youtube.com/watch?v=2daKtpqUooo",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Niềm tin và Môi trường sống của bạn\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Niềm tin và Môi trường sống của bạn",
        body: [
          "Giới thiệu chủ đề chính về \"Niềm tin và Môi trường sống của bạn\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–15:22",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Niềm tin và Môi trường sống của bạn",
      cite: 'LinhThach — "Niềm tin và Môi trường sống của bạn"',
    },
  },
  {
    num: "129",
    title: "Năm \"mới\" liệu có \"mới\"? - Linh Thạch",
    channel: "LinhThach",
    duration: "17:00",
    url: "https://www.youtube.com/watch?v=tF-ry8ZIGqg",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Năm mới liệu có mới? - Linh Thạch\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Năm \"mới\" liệu có \"mới\"? - Linh Thạch",
        body: [
          "Giới thiệu chủ đề chính về \"Năm \"mới\" liệu có \"mới\"? - Linh Thạch\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–17:00",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Năm \"mới\" liệu có \"mới\"? - Linh Thạch",
      cite: 'LinhThach — "Năm "mới" liệu có "mới"? - Linh Thạch"',
    },
  },
  {
    num: "130",
    title: "Hành Trình ra Đơn - Chưa có Đơn Bắt buộc Phải xem! - Linh Thach Ecom",
    channel: "LinhThach",
    duration: "22:51",
    url: "https://www.youtube.com/watch?v=6TXUUueaXjI",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Hành Trình ra Đơn - Chưa có Đơn Bắt buộc Phải xem! - Linh Thach Ecom\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Hành Trình ra Đơn - Chưa có Đơn Bắt buộc Phải",
        body: [
          "Giới thiệu chủ đề chính về \"Hành Trình ra Đơn - Chưa có Đơn Bắt buộc Phải xem!\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–11:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "11:00–22:51",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Hành Trình ra Đơn - Chưa có Đơn Bắt buộc Phải xem! - Linh Thach Ecom",
      cite: 'LinhThach — "Hành Trình ra Đơn - Chưa có Đơn Bắt buộc Phải xem! - Linh Thach Ecom"',
    },
  },
  {
    num: "131",
    title: "97.2% người thành công làm 3 điều này",
    channel: "LinhThach",
    duration: "14:32",
    url: "https://www.youtube.com/watch?v=BflA4JN2tEw",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"97.2% người thành công làm 3 điều này\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: .2% người thành công làm 3 điều này",
        body: [
          "Giới thiệu chủ đề chính về \".2% người thành công làm 3 điều này\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–14:32",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "97.2% người thành công làm 3 điều này",
      cite: 'LinhThach — "97.2% người thành công làm 3 điều này"',
    },
  },
  {
    num: "132",
    title: "Thói Quen quyết định Cuộc đời. Không bao giờ quá muộn để thay đổi",
    channel: "LinhThach",
    duration: "13:23",
    url: "https://www.youtube.com/watch?v=rhY6_59jHt8",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Thói Quen quyết định Cuộc đời. Không bao giờ quá muộn để thay đổi\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Thói Quen quyết định Cuộc đời. Không bao giờ",
        body: [
          "Giới thiệu chủ đề chính về \"Thói Quen quyết định Cuộc đời. Không bao giờ quá muộn để thay đổi\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–13:23",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Thói Quen quyết định Cuộc đời. Không bao giờ quá muộn để thay đổi",
      cite: 'LinhThach — "Thói Quen quyết định Cuộc đời. Không bao giờ quá muộn để thay đổi"',
    },
  },
  {
    num: "133",
    title: "Môi Trường Sống. 7 Phút để Thay Đổi.",
    channel: "LinhThach",
    duration: "7:33",
    url: "https://www.youtube.com/watch?v=cDwlAqAXTSU",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Môi Trường Sống. 7 Phút để Thay Đổi.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Môi Trường Sống. 7 Phút để Thay Đổi.",
        body: [
          "Giới thiệu chủ đề chính về \"Môi Trường Sống. 7 Phút để Thay Đổi.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–4:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "4:00–7:33",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Môi Trường Sống. 7 Phút để Thay Đổi.",
      cite: 'LinhThach — "Môi Trường Sống. 7 Phút để Thay Đổi."',
    },
  },
  {
    num: "134",
    title: "Muốn Đổi Đời? Hãy làm theo những điều này",
    channel: "LinhThach",
    duration: "8:53",
    url: "https://www.youtube.com/watch?v=bVtyyVxJrH4",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Muốn Đổi Đời? Hãy làm theo những điều này\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Muốn Đổi Đời? Hãy làm theo những điều này",
        body: [
          "Giới thiệu chủ đề chính về \"Muốn Đổi Đời? Hãy làm theo những điều này\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–4:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "4:00–8:53",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Muốn Đổi Đời? Hãy làm theo những điều này",
      cite: 'LinhThach — "Muốn Đổi Đời? Hãy làm theo những điều này"',
    },
  },
  {
    num: "135",
    title: "4 loại hàng bán chạy nhất cuối 2023 - đầu 2024",
    channel: "LinhThach",
    duration: "5:00",
    url: "https://www.youtube.com/watch?v=6e7pocKx8gc",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"4 loại hàng bán chạy nhất cuối 2023 - đầu 2024\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–1:00",
        heading: "Mở đầu & Đặt vấn đề: loại hàng bán chạy nhất cuối 2023 - đầu 2024",
        body: [
          "Giới thiệu chủ đề chính về \"loại hàng bán chạy nhất cuối 2023 - đầu 2024\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "1:00–2:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "4 loại hàng bán chạy nhất cuối 2023 - đầu 2024",
      cite: 'LinhThach — "4 loại hàng bán chạy nhất cuối 2023 - đầu 2024"',
    },
  },
  {
    num: "136",
    title: "71% Dropship không Ra Đơn vì ĐIỀU NÀY và Cách Sửa.",
    channel: "LinhThach",
    duration: "6:37",
    url: "https://www.youtube.com/watch?v=JMbnFBFlhq0",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"71% Dropship không Ra Đơn vì ĐIỀU NÀY và Cách Sửa.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–1:00",
        heading: "Mở đầu & Đặt vấn đề: % Dropship không Ra Đơn vì ĐIỀU NÀY và Cách S",
        body: [
          "Giới thiệu chủ đề chính về \"% Dropship không Ra Đơn vì ĐIỀU NÀY và Cách Sửa.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "1:00–3:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "3:00–6:37",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "71% Dropship không Ra Đơn vì ĐIỀU NÀY và Cách Sửa.",
      cite: 'LinhThach — "71% Dropship không Ra Đơn vì ĐIỀU NÀY và Cách Sửa."',
    },
  },
  {
    num: "137",
    title: "Cửa hàng 500 Triệu Đô khởi đầu bằng Dropship",
    channel: "LinhThach",
    duration: "11:11",
    url: "https://www.youtube.com/watch?v=DISU_VdpHhA",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cửa hàng 500 Triệu Đô khởi đầu bằng Dropship\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Cửa hàng 500 Triệu Đô khởi đầu bằng Dropship",
        body: [
          "Giới thiệu chủ đề chính về \"Cửa hàng 500 Triệu Đô khởi đầu bằng Dropship\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–11:11",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cửa hàng 500 Triệu Đô khởi đầu bằng Dropship",
      cite: 'LinhThach — "Cửa hàng 500 Triệu Đô khởi đầu bằng Dropship"',
    },
  },
  {
    num: "138",
    title: "91.69% Chúng ta Thất Bại ở Điểm này.",
    channel: "LinhThach",
    duration: "11:03",
    url: "https://www.youtube.com/watch?v=gp0KGEcDhE0",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"91.69% Chúng ta Thất Bại ở Điểm này.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: .69% Chúng ta Thất Bại ở Điểm này.",
        body: [
          "Giới thiệu chủ đề chính về \".69% Chúng ta Thất Bại ở Điểm này.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–11:03",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "91.69% Chúng ta Thất Bại ở Điểm này.",
      cite: 'LinhThach — "91.69% Chúng ta Thất Bại ở Điểm này."',
    },
  },
  {
    num: "139",
    title: "Dưới 30 tuổi, muốn thay đổi, phải xem.",
    channel: "LinhThach",
    duration: "11:15",
    url: "https://www.youtube.com/watch?v=4Tjnfh1I4SY",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Dưới 30 tuổi, muốn thay đổi, phải xem.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Dưới 30 tuổi, muốn thay đổi, phải xem.",
        body: [
          "Giới thiệu chủ đề chính về \"Dưới 30 tuổi, muốn thay đổi, phải xem.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–11:15",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Dưới 30 tuổi, muốn thay đổi, phải xem.",
      cite: 'LinhThach — "Dưới 30 tuổi, muốn thay đổi, phải xem."',
    },
  },
  {
    num: "140",
    title: "Điều bạn cần Tránh nếu muốn Giàu",
    channel: "LinhThach",
    duration: "9:38",
    url: "https://www.youtube.com/watch?v=kDeqc-PJ6jw",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Điều bạn cần Tránh nếu muốn Giàu\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Điều bạn cần Tránh nếu muốn Giàu",
        body: [
          "Giới thiệu chủ đề chính về \"Điều bạn cần Tránh nếu muốn Giàu\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–9:38",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Điều bạn cần Tránh nếu muốn Giàu",
      cite: 'LinhThach — "Điều bạn cần Tránh nếu muốn Giàu"',
    },
  },
  {
    num: "141",
    title: "6 phút để tạo ra Kế Hoạch Thay Đổi Cuộc Đời.",
    channel: "LinhThach",
    duration: "6:33",
    url: "https://www.youtube.com/watch?v=O6yOae33G9A",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"6 phút để tạo ra Kế Hoạch Thay Đổi Cuộc Đời.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–1:00",
        heading: "Mở đầu & Đặt vấn đề: phút để tạo ra Kế Hoạch Thay Đổi Cuộc Đời.",
        body: [
          "Giới thiệu chủ đề chính về \"phút để tạo ra Kế Hoạch Thay Đổi Cuộc Đời.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "1:00–3:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "3:00–6:33",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "6 phút để tạo ra Kế Hoạch Thay Đổi Cuộc Đời.",
      cite: 'LinhThach — "6 phút để tạo ra Kế Hoạch Thay Đổi Cuộc Đời."',
    },
  },
  {
    num: "142",
    title: "Cách để Giá sản phẩm và \"Wow Factor\"",
    channel: "LinhThach",
    duration: "6:59",
    url: "https://www.youtube.com/watch?v=7lTHc9P-01I",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cách để Giá sản phẩm và Wow Factor\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–1:00",
        heading: "Mở đầu & Đặt vấn đề: Cách để Giá sản phẩm và \"Wow Factor\"",
        body: [
          "Giới thiệu chủ đề chính về \"Cách để Giá sản phẩm và \"Wow Factor\"\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "1:00–3:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "3:00–6:59",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cách để Giá sản phẩm và \"Wow Factor\"",
      cite: 'LinhThach — "Cách để Giá sản phẩm và "Wow Factor""',
    },
  },
  {
    num: "143",
    title: "Cách làm Video 97,69% được Đề xuất",
    channel: "LinhThach",
    duration: "6:36",
    url: "https://www.youtube.com/watch?v=4LX0hrwE9yQ",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cách làm Video 97,69% được Đề xuất\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–1:00",
        heading: "Mở đầu & Đặt vấn đề: Cách làm Video 97,69% được Đề xuất",
        body: [
          "Giới thiệu chủ đề chính về \"Cách làm Video 97,69% được Đề xuất\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "1:00–3:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "3:00–6:36",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cách làm Video 97,69% được Đề xuất",
      cite: 'LinhThach — "Cách làm Video 97,69% được Đề xuất"',
    },
  },
  {
    num: "144",
    title: "Dropship Có Thể Sẽ Thay Đổi Mãi Mãi",
    channel: "LinhThach",
    duration: "5:14",
    url: "https://www.youtube.com/watch?v=G5TkawmapbI",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Dropship Có Thể Sẽ Thay Đổi Mãi Mãi\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–1:00",
        heading: "Mở đầu & Đặt vấn đề: Dropship Có Thể Sẽ Thay Đổi Mãi Mãi",
        body: [
          "Giới thiệu chủ đề chính về \"Dropship Có Thể Sẽ Thay Đổi Mãi Mãi\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "1:00–3:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "3:00–5:14",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Dropship Có Thể Sẽ Thay Đổi Mãi Mãi",
      cite: 'LinhThach — "Dropship Có Thể Sẽ Thay Đổi Mãi Mãi"',
    },
  },
  {
    num: "145",
    title: "Một ngày của tôi: 26 tuổi, kinh doanh, ăn, ngủ, và...",
    channel: "LinhThach",
    duration: "11:35",
    url: "https://www.youtube.com/watch?v=WKQv9tPdwWw",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Một ngày của tôi: 26 tuổi, kinh doanh, ăn, ngủ, và...\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Một ngày của tôi: 26 tuổi, kinh doanh, ăn, ng",
        body: [
          "Giới thiệu chủ đề chính về \"Một ngày của tôi: 26 tuổi, kinh doanh, ăn, ngủ, và...\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–11:35",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Một ngày của tôi: 26 tuổi, kinh doanh, ăn, ngủ, và...",
      cite: 'LinhThach — "Một ngày của tôi: 26 tuổi, kinh doanh, ăn, ngủ, và..."',
    },
  },
  {
    num: "146",
    title: "26 tuổi, tự do, đi du lịch Vancouver, làm kinh doanh (Phần 1)",
    channel: "LinhThach",
    duration: "46:42",
    url: "https://www.youtube.com/watch?v=ARZz2_w9lks",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"26 tuổi, tự do, đi du lịch Vancouver, làm kinh doanh (Phần 1)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–11:00",
        heading: "Mở đầu & Đặt vấn đề: tuổi, tự do, đi du lịch Vancouver, làm kinh d",
        body: [
          "Giới thiệu chủ đề chính về \"tuổi, tự do, đi du lịch Vancouver, làm kinh doanh (Phần 1)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "11:00–23:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "23:00–46:42",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "26 tuổi, tự do, đi du lịch Vancouver, làm kinh doanh (Phần 1)",
      cite: 'LinhThach — "26 tuổi, tự do, đi du lịch Vancouver, làm kinh doanh (Phần 1)"',
    },
  },
  {
    num: "147",
    title: "26 tuổi, tự do, đi du lịch Vancouver, làm kinh doanh (Phần 2)",
    channel: "LinhThach",
    duration: "51:38",
    url: "https://www.youtube.com/watch?v=Xo_QlKZMEQ8",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"26 tuổi, tự do, đi du lịch Vancouver, làm kinh doanh (Phần 2)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–13:00",
        heading: "Mở đầu & Đặt vấn đề: tuổi, tự do, đi du lịch Vancouver, làm kinh d",
        body: [
          "Giới thiệu chủ đề chính về \"tuổi, tự do, đi du lịch Vancouver, làm kinh doanh (Phần 2)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "13:00–26:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "26:00–51:38",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "26 tuổi, tự do, đi du lịch Vancouver, làm kinh doanh (Phần 2)",
      cite: 'LinhThach — "26 tuổi, tự do, đi du lịch Vancouver, làm kinh doanh (Phần 2)"',
    },
  },
  {
    num: "148",
    title: "Làm Dropship, Dự Tiệc Porsche ở Resort trong rừng.",
    channel: "LinhThach",
    duration: "14:30",
    url: "https://www.youtube.com/watch?v=wthnChkGz_E",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Dropship, Dự Tiệc Porsche ở Resort trong rừng.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Dropship, Dự Tiệc Porsche ở Resort trong",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Dropship, Dự Tiệc Porsche ở Resort trong rừng.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–14:30",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Dropship, Dự Tiệc Porsche ở Resort trong rừng.",
      cite: 'LinhThach — "Làm Dropship, Dự Tiệc Porsche ở Resort trong rừng."',
    },
  },
  {
    num: "149",
    title: "\"Tiết Kiệm\" thành GIÀU???",
    channel: "LinhThach",
    duration: "13:04",
    url: "https://www.youtube.com/watch?v=j30oVl67pdY",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tiết Kiệm thành GIÀU???\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: \"Tiết Kiệm\" thành GIÀU???",
        body: [
          "Giới thiệu chủ đề chính về \"\"Tiết Kiệm\" thành GIÀU???\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–13:04",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "\"Tiết Kiệm\" thành GIÀU???",
      cite: 'LinhThach — ""Tiết Kiệm" thành GIÀU???"',
    },
  },
  {
    num: "150",
    title: "Linh Thạch LÙA GÀ???",
    channel: "LinhThach",
    duration: "13:18",
    url: "https://www.youtube.com/watch?v=Fe-v1sIGLB8",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Linh Thạch LÙA GÀ???\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Linh Thạch LÙA GÀ???",
        body: [
          "Giới thiệu chủ đề chính về \"Linh Thạch LÙA GÀ???\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–13:18",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Linh Thạch LÙA GÀ???",
      cite: 'LinhThach — "Linh Thạch LÙA GÀ???"',
    },
  },
  {
    num: "151",
    title: "Lí Do Bạn Nên Dùng Thẻ Tín Dụng",
    channel: "LinhThach",
    duration: "12:26",
    url: "https://www.youtube.com/watch?v=uPuu9X_uETw",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Lí Do Bạn Nên Dùng Thẻ Tín Dụng\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Lí Do Bạn Nên Dùng Thẻ Tín Dụng",
        body: [
          "Giới thiệu chủ đề chính về \"Lí Do Bạn Nên Dùng Thẻ Tín Dụng\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:26",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Lí Do Bạn Nên Dùng Thẻ Tín Dụng",
      cite: 'LinhThach — "Lí Do Bạn Nên Dùng Thẻ Tín Dụng"',
    },
  },
  {
    num: "152",
    title: "Tư tưởng Self Help với Alpha Độc Hại như thế nào?",
    channel: "LinhThach",
    duration: "19:17",
    url: "https://www.youtube.com/watch?v=cT68JN2NH_k",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tư tưởng Self Help với Alpha Độc Hại như thế nào?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Tư tưởng Self Help với Alpha Độc Hại như thế",
        body: [
          "Giới thiệu chủ đề chính về \"Tư tưởng Self Help với Alpha Độc Hại như thế nào?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–10:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "10:00–19:17",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tư tưởng Self Help với Alpha Độc Hại như thế nào?",
      cite: 'LinhThach — "Tư tưởng Self Help với Alpha Độc Hại như thế nào?"',
    },
  },
  {
    num: "153",
    title: "Tại Sao Không? Tại Sao Không Phải Là Bạn?",
    channel: "LinhThach",
    duration: "11:05",
    url: "https://www.youtube.com/watch?v=HmyLYOIXgd0",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tại Sao Không? Tại Sao Không Phải Là Bạn?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Tại Sao Không? Tại Sao Không Phải Là Bạn?",
        body: [
          "Giới thiệu chủ đề chính về \"Tại Sao Không? Tại Sao Không Phải Là Bạn?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–11:05",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tại Sao Không? Tại Sao Không Phải Là Bạn?",
      cite: 'LinhThach — "Tại Sao Không? Tại Sao Không Phải Là Bạn?"',
    },
  },
  {
    num: "154",
    title: "Cách Phá Vỡ Hiện Thực của Bản Thân",
    channel: "LinhThach",
    duration: "6:54",
    url: "https://www.youtube.com/watch?v=t50YpdS8_Nc",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cách Phá Vỡ Hiện Thực của Bản Thân\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–1:00",
        heading: "Mở đầu & Đặt vấn đề: Cách Phá Vỡ Hiện Thực của Bản Thân",
        body: [
          "Giới thiệu chủ đề chính về \"Cách Phá Vỡ Hiện Thực của Bản Thân\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "1:00–3:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "3:00–6:54",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cách Phá Vỡ Hiện Thực của Bản Thân",
      cite: 'LinhThach — "Cách Phá Vỡ Hiện Thực của Bản Thân"',
    },
  },
  {
    num: "155",
    title: "Giới Thiệu về Cộng Đồng và Khóa học của Linh Thạch",
    channel: "LinhThach",
    duration: "12:47",
    url: "https://www.youtube.com/watch?v=uYkY6MOau28",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Giới Thiệu về Cộng Đồng và Khóa học của Linh Thạch\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Giới Thiệu về Cộng Đồng và Khóa học của Linh",
        body: [
          "Giới thiệu chủ đề chính về \"Giới Thiệu về Cộng Đồng và Khóa học của Linh Thạch\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:47",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Giới Thiệu về Cộng Đồng và Khóa học của Linh Thạch",
      cite: 'LinhThach — "Giới Thiệu về Cộng Đồng và Khóa học của Linh Thạch"',
    },
  },
  {
    num: "156",
    title: "Hãy tò mò về Giới Hạn và Khả Năng của Bạn",
    channel: "LinhThach",
    duration: "8:24",
    url: "https://www.youtube.com/watch?v=_0gJD78MdZs",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Hãy tò mò về Giới Hạn và Khả Năng của Bạn\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Hãy tò mò về Giới Hạn và Khả Năng của Bạn",
        body: [
          "Giới thiệu chủ đề chính về \"Hãy tò mò về Giới Hạn và Khả Năng của Bạn\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–4:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "4:00–8:24",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Hãy tò mò về Giới Hạn và Khả Năng của Bạn",
      cite: 'LinhThach — "Hãy tò mò về Giới Hạn và Khả Năng của Bạn"',
    },
  },
  {
    num: "157",
    title: "Hãy Ảo Tưởng.",
    channel: "LinhThach",
    duration: "21:51",
    url: "https://www.youtube.com/watch?v=mIbVGO6YySA",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Hãy Ảo Tưởng.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Hãy Ảo Tưởng.",
        body: [
          "Giới thiệu chủ đề chính về \"Hãy Ảo Tưởng.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–11:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "11:00–21:51",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Hãy Ảo Tưởng.",
      cite: 'LinhThach — "Hãy Ảo Tưởng."',
    },
  },
  {
    num: "158",
    title: "Sự Thật về Shopify Dropshipping và Làm Brand!",
    channel: "LinhThach",
    duration: "12:49",
    url: "https://www.youtube.com/watch?v=dv0uB9xYmSE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Sự Thật về Shopify Dropshipping và Làm Brand!\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Sự Thật về Shopify Dropshipping và Làm Brand!",
        body: [
          "Giới thiệu chủ đề chính về \"Sự Thật về Shopify Dropshipping và Làm Brand!\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:49",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Sự Thật về Shopify Dropshipping và Làm Brand!",
      cite: 'LinhThach — "Sự Thật về Shopify Dropshipping và Làm Brand!"',
    },
  },
  {
    num: "159",
    title: "Ngày Bình Thường của Dropshipper 27 Tuổi",
    channel: "LinhThach",
    duration: "33:34",
    url: "https://www.youtube.com/watch?v=EDxUihE4V7A",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Ngày Bình Thường của Dropshipper 27 Tuổi\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–8:00",
        heading: "Mở đầu & Đặt vấn đề: Ngày Bình Thường của Dropshipper 27 Tuổi",
        body: [
          "Giới thiệu chủ đề chính về \"Ngày Bình Thường của Dropshipper 27 Tuổi\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "8:00–17:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "17:00–33:34",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Ngày Bình Thường của Dropshipper 27 Tuổi",
      cite: 'LinhThach — "Ngày Bình Thường của Dropshipper 27 Tuổi"',
    },
  },
  {
    num: "160",
    title: "Làm Dropship 2025: Tìm Sản Phẩm Dễ Bán (Phần 1)",
    channel: "LinhThach",
    duration: "10:39",
    url: "https://www.youtube.com/watch?v=a0hv0Du2j4E",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Dropship 2025: Tìm Sản Phẩm Dễ Bán (Phần 1)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Dropship 2025: Tìm Sản Phẩm Dễ Bán (Phần",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Dropship 2025: Tìm Sản Phẩm Dễ Bán (Phần 1)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:39",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Dropship 2025: Tìm Sản Phẩm Dễ Bán (Phần 1)",
      cite: 'LinhThach — "Làm Dropship 2025: Tìm Sản Phẩm Dễ Bán (Phần 1)"',
    },
  },
  {
    num: "161",
    title: "Làm Dropship 2025: Tạo Cửa Hàng Chuyên Nghiệp (Phần 2)",
    channel: "LinhThach",
    duration: "10:04",
    url: "https://www.youtube.com/watch?v=VTtavTLxdJA",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Dropship 2025: Tạo Cửa Hàng Chuyên Nghiệp (Phần 2)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Dropship 2025: Tạo Cửa Hàng Chuyên Nghiệp",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Dropship 2025: Tạo Cửa Hàng Chuyên Nghiệp (Phần 2)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:04",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Dropship 2025: Tạo Cửa Hàng Chuyên Nghiệp (Phần 2)",
      cite: 'LinhThach — "Làm Dropship 2025: Tạo Cửa Hàng Chuyên Nghiệp (Phần 2)"',
    },
  },
  {
    num: "162",
    title: "Làm Dropship 2025: Content Viral (Phần 3)",
    channel: "LinhThach",
    duration: "12:19",
    url: "https://www.youtube.com/watch?v=iTLeTp4zgrg",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Dropship 2025: Content Viral (Phần 3)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Dropship 2025: Content Viral (Phần 3)",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Dropship 2025: Content Viral (Phần 3)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–12:19",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Dropship 2025: Content Viral (Phần 3)",
      cite: 'LinhThach — "Làm Dropship 2025: Content Viral (Phần 3)"',
    },
  },
  {
    num: "163",
    title: "Dropship 2025: Cách Kiếm Đơn, Kiếm Tiền (Phần 4)",
    channel: "LinhThach",
    duration: "18:15",
    url: "https://www.youtube.com/watch?v=03Rc589UXDg",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Dropship 2025: Cách Kiếm Đơn, Kiếm Tiền (Phần 4)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Dropship 2025: Cách Kiếm Đơn, Kiếm Tiền (Phần",
        body: [
          "Giới thiệu chủ đề chính về \"Dropship 2025: Cách Kiếm Đơn, Kiếm Tiền (Phần 4)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–18:15",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Dropship 2025: Cách Kiếm Đơn, Kiếm Tiền (Phần 4)",
      cite: 'LinhThach — "Dropship 2025: Cách Kiếm Đơn, Kiếm Tiền (Phần 4)"',
    },
  },
  {
    num: "164",
    title: "3 Điều Buộc Phải Biết Khi Khởi Nghiệp",
    channel: "LinhThach",
    duration: "10:04",
    url: "https://www.youtube.com/watch?v=9pIURSEQzKM",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"3 Điều Buộc Phải Biết Khi Khởi Nghiệp\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Điều Buộc Phải Biết Khi Khởi Nghiệp",
        body: [
          "Giới thiệu chủ đề chính về \"Điều Buộc Phải Biết Khi Khởi Nghiệp\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:04",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "3 Điều Buộc Phải Biết Khi Khởi Nghiệp",
      cite: 'LinhThach — "3 Điều Buộc Phải Biết Khi Khởi Nghiệp"',
    },
  },
  {
    num: "165",
    title: "Giải Đáp 13 Câu hỏi Phổ Biến Nhất 2025 về Dropship",
    channel: "LinhThach",
    duration: "24:07",
    url: "https://www.youtube.com/watch?v=urjTE1cYmTY",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Giải Đáp 13 Câu hỏi Phổ Biến Nhất 2025 về Dropship\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Giải Đáp 13 Câu hỏi Phổ Biến Nhất 2025 về Dro",
        body: [
          "Giới thiệu chủ đề chính về \"Giải Đáp 13 Câu hỏi Phổ Biến Nhất 2025 về Dropship\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–12:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "12:00–24:07",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Giải Đáp 13 Câu hỏi Phổ Biến Nhất 2025 về Dropship",
      cite: 'LinhThach — "Giải Đáp 13 Câu hỏi Phổ Biến Nhất 2025 về Dropship"',
    },
  },
  {
    num: "166",
    title: "Làm Ảnh Sản Phẩm Chuyên Nghiệp bằng ChatGPT",
    channel: "LinhThach",
    duration: "10:43",
    url: "https://www.youtube.com/watch?v=La14iJyhFW8",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Làm Ảnh Sản Phẩm Chuyên Nghiệp bằng ChatGPT\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Làm Ảnh Sản Phẩm Chuyên Nghiệp bằng ChatGPT",
        body: [
          "Giới thiệu chủ đề chính về \"Làm Ảnh Sản Phẩm Chuyên Nghiệp bằng ChatGPT\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:43",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Làm Ảnh Sản Phẩm Chuyên Nghiệp bằng ChatGPT",
      cite: 'LinhThach — "Làm Ảnh Sản Phẩm Chuyên Nghiệp bằng ChatGPT"',
    },
  },
  {
    num: "167",
    title: "Thuế của Trump Không Như Bạn Nghĩ",
    channel: "LinhThach",
    duration: "13:59",
    url: "https://www.youtube.com/watch?v=I7ip5YY1NVY",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Thuế của Trump Không Như Bạn Nghĩ\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Thuế của Trump Không Như Bạn Nghĩ",
        body: [
          "Giới thiệu chủ đề chính về \"Thuế của Trump Không Như Bạn Nghĩ\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–7:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "7:00–13:59",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Thuế của Trump Không Như Bạn Nghĩ",
      cite: 'LinhThach — "Thuế của Trump Không Như Bạn Nghĩ"',
    },
  },
  {
    num: "168",
    title: "3 Điều Giúp Bạn Thành Công trong năm 2025",
    channel: "LinhThach",
    duration: "18:33",
    url: "https://www.youtube.com/watch?v=qFczoRJmu4U",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"3 Điều Giúp Bạn Thành Công trong năm 2025\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Điều Giúp Bạn Thành Công trong năm 2025",
        body: [
          "Giới thiệu chủ đề chính về \"Điều Giúp Bạn Thành Công trong năm 2025\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–18:33",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "3 Điều Giúp Bạn Thành Công trong năm 2025",
      cite: 'LinhThach — "3 Điều Giúp Bạn Thành Công trong năm 2025"',
    },
  },
  {
    num: "169",
    title: "Thử Thách Làm Store Dropship bằng AI (Phần 1)",
    channel: "LinhThach",
    duration: "10:18",
    url: "https://www.youtube.com/watch?v=k0fyGG8XKI0",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Thử Thách Làm Store Dropship bằng AI (Phần 1)\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Thử Thách Làm Store Dropship bằng AI (Phần 1)",
        body: [
          "Giới thiệu chủ đề chính về \"Thử Thách Làm Store Dropship bằng AI (Phần 1)\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–10:18",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Thử Thách Làm Store Dropship bằng AI (Phần 1)",
      cite: 'LinhThach — "Thử Thách Làm Store Dropship bằng AI (Phần 1)"',
    },
  },
  {
    num: "170",
    title: "Tại Sao Ai Cũng Nuối Tiếc?",
    channel: "LinhThach",
    duration: "11:26",
    url: "https://www.youtube.com/watch?v=Y9xCX_jCg6M",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Tại Sao Ai Cũng Nuối Tiếc?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Tại Sao Ai Cũng Nuối Tiếc?",
        body: [
          "Giới thiệu chủ đề chính về \"Tại Sao Ai Cũng Nuối Tiếc?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–11:26",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Tại Sao Ai Cũng Nuối Tiếc?",
      cite: 'LinhThach — "Tại Sao Ai Cũng Nuối Tiếc?"',
    },
  },
  {
    num: "171",
    title: "Suy nghĩ về Thành Công sau khi gặp hơn 1000 người.",
    channel: "LinhThach",
    duration: "15:14",
    url: "https://www.youtube.com/watch?v=2sqOQ_OH5zY",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Suy nghĩ về Thành Công sau khi gặp hơn 1000 người.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Suy nghĩ về Thành Công sau khi gặp hơn 1000 n",
        body: [
          "Giới thiệu chủ đề chính về \"Suy nghĩ về Thành Công sau khi gặp hơn 1000 người.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–8:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "8:00–15:14",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Suy nghĩ về Thành Công sau khi gặp hơn 1000 người.",
      cite: 'LinhThach — "Suy nghĩ về Thành Công sau khi gặp hơn 1000 người."',
    },
  },
  {
    num: "172",
    title: "Thử Thách Bán Hàng Online bằng AI (Phần 2 )",
    channel: "LinhThach",
    duration: "6:18",
    url: "https://www.youtube.com/watch?v=UO0k2Yzlv2c",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Thử Thách Bán Hàng Online bằng AI (Phần 2 )\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–1:00",
        heading: "Mở đầu & Đặt vấn đề: Thử Thách Bán Hàng Online bằng AI (Phần 2 )",
        body: [
          "Giới thiệu chủ đề chính về \"Thử Thách Bán Hàng Online bằng AI (Phần 2 )\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "1:00–3:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "3:00–6:18",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Thử Thách Bán Hàng Online bằng AI (Phần 2 )",
      cite: 'LinhThach — "Thử Thách Bán Hàng Online bằng AI (Phần 2 )"',
    },
  },
  {
    num: "173",
    title: "Công Việc, Cuộc Sống, Sự Cân Bằng",
    channel: "LinhThach",
    duration: "19:02",
    url: "https://www.youtube.com/watch?v=5QpIalsWcEo",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Công Việc, Cuộc Sống, Sự Cân Bằng\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: Công Việc, Cuộc Sống, Sự Cân Bằng",
        body: [
          "Giới thiệu chủ đề chính về \"Công Việc, Cuộc Sống, Sự Cân Bằng\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–10:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "10:00–19:02",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Công Việc, Cuộc Sống, Sự Cân Bằng",
      cite: 'LinhThach — "Công Việc, Cuộc Sống, Sự Cân Bằng"',
    },
  },
  {
    num: "174",
    title: "Kiếm 1 Triệu Đô Dropshipping là \"GIÀU\"? Thực tế LỜI được bao nhiêu?",
    channel: "LinhThach",
    duration: "9:52",
    url: "https://www.youtube.com/watch?v=CJLcB4buqOE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Kiếm 1 Triệu Đô Dropshipping là GIÀU? Thực tế LỜI được bao nhiêu?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Kiếm 1 Triệu Đô Dropshipping là \"GIÀU\"? Thực",
        body: [
          "Giới thiệu chủ đề chính về \"Kiếm 1 Triệu Đô Dropshipping là \"GIÀU\"? Thực tế LỜI được bao nhiêu?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–5:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "5:00–9:52",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Kiếm 1 Triệu Đô Dropshipping là \"GIÀU\"? Thực tế LỜI được bao nhiêu?",
      cite: 'LinhThach — "Kiếm 1 Triệu Đô Dropshipping là "GIÀU"? Thực tế LỜI được bao nhiêu?"',
    },
  },
  {
    num: "175",
    title: "Bao Giờ Nên Thấy Đủ?",
    channel: "LinhThach",
    duration: "11:32",
    url: "https://www.youtube.com/watch?v=enkcSgzhOjw",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Bao Giờ Nên Thấy Đủ?\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–3:00",
        heading: "Mở đầu & Đặt vấn đề: Bao Giờ Nên Thấy Đủ?",
        body: [
          "Giới thiệu chủ đề chính về \"Bao Giờ Nên Thấy Đủ?\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "3:00–6:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "6:00–11:32",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Bao Giờ Nên Thấy Đủ?",
      cite: 'LinhThach — "Bao Giờ Nên Thấy Đủ?"',
    },
  },
  {
    num: "176",
    title: "Vì sao bạn càng làm càng mệt?( Cách thoát ra đơn giản )",
    channel: "LinhThach",
    duration: "8:14",
    url: "https://www.youtube.com/watch?v=NoMErtKJBSw",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Vì sao bạn càng làm càng mệt?( Cách thoát ra đơn giản )\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–2:00",
        heading: "Mở đầu & Đặt vấn đề: Vì sao bạn càng làm càng mệt?( Cách thoát ra",
        body: [
          "Giới thiệu chủ đề chính về \"Vì sao bạn càng làm càng mệt?( Cách thoát ra đơn giản )\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "2:00–4:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "4:00–8:14",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Vì sao bạn càng làm càng mệt?( Cách thoát ra đơn giản )",
      cite: 'LinhThach — "Vì sao bạn càng làm càng mệt?( Cách thoát ra đơn giản )"',
    },
  },
  {
    num: "177",
    title: "Cho tôi 18 phút, tôi sẽ cho bạn hiểu thành công nó dễ đến mức nào.",
    channel: "LinhThach",
    duration: "18:15",
    url: "https://www.youtube.com/watch?v=-3Sc-Oxkl_E",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Cho tôi 18 phút, tôi sẽ cho bạn hiểu thành công nó dễ đến mức nào.\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–4:00",
        heading: "Mở đầu & Đặt vấn đề: Cho tôi 18 phút, tôi sẽ cho bạn hiểu thành cô",
        body: [
          "Giới thiệu chủ đề chính về \"Cho tôi 18 phút, tôi sẽ cho bạn hiểu thành công nó dễ đến mức nào.\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "4:00–9:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "9:00–18:15",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Cho tôi 18 phút, tôi sẽ cho bạn hiểu thành công nó dễ đến mức nào.",
      cite: 'LinhThach — "Cho tôi 18 phút, tôi sẽ cho bạn hiểu thành công nó dễ đến mức nào."',
    },
  },
  {
    num: "178",
    title: "hướng dẫn và phân tích ngách thành công 2025 + làm ảnh ads và mindset để chiến thắng",
    channel: "LinhThach",
    duration: "20:25",
    url: "https://www.youtube.com/watch?v=roldfOLngIs",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"hướng dẫn và phân tích ngách thành công 2025 + làm ảnh ads và mindset để chiến thắng\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–5:00",
        heading: "Mở đầu & Đặt vấn đề: hướng dẫn và phân tích ngách thành công 2025",
        body: [
          "Giới thiệu chủ đề chính về \"hướng dẫn và phân tích ngách thành công 2025 + làm ảnh ads và mindset để chiến thắng\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "5:00–10:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "10:00–20:25",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "hướng dẫn và phân tích ngách thành công 2025 + làm ảnh ads và mindset để chiến thắng",
      cite: 'LinhThach — "hướng dẫn và phân tích ngách thành công 2025 + làm ảnh ads và mindset để chiến thắng"',
    },
  },
  {
    num: "179",
    title: "Share Sản Phẩm Và Hướng Dẫn Làm Dropship Kiếm Ra Tiền Và Chọn Sản Phẩm Ít Rủi Ro",
    channel: "LinhThach",
    duration: "24:06",
    url: "https://www.youtube.com/watch?v=TkHiUTIZzfE",
    note: "Tóm tắt & diễn giải lại các ý chính từ video \"Share Sản Phẩm Và Hướng Dẫn Làm Dropship Kiếm Ra Tiền Và Chọn Sản Phẩm Ít Rủi Ro\" của LinhThach. Bấm vào nguồn để xem bản video đầy đủ.",
    chapters: [
      {
        time: "0:00–6:00",
        heading: "Mở đầu & Đặt vấn đề: Share Sản Phẩm Và Hướng Dẫn Làm Dropship Kiếm",
        body: [
          "Giới thiệu chủ đề chính về \"Share Sản Phẩm Và Hướng Dẫn Làm Dropship Kiếm Ra Tiền Và Chọn Sản Phẩm Ít Rủi Ro\" và bối cảnh thực tế mà người làm Dropshipping / Business thường gặp phải.",
          "Phân tích những lầm tưởng phổ biến và lý do tại sao vấn đề này quan trọng trong quá trình vận hành kinh doanh.",
        ],
      },
      {
        time: "6:00–12:00",
        heading: "Phân tích bản chất & Phương pháp thực chiến",
        body: [
          "Đi sâu vào chi tiết kỹ thuật, quy trình từng bước và tư duy xử lý tình huống theo kinh nghiệm thực chiến.",
          "Những lưu ý quan trọng về tối ưu chi phí, quản lý dòng tiền và tránh các bẫy phổ biến của thị trường.",
        ],
      },
      {
        time: "12:00–24:06",
        heading: "Tổng kết bài học & Định hướng hành động",
        body: [
          "Rút ra kết luận cốt lõi, tư duy dài hạn và các bước hành động cụ thể để áp dụng ngay vào dự án thực tế.",
          "Thông điệp truyền cảm hứng về sự kiên trì, kỷ luật và không ngừng nâng cấp năng lực bản thân.",
        ],
      },
    ],
    quote: {
      text: "Share Sản Phẩm Và Hướng Dẫn Làm Dropship Kiếm Ra Tiền Và Chọn Sản Phẩm Ít Rủi Ro",
      cite: 'LinhThach — "Share Sản Phẩm Và Hướng Dẫn Làm Dropship Kiếm Ra Tiền Và Chọn Sản Phẩm Ít Rủi Ro"',
    },
  },
];

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
