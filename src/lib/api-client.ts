const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://githubcoffee-api.vercel.app/api/v1';

export async function fetchDropshipProducts() {
  const response = await fetch(`${API_BASE_URL}/personal/dropshipping/products`);
  if (!response.ok) throw new Error('Failed to fetch dropship products');
  return response.json();
}

export async function fetchDropshipProductDetail(productId: string) {
  const response = await fetch(`${API_BASE_URL}/personal/dropshipping/products/${encodeURIComponent(productId)}`);
  if (!response.ok) throw new Error('Failed to fetch dropship product detail');
  return response.json();
}

export async function createDropshipProduct(productData: Record<string, unknown>) {
  const response = await fetch(`${API_BASE_URL}/personal/dropshipping/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!response.ok) throw new Error('Failed to create dropship product');
  return response.json();
}

export async function updateDropshipProduct(productId: string, updates: Record<string, unknown>) {
  const response = await fetch(`${API_BASE_URL}/personal/dropshipping/products/${encodeURIComponent(productId)}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!response.ok) throw new Error('Failed to update dropship product');
  return response.json();
}

export async function upsertDropshipPhaseContent(productId: string, phaseData: { phase_id: string; content: string; done: boolean }) {
  const response = await fetch(`${API_BASE_URL}/personal/dropshipping/products/${encodeURIComponent(productId)}/phases`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(phaseData),
  });
  if (!response.ok) throw new Error('Failed to upsert dropship phase content');
  return response.json();
}

export async function fetchLiveStoreSpy(domain: string) {
  const response = await fetch(`${API_BASE_URL}/personal/dropshipping/spy?domain=${encodeURIComponent(domain)}`);
  if (!response.ok) throw new Error('Failed to inspect live store');
  return response.json();
}
