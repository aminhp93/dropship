import { Card } from '@/components/ui/card';
import { Lightbulb, Globe, Coins } from 'lucide-react';

export function KnowledgeTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Mindset Cards */}
      <div className="lg:col-span-2 space-y-6">
        <Card className="p-6 border-none bg-white dark:bg-zinc-900 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-purple-500" />
            <h2 className="text-xl font-bold tracking-tight">Tư duy & Mạng lưới Vận hành</h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 space-y-2">
              <span className="font-bold text-purple-500 uppercase tracking-widest text-[10px]">1. Định vị Thương hiệu (Positioning)</span>
              <p>
                Định vị bản thân, định vị sản phẩm và tệp khách hàng. Thương hiệu không sinh ra ngay lập tức mà tích lũy qua thời gian từ những câu chuyện bán hàng thực tế. Tránh tư duy tối giản chi phí kiểu "ăn xổi", hãy định vị rõ ràng để bán cho tệp khách hàng phù hợp.
              </p>
            </div>
            
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 space-y-2">
              <span className="font-bold text-purple-500 uppercase tracking-widest text-[10px]">2. Sức mạnh của UGC (User Generated Content)</span>
              <p>
                UGC đóng vai trò lớn trong nhận diện thương hiệu và củng cố uy tín. Chạy ads tắt đi sẽ hết tiếp cận, nhưng UGC trên store và mạng xã hội vẫn tồn tại để khách hàng cross-check độ uy tín. Hãy thuê micro-influencer (gửi đồ free + phí $50-$200) ở giai đoạn đầu, sau đó đề xuất rev-share (chia sẻ % doanh thu) khi chạy lâu dài.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 space-y-2">
              <span className="font-bold text-purple-500 uppercase tracking-widest text-[10px]">3. Phễu Email Marketing (Omnisend/Klaviyo)</span>
              <p>
                Email marketing là nguồn doanh thu "free" chiếm ít nhất 10% tổng thu nhập. Dựng phễu email chào mừng (Welcome flow) gồm 10 email tự động, delay 1 ngày (nên thuê design ảnh Canva chuyên nghiệp, học mẫu từ Ekster). Tích hợp phễu gửi link Drive chứa playlist nhạc/âm thanh thư giãn để gia tăng trải nghiệm nhận hàng.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 space-y-2">
              <span className="font-bold text-purple-500 uppercase tracking-widest text-[10px]">4. Quy trình Fulfill & Quản trị nhân sự khi scale</span>
              <p>
                Dùng DSers (AliExpress) hoặc Zendrop ở giai đoạn test. Khi đạt mốc 400-500 đơn/tháng, bắt buộc phải làm việc với Alibaba Private Agent để tối ưu chi phí và kiểm soát đóng gói. Khi scale up, xây dựng bộ máy nhân sự (tuyển dụng, đào tạo theo quy trình, đánh giá hiệu suất định kỳ và lọc đào thải nhân sự kém).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 space-y-2.5">
              <div className="flex justify-between items-start gap-2">
                <span className="font-bold text-purple-500 uppercase tracking-widest text-[10px]">5. Tuân thủ Chính sách Nền tảng (Shopify AUP & Payment Policies)</span>
                <a 
                  href="https://www.shopify.com/legal/aup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 text-[9px] font-bold py-0.5 px-2 rounded transition-colors"
                >
                  Shopify AUP Link 🔗
                </a>
              </div>
              <p>
                Rủi ro lớn nhất của dropshipping là bị khóa store hoặc đóng băng cổng thanh toán. Hãy đọc kỹ <strong>Shopify Acceptable Use Policy (AUP)</strong> để tránh bán hàng giả, hàng nhái, hoặc sản phẩm vi phạm bản quyền thương hiệu. Đồng thời, công khai minh bạch thời gian vận chuyển (Shipping Policy), chính sách hoàn tiền (Refund Policy), và địa chỉ doanh nghiệp để tránh bị Stripe/PayPal phạt hoặc giữ tiền (holds/reserves) khi có lượng đơn hàng tăng đột biến.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Side Markets and Suppliers */}
      <div className="space-y-6">
        <Card className="p-6 border-none bg-zinc-900 text-white shadow-xl space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-bold tracking-tight">Thị Trường Mục Tiêu</h2>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Bắt đầu ở những quốc gia có thói quen mua hàng ecom mạnh mẽ và quảng cáo có hiệu suất cao:
          </p>
          <div className="space-y-2">
            {[
              { region: 'Bắc Mỹ', countries: 'Mỹ (US), Canada (CA)' },
              { region: 'Châu Âu (90% thị phần)', countries: 'Anh (UK), Đức (DE), Pháp (FR)' },
              { region: 'Châu Đại Dương', countries: 'Úc (AU), New Zealand (NZ)' }
            ].map((r, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs">
                <span className="font-semibold text-purple-400 block">{r.region}</span>
                <span className="text-zinc-400">{r.countries}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border-none bg-white dark:bg-zinc-900 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Coins className="w-5 h-5 text-purple-500" />
            <h2 className="text-lg font-bold tracking-tight">Chiến Lược Chọn Supplier</h2>
          </div>
          <div className="space-y-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[10px] font-bold text-purple-500">A</span>
              </div>
              <div>
                <h4 className="font-bold text-zinc-700 dark:text-zinc-200">AliExpress (Test phase)</h4>
                <p>Lựa chọn mặc định để thử nghiệm. Rẻ nhất và dễ kết nối nhất khi bắt đầu đạt dưới 100 đơn đầu tiên.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[10px] font-bold text-purple-500">Z</span>
              </div>
              <div>
                <h4 className="font-bold text-zinc-700 dark:text-zinc-200">Zendrop (Scale phase)</h4>
                <p>Đắt hơn AliExpress khoảng 10%, nhưng cung cấp dịch vụ đóng gói đẹp mắt (packaging), tăng trải nghiệm tin cậy.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[10px] font-bold text-purple-500">P</span>
              </div>
              <div>
                <h4 className="font-bold text-zinc-700 dark:text-zinc-200">Private Agent (Alibaba)</h4>
                <p>Liên hệ trực tiếp với các Agent trên Alibaba khi bán được khoảng 400-500 đơn/tháng để làm Private Label và tối ưu giá sỉ.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
}
