// Snapshot render của 5 file .md theo dõi tiến độ trong workspace/dropship-progress/.
// Đây là bản đọc nhanh cho UI, KHÔNG phải nguồn chính — khi progress đổi, sửa ở file .md gốc
// (đường dẫn trong `sourcePath`) rồi đồng bộ lại nội dung `markdown` bên dưới.

export type HomeProgressTab = {
  id: string;
  label: string;
  sourcePath: string;
  markdown: string;
};

export const HOME_PROGRESS_TABS: HomeProgressTab[] = [
  {
    id: "timeline",
    label: "Timeline 6 tháng",
    sourcePath: "workspace/dropship-progress/0-general/timeline-6-thang.md",
    markdown: `# 0. Câu hỏi chung & Timeline 6 tháng

**Mốc lịch thật**: bắt đầu **1/8/2026**, mục tiêu 6 tháng kết thúc **31/1/2027**. "Tháng 1" trong
roadmap dưới đây = tháng 8/2026 (tháng đầu tiên tính từ ngày bắt đầu), không phải tháng 1 dương lịch.

## Câu hỏi chung đang mở (chưa chốt)
1. **Local vs Cloud** — đang dùng Claude Code local, muốn thử thêm cloud session. Bật cloud là
   thao tác làm trong giao diện Claude Code (New session → chọn chạy trên cloud/máy chủ Anthropic
   thay vì máy local), không phải việc gọi được từ trong 1 phiên chat đang chạy. Khi đã tạo,
   phiên cloud đó sẽ xuất hiện như 1 session riêng — muốn 2 bên phối hợp thì gửi việc cụ thể
   sang, không dùng để "mở rộng" phiên hiện tại.

## Vốn & mục tiêu (không đổi, nhắc lại cho gọn)
- Vốn: **$3.000**. Mục tiêu 12 tháng: **$500-1.000/tháng lợi nhuận**.
- 3 Gate: A-Research ($200) → B-Validate organic trước ($500) → C-Scale bằng ads thật (~$2.000
  còn lại). Dự phòng khẩn cấp $300 không đụng tới.
- Lý do chia vốn kiểu này: TikTok tự khuyến nghị $700-1.000 CHO THÁNG ĐẦU test ads riêng — nếu
  trả phí ngay từ đầu, gần hết vốn chỉ sau 1 sản phẩm. Bắt buộc organic trước, trả phí sau khi
  có tín hiệu thật.

## Roadmap 6 tháng (rút gọn)
- **Tháng 1 (8/2026)**: chốt 1 sản phẩm trong pool đã research, mở Gate A.
- **Tháng 2 (9/2026)**: dựng store, đăng organic 2-3 video/ngày, chưa chạy ads thật.
- **Tháng 3 (10/2026)**: có tín hiệu organic → mở Gate B, test paid nhẹ xác nhận hook.
- **Tháng 4 (11/2026)**: Gate B pass → mở Gate C; không pass → quay lại pool ứng viên #2, không
  tốn thêm chi phí research.
- **Tháng 5-6 (12/2026 - 1/2027)**: tối ưu contribution margin, viết SOP, chuẩn bị nền cho 6
  tháng tiếp theo.

## Rule dừng/đổi hướng
- Cắt lỗ 1 sản phẩm nếu sau 2 tuần organic không có bình luận hỏi mua nào.
- Không chi quá $250 test paid cho 1 sản phẩm nếu chưa có tín hiệu organic trước.
- Tổng lỗ tích luỹ chạm $800 mà chưa hoà vốn → dừng hẳn, đánh giá lại toàn bộ mô hình.

## 4 mảng việc song song trong Tháng 1 (8/2026)

Đây là log thật (không phải kế hoạch lý tưởng) — cập nhật 2026-08-24 dựa trên báo cáo trực tiếp
của người dùng. Mỗi mảng có file theo dõi riêng, xem link bên dưới.

| # | Mảng việc | Trạng thái hiện tại | File theo dõi |
|---|---|---|---|
| 1 | Lý thuyết Ngô Thanh Ecom | Đã học 3 buổi (Giới thiệu dropship vs POD, Sản phẩm, Store) | \`theory-ngo-thanh-ecom.md\` |
| 2 | Build & setup store | Clone thủ công ultracarmats.com để học kỹ thuật dựng Shopify — **chỉ là bài tập học, không phải hướng đi sản phẩm thật** (đã xác nhận 2026-08-24). Tiến độ chậm nếu làm tay, đang tìm cách chia nhỏ task giao cho Claude | \`../2-store/progress.md\` |
| 3 | Nghiên cứu thị trường | Chạy được 1-2 buổi (ra kết quả \`home-bedroom-v1.md\`, đã chốt fairy lights) rồi **dừng lại, mất momentum** — chưa có workflow/lịch cố định | \`../1-market-research/progress.md\` |
| 4 | Video AI | Có thử clone 1 video TikTok bằng CapCut + ElevenLabs nhưng nội dung/workflow **chưa rõ ràng, cần xem lại từ đầu** trước khi tiếp tục | \`../3-video-creative/progress.md\` |

**Lưu ý quan trọng**: sản phẩm thật đang theo đuổi là **đèn dây macrame/boho (fairy lights)**,
ngách Home & Bedroom (xem quyết định ở \`../1-market-research/home-bedroom-v1.md\`). Store
"Apex Auto Mats" / Car Mats ở mục 2-store chỉ là môi trường luyện tập kỹ thuật, khi build store
thật (Ngày 3 trong bảng 7 ngày) sẽ dùng branding + sản phẩm fairy lights, không phải Car Mats.

## 7 ngày đầu tiên
| Ngày | TOP 1 | Deliverable | Trạng thái |
|---|---|---|---|
| 1 | Chọn 1 trong 3 ứng viên Home & Bedroom | Quyết định + lý do | ✅ 2026-08-23 — chốt **đèn dây macrame/boho**, xem lý do ở \`../1-market-research/home-bedroom-v1.md\` |
| 2 | Đặt mẫu sản phẩm đã chọn | Đơn hàng mẫu đã đặt | Chưa làm |
| 3 | Tạo Shopify store trống + domain | Store tồn tại |
| 4 | Viết policy pages (template Shopify) | 4 trang policy live |
| 5 | Lên kịch bản 3 video TikTok organic | 3 script sẵn sàng quay |
| 6 | Quay + đăng 2 video đầu | 2 video live |
| 7 | Review kết quả, ghi log | Log tuần 1 |

## Đánh giá gần nhất (Linh Thạch mentor, tóm tắt)
Tại thời điểm gom file này (2026-08-23): **$0 đã chi, 0 mẫu đã đặt, 0 video đã đăng, 0 store đã
tồn tại.** Phần lớn thời gian là research/tooling/planning, chưa có hành động bán hàng thật.

**Cập nhật 2026-08-23**: Ngày 1 đã xong (chốt sản phẩm). Ngày 2 (đặt mẫu thật, tốn tiền) vẫn
chưa làm — đây vẫn là hành động bán hàng thật đầu tiên còn thiếu, không phải research thêm.

**Cập nhật 2026-08-24**: Rà lại toàn bộ hoạt động thật từ 1/8 tới nay, phát hiện 2/4 mảng việc
(nghiên cứu thị trường, video AI) đang **mất momentum hoặc mất phương hướng** dù có khởi động —
không phải vì thiếu ý tưởng mà vì thiếu workflow/lịch lặp lại cố định. Đây là rủi ro tiến độ
thật, không phải research thêm là xong: cần cadence cụ thể (xem file theo dõi từng mảng) để
không lặp lại tình trạng "làm 1-2 buổi rồi dừng".

*(Full skill đứng sau đánh giá này: \`dropship/.agents/skills/linh-thach-mentor/SKILL.md\`)*
`,
  },
  {
    id: "theory",
    label: "Lý thuyết Ngô Thanh Ecom",
    sourcePath: "workspace/dropship-progress/0-general/theory-ngo-thanh-ecom.md",
    markdown: `# Theo dõi — Lý thuyết Ngô Thanh Ecom

Cập nhật: 2026-08-24.

## Đã học

Slide gốc nằm ở \`workspace/Ngo Thanh Ecom/\` (Google Slides, chưa có ghi chú text đi kèm).

| Buổi | Chủ đề | Ngày học |
|---|---|---|
| 1 | Giới thiệu dropship vs POD | 2026-08-05 |
| 2 | Sản phẩm | 2026-08-09 |
| 3 | Store | 2026-08-12 |

## Vấn đề hiện tại

Chỉ có link tới file gslides gốc, **chưa có ghi chú tóm tắt dạng text** cho từng buổi — nếu quên
nội dung thì phải mở lại slide từ đầu, không tra cứu nhanh được và không liên kết được với các
quyết định thực tế (vd: nội dung Buổi 2 "Sản phẩm" có áp dụng gì vào bộ filter đang dùng ở
\`../1-market-research/\` không?).

Không rõ có buổi học tiếp theo (Buổi 4+) hay khoá đã dừng ở buổi 3.

## Việc tiếp theo đề xuất

- Viết tóm tắt 3-5 gạch đầu dòng cho mỗi buổi đã học (nội dung chính + 1 điều áp dụng được ngay
  vào tiến độ hiện tại) — làm 1 lần cho cả 3 buổi, không cần đợi học thêm.
- Xác nhận lịch buổi tiếp theo (nếu khoá còn tiếp diễn) và ghi vào bảng trên khi có.
`,
  },
  {
    id: "market-research",
    label: "Nghiên cứu thị trường",
    sourcePath: "workspace/dropship-progress/1-market-research/progress.md",
    markdown: `# Nhật Ký Nghiên Cứu Thị Trường (Daily Market Research Log)

Danh sách ghi chép nghiên cứu thị trường theo từng ngày. Mỗi ngày được tổng hợp theo đúng 4 nhóm nguồn dữ liệu chuẩn trong Resource Checklist Guide.

---

### 📅 Ngày 27/08/2026 — Cập Nhật Thực Tế Thị Trường

#### 🌐 1. Nguồn Tin Tức & Xu Hướng E-Commerce Quốc Tế
- **Shopify Tech Update (Chính thức từ 26/08/2026)**: Hạn chót chuyển đổi hoàn tất — Shopify đóng toàn bộ \`Additional Scripts\` & \`checkout.liquid\` trên Thank You & Order Status Page cho 100% store non-Plus. Chuyển sang **Checkout Extensibility (Web Pixels API)** để bảo đảm Meta Pixel, TikTok Pixel & Loox Reviews không bị đứt tracking ➔ [Link thông báo Shopify](https://changelog.shopify.com/).
- **Modern Retail DTC Trends**: Bắt đầu đợt chuyển hướng "September Pivot" chuẩn bị cho chiến dịch Q4/Halloween. Xu hướng người dùng săn giá (Price Hunting) tăng mạnh đợt Back-to-School ➔ [Link bài viết Modern Retail](https://www.modernretail.co/).

#### 🔍 2. Nguồn Data Ads Spy & Nhu Cầu Tìm Kiếm
- **Meta Ads CPM Mỹ**: CPM tăng 13–20% YoY do cạnh tranh mùa Back-to-School & đợt lên camp sớm Q4 ($18.50 – $20.80 / 1.000 hiển thị) ➔ [Link dữ liệu Meta Ads](https://www.facebook.com/ads/library/).
- **Thuật toán Meta Andromeda (ASC 2026)**: Thuật toán dồn ưu tiên ngân sách cho tài khoản có **Creative Diversity** (chuẩn bị 15+ active ad creatives, refresh 2-4 tuần) ➔ [Link hướng dẫn Meta](https://www.facebook.com/business/help/).

#### 👥 3. Nguồn Cộng Đồng & Operator Kinh Nghiệm
- **Bảo Nam Kimchi (Bài viết 1 hôm nay)**: Tối ưu vận hành E-Commerce bằng AI — Xây dựng Custom AI cho thương hiệu, nạp mục tiêu, P&L, OKR và chỉ số vận hành để tự động hóa điều hành shop ➔ [Link bài viết gốc](https://www.facebook.com/share/p/1KAt2rUt8m/).
- **Bảo Nam Kimchi (Bài viết 2 hôm nay)**: Bài học tư duy tăng trưởng & niêm yết từ các doanh nghiệp đầu ngành (Digiworld Q2/2026 lợi nhuận +166% YoY) — Tập trung cốt lõi vào biên lợi nhuận ròng và quản trị dòng tiền ➔ [Link bài viết gốc](https://www.facebook.com/share/p/1BeWPj3Eb8/).
- **Anhstein MMO (Bài viết hôm nay)**: Chia sẻ cấu trúc Meta Advantage+ (ASC) 2026 — Dồn ngân sách vào campaign đơn thay vì chia nhỏ Ad Sets, tập trung sản xuất 15+ video hook đa dạng ➔ [Link bài viết gốc](https://www.facebook.com/share/p/1cWiWEt9AN/).
- **Hùng Tóc Trưởng**: *(Không có bài viết mới trong ngày 27/08/2026 — Theo dõi trực tiếp tại [Profile](https://www.facebook.com/hungtoctruongdl))*.
- **Group Cộng đồng Dropship VN**: *(Không có bài viết mới cụ thể trong ngày 27/08/2026 — Theo dõi trực tiếp bài mới tại [Group New Posts](https://www.facebook.com/groups/296787476078292/?sorting_setting=CHRONOLOGICAL))*.

#### 📦 4. Nguồn Cước Phí Vận Chuyển 3PL & Tracking
- **YunExpress**: Dịch vụ vận chuyển tuyến US Small Parcel (< 300g, 5-8 ngày) ➔ [Link YunExpress](https://www.yunexpress.com/).
- **17TRACK / PayPal**: Đẩy tự động mã vận đơn nới giữ tiền PayPal ➔ [Link 17TRACK](https://www.17track.net/).

📌 **Nguồn bài viết thực tế**: [Shopify Changelog](https://changelog.shopify.com/) · [Modern Retail](https://www.modernretail.co/) · [Bài viết Bảo Nam 1](https://www.facebook.com/share/p/1KAt2rUt8m/) · [Bài viết Bảo Nam 2](https://www.facebook.com/share/p/1BeWPj3Eb8/) · [Bài viết Anhstein MMO](https://www.facebook.com/share/p/1cWiWEt9AN/) · [Profile Hùng Tóc Trưởng](https://www.facebook.com/hungtoctruongdl) · [Group Dropship VN (New Posts)](https://www.facebook.com/groups/296787476078292/?sorting_setting=CHRONOLOGICAL).

---

### 📅 Ngày 23/08/2026 — CHỐT WIN Product: Đèn Dây Macrame / Boho Decor

#### 🌐 1. Nguồn Tin Tức & Xu Hướng E-Commerce Quốc Tế
- **Shopify Dropshipping Niches Blog**: Ngách Home Decor & Lighting duy trì mức tăng trưởng bền vững quanh năm (non-fad).

#### 🔍 2. Nguồn Data Ads Spy & Nhu Cầu Tìm Kiếm
- **Google Trends US**: Từ khóa \`macrame fairy lights\` và \`boho wall decor\` giữ baseline ổn định 45-60/100, không bị spike ảo theo mùa.
- **TikTok Creative Center**: Hashtag views đạt trên 68M views, 3s Hook Rate trên 30%, cực kỳ phù hợp làm clip organic 2-3 video/ngày.

#### 👥 3. Nguồn Cộng Đồng & Operator Kinh Nghiệm
- **Lý do chốt sản phẩm Niche Home & Bedroom (Rank #1)**: Thỏa mãn 100% tiêu chí SOP 2026 — Markup >= 3.5x ($29.99 sale price vs $8.00 landed cost), không bị khống chế bởi Personal/Local Brand Equity.

#### 📦 4. Nguồn Cước Phí Vận Chuyển 3PL & Tracking
- **YunExpress Small Parcel US**: Gói hàng < 300g, cước $3.50, thời gian 5-8 ngày, không vỡ hỏng.

📌 **Nguồn tổng hợp**: SOP Bước 2 & Báo cáo bóc tách \`workspace/doc/1-market-research/4-Home and bedroom.gdoc\`.
`,
  },
  {
    id: "video-ai",
    label: "Video AI",
    sourcePath: "workspace/dropship-progress/3-video-creative/progress.md",
    markdown: `# Progress — Video AI

Cập nhật: 2026-08-24.

## Trạng thái

Có thử 1 lần (xem \`create-video-task.md\`): mục tiêu là clone 1 video TikTok cụ thể (giọng "Adam")
bằng workflow CapCut (auto caption → lấy script) → ChatGPT (gắn tag cảm xúc vào script) →
ElevenLabs (text-to-speech giọng Adam). Ghi chú hiện tại là bản thoại thô, chưa có video kết quả,
chưa rõ bước ghép hình/visual sau khi có giọng đọc.

**Tự đánh giá của người dùng**: "chưa đâu vào đâu, nội dung lẫn workflow đều chưa chín chu" —
đúng, file \`create-video-task.md\` chỉ có 1 nửa quy trình (audio), thiếu phần hình ảnh/edit cuối,
và mục tiêu ban đầu ("agent/quy trình tạo video hoàn chỉnh trong 3-4 tiếng") chưa được xác nhận
khả thi.

## Vấn đề

- Đang nhắm tới việc clone/tái tạo 1 video cụ thể trước khi có sản phẩm thật để quay — thứ tự
  ngược: nội dung tháng 2 cần là organic UGC về fairy lights, không phải video giọng AI dạng
  storytelling như trong \`create-video-task.md\`. Cách làm video AI (nếu vẫn muốn dùng) nên gắn
  với sản phẩm thật, không phải luyện kỹ thuật rời rạc.
- Chưa rõ workflow phần hình ảnh (chỉ có audio/script).

## Việc tiếp theo đề xuất

- Tạm gác việc luyện voice-clone kiểu "Adam" — không nằm trên đường găng tới Ngày 5-6 (kịch bản +
  quay 2 video đầu, xem \`../0-general/timeline-6-thang.md\`).
- Khi tới Ngày 5, ưu tiên format organic đơn giản trước (mặt người/tay cầm sản phẩm quay bằng
  điện thoại, không cần AI voice) để không bị chặn bởi workflow AI chưa hoàn thiện.
- Nếu vẫn muốn dùng AI voice sau này: viết lại toàn bộ workflow từ đầu (script → hình ảnh →
  ghép) gắn với nội dung fairy lights thật, không tiếp tục clone video mẫu không liên quan.

## Tài liệu liên quan
- \`create-video-task.md\` — ghi chú thô, nửa quy trình (chỉ phần audio).
`,
  },
  {
    id: "store",
    label: "Build Store",
    sourcePath: "workspace/dropship-progress/2-store/progress.md",
    markdown: `# Progress — Build Store (bài tập học kỹ thuật, clone ultracarmats.com)

Cập nhật: 2026-08-24. File này theo dõi tiến độ build store, tách khỏi các file
tài liệu tĩnh khác trong \`2-store/\` (task gốc, data skeleton, blueprint reference).

**Xác nhận 2026-08-24**: đây là bài tập học kỹ thuật dựng Shopify (theme, collection, product,
policy pages...), KHÔNG phải hướng sản phẩm thật. Sản phẩm thật đã chốt là **đèn dây
macrame/boho**, ngách Home & Bedroom (xem \`../1-market-research/home-bedroom-v1.md\`). Khi build
store thật (Ngày 3 trong \`../0-general/timeline-6-thang.md\`), dùng branding/data fairy lights,
không dùng data skeleton "Apex Auto Mats" ở dưới — data đó chỉ để luyện thao tác.

**Checklist chi tiết A→Z giờ nằm ở [store-setup-checklist.md](store-setup-checklist.md)** — dùng
file đó để giao việc/tick tiến độ theo từng hạng mục. File này (\`progress.md\`) chỉ giữ vai trò
log trạng thái + blocker tổng quan.

## Trạng thái Shopify

- Store test đang kết nối: **Store Test 1** (\`t5e41i-5q.myshopify.com\`, plan Basic) — chưa đổi
  tên/branding sang "Apex Auto Mats", chưa có theme/product/collection nào theo data skeleton.

## Đã xong

- [x] Data skeleton (\`store-clone-data-skeleton.md\`) — điền đủ 5 phần: brand & identity, 8 hãng
  xe hỗ trợ, 10 SKU sản phẩm, 3 collection, facts cho homepage.
- [x] Blueprint reference (\`ultra-car-mats-car-seat-covers.md\`) — phân tích đối thủ
  ultracarmats.com + checklist đề xuất + 2 rủi ro cần tránh copy (claim "airbag compatible",
  claim ship 5 ngày, số "75,000+ customers").

## Việc đang chặn (blocker)

- Chưa có báo giá/mẫu thật từ supplier → giá vốn, cân nặng, phí ship trong data skeleton +
  blueprint đều là estimated, chưa sourced.
- Chưa có ảnh sản phẩm thật (đang dùng ảnh tạm từ supplier trong data skeleton mục 3).
- Chưa có xác nhận compliance (chống cháy, túi khí) từ supplier.

## Bước tiếp theo đề xuất (cho bài tập học — Store Test 1 / Apex Auto Mats)

1. Đổi tên Store Test 1 → Apex Auto Mats, cài theme Dawn.
2. Làm homepage (dùng data mục 5 skeleton) — bước này Claude có thể làm ngay khi được yêu cầu.
3. Tạo 3 collection + 10 product nháp (ảnh tạm) để có khung store trước, thay ảnh/giá sau khi
  có báo giá supplier thật.

## Vấn đề tiến độ (2026-08-24)

Làm thủ công theo checklist A→Z ở \`store-setup-checklist.md\` đang chậm so với timeline — đang
tìm cách chia nhỏ checklist thành các task rời để giao cho Claude làm thay từng phần (thay vì tự
click từng bước trong Shopify admin), song song với việc tự học thêm qua video tutorial YouTube
để hiểu bản chất thao tác.

**Việc tiếp theo đề xuất**: chọn 1 hạng mục cụ thể trong \`store-setup-checklist.md\` (vd: tạo
policy pages, hoặc setup theme Dawn cơ bản) và giao thẳng cho Claude làm luôn trong phiên chat
kế tiếp, thay vì tiếp tục làm tay toàn bộ — đo thử tốc độ chênh lệch trước khi quyết định chia
nhỏ toàn bộ checklist theo cách nào.
`,
  },
];
