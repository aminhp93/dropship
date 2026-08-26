/**
 * Nội dung daily log.
 *
 * NGUỒN THẬT: /Users/aminhp93/personal/daily-log/YYYY-MM-DD.md
 * Các ngày có file .md được chép nguyên văn vào REAL_LOG_CONTENT bên dưới
 * (source: 'file'). Các ngày còn lại dựng lại từ git log của repo này
 * (source: 'git') — nội dung ngắn hơn, chỉ để giữ đủ lịch sử cho phần thống kê.
 *
 * Khi có file .md mới, thêm vào REAL_LOG_CONTENT rồi thêm 1 dòng tương ứng
 * trong DAILY_LOG_SEED.
 */

/** Nội dung markdown nguyên văn, key = ngày (YYYY-MM-DD). */
export const REAL_LOG_CONTENT: Record<string, string> = {
  '2026-08-19': `## Core

1. Fix loi kien truc frontend
   - Dung github copilot co ve kha cham va cung chua tot bang claude. Duoc khoang 80%
   - Claude review dung file AGENT.md van kha ok. Mac du co reasoning hoi lau
2. Update file artifact cho flow backend va cac features trong core
   - Tim them huong chay business thuc te thi core can phat trien tiep o phan nao?

## Dropship

1. Market research san pham Essential Oil Diffusers
   - Can xem lai quy trinh cua buoc market research nay.
   - Phan keyword planner hien tai chua ro tac dung
   - Can note lai cac san pham nen can than cho nguoi moi (vi du chat long, de vo, ...)

2. Store
   - chua update them gi ca
   - cam giac lam den trang product default kha met va nhieu thu neu lam thu cong tu dau

## Note

1. Phan tao video/content bang AI/AI agent can duoc day manh
   - claude vs hyperframe
   - https://www.tiktok.com/@tongtaiai.com/video/7656976491166584065
   - https://www.tiktok.com/@hongfphuongw/video/7674275230151347476
   - https://www.tiktok.com/@nontech.lam.ai/video/7644589520528133394

2. Trade off viec dung AI qua nhieu
   - nao k hoat dong. Vi du: code k doc, chi tap trung vao tinh nang. -> can lam gi?

3. Idea for SAAS
   - https://www.tiktok.com/@vinnielauria/video/7665730906212011272

4. Tap the duc
   - khong
`,
  '2026-08-20': `## Dropship

1. Tieu chi: kiem tien, k lan man. Bo sung tieu chi chon san pham o giai doan nay: khong phai la local brand, khong phai san pham trend,

2. Hanh trinh khach hang
   - Store khong can qua dep. Truoc het tap trung vao phai du trai nghiem khach hang

3. Tap trung hoan thien 1 store
   - Dung claude. Viet cac bo tieu chi hoac cach de clone store 1 cach nhanh nhat

4. Dung store lam mau, lam lai y het. sau do phan tich

5. Tam ly kinh doanh/seller

## Note

1. Thong ke lai tai san
2. Lam Video
   - can flow de lam video tu A -> Z
   - lam video chay organic
   - lay 1 video lam goc, lam lai y het. sau do phan tich

3. Tim cach kiem tien ben vung
   - co tuc tra co phieu deu dan. Truy tim lai lich su 5 nam tu 2020-2025
`,
  '2026-08-24': `## Core


## Dropship

1. Store
   - Review va tong hop lai cho t quy trinh lam web store. 
   - Se co 1 checklist de review xong khi xong
   - T muon se clone 1 store tu ban dau r t se thay doi. De lam duoc viec nay
      - T se cung cap web cua store day
      - Dua ra cac screenshot tung phan 1 de check (neu can). Neu ban tu lam duoc thi t tu chia cac phan cua clone web r dua ra review. 
      - Review clone web, dua ra cac yeu cau ban khong lam duoc, cac image, hoac text yeu cau. T se cung cap va ban se lam het cac buoc con lai, sau khi t da setup xong cac buoc yeu cau.

## Note

1. Khoi tao he thong Daily Log Agent & CLI Tool
   - Tao he thong qui tac workspace trong \`AGENTS.md\`
   - Tao Skill quy trinh ghi log trong \`.agents/skills/daily-log/SKILL.md\`
   - Xay dung cong cu CLI ho tro \`scripts/daily_log.py\`

2. Ket noi MCP telegram chung khoan
   - lay duoc tin nhan cua tat ca moi nguoi. Tong hop, phan tich tam ly so voi thi truong chung. muc tieu => danh gia do rui ro, hung phan cua thi truong

3. ket noi MCP facebook KOL dropship
   - Tuan Le, Ha Nhat Anh -> hoc ve tu duy va cac bai hoc
   - Tao ra cac agent doc lap de khi can hoi, ca 3 se dua ra cac danh gia o cac goc nhin khac nhau


4. Tip Javascript 
- Section 58: Partition Database, Rất quan trọng (1)
- Section 59: Partition Database dành cho Level cao, DBA | Phần 2
`,
  '2026-08-25': `## Core

1. Lam phan data viewer model
2. Chua giai quyet duoc van de sync datapoint tu building nhu nao?
    - dung classifer duong nhu k phai la cac thuc te

## Dropship

1. Reading 5: Shopify Dropshiping mua dich
    - su uyen chuyen
        - thi truong luon thay doi
        - update thong tin thi truogn hang ngay, thich nghi, k keu ca
    - cam nhan moi thu xung quanh
    - tieu tien la 1 hinh thuc giai tri

2. Store Issue
    
    - build vs AI luc dung anh truc tiep tu store web, claude thong bao k cho phep vi vi pham ban quyen? -> hien tai chua xu ly duoc
    - cac product, collection dang phai lam thu cong
    - viec lam logo, anh, favicon nen dung thu cong hay dung AI? ai build kha ton thoi gian va nhieu khi bi sai (thay vi replace thi no de len luon)

3. Store setup
    - da co checklist vs AI. de dung checklist nay de lam viec. 
    - se co them 1 checklist thu 2 de review tong quat sau khi lam xong, doc lap vs checklist luc lam

4. Ngo Thanh Ecom
    - Review duoc quy trinh auto tich hop ChatGPT vs Claude de xay store, tao ads (image va video) tu idea ban dau
    - Cac team design, tao video da bi xoa bo, thay bang Seedance

## Note

1. Hop vs A Trung ve lich trinh cong viec sap toi. Se k ky hop hong nua, nhan tien truc tiep
2. Cuoi tuan hop vs Torgeir ve viec invoice va cach thanh toan hop dong
3. Ke hoach tiep can dropship
    - ngoai viec hoc truc tiep tu Ngo Thanh Ecom, co cach nao tham gia vao qua trinh san xuat truc tiep khi lam k? Cong ty ho dang van hanh tron tru r, vai tro cua minh se la gi? Cac cong viec lien quan den ky thuat thi da bi toi uu va loai bo dan
    - ke hoach sau 6 thang. truong hop lo, hoa von, lai 10tr/thang thi se lam gi tiep?
`,
  '2026-08-26': `## Core

1. 

## Dropship

1. Gen anh
   - tu store doi thu
   - chatgpt gen ok nhat
      - mong tay la kho nhat. con lai ok


## Note

1. Tip Javascripts
   - Section 60: Index MySQL những sai lầm nên tránh
   - Section 61: Intro Cloud vs Upload Service For Api (1)
   - Section 62: Use multer vs cloudinary upload File (2)

2. AI Engineering
   - [https://www.youtube.com/watch?v=OYvlznJ4IZQ&t=1543s](20 AI Concepts Explained in 40 Minutes)
`,
};
